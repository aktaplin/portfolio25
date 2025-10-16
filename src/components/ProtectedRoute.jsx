import { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, requestAccess } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) {
      // Trigger password modal for unauthenticated users
      requestAccess(() => {})
    }
  }, [isAuthenticated, requestAccess])

  // Only render children if authenticated
  return isAuthenticated ? children : null
}
