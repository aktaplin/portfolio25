import { contact, identity } from '../content/profile'

// Actions in priority order; the first available one carries the primary weight.
function buildActions() {
  const actions = []
  if (contact.email) {
    actions.push({ key: 'email', label: contact.email, href: `mailto:${contact.email}`, literal: true })
  }
  if (contact.linkedin) {
    actions.push({ key: 'linkedin', label: 'LinkedIn', href: contact.linkedin, external: true })
  }
  if (contact.resume) {
    actions.push({ key: 'resume', label: 'Résumé', href: contact.resume, external: true })
  }
  return actions
}

export default function ContactSection() {
  const actions = buildActions()
  if (actions.length === 0) return null

  return (
    <div id="contact" className="contact-section">
      <div className="wrap">
        <div className="label">Contact</div>
        <h2 className="section-h">Let&rsquo;s talk</h2>
        {contact.availability && (
          <p className="contact-availability">{contact.availability}</p>
        )}
        <div className="contact-actions">
          {actions.map((a, i) => (
            <a
              key={a.key}
              className={[
                'action',
                i === 0 ? 'action-primary' : '',
                a.literal ? 'action-literal' : ''
              ].filter(Boolean).join(' ')}
              href={a.href}
              {...(a.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {a.label}
              {a.external && <span aria-hidden="true">↗</span>}
            </a>
          ))}
        </div>
        {identity.location && (
          <p className="contact-location">Based in {identity.location}</p>
        )}
      </div>
    </div>
  )
}
