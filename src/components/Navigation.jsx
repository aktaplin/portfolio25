import { useNavigate, useLocation } from 'react-router-dom'
import { identity } from '../content/profile'

const SECTIONS = [
  { id: 'work',    label: 'Work' },
  { id: 'about',   label: 'About' },
  { id: 'contact', label: 'Contact' }
]

export default function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()
  const onHomepage = location.pathname === '/'

  const handleHomeClick = (e) => {
    e.preventDefault()
    navigate('/')
  }

  const scrollTo = (id) => {
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSectionClick = (e, id) => {
    e.preventDefault()
    if (onHomepage) {
      scrollTo(id)
    } else {
      navigate('/')
      setTimeout(() => scrollTo(id), 100)
    }
  }

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header className="site-header">
        <div className="wrap header-inner">
          <a href="/" className="wordmark" onClick={handleHomeClick}>
            <div className="wdot"></div>
            {identity.name}
          </a>
          <nav className="nav-links" aria-label="Sections">
            {SECTIONS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="nav-link"
                onClick={(e) => handleSectionClick(e, id)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}
