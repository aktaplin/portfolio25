import './App.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import ActivityModal, { InlineImageContainer } from './components/ActivityModal'
import ColorPicker from './components/ColorPicker'
import CaseStudyNavigation from './components/CaseStudyNavigation'
import Footer from './components/Footer'
import verizonLogo from './assets/logos/verizon.svg'
import activity1Image from './assets/img/+play-enhancement.png'
import activity2Image from './assets/img/+play-mvp.png'

const imgImage = verizonLogo;

// Set Technical Soft Futurism theme on component load
function useInitializeTheme() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'technical-soft-futurism')
  }, [])
}

function BackButton() {
  const navigate = useNavigate()
  
  return (
    <button 
      onClick={() => navigate('/')}
      className="back-button"
    >
      ← Back
    </button>
  )
}

// Empty activity data template
const activitiesData = {
  'activity-1': {
    title: 'Regain client trust',
    duration: '2 months',
    content: (
      <div>
        <ul>
          <li>Led team through identifying quick wins</li>
          <li>Road show with key stakeholders</li>
          <li>Prioritization based on customer value, business appetite, and technical level of effort</li>
        </ul>
        
        <InlineImageContainer 
          src={activity1Image}
          alt="+play enhancement wireframes showing quick wins"
          caption="Quick enhancement wireframes presented to stakeholders"
          size="large"
        />
        
        <h2>Outcome</h2>
        <ul>
          <li>3-5 enhancements released</li>
          <li>Client partnership established</li>
        </ul>
      </div>
    )
  },
  'activity-2': {
    title: 'Reset the culture of my new team',
    duration: '2 months',
    content: (
      <div>
        <ul>
          <li>Instituted all-team, design-only daily afternoon workshops</li>
          <li>Modeled cross-team collaboration</li>
          <li>Listened to legacy team to solve collaboration and communication problems across disciplines</li>
        </ul>
        <h2>Outcome</h2>
        <ul>
          <li>Gradual increase in overall team quality of life survey scores; soon led these scores on the wider account</li>
          <li>Junior members of team have asked for me to be their people manager</li>
        </ul>
      </div>
    )
  },
  'activity-3': {
    title: 'Show them what we can really do',
    duration: '2 months',
    content: (
      <div>
        <ul>
          <li>At client's request, took it all back to square one for a reset</li>
          <li>Centered on customer benefit, gave team permission to ignore (for now) tech debt and previous product decisions where necessary</li>
        </ul>
        <InlineImageContainer 
          src={activity2Image}
          alt="+play MVP before and after"
          caption="Homepage before and after our redesign"
          size="large"
        />
        <h2>Outcome</h2>
        <ul>
          <li>“This is fantastic” - client Head of Design Verizon Consumer Group</li>
          <li>Fresh energy in the program</li>
          <li>Kernels of ideas began moving forward to wider stakeholder group</li>
        </ul>
      </div>
    )
  },
  'activity-4': {
    title: '',
    duration: '',
    content: (
      <div>
        
      </div>
    )
  },
  'activity-5': {
    title: '',
    duration: '',
    content: (
      <div>
        
      </div>
    )
  }
}

