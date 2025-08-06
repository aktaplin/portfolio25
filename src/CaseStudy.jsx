import './App.css'
import { useEffect } from 'react'
import Navigation from './components/Navigation'

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

export default function CaseStudy() {
  // Initialize theme
  initializeTheme()
  
  return (
    <div className="case-study-page bg-radial-gradients bg-dot-grid-overlay">
      <div className="content-container">
        <Navigation />
        <div className="case-study-hero hero-layered-bg">
          <BackButton />
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

        <div className="scrollable-content">
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

            <div className="case-study-section">
              <h2 className="section-title">My activities</h2>
              <div className="case-study-activities">
                <div className="activity-card">
                  <div className="activity-duration">Week 1-2</div>
                  <h3 className="activity-title">Project planning, team selection, and briefing</h3>
                </div>
                <div className="activity-card">
                  <div className="activity-duration">Week 3-4</div>
                  <h3 className="activity-title">Research + concept generation</h3>
                </div>
                <div className="activity-card">
                  <div className="activity-duration">Week 5-6</div>
                  <h3 className="activity-title">Workshop facilitation</h3>
                </div>
                <div className="activity-card">
                  <div className="activity-duration">Week 7-8</div>
                  <h3 className="activity-title">Detailed design</h3>
                </div>
                <div className="activity-card">
                  <div className="activity-duration">Week 9-10</div>
                  <h3 className="activity-title">Presentation prep + delivery</h3>
                </div>
              </div>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">Outcome</h2>
              <div className="case-study-text">
                <p>
                  “This is fantastic work, and exactly what we’ve been wanting for some time now.” -Chief Design Officer, WEX Inc.
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
    </div>
  )
}