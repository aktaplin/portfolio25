import React, { useEffect } from 'react'

export default function ActivityModal({ isOpen, onClose, activity }) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !activity) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="activity-modal-overlay" onClick={handleBackdropClick}>
      <div className="activity-modal">
        <div className="activity-modal-header">
          <h2 className="activity-modal-title">{activity.title}</h2>
          <button 
            className="activity-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        
        <div className="activity-modal-content">
          {activity.duration && (
            <div className="activity-modal-duration">{activity.duration}</div>
          )}
          
          {activity.image && (
            <div className="activity-modal-image-section">
              <img 
                src={activity.image} 
                alt={activity.imageAlt || activity.title}
                className="activity-modal-image" 
              />
            </div>
          )}
          
          <div className="activity-modal-text">
            {activity.content}
          </div>
        </div>
      </div>
    </div>
  )
}