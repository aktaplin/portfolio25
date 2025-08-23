import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Check if we're on a case study page
  const isCaseStudyPage = location.pathname !== '/'
  
  const handleHomeClick = (e) => {
    e.preventDefault()
    navigate('/')
  }
  
  const handleBackClick = (e) => {
    e.preventDefault()
    navigate('/')
  }

  const handleWorkClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      // Already on home page, scroll to work section
      const workSection = document.querySelector('.work-section')
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to home page first, then scroll to work section
      navigate('/')
      setTimeout(() => {
        const workSection = document.querySelector('.work-section')
        if (workSection) {
          workSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  const handleAboutClick = (e) => {
    e.preventDefault()
    // TODO: Navigate to About page when created
    console.log('About page navigation - to be implemented')
  }

  return (
    <nav className="navigation-container">
      <div className="nav-logo-container">
        {isCaseStudyPage && (
          <button 
            className="nav-back-arrow"
            onClick={handleBackClick}
            aria-label="Go back to homepage"
          >
            ←
          </button>
        )}
        <a 
          href="/" 
          className="nav-logo"
          onClick={handleHomeClick}
        >
          Adam Taplin
        </a>
      </div>
      
      <div className="nav-links">
        <a href="#work" onClick={handleWorkClick}>Work</a>
        <a href="#about" onClick={handleAboutClick}>About</a>
      </div>
    </nav>
  )
}