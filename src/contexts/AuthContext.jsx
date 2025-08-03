import { useState, useEffect } from 'react'
import { verifyPassword, AuthSession } from '../config/auth'
import { AuthContext } from './auth'

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [pendingNavigation, setPendingNavigation] = useState(null)

  // Check for existing session on mount
  useEffect(() => {
    setIsAuthenticated(AuthSession.isAuthenticated())
  }, [])

  const authenticate = async (password) => {
    setIsLoading(true)
    try {
      const isValid = await verifyPassword(password)
      if (isValid) {
        AuthSession.setAuthenticated()
        setIsAuthenticated(true)
        setShowPasswordModal(false)
        
        // Execute pending navigation if any
        if (pendingNavigation) {
          pendingNavigation()
          setPendingNavigation(null)
        }
        
        return { success: true }
      } else {
        return { success: false, error: 'Incorrect password' }
      }
    } catch {
      return { success: false, error: 'Authentication failed' }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    AuthSession.clearAuthentication()
    setIsAuthenticated(false)
  }

  const requestAccess = (navigationCallback) => {
    if (isAuthenticated) {
      navigationCallback()
    } else {
      setPendingNavigation(() => navigationCallback)
      setShowPasswordModal(true)
    }
  }

  const closePasswordModal = () => {
    setShowPasswordModal(false)
    setPendingNavigation(null)
  }

  const value = {
    isAuthenticated,
    isLoading,
    showPasswordModal,
    authenticate,
    logout,
    requestAccess,
    closePasswordModal
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

