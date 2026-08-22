import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import CaseStudy from './CaseStudy'
import LeadershipCaseStudy from './LeadershipCaseStudy'
import { AuthProvider } from './contexts/AuthContext'
import { useAuth } from './hooks/useAuth'
import PasswordModal from './components/PasswordModal'
import Navigation from './components/Navigation'
import ScrollManager from './components/ScrollManager'
import AnalyticsPageView from './components/AnalyticsPageView'
import Footer from './components/Footer'
import ContactSection from './components/ContactSection'
import ProtectedRoute from './components/ProtectedRoute'
import EngagementCard from './components/EngagementCard'
import SectionHead from './components/SectionHead'
import { useReveal } from './hooks/useReveal'
import { hero, engagements, writing, heroKicker } from './content/profile'
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

function ExternalLinkIcon() {
  return (
    <svg
      className="writing-card-arrow"
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      aria-hidden="true"
    >
      <path d="M7.5 4.5H13.5V10.5" />
      <path d="M13.5 4.5L4.5 13.5" />
    </svg>
  )
}

function WritingCard({ title, href, source = 'Published on LinkedIn' }) {
  return (
    <a
      className="writing-card"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="writing-card-text">
        <span className="writing-card-title">{title}</span>
        <span className="writing-card-source">{source}</span>
      </span>
      <ExternalLinkIcon />
    </a>
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

  return (
    <div className="skills-section">
      <div className="wrap">
        <SectionHead label="Expertise">Thirteen years from strategy through delivery</SectionHead>
        <div className="skills-columns">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <div className="skill-category-header">
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
  const kicker = heroKicker()
  useReveal()

  const handleEngagementClick = (url) => {
    requestAccess(() => navigate(url))
  }

  return (
    <div className="homepage">
      <Navigation />
      <main id="main-content">

      {/* Hero */}
      <div className="hero">
        <div className="wrap">
          {kicker && <div className="hero-kicker">{kicker}</div>}
          <h1 className="hero-display">{hero.display}</h1>
          <p className="hero-lede">{hero.lede}</p>
          <div className="hero-actions">
            <a className="action action-primary" href="#work">
              Read the work
              <span aria-hidden="true">↓</span>
            </a>
            <a className="action" href="#contact">Get in touch</a>
          </div>
        </div>
      </div>

      {/* Work */}
      <div id="work" className="work-section">
        <div className="wrap">
          <SectionHead label="Work">Delivering results in complex environments</SectionHead>
          <div className="engagements">
            {engagements.map((e) => (
              <EngagementCard
                key={e.key}
                engagement={e}
                onClick={() => handleEngagementClick(e.href)}
              />
            ))}
          </div>

          <div className="writing-subsection">
            <SectionHead label="Writing" as="h3">Notes from the practice</SectionHead>
            <div className="writing-list">
              {writing.map((w) => (
                <WritingCard key={w.href} title={w.title} href={w.href} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div id="about" className="philosophy-section">
        <div className="wrap">
          <div className="philosophy-intro">
            <div className="philosophy-portrait">
              <img src={adamPortrait} alt="Adam Taplin" className="portrait-image" />
            </div>
            <SectionHead label="Philosophy">Lead with openness</SectionHead>
          </div>
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

      <SkillsSection />

      {/* Clients */}
      <div className="clients-section">
        <div className="wrap">
          <SectionHead label="Clients">Selected clients</SectionHead>
          <div className="client-logos">
            <div className="client-logo"><img src={fordLogo} alt="Ford" /></div>
            <div className="client-logo"><img src={mastercardLogo} alt="Mastercard" /></div>
            <div className="client-logo"><img src={mercedesLogo} alt="Mercedes-Benz" /></div>
            <div className="client-logo"><img src={microsoftLogo} alt="Microsoft" /></div>
            <div className="client-logo"><img src={prudentialLogo} alt="Prudential" /></div>
            <div className="client-logo"><img src={statefarmLogo} alt="State Farm" /></div>
            <div className="client-logo"><img src={verizonLogo} alt="Verizon" /></div>
            <div className="client-logo"><img src={wellsFargoLogo} alt="Wells Fargo" /></div>
            <div className="client-logo"><img src={wexLogo} alt="WEX" /></div>
          </div>
        </div>
      </div>

      <ContactSection />

      </main>
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
        <ScrollManager />
        <AnalyticsPageView />
        <AppContent />
        <PasswordModal />
      </Router>
    </AuthProvider>
  )
}

export default App
