import React, { useEffect } from 'react'
import ActivityNavigation from './ActivityNavigation'

// Inline Image Container component
function InlineImageContainer({ src, alt, caption, size = 'medium' }) {
  const sizeClasses = {
    small: 'activity-modal-inline-image-small',
    medium: 'activity-modal-inline-image-medium', 
    large: 'activity-modal-inline-image-large'
  }
  
  return (
    <div className="activity-modal-inline-image-container">
      <img 
        src={src} 
        alt={alt}
        className={`activity-modal-inline-image ${sizeClasses[size]}`}
      />
      {caption && <div className="activity-modal-image-caption">{caption}</div>}
    </div>
  )
}

export { InlineImageContainer }

export default function ActivityModal({ 
  isOpen, 
  onClose, 
  activity, 
  currentActivityKey, 
  activitiesData, 
  onActivityChange 
}) {
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

  // Hero-style layout when image is present, standard layout otherwise
  const renderContent = () => {
    if (activity.image) {
      // Hero-style image with overlay title
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
                <h2 className="activity-modal-title-hero">{activity.title}</h2>
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
      // Standard layout without image
      return (
        <>
          <div className="activity-modal-header">
            <div className="activity-modal-header-content">
              {activity.duration && (
                <div className="activity-modal-duration">{activity.duration}</div>
              )}
              <h2 className="activity-modal-title">{activity.title}</h2>
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
      <div className="activity-modal">
        {renderContent()}
      </div>
    </div>
  )
}