import React from 'react'

export default function Navigation() {
  const handleHomeClick = (e) => {
    e.preventDefault()
    if (window.navigateHome) {
      window.navigateHome()
    }
  }

  const handleWorkClick = (e) => {
    e.preventDefault()
    if (window.navigateHome) {
      window.navigateHome()
      // Scroll to work section after navigation
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
      <a 
        href="/" 
        className="nav-logo"
        onClick={handleHomeClick}
      >
        Adam Taplin
      </a>
      
      <div className="nav-links">
        <a href="#work" onClick={handleWorkClick}>Work</a>
        <a href="#about" onClick={handleAboutClick}>About</a>
      </div>
    </nav>
  )
}