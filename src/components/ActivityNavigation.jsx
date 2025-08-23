import React from 'react'

export default function ActivityNavigation({ 
  currentActivityKey, 
  activitiesData, 
  onActivityChange 
}) {
  // Get ordered list of activity keys
  const activityKeys = Object.keys(activitiesData)
  const currentIndex = activityKeys.indexOf(currentActivityKey)
  
  // Determine previous and next activities
  const prevActivityKey = currentIndex > 0 ? activityKeys[currentIndex - 1] : null
  const nextActivityKey = currentIndex < activityKeys.length - 1 ? activityKeys[currentIndex + 1] : null
  
  const handleNavigation = (activityKey) => {
    if (onActivityChange && activityKey) {
      onActivityChange(activityKey)
    }
  }
  
  // Don't render if we can't determine position or have no navigation options
  if (currentIndex === -1 || (!prevActivityKey && !nextActivityKey)) {
    return null
  }
  
  return (
    <div className="activity-navigation">
      {prevActivityKey && (
        <button 
          className="activity-nav-link activity-nav-prev"
          onClick={() => handleNavigation(prevActivityKey)}
        >
          ← Previous: {activitiesData[prevActivityKey]?.title}
        </button>
      )}
      
      {nextActivityKey && (
        <button 
          className="activity-nav-link activity-nav-next"
          onClick={() => handleNavigation(nextActivityKey)}
        >
          Next: {activitiesData[nextActivityKey]?.title} →
        </button>
      )}
    </div>
  )
}