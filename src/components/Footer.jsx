import { contact, identity } from '../content/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="wrap">
      <div className="site-footer">
        <div className="footer-left">
          <div className="wordmark"><div className="wdot"></div>{identity.name}</div>
          {identity.title && <p className="footer-role">{identity.title}</p>}
        </div>

        <nav className="footer-links" aria-label="Contact">
          {contact.email && (
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          )}
          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          )}
          {contact.resume && (
            <a href={contact.resume} target="_blank" rel="noopener noreferrer">Résumé</a>
          )}
        </nav>

        <div className="footer-meta">&copy; {year}</div>
      </div>
    </footer>
  )
}
