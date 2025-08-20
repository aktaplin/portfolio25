import './App.css'
import { useState, useEffect } from 'react'
import CaseStudy from './CaseStudy'
import { AuthProvider } from './contexts/AuthContext'
import { useAuth } from './hooks/useAuth'
import PasswordModal from './components/PasswordModal'
import Navigation from './components/Navigation'
import ColorPicker from './components/ColorPicker'
import fordLogo from './assets/logos/ford.svg'
import mastercardLogo from './assets/logos/mastercard.svg'
import mercedesLogo from './assets/logos/mercedes.png'
import microsoftLogo from './assets/logos/microsoft.png'
import prudentialLogo from './assets/logos/Pru_RGB.png'
import statefarmLogo from './assets/logos/statefarm.png'
import verizonLogo from './assets/logos/verizon.svg'
import wexLogo from './assets/logos/wex.svg'

// Set Technical Soft Futurism theme on app load
function useInitializeTheme() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'technical-soft-futurism')
  }, [])
}

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

function TextBlock({ title, description }) {
  return (
    <div className="text-block">
      <div className="text-block-title">{title}</div>
      <div className="text-block-description">{description}</div>
    </div>
  )
}

function SkillsSection() {
  const skillsData = {
    "Project archetypes": [
      "Vision + value-prop definition",
      "Journey enhancement", 
      "Platform redesign + migration",
      "Design systems",
      "Research"
    ],
    "Tools": [
      "Prototyping: Figma, Sketch, Axure, Omnigraffle, Visio, Balsamiq (remember that?)",
      "Facilitation: Figjam, Mural",
      "Thought partnership: Claude, ChatGPT, NotebookLM, etc",
      "Coding: HTML/JS/CSS, Vibecoding w/ Cursor, Claude"
    ],
    "Soft skills": [
      "Strategic communication",
      "Mentorship",
      "Problem-solving", 
      "Design thinking",
      "Business outcome alignment"
    ]
  };

  const icons = {
    "Project archetypes": "🎯",
    "Tools": "🛠️", 
    "Soft skills": "🧠"
  };

  return (
    <div className="skills-section">
      <h2 className="section-title">Skills & expertise</h2>
      <div className="skills-columns">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <div className="skill-category-header">
              <div className="skill-category-icon">{icons[category]}</div>
              <h3 className="skill-category-title">{category}</h3>
            </div>
            <div className="skill-items">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Homepage() {
  const { requestAccess } = useAuth()
  
  const handleCaseStudyClick = (navigateCallback) => {
    requestAccess(navigateCallback)
  }

  // Initialize theme
  useInitializeTheme()

  return (
    <div className="homepage bg-radial-gradients bg-dot-grid-overlay">
      <ColorPicker />
      <div className="content-container">
        <Navigation />
        <div className="scrollable-content">
          <p className="display-2">
          I'm a complexity specialist from agency life: I align teams, navigate competing priorities, and keep momentum strong while we create customer magic.
          </p>
          
          <div className="work-section">
            <h2 className="section-title">Work</h2>
            <div className="case-studies">
              <CaseStudyLockup 
                category="A story of innovation"
                title="(Re)defining the AI-powered future for an aging incumbent"
                icon="🚀"
                onClick={() => handleCaseStudyClick(() => window.navigateToProtectedCaseStudy && window.navigateToProtectedCaseStudy('wex'))}
              />
              <CaseStudyLockup 
                category="A story of leadership"
                title="Reviving a struggling team to deliver the impossible"
                icon="👥"
                onClick={() => handleCaseStudyClick(() => window.navigateToProtectedCaseStudy && window.navigateToProtectedCaseStudy('leadership'))}
              />
            </div>
          </div>

          <div className="philosophy-section">
            <h2 className="section-title">Philosophy</h2>
            <div className="text-blocks">
              <TextBlock 
                title="Build collaboratively"
                description="Creativity thrives when multiple viewpoints inform a solution. I strive to create an environment of risk-taking and trust."
              />
              <TextBlock 
                title="Stay curious"
                description="I am a lifelong learner, and that is why I love design. Knowing the details can make the difference between success and failure."
              />
              <TextBlock 
                title="Listen well"
                description="Design is industrial-grade, professional empathy. I listen to my team, clients, and users to find the intersection of their needs."
              />
              <TextBlock 
                title="Keep it light"
                description="In a world of JIRA tickets, politics, and arguments over pixels sometimes the biggest unlock is just to have a little fun."
              />
            </div>
          </div>

          <SkillsSection />

          <div className="clients-section">
            <h2 className="section-title">Past clients</h2>
            <div className="client-logos">
              <div className="client-logo">
                <img src={fordLogo} alt="Ford" />
              </div>
              <div className="client-logo">
                <img src={mastercardLogo} alt="Mastercard" />
              </div>
              <div className="client-logo">
                <img src={mercedesLogo} alt="Mercedes-Benz" />
              </div>
              <div className="client-logo">
                <img src={microsoftLogo} alt="Microsoft" />
              </div>
              <div className="client-logo">
                <img src={prudentialLogo} alt="Prudential" />
              </div>
              <div className="client-logo">
                <img src={statefarmLogo} alt="State Farm" />
              </div>
              <div className="client-logo">
                <img src={verizonLogo} alt="Verizon" />
              </div>
              <div className="client-logo">
                <img src={wexLogo} alt="WEX" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home')
  const [currentCaseStudy, setCurrentCaseStudy] = useState(null)
  
  const navigateToProtectedCaseStudy = (caseStudyId) => {
    setCurrentCaseStudy(caseStudyId)
    setCurrentPage('case-study')
  }
  
  const navigateHome = () => {
    setCurrentPage('home')
    setCurrentCaseStudy(null)
  }
  
  // Add navigation to window object so components can access it
  useEffect(() => {
    window.navigateHome = navigateHome
    window.navigateToProtectedCaseStudy = navigateToProtectedCaseStudy
  }, [])
  
  if (currentPage === 'case-study' && currentCaseStudy === 'wex') {
    return <CaseStudy />
  }
  
  if (currentPage === 'case-study' && currentCaseStudy === 'leadership') {
    // Placeholder for future leadership case study
    return (
      <div className="case-study-page">
        <div className="content-container">
          <Navigation />
          <div className="scrollable-content">
            <div className="case-study-hero hero-layered-bg">
              <div className="case-study-title-section">
                <div className="case-study-subtitle">A story of leadership</div>
                <h1 className="case-study-main-title">
                  Leadership Case Study
                </h1>
              </div>
            </div>
            
            <div className="case-study-page-content">
              <div className="case-study-section">
                <h2 className="section-title">Coming Soon</h2>
                <div className="case-study-text">
                  <p>This case study is currently in development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  return <Homepage />
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
      <PasswordModal />
    </AuthProvider>
  )
}

export default App
