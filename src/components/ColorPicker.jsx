import React, { useEffect } from 'react'

// THEME CONFIGURATION
// Change the number below to select your theme:
// 0 - Cyan + White (Clean electric flow)
// 1 - Volt Green (Matrix code vibes) 
// 2 - Laser Orange (High-energy accent)
// 3 - Plasma Pink (Synthetic intensity)
// 4 - Neon Purple (Electric dreams)
// 5 - Acid Yellow (Sharp contrast)
// 6 - Monochrome (Pure minimalism)
const SELECTED_THEME = 0

const colorOptions = [
  {
    name: 'Cyan + White',
    value: '#00FFFF',
    base: '#FFFFFF',
    description: 'Clean electric flow'
  },
  {
    name: 'Volt Green',
    value: '#00FF41',
    base: '#6B7C95',
    description: 'Matrix code vibes'
  },
  {
    name: 'Laser Orange',
    value: '#FF8500',
    base: '#6B7C95',
    description: 'High-energy accent'
  },
  {
    name: 'Plasma Pink',
    value: '#FF0080',
    base: '#6B7C95',
    description: 'Synthetic intensity'
  },
  {
    name: 'Neon Purple',
    value: '#8A2BE2',
    base: '#6B7C95',
    description: 'Electric dreams'
  },
  {
    name: 'Acid Yellow',
    value: '#CCFF00',
    base: '#6B7C95',
    description: 'Sharp contrast'
  },
  {
    name: 'Monochrome',
    value: '#666666',
    base: '#2A2A2A',
    description: 'Pure minimalism'
  }
]

