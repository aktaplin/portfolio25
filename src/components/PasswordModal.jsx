import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

export default function PasswordModal() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { authenticate, closePasswordModal, isLoading, showPasswordModal } = useAuth()

  if (!showPasswordModal) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    const result = await authenticate(password)
    if (!result.success) {
      setError(result.error)
      setPassword('')
    }
  }

  const handleClose = () => {
    setPassword('')
    setError('')
    closePasswordModal()
  }

  return (
    <div className="password-modal-overlay">
      <div className="password-modal">
        <div className="password-modal-header">
          <h2 className="password-modal-title">Case Study Access</h2>
          <button 
            onClick={handleClose}
            className="password-modal-close"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        
        <div className="password-modal-content">
          <p className="password-modal-description">
            Please enter the password to view case study details.
          </p>
          
          <form onSubmit={handleSubmit} className="password-form">
            <div className="password-input-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="password-input"
                autoFocus
                disabled={isLoading}
              />
            </div>
            
            {error && (
              <div className="password-error">
                {error}
              </div>
            )}
            
            <div className="password-modal-actions">
              <button
                type="button"
                onClick={handleClose}
                className="password-button password-button-secondary"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="password-button password-button-primary"
                disabled={isLoading || !password.trim()}
              >
                {isLoading ? 'Checking...' : 'Access Case Studies'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}