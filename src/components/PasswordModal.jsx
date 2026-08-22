import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../hooks/useAuth'
import { access, accessRequestLink } from '../content/profile'

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export default function PasswordModal() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { authenticate, closePasswordModal, isLoading, showPasswordModal } = useAuth()
  const modalRef = useRef(null)
  const previousFocusRef = useRef(null)
  const titleId = 'password-modal-title'

  const handleClose = () => {
    setPassword('')
    setError('')
    closePasswordModal()
  }

  // Focus management: move focus into modal on open, restore on close
  useEffect(() => {
    if (showPasswordModal) {
      previousFocusRef.current = document.activeElement
      requestAnimationFrame(() => {
        const first = modalRef.current?.querySelector(FOCUSABLE)
        if (first) first.focus()
      })
    } else if (previousFocusRef.current) {
      // preventScroll matters here: on a successful unlock the modal closes and
      // the route changes in the same commit, and a plain focus() can scroll the
      // page away from the top of the case study we just navigated to.
      previousFocusRef.current.focus({ preventScroll: true })
      previousFocusRef.current = null
    }
  }, [showPasswordModal])

  // Trap focus within modal
  useEffect(() => {
    if (!showPasswordModal) return
    const handleTab = (e) => {
      if (e.key !== 'Tab' || !modalRef.current) return
      const focusable = Array.from(modalRef.current.querySelectorAll(FOCUSABLE))
        .filter(el => !el.disabled)
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [showPasswordModal])

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape' && showPasswordModal) handleClose() }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPasswordModal])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showPasswordModal) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = 'unset' }
    }
  }, [showPasswordModal])

  const requestLink = accessRequestLink()

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

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose()
  }

  return (
    <div className="password-modal-overlay" onClick={handleBackdropClick}>
      <div
        className="password-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={modalRef}
      >
        <div className="password-modal-header">
          <h2 id={titleId} className="password-modal-title">Protected case study</h2>
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
            {access.modalCopy}
          </p>

          {requestLink && (
            <a
              className="password-modal-request"
              href={requestLink.href}
              {...(requestLink.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              Request the password
              <span aria-hidden="true">↗</span>
            </a>
          )}

          <form onSubmit={handleSubmit} className="password-form">
            <div className="password-input-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                aria-label="Password"
                className="password-input"
                autoFocus
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="password-error" role="alert">
                {error}
              </div>
            )}

            <div className="password-modal-actions">
              <button
                type="submit"
                className="password-button password-button-primary"
                disabled={isLoading || !password.trim()}
              >
                {isLoading ? 'Checking…' : 'Unlock'}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="password-link-cancel"
                disabled={isLoading}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