export default function ColorPicker() {
  // Apply the selected theme on component mount
  useEffect(() => {
    const selectedColorOption = colorOptions[SELECTED_THEME]
    updateCSSVariables(selectedColorOption)
  }, [])

  const updateCSSVariables = (color) => {
    const root = document.documentElement
    const hex = color.value
    const baseHex = color.base || '#6B7C95' // Default to slate if no base specified
    
    // Convert hex to RGB for rgba usage
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    
    // Convert base hex to RGB for rgba usage
    const baseR = parseInt(baseHex.slice(1, 3), 16)
    const baseG = parseInt(baseHex.slice(3, 5), 16)
    const baseB = parseInt(baseHex.slice(5, 7), 16)
    
    // Update CSS custom properties
    root.style.setProperty('--color-link', hex)
    root.style.setProperty('--color-highlight', `rgba(${r}, ${g}, ${b}, 0.15)`)
    
    // Remove existing dynamic styles and add new ones
    const existingStyle = document.getElementById('dynamic-color-styles')
    if (existingStyle) {
      existingStyle.remove()
    }
    
    // Create comprehensive style updates
    const style = document.createElement('style')
    style.id = 'dynamic-color-styles'
    style.textContent = `
      /* Navigation background */
      .navigation-container {
        background: 
          radial-gradient(circle, #00000008 1px, transparent 1px),
          radial-gradient(circle at 20% 30%, rgba(${baseR}, ${baseG}, ${baseB}, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(${r}, ${g}, ${b}, 0.1) 0%, transparent 50%),
          rgba(250, 250, 250, 0.85) !important;
        background-size: 20px 20px, 100% 100%, 100% 100%, 100% 100% !important;
      }

      /* Ensure navigation text stays charcoal */
      .navigation-container * {
        color: #2D3436 !important;
      }

      /* Background gradients */
      .bg-radial-gradients {
        background-image: 
          radial-gradient(circle, #00000008 1px, transparent 1px),
          radial-gradient(circle at 20% 30%, rgba(${baseR}, ${baseG}, ${baseB}, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(${r}, ${g}, ${b}, 0.1) 0%, transparent 50%),
          var(--color-white) !important;
      }
      
      .bg-dot-grid-overlay::before {
        background-image: 
          radial-gradient(circle, #00000008 1px, transparent 1px),
          radial-gradient(circle at 20% 30%, rgba(${baseR}, ${baseG}, ${baseB}, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(${r}, ${g}, ${b}, 0.1) 0%, transparent 50%),
          rgba(250, 250, 250, 0.85) !important;
      }
      
      .hero-layered-bg::before {
        background-image: 
          radial-gradient(circle at 20% 30%, rgba(${baseR}, ${baseG}, ${baseB}, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(${r}, ${g}, ${b}, 0.1) 0%, transparent 50%) !important;
      }

      /* Case study hero background */
      .case-study-hero.hero-layered-bg,
      .case-study-hero {
        background: 
          radial-gradient(circle, #00000008 1px, transparent 1px),
          radial-gradient(circle at 20% 30%, rgba(${baseR}, ${baseG}, ${baseB}, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(${r}, ${g}, ${b}, 0.1) 0%, transparent 50%),
          var(--color-white) !important;
        background-size: 
          24px 24px,
          100% 100%,
          100% 100%,
          100% 100% !important;
      }

      /* Case study hover effects - more specific selectors */
      .case-study::before,
      .homepage .case-study::before,
      div .case-study::before {
        background: linear-gradient(90deg, rgba(${baseR}, ${baseG}, ${baseB}, 0.5), rgba(${r}, ${g}, ${b}, 0.5)) !important;
        background-image: linear-gradient(90deg, rgba(${baseR}, ${baseG}, ${baseB}, 0.5), rgba(${r}, ${g}, ${b}, 0.5)) !important;
      }

      /* Navigation link hover effects */
      .nav-links a::before,
      .navigation-container .nav-links a::before {
        background: linear-gradient(90deg, rgba(${baseR}, ${baseG}, ${baseB}, 0.5), rgba(${r}, ${g}, ${b}, 0.5)) !important;
        background-image: linear-gradient(90deg, rgba(${baseR}, ${baseG}, ${baseB}, 0.5), rgba(${r}, ${g}, ${b}, 0.5)) !important;
      }

      /* Navigation back arrow hover effect */
      .nav-back-arrow::before {
        background: linear-gradient(90deg, rgba(${baseR}, ${baseG}, ${baseB}, 0.5), rgba(${r}, ${g}, ${b}, 0.5)) !important;
      }
      
      /* Timeline elements */
      .timeline-option-1::before {
        background: linear-gradient(180deg, ${baseHex}, ${hex}) !important;
      }
      
      .timeline-item-v1::before,
      .timeline-item-v2::before {
        background: linear-gradient(135deg, ${baseHex}, ${hex}) !important;
      }

      /* Text links */
      a {
        color: ${hex} !important;
      }

      /* Timeline activity card hover states */
      .timeline-item-v1:hover::after,
      .timeline-item-v2:hover::after {
        background: linear-gradient(90deg, rgba(${baseR}, ${baseG}, ${baseB}, 0.5), rgba(${r}, ${g}, ${b}, 0.5)) !important;
      }

      /* Pullquote styling */
      .pullquote-minimal {
        border-image: linear-gradient(180deg, ${baseHex}, ${hex}) 1 !important;
      }

      .pullquote-minimal .quote-attribution {
        color: rgba(${r}, ${g}, ${b}, 0.8) !important;
      }

      /* Override navigation link colors to stay charcoal */
      .navigation-container a {
        color: #2D3436 !important;
      }
      
      /* Special styling for monochrome theme */
      ${hex === '#666666' ? `
        .navigation-container {
          background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.8) 70%, transparent 100%) !important;
        }
        
        .navigation-container a,
        .nav-logo,
        .nav-back-arrow {
          color: #FFFFFF !important;
        }
      ` : ''}
    `
    
    document.head.appendChild(style)
    
    // Force a repaint by temporarily changing body visibility  
    document.body.style.visibility = 'hidden'
    setTimeout(() => {
      document.body.style.visibility = 'visible'
    }, 10)
  }

  // This component no longer renders any UI - it just applies the selected theme
  return null
}