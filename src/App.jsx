import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import CaseStudy from './CaseStudy'
import LeadershipCaseStudy from './LeadershipCaseStudy'
import { AuthProvider } from './contexts/AuthContext'
import { useAuth } from './hooks/useAuth'
import PasswordModal from './components/PasswordModal'
import Navigation from './components/Navigation'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import adamPortrait from './assets/img/adam-r2.jpg'
import fordLogo from './assets/logos/ford.svg'
import mastercardLogo from './assets/logos/mastercard.svg'
import mercedesLogo from './assets/logos/mercedes.png'
import microsoftLogo from './assets/logos/microsoft.png'
import prudentialLogo from './assets/logos/Pru_RGB.png'
import statefarmLogo from './assets/logos/statefarm.png'
import verizonLogo from './assets/logos/verizon.svg'
import wellsFargoLogo from './assets/logos/wellsfargo.svg'
import wexLogo from './assets/logos/wex.svg'

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
      "Strategic visioning",
      "Journey enhancement",
      "Platform redesign",
      "Product optimization"
    ],
    "Current tools": [
      "Figma",
      "Claude Code",
      "HTML/JS/CSS"
    ],
    "Soft skills": [
      "Strategic communication",
      "Mentorship",
      "Team building",
      "Problem-solving"
    ]
  };

  const numbers = {
    "Project archetypes": "01",
    "Current tools": "02",
    "Soft skills": "03"
  };

  return (
    <div className="skills-section">
      <div className="wrap">
        <div className="label">Expertise</div>
        <h2 className="section-h">Thirteen years from strategy through delivery</h2>
        <div className="skills-columns">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <div className="skill-category-header">
                <div className="skill-category-icon">{numbers[category]}</div>
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
    </div>
  );
}

function Homepage() {
  const { requestAccess } = useAuth()
  const navigate = useNavigate()

  const handleCaseStudyClick = (url) => {
    requestAccess(() => navigate(url))
  }

  return (
    <div className="homepage">
      <Navigation />

      {/* Hero Section */}
      <div className="hero ruled">
        <div className="wrap">
          <div className="hero-index">AT</div>
          <div className="hero-grid">
            <div>
              <div className="hero-portrait">
                <img src={adamPortrait} alt="Adam Taplin portrait illustration" className="portrait-image" />
              </div>
              <div className="hero-eyebrow">Mission</div>
              <h1 className="hero-headline">
              I turn <span className='signal-word'>complex systems</span> into <span className='signal-word'>products</span> people trust, by building the teams that make it possible.
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div id="work" className="work-section">
        <div className="wrap">
          <div className="label">Work</div>
          <h2 className="section-h">Delivering results in complex environments</h2>
          <div className="case-studies">
            <CaseStudyCard
              category="A story of innovation"
              title="(Re)defining the AI-powered future for an aging incumbent"
              icon={<img src={wexLogo} alt="WEX" />}
              onClick={() => handleCaseStudyClick('/innovation-transformation-WEX/')}
            />
            <CaseStudyCard
              category="A story of leadership"
              title="Reviving a struggling team to deliver the impossible"
              icon={<img src={verizonLogo} alt="Verizon" />}
              onClick={() => handleCaseStudyClick('/leadership-case-study/')}
            />
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div id="about" className="philosophy-section">
        <div className="wrap">
          <div className="label">Philosophy</div>
          <h2 className="section-h">Lead with compassion</h2>
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
      </div>

      {/* Skills Section */}
      <SkillsSection />

      {/* Clients Section */}
      <div className="clients-section">
        <div className="wrap">
          <div className="label">Clients</div>
          <h2 className="section-h">Select clients</h2>
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
              <img src={wellsFargoLogo} alt="Wells Fargo" />
            </div>
            <div className="client-logo">
              <img src={wexLogo} alt="WEX" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}


function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/innovation-transformation-WEX/" element={<ProtectedRoute><CaseStudy /></ProtectedRoute>} />
      <Route path="/leadership-case-study/" element={<ProtectedRoute><LeadershipCaseStudy /></ProtectedRoute>} />
    </Routes>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router basename="/portfolio25">
        <ScrollToTop />
        <CustomCursor />
        <AppContent />
        <PasswordModal />
      </Router>
    </AuthProvider>
  )
}

export default App
