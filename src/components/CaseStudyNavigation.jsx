import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { engagements } from '../content/profile'
import SectionHead from './SectionHead'
import EngagementCard from './EngagementCard'

// `currentCaseStudyKey` matches the engagement keys in profile.js
export default function CaseStudyNavigation({ currentCaseStudyKey }) {
  const navigate = useNavigate()
  const { requestAccess } = useAuth()

  const others = engagements.filter((e) => e.key !== currentCaseStudyKey)
  if (others.length === 0) return null

  return (
    <div className="case-study-navigation-section">
      <SectionHead label="More">Other engagements</SectionHead>
      <div className="engagements">
        {others.map((engagement) => (
          <EngagementCard
            key={engagement.key}
            engagement={engagement}
            compact
            onClick={() => requestAccess(() => navigate(engagement.href))}
          />
        ))}
      </div>
    </div>
  )
}
