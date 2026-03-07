import { useNavigate, useLocation } from 'react-router-dom'

export default function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleHomeClick = (e) => {
    e.preventDefault()
    navigate('/')
  }

  const handleWorkClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      const workSection = document.querySelector('.work-section')
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
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
    console.log('About page navigation - to be implemented')
  }

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="/" className="wordmark" onClick={handleHomeClick}>
          <div className="wdot"></div>
          Adam Taplin
        </a>
        <nav className="nav-links">
          <a
            href="#work"
            className={`nav-link${location.pathname === '/' ? ' active' : ''}`}
            onClick={handleWorkClick}
          >
            Work
          </a>
          <a
            href="#about"
            className="nav-link"
            onClick={handleAboutClick}
          >
            About
          </a>
        </nav>
      </div>
    </header>
  )
}
