import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

// Reuse the CaseStudyLockup component
function CaseStudyLockup({ category, title, icon, onClick }) {
  return (
    <div className="case-study" onClick={onClick}>
      <div className="case-study-icon">
        {icon || '✦'}
      </div>
      <div className="case-study-content">
        <div className="case-study-category">{category}</div>
        <div className="case-study-title">{title}</div>
      </div>
    </div>
  )
}

// Case study data - centralized for consistency
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
  
  // Filter out the current case study to show only other ones
  const otherCaseStudies = allCaseStudies.filter(cs => cs.key !== currentCaseStudyKey)
  
  // Don't render if no other case studies
  if (otherCaseStudies.length === 0) {
    return null
  }
  
  const handleCaseStudyClick = (path) => {
    requestAccess(() => navigate(path))
  }
  
  return (
    <div className="case-study-navigation-section">
      <h2 className="section-title">More case studies</h2>
      <div className="case-studies">
        {otherCaseStudies.map((caseStudy) => (
          <CaseStudyLockup
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