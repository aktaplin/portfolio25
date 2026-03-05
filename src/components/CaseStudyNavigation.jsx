import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function CaseStudyCard({ category, title, icon, onClick }) {
  return (
    <div className="case-card" onClick={onClick}>
      <div className="case-card-image">
        <span className="case-card-icon">{icon || '✦'}</span>
      </div>
      <div className="case-card-body">
        <div className="case-card-client">{category}</div>
        <div className="case-card-title">{title}</div>
      </div>
      <div className="case-card-footer">
        <div className="tag-row">
          <span className="tag tag-outline">Case Study</span>
        </div>
        <span className="case-card-arrow">→</span>
      </div>
    </div>
  )
}

const allCaseStudies = [
  {
    key: 'innovation',
    path: '/innovation-transformation-WEX/',
    category: 'A story of innovation',
    title: '(Re)defining the AI-powered future for an aging incumbent',
    icon: '🚀'
  },
  {
    key: 'leadership',
    path: '/leadership-case-study/',
    category: 'A story of leadership',
    title: 'Reviving a struggling team to deliver the impossible',
    icon: '👥'
  }
]

export default function CaseStudyNavigation({ currentCaseStudyKey }) {
  const navigate = useNavigate()
  const { requestAccess } = useAuth()

  const otherCaseStudies = allCaseStudies.filter(cs => cs.key !== currentCaseStudyKey)

  if (otherCaseStudies.length === 0) {
    return null
  }

  const handleCaseStudyClick = (path) => {
    requestAccess(() => navigate(path))
  }

  return (
    <div className="case-study-navigation-section">
      <div className="label">More</div>
      <h2 className="section-h">More case studies</h2>
      <div className="case-studies" style={{ marginTop: 'var(--space-6)' }}>
        {otherCaseStudies.map((caseStudy) => (
          <CaseStudyCard
            key={caseStudy.key}
            category={caseStudy.category}
            title={caseStudy.title}
            icon={caseStudy.icon}
            onClick={() => handleCaseStudyClick(caseStudy.path)}
          />
        ))}
      </div>
    </div>
  )
}
