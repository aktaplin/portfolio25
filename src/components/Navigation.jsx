import React, { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    setIsMenuOpen(false)
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Floating Hamburger Button */}
      <button 
        className={`hamburger-floating ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#work" onClick={handleWorkClick}>Work</a></li>
          <li><a href="#about" onClick={handleMenuItemClick}>About</a></li>
          <li><a href="#process" onClick={handleMenuItemClick}>Process</a></li>
          <li><a href="#contact" onClick={handleMenuItemClick}>Contact</a></li>
        </ul>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div className="nav-backdrop" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </>
  )
}