import './App.css'
import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import ActivityModal from './components/ActivityModal'

const imgImage = "http://localhost:3845/assets/9bae1906e382970e6dc0fc62388a00c50aec635c.png";

// Set Technical Soft Futurism theme on component load
function initializeTheme() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'technical-soft-futurism')
  }, [])
}

function BackButton() {
  return (
    <button 
      onClick={() => window.navigateHome && window.navigateHome()}
      className="back-button"
    >
      ← Back
    </button>
  )
}

// Sample activity data
const activitiesData = {
  'planning': {
    title: 'Project planning, team selection, and briefing',
    duration: 'Week 1-2',
    content: (
      <div>
        <h3>Setting the Foundation</h3>
        <p>The first two weeks were critical for establishing the project framework and assembling the right team. We needed a diverse group of designers, strategists, and technologists to tackle WEX's complex challenges.</p>
        
        <h3>Key Activities</h3>
        <p>I personally interviewed and selected 8 team members, ensuring we had expertise in automotive technology, AI/ML applications, and enterprise UX. We established our collaboration tools, defined roles, and created our project charter.</p>
        
        <h3>Strategic Alignment</h3>
        <p>Critical stakeholder meetings with WEX leadership helped us understand not just the brief, but the underlying business pressures. Fleet electrification wasn't just a trend—it was an existential threat to their gallon-based revenue model.</p>
      </div>
    )
  },
  'research': {
    title: 'Research + concept generation',
    duration: 'Week 3-4', 
    content: (
      <div>
        <h3>Deep Market Analysis</h3>
        <p>We conducted extensive research into the fleet management ecosystem, interviewing fleet managers, drivers, and technology providers. The landscape was more complex than we initially understood.</p>
        
        <h3>Competitive Intelligence</h3>
        <p>SaaS startups were eating WEX's lunch with better user experiences. We analyzed 15+ competitors and identified key UX patterns that were becoming table stakes in this market.</p>
        
        <h3>Concept Development</h3>
        <p>Our team generated over 40 initial concepts, which we rapidly prototyped and tested. Three core themes emerged that would shape our final recommendations: predictive intelligence, unified experiences, and ecosystem integration.</p>
      </div>
    )
  },
  'workshop': {
    title: 'Workshop facilitation',
    duration: 'Week 5-6',
    content: (
      <div>
        <h3>Collaborative Design Sessions</h3>
        <p>I facilitated intensive design workshops with both our team and WEX stakeholders. These weren't typical brainstorming sessions—we used structured design thinking methodologies to tackle complex problems systematically.</p>
        
        <h3>Stakeholder Alignment</h3>
        <p>Getting buy-in from WEX's diverse stakeholder groups was challenging. I ran separate sessions for technical teams, business stakeholders, and the C-suite, tailoring our approach and language for each audience.</p>
        
        <h3>Rapid Prototyping</h3>
        <p>We built working prototypes during the workshops, allowing stakeholders to experience our concepts firsthand. This hands-on approach was crucial for getting everyone aligned on the vision.</p>
      </div>
    )
  },
  'design': {
    title: 'Detailed design',
    duration: 'Week 7-8',
    content: (
      <div>
        <h3>Design System Creation</h3>
        <p>I led the creation of a comprehensive design system that could scale across WEX's diverse product portfolio. This wasn't just UI components—we defined interaction patterns, data visualization standards, and AI integration guidelines.</p>
        
        <h3>High-Fidelity Prototypes</h3>
        <p>Our team created pixel-perfect prototypes for three key scenarios: 2025 incremental improvements, 2027 transformational changes, and 2030 visionary concepts. Each prototype was fully interactive and data-driven.</p>
        
        <h3>Technical Feasibility</h3>
        <p>Working closely with WEX's engineering teams, I ensured our designs were not just beautiful, but technically achievable within their existing infrastructure constraints.</p>
      </div>
    )
  },
  'presentation': {
    title: 'Presentation prep + delivery',
    duration: 'Week 9-10',
    content: (
      <div>
        <h3>Stakeholder Presentation Strategy</h3>
        <p>I crafted different presentation narratives for different audiences—technical details for the engineering team, business impact for executives, and user experience highlights for the product team.</p>
        
        <h3>C-Suite Presentation</h3>
        <p>The final presentation to WEX's C-suite was the culmination of 10 weeks of intensive work. I presented our recommendations with confidence, backed by research, prototypes, and a clear implementation roadmap.</p>
        
        <h3>Securing Buy-in</h3>
        <p>The presentation was so well-received that WEX immediately pivoted their roadmap priorities, asking us to develop an MVP for their highest-profile dashboard. This wasn't just a design win—it was a business transformation.</p>
      </div>
    )
  }
}

