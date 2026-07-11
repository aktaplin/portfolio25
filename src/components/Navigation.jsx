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

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
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
          </nav>
        </div>
      </header>
    </>
  )
}
