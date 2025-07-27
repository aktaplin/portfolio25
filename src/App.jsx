import './App.css'
import profileImage from './assets/profile.jpg'

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

function App() {
  return (
    <div className="homepage">
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
