import './App.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import ActivityModal, { InlineImageContainer } from './components/ActivityModal'
import ColorPicker from './components/ColorPicker'
import CaseStudyNavigation from './components/CaseStudyNavigation'
import Footer from './components/Footer'
import ImageOverlay from './components/ImageOverlay'
import wexLogo from './assets/logos/wex.svg'
import wexBanner from './assets/img/WEXBanner.png'
import researchImage from './assets/img/research.jpg'
import workshopImage from './assets/img/workshop.jpg'
import prototypeImage from './assets/img/prototype.jpg'
import storyBriefImage from './assets/img/storyBrief.png'

const imgImage = wexLogo;

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

// Sample activity data
const activitiesData = {
  'planning': {
    title: 'Project planning, team selection, and briefing',
    duration: 'Week 1-2',
    content: (
      <div>
        <p>I evaluated the design resources on the bench, spoke with those available, and selected the skill and personality mix best suited to this project.</p>
        <p>With all aboard, I fleshed out the design portion of the internal briefing for day 1.</p>
      </div>
    )
  },
  'research': {
    title: 'Research + concept generation',
    duration: 'Week 3-4',
    image: researchImage,
    content: (
      <div>
        <h3>Research</h3>
        <p>The clients threw a ton of documents at us. Alongside the strategists, I dove into marking those up for insights and opportunities.I led stakeholder interviews with commercial teams, designers, and other clients.</p>
      
        <h3>Concept Generation</h3>
        <p>Our currency in these phase was ideas. We filled digital post-its full of little snippets like "driver profile" or "morning huddle".</p>
      </div>
    )
  },
  'workshop': {
    title: 'Workshop planning + facilitation',
    duration: 'Week 5-6',
    image: workshopImage,
    content: (
      <div>
        <h3>Workshop Planning</h3>
        <p>With just three weeks from kickoff to client workshop, we needed to be laser-focused on what we would be doing in the room and work backwards. Based on past experience, I suggested the framework for organizing our ideas that we could iterate against and take with us.</p>
      
        <h3>Workshop Facilitation</h3>
        <p>We presented two sets of ideas: one for fleet managers and one for drivers.
          The lead strategist and I tag-teamed our presentation. My part was to paint an inspiring picture of the possibilities and to represent the real needs being met by our concepts.
          We led the clients through down-selecting our ideas, and I led an exercise to imagine a narrative that could stitch them all together into prototype.</p>
      </div>
    )
  },
  'design': {
    title: 'Prototyping',
    image: prototypeImage,
    duration: 'Week 7-8',
    content: (
      <div>
        <h3>Story briefing</h3>
        <p>An outcome of the workshop, aside from a short-list of concepts, was a pair of narratives for our prototypes.
          I synthesized the artifacts I had co-created with the clients into a comprehensive visual brief for the design team to build from.</p>

        <h3>Creative leadership</h3>
        <p>We had three weeks to complete our work. Under such pressure, all aspects of the creative process can surge at different times. Are people creating create work? Are they collaborating at their best? Problems big and small come up during this time that require empathy, listening, decisiveness, and a little humor to achieve success.</p>

        <h3>Client demos</h3>
        <p>I presented all our work to the clients, making me uniquely responsible for understanding all the intentions of the designs and the decision-making to highlight.
          I’m proud of the response I received to these demos. In addition,  we learned a little each time to respond to for the next round.</p>
      </div>
    )
  },
  'presentation': {
    title: 'Presentation prep + delivery',
    duration: 'Week 9-10',
    content: (
      <div>
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
  useInitializeTheme()
  
  // Modal state
  const [selectedActivity, setSelectedActivity] = useState(null)
  const [selectedActivityKey, setSelectedActivityKey] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Image overlay state
  const [isImageOverlayOpen, setIsImageOverlayOpen] = useState(false)
  const [overlayImageData, setOverlayImageData] = useState({ src: '', alt: '', caption: '' })
  
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
  
  const handleImageClick = (src, alt, caption) => {
    setOverlayImageData({ src, alt, caption })
    setIsImageOverlayOpen(true)
  }
  
  const handleCloseImageOverlay = () => {
    setIsImageOverlayOpen(false)
    setOverlayImageData({ src: '', alt: '', caption: '' })
  }
  
  return (
    <div className="case-study-page bg-radial-gradients bg-dot-grid-overlay">
      <ColorPicker />
      <div className="content-container">
        <Navigation />
        <div className="scrollable-content">
          <div className="case-study-hero hero-layered-bg">
            <div className="case-study-title-section">
              <div className="case-study-subtitle">A story of innovation</div>
              <div className="hero-logo-section">
                <img src={imgImage} alt="WEX logo" className="hero-logo" />
              </div>
              <h1 className="case-study-main-title">
                Mobility Vision 2027
              </h1>
            </div>
            <div className="hero-banner-section">
              <img src={wexBanner} alt="WEX interface mockup" className="hero-banner" />
            </div>
          </div>

          <div className="case-study-page-content">
            <div className="intro intro-option-1">
                <p>This project builds on a template I have used several times in my career: starting from an ambiguous brief, create a tangible vision for the 3-to-5 year future that clients can pick up and plan against. I was given just ten weeks to learn a new client, a new industry, and to assemble a new design team. We delivered to rave reviews and were asked to begin an MVP immediately.</p>
            </div>
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
                  <div className="role-text">
                    <div className="role-title">Lead 🎯</div>
                    <ul className="role-bullets">
                      <li>Supervised 8 designers and strategists</li>
                      <li>Primary design collaborator for technology, data science, and delivery</li>
                    </ul>
                  </div>
                </div>
                <div className="role-item">
                  <div className="role-text">
                    <div className="role-title">Plan 📅</div>
                    <ul className="role-bullets">
                      <li>Set plan for all design milestones</li>
                      <li>Responded to in-flight requests, new developments</li>
                      <li>Ensured high-quality final deliverables</li>
                    </ul>
                  </div>
                </div>
                <div className="role-item">
                  <div className="role-text">
                    <div className="role-title">Design 🎨</div>
                    <ul className="role-bullets">
                      <li>Participated in generative thinking</li>
                      <li>Build team culture</li>
                      <li>Solved design problems</li>
                      <li>Inspired and motivated</li>
                    </ul>
                  </div>
                </div>
                <div className="role-item">
                  <div className="role-text">
                    <div className="role-title">Sell it 🤝</div>
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
                <div className="timeline-image-center">
                  <InlineImageContainer
                    src={storyBriefImage}
                    alt="Story Brief"
                    caption="The story brief I created became the foundation of the design process."
                    size="xlarge"
                    onClick={() => handleImageClick(storyBriefImage, "Story Brief", "The story brief I created became the foundation of the design process.")}
                  />
                </div>
                <div className="timeline-item-v1" onClick={() => handleActivityClick('design')}>
                  <div className="activity-duration">Week 7-8</div>
                  <h3 className="activity-title">Prototyping</h3>
                </div>
                <div className="timeline-item-v1" onClick={() => handleActivityClick('presentation')}>
                  <div className="activity-duration">Week 9-10</div>
                  <h3 className="activity-title">Presentation prep + delivery</h3>
                </div>
              </div>
            </div>

            <div className="case-study-section">
              <h2 className="section-title">Outcome</h2>
              <div className="pullquote-minimal">
                <div className="quote-text">This is fantastic work, and exactly what we've been wanting for some time now.</div>
                <div className="quote-attribution">Chief Design Officer, WEX Inc.</div>
              </div>
              
              <div className="case-study-text">
                <p>
                Due to this project's success, my clients pivoted to requesting an MVP for immediate deployment on their highest-profile authenticated dashboard, dropping their previous priority for our team.                </p>
                <p>
                Six months later they contacted us again to run the same project against a different line of business. In my mind there's no better endorsement than a repeat customer.
                </p>
              </div>
            </div>

            <CaseStudyNavigation currentCaseStudyKey="innovation" />
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
      
      <ImageOverlay
        isOpen={isImageOverlayOpen}
        onClose={handleCloseImageOverlay}
        imageSrc={overlayImageData.src}
        imageAlt={overlayImageData.alt}
        caption={overlayImageData.caption}
      />
    </div>
  )
}