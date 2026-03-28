import React, { useEffect, useRef } from 'react'
import ActivityNavigation from './ActivityNavigation'

// Inline Image Container component
function InlineImageContainer({ src, alt, caption, size = 'medium', onClick }) {
  const sizeClasses = {
    small: 'activity-modal-inline-image-small',
    medium: 'activity-modal-inline-image-medium',
    large: 'activity-modal-inline-image-large',
    xlarge: 'activity-modal-inline-image-xlarge'
  }

  const handleKeyDown = (e) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div className={`activity-modal-inline-image-container ${onClick ? 'clickable' : ''}`}>
      <img
        src={src}
        alt={alt}
        className={`activity-modal-inline-image ${sizeClasses[size]}`}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex={onClick ? 0 : undefined}
        role={onClick ? 'button' : undefined}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
      />
      {caption && <div className="activity-modal-image-caption">{caption}</div>}
    </div>
  )
}

export { InlineImageContainer }

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export default function ActivityModal({
  isOpen,
  onClose,
  activity,
  currentActivityKey,
  activitiesData,
  onActivityChange
}) {
  const modalRef = useRef(null)
  const previousFocusRef = useRef(null)
  const titleId = 'activity-modal-title'

  // Move focus into modal on open; restore on close
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement
      requestAnimationFrame(() => {
        const first = modalRef.current?.querySelector(FOCUSABLE)
        if (first) first.focus()
      })
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus()
      previousFocusRef.current = null
    }
  }, [isOpen])

  // Trap focus within modal
  useEffect(() => {
    if (!isOpen) return
    const handleTab = (e) => {
      if (e.key !== 'Tab' || !modalRef.current) return
      const focusable = Array.from(modalRef.current.querySelectorAll(FOCUSABLE))
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
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape' && isOpen) onClose() }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen || !activity) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const renderContent = () => {
    if (activity.image) {
      return (
        <>
          <div className="activity-modal-hero">
            <img
              src={activity.image}
              alt={activity.imageAlt || activity.title}
              className="activity-modal-image-layout3"
            />
            <div className="activity-modal-hero-overlay">
              <div className="activity-modal-hero-content">
                {activity.duration && (
                  <div className="activity-modal-duration-hero">{activity.duration}</div>
                )}
                <h2 id={titleId} className="activity-modal-title-hero">{activity.title}</h2>
              </div>
              <button
                className="activity-modal-close-hero"
                onClick={onClose}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
          </div>
          <div className="activity-modal-content">
            <div className="activity-modal-text">
              {activity.content}
              {currentActivityKey && activitiesData && onActivityChange && (
                <ActivityNavigation
                  currentActivityKey={currentActivityKey}
                  activitiesData={activitiesData}
                  onActivityChange={onActivityChange}
                />
              )}
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="activity-modal-header">
            <div className="activity-modal-header-content">
              {activity.duration && (
                <div className="activity-modal-duration">{activity.duration}</div>
              )}
              <h2 id={titleId} className="activity-modal-title">{activity.title}</h2>
            </div>
            <button
              className="activity-modal-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
          <div className="activity-modal-content">
            <div className="activity-modal-text">
              {activity.content}
              {currentActivityKey && activitiesData && onActivityChange && (
                <ActivityNavigation
                  currentActivityKey={currentActivityKey}
                  activitiesData={activitiesData}
                  onActivityChange={onActivityChange}
                />
              )}
            </div>
          </div>
        </>
      )
    }
  }

  return (
    <div className="activity-modal-overlay" onClick={handleBackdropClick}>
      <div
        className="activity-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={modalRef}
      >
        {renderContent()}
      </div>
    </div>
  )
}
