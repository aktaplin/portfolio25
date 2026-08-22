import { CARD_FIELDS } from '../content/profile'
import wexLogo from '../assets/logos/wex.svg'
import verizonLogo from '../assets/logos/verizon.svg'
import wexBanner from '../assets/img/WEXBanner.png'
import playBanner from '../assets/img/+playBanner.png'

const ENGAGEMENT_ART = {
  wex:     { logo: wexLogo,     logoAlt: 'WEX',     banner: wexBanner,  bannerAlt: 'WEX fleet dashboard concept' },
  verizon: { logo: verizonLogo, logoAlt: 'Verizon', banner: playBanner, bannerAlt: 'Verizon +play interface' }
}

export default function EngagementCard({ engagement, onClick, compact = false }) {
  const art = ENGAGEMENT_ART[engagement.key] || {}
  const fields = CARD_FIELDS
    .map((f) => ({ ...f, value: engagement[f.key] }))
    .filter((f) => f.value)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() }
  }

  const kicker = [engagement.client, engagement.sector, engagement.year]
    .filter(Boolean)
    .join(' · ')

  return (
    <article
      className="engagement-card"
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={`${engagement.client}: ${engagement.title}`}
    >
      {!compact && art.banner && (
        <div className="engagement-banner">
          <img src={art.banner} alt={art.bannerAlt} />
        </div>
      )}

      <div className="engagement-body">
        <div className="engagement-kicker">{kicker}</div>
        <h3 className="engagement-title">{engagement.title}</h3>
        {engagement.summary && (
          <p className="engagement-summary">{engagement.summary}</p>
        )}

        {fields.length > 0 && (
          <dl className="engagement-fields">
            {fields.map((f) => (
              <div key={f.key} className={`engagement-field${f.result ? ' is-result' : ''}`}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <div className="engagement-footer">
        {engagement.locked ? (
          <span className="lock-chip">
            <svg viewBox="0 0 12 14" aria-hidden="true" focusable="false">
              <path d="M3 6V4a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <rect x="1.5" y="6" width="9" height="7" rx="1" fill="currentColor" />
            </svg>
            Password
          </span>
        ) : <span />}
        {art.logo && <img className="engagement-logo" src={art.logo} alt={art.logoAlt} />}
      </div>
    </article>
  )
}