export default function CaseStudy() {
  // Initialize theme
  initializeTheme()
  
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
      <div className="content-container">
        <Navigation />
        <div className="scrollable-content">
          <div className="case-study-hero hero-layered-bg">
            <div className="case-study-title-section">
              <div className="case-study-subtitle">A story of innovation</div>
              <h1 className="case-study-main-title">
                WEX Mobility Vision 2027
              </h1>
            </div>
            <div className="hero-image-section">
              <img src={imgImage} alt="WEX logo" className="hero-wex-logo" />
            </div>
          </div>

          <div className="case-study-page-content">
            <div className="case-study-section">
              <h2 className="section-title">Problem</h2>
              <div className="case-study-text">
                <p>
                  WEX, a $2.5B+ industry leader/encumbent providing payment
                  solutions for 19M+ professional fleets across the nation, bases
                  its financial performance primarily on how many gallons its
                  customers purchase at the pump. Yet this model faces significant
                  challenges:
                </p>
                <ul>
                  <li>Fleet electrification</li>
                  <li>Autonomous vehicles</li>
                  <li>SaaS startups competing on better CX</li>
                </ul>
              </div>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">Brief</h2>
              <div className="case-study-text">
                <p>
                  Against this backdrop of uncertainty, our team was asked to design
                  the future WEX experience at the intersection of emerging trends
                  and evolving customer needs.
                </p>
                <p>
                  The clients were especially interested in the application of AI to
                  their products. In response we gave them actionable plans for
                  2025, 2027, and 2030.
                </p>
              </div>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">My role</h2>
              <div className="role-items">
                <div className="role-item">
                  <div className="role-icon">🎯</div>
                  <div className="role-text">
                    <div className="role-title">Lead</div>
                    <ul className="role-bullets">
                      <li>Supervised 8 designers and strategists</li>
                      <li>Primary design collaborator for technology, data science, and delivery</li>
                    </ul>
                  </div>
                </div>
                <div className="role-item">
                  <div className="role-icon">📅</div>
                  <div className="role-text">
                    <div className="role-title">Plan</div>
                    <ul className="role-bullets">
                      <li>Set plan for all design milestones</li>
                      <li>Responded to in-flight requests, new developments</li>
                      <li>Ensured high-quality final deliverables</li>
                    </ul>
                  </div>
                </div>
                <div className="role-item">
                  <div className="role-icon">🎨</div>
                  <div className="role-text">
                    <div className="role-title">Design</div>
                    <ul className="role-bullets">
                      <li>Participated in generative thinking</li>
                      <li>Build team culture</li>
                      <li>Solved design problems</li>
                      <li>Inspired and motivated</li>
                    </ul>
                  </div>
                </div>
                <div className="role-item">
                  <div className="role-icon">🤝</div>
                  <div className="role-text">
                    <div className="role-title">Sell it</div>
                    <ul className="role-bullets">
                      <li>Presented all demos</li>
                      <li>Secured C-suite support</li>
                      <li>Built trust with day-to-day client collaborators</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT TIMELINE */}
            <div className="case-study-section">
              <h2 className="section-title">My activities</h2>
              <div className="timeline-option-1">
                <div className="timeline-item-v1" onClick={() => handleActivityClick('planning')}>
                  <div className="activity-duration">Week 1-2</div>
                  <h3 className="activity-title">Project planning, team selection, and briefing</h3>
                </div>
                <div className="timeline-item-v1" onClick={() => handleActivityClick('research')}>
                  <div className="activity-duration">Week 3-4</div>
                  <h3 className="activity-title">Research + concept generation</h3>
                </div>
                <div className="timeline-item-v1" onClick={() => handleActivityClick('workshop')}>
                  <div className="activity-duration">Week 5-6</div>
                  <h3 className="activity-title">Workshop facilitation</h3>
                </div>
                <div className="timeline-item-v1" onClick={() => handleActivityClick('design')}>
                  <div className="activity-duration">Week 7-8</div>
                  <h3 className="activity-title">Detailed design</h3>
                </div>
                <div className="timeline-item-v1" onClick={() => handleActivityClick('presentation')}>
                  <div className="activity-duration">Week 9-10</div>
                  <h3 className="activity-title">Presentation prep + delivery</h3>
                </div>
              </div>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">Outcome</h2>
              <div className="case-study-text">
                <p>
                  "This is fantastic work, and exactly what we've been wanting for some time now." -Chief Design Officer, WEX Inc.
                </p>
                <p>
                Due to this project's success, my clients pivoted to requesting an MVP for immediate deployment on their highest-profile authenticated dashboard, dropping their previous priority for our team.                </p>
                <p>
                Six months later they contacted us again for additional help.
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