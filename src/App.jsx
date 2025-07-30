import './App.css'
import profileImage from './assets/profile.jpg'
import { useState, useEffect } from 'react'

function ThemeSwitcher() {
  const [theme, setTheme] = useState('coral-navy')
  
  const themes = [
    { value: 'coral-navy', label: 'Coral Navy' },
    { value: 'sage-depths', label: 'Sage Depths' },
    { value: 'warm-slate', label: 'Warm Slate' },
    { value: 'midnight-copper', label: 'Midnight Copper' },
    { value: 'classic-crimson', label: 'Classic Crimson' },
    { value: 'rust-sage', label: 'Rust Sage' },
    { value: 'electric-sage', label: 'Electric Sage' },
    { value: 'cyber-noir', label: 'Cyber Noir' }
  ]
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  
  return (
    <div className="theme-switcher">
      <select 
        value={theme} 
        onChange={(e) => setTheme(e.target.value)}
        className="theme-selector"
      >
        {themes.map(t => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </select>
    </div>
  )
}

function CaseStudyLockup({ category, title, icon }) {
  return (
    <div className="case-study">
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

function App() {
  return (
    <div className="homepage">
      <ThemeSwitcher />
      <div className="content-container">
        <div className="hero-panel">
          <h1 className="main-title">Adam Taplin</h1>
          
          <div className="hero-section">
            <div className="hero-content">
              <h2 className="hero-title">
                Enterprise design team leadership
              </h2>
            </div>
            {/* <div className="profile-image-container">
              <img src={profileImage} alt="Adam Taplin" className="profile-image" />
            </div> */}
          </div>
        </div>

        <div className="scrollable-content">
          <p className="display-2">
            I turn complex project chaos into clear wins. Agency life has taught me to 
            juggle competing priorities while building <span className="highlight">collaborative cultures</span> where 
            great work thrives through diverse perspectives and <span className="highlight">creative curiosity</span>.
          </p>
          
          <div className="work-section">
            <h2 className="section-title">Work</h2>
            <div className="case-studies">
              <CaseStudyLockup 
                category="A story of innovation"
                title="(Re)defining the AI-powered future for an aging incumbent"
                icon="🚀"
              />
              <CaseStudyLockup 
                category="A story of leadership"
                title="Reviving a struggling team to deliver the impossible"
                icon="👥"
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
              <div className="client-logo">Ford</div>
              <div className="client-logo">Mastercard</div>
              <div className="client-logo">Mercedes-Benz</div>
              <div className="client-logo">Microsoft</div>
              <div className="client-logo">Prudential</div>
              <div className="client-logo">State Farm</div>
              <div className="client-logo">Verizon</div>
              <div className="client-logo">WEX</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
