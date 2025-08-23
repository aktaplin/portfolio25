import './App.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import ActivityModal from './components/ActivityModal'
import ColorPicker from './components/ColorPicker'
import verizonLogo from './assets/logos/verizon.svg'

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
    title: '',
    duration: '',
    content: (
      <div>
        
      </div>
    )
  },
  'activity-2': {
    title: '',
    duration: '',
    content: (
      <div>
        
      </div>
    )
  },
  'activity-3': {
    title: '',
    duration: '',
    content: (
      <div>
        
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
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const handleActivityClick = (activityKey) => {
    setSelectedActivity(activitiesData[activityKey])
    setIsModalOpen(true)
  }
  
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedActivity(null)
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
              <h1 className="case-study-main-title">
                +play
              </h1>
            </div>
            <div className="hero-image-section">
              <img src={imgImage} alt="" className="hero-verizon-logo" />
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
                      <li>Find talent to augment the team</li>
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
                  <div className="activity-duration"></div>
                  <h3 className="activity-title">Regain client trust</h3>
                </div>
                <div className="timeline-item-v1" onClick={() => handleActivityClick('activity-2')}>
                  <div className="activity-duration"></div>
                  <h3 className="activity-title">Reset the design team culture</h3>
                </div>
                <div className="timeline-item-v1" onClick={() => handleActivityClick('activity-3')}>
                  <div className="activity-duration"></div>
                  <h3 className="activity-title">Show what we can <i>really</i> do</h3>
                </div>
                <div className="timeline-item-v1" onClick={() => handleActivityClick('activity-4')}>
                  <div className="activity-duration"></div>
                  <h3 className="activity-title">Execute a complete redesign in 4 weeks</h3>
                </div>
                {/* <div className="timeline-item-v1" onClick={() => handleActivityClick('activity-5')}>
                  <div className="activity-duration"></div>
                  <h3 className="activity-title"></h3>
                </div> */}
              </div>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">Outcome</h2>
              <div className="pullquote-minimal">
                <div className="quote-text"></div>
                <div className="quote-attribution"></div>
              </div>
              
              <div className="case-study-text">
                <p>
                  
                </p>
                <p>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ActivityModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        activity={selectedActivity}
      />
    </div>
  )
}