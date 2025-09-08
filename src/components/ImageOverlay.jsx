import React from 'react'

export default function ImageOverlay({ isOpen, onClose, imageSrc, imageAlt, caption }) {
  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      // Force restore scroll immediately
      document.body.style.overflow = ''
      onClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  React.useEffect(() => {
    if (isOpen) {
      // Store the current overflow value
      const originalOverflow = document.body.style.overflow
      
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        // Restore the original overflow value
        document.body.style.overflow = originalOverflow || ''
      }
    }
  }, [isOpen])

  // Also ensure scroll is restored when component unmounts
  React.useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="image-overlay" onClick={handleBackdropClick}>
      <div className="image-overlay-content">
        <button className="image-overlay-close" onClick={() => {
          document.body.style.overflow = ''
          onClose()
        }}>
          ×
        </button>
        <div className="image-overlay-image-container">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="image-overlay-image"
          />
          {caption && (
            <div className="image-overlay-caption">
              {caption}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}