export default function LeadershipCaseStudy() {
  // Initialize theme
  useInitializeTheme()
  
  // Modal state
  const [selectedActivity, setSelectedActivity] = useState(null)
  const [selectedActivityKey, setSelectedActivityKey] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const handleActivityClick = (activityKey) => {
    setSelectedActivity(activitiesData[activityKey])
    setSelectedActivityKey(activityKey)
    setIsModalOpen(true)
  }
  
  const handleActivityChange = (activityKey) => {
    setSelectedActivity(activitiesData[activityKey])
    setSelectedActivityKey(activityKey)
  }
  
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedActivity(null)
    setSelectedActivityKey(null)
  }
  
  return (
    <div className="case-study-page bg-radial-gradients bg-dot-grid-overlay">
      <ColorPicker />
      <div className="content-container">
        <Navigation />
        <div className="scrollable-content">
          <div className="case-study-hero hero-layered-bg">
            <div className="case-study-title-section">
              <div className="case-study-subtitle">A story of leadership</div>
              <div className="hero-logo-section">
                <img src={imgImage} alt="Verizon logo" className="hero-logo" />
              </div>
              <h1 className="case-study-main-title">
                +play
              </h1>
            </div>
          </div>

          <div className="case-study-page-content">
            <div className="case-study-section">
              <h2 className="section-title">Problem</h2>
              <div className="case-study-text">
                <p>
                  The "cord-cutting" phenomenon has led to a fragmented entertainment experience, with a rapid increase in broadband-only homes and a booming digital subscription economy. The US digital subscription economy is projected to reach $74 billion in 2025. In response, +play offers a unified platform designed to help users discover, purchase, and manage all their subscriptions in one place, exclusively through Verizon.
                </p>
                {/* <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul> */}
              </div>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">Brief</h2>
              <div className="case-study-text">
                <p>
                Upon joining the +play project, it was evident that the client relationship was strained and the internal design team was severely siloed between UI and UX disciplines. The situation was further complicated by a rocky MVP phase, leading some clients to question the effectiveness of our product strategy. This challenging environment underscored the critical need for a new leadership approach to rebuild trust, foster collaboration, and deliver impactful solutions.
                </p>
                <p>
                  
                </p>
              </div>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">My role</h2>
              <div className="role-items">
                <div className="role-item">
                  <div className="role-text">
                    <div className="role-title">Lead 🎯</div>
                    <ul className="role-bullets">
                      <li>Improve stakeholder relationships</li>
                      <li>Reset design team culture</li>
                    </ul>
                  </div>
                </div>
                <div className="role-item">
                  <div className="role-text">
                    <div className="role-title">Plan 📅</div>
                    <ul className="role-bullets">
                      <li>Plan & execute MVP redesign</li>
                      <li>Select talent to augment the team</li>
                      <li>Improve efficiency of handoffs to engineering</li>
                    </ul>
                  </div>
                </div>
                <div className="role-item">
                  <div className="role-text">
                    <div className="role-title">Design 🎨</div>
                    <ul className="role-bullets">
                      <li>Create a new vision</li>
                      <li>Identify key improvements</li>
                      <li>Interpret and act on user research</li>
                    </ul>
                  </div>
                </div>
                <div className="role-item">
                  <div className="role-text">
                    <div className="role-title">Sell it 🤝</div>
                    <ul className="role-bullets">
                      <li>Inspire confidence our work</li>
                      <li>Present to C-Suite brand and product design leadership</li>
                      <li>Energize project stakeholders to take on new direction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT TIMELINE */}
            <div className="case-study-section">
              <h2 className="section-title">My activities</h2>
              <div className="timeline-option-1">
                <div className="timeline-item-v1" onClick={() => handleActivityClick('activity-1')}>
                  <div className="activity-duration">Month 1-2</div>
                  <h3 className="activity-title">Regain client trust</h3>
                </div>
                <div className="timeline-item-v1" onClick={() => handleActivityClick('activity-2')}>
                  <div className="activity-duration">Month 2-3</div>
                  <h3 className="activity-title">Reset the design team culture</h3>
                </div>
                <div className="timeline-item-v1" onClick={() => handleActivityClick('activity-3')}>
                  <div className="activity-duration">Month 3-4</div>
                  <h3 className="activity-title">Show what we can <i>really</i> do</h3>
                </div>
                <div className="timeline-item-v1" onClick={() => handleActivityClick('activity-4')}>
                  <div className="activity-duration">Month 5</div>
                  <h3 className="activity-title">Execute a complete redesign in 4 weeks</h3>
                </div>
                <div className="timeline-item-v1" onClick={() => handleActivityClick('activity-5')}>
                  <div className="activity-duration">Month 6+</div>
                  <h3 className="activity-title">Post launch optimization</h3>
                </div>
              </div>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">Outcome</h2>
              <div className="pullquote-minimal">
                <div className="quote-text">Your team made the impossible, possible.</div>
                <div className="quote-attribution">Senior Director of Design, Verizon Beyond Connectivity Products</div>
              </div>
              
              <div className="case-study-text">
                <p>
                  
                </p>
                <p>
                  
                </p>
              </div>
            </div>

            <CaseStudyNavigation currentCaseStudyKey="leadership" />
          </div>
          <Footer />
        </div>
      </div>
      
      <ActivityModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        activity={selectedActivity}
        currentActivityKey={selectedActivityKey}
        activitiesData={activitiesData}
        onActivityChange={handleActivityChange}
      />
    </div>
  )
}