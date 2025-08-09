import React, { useState, useEffect } from 'react'

const colorOptions = [
  {
    name: 'Original Coral',
    value: '#FF6B6B',
    description: 'Soft and vibrant'
  },
  {
    name: 'Slate Stone', 
    value: '#6B7C95',
    description: 'Architectural slate'
  },
  {
    name: 'Cedar Warm',
    value: '#A67C52', 
    description: 'Natural wood tones'
  },
  {
    name: 'Copper Patina',
    value: '#8B6B47',
    description: 'Weathered elegance'
  },
  {
    name: 'Sage Steel',
    value: '#7A8B7A',
    description: 'Tech meets nature'
  },
  {
    name: 'Canyon Clay',
    value: '#B8956A',
    description: 'Desert landscapes'
  }
]

export default function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0])
  const [isOpen, setIsOpen] = useState(false)

  const updateCSSVariables = (color) => {
    const root = document.documentElement
    const hex = color.value
    
    // Convert hex to RGB for rgba usage
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    
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
          radial-gradient(circle at 20% 30%, #4A90E220 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, ${hex}10 0%, transparent 50%),
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
          radial-gradient(circle at 20% 30%, #4A90E220 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, ${hex}10 0%, transparent 50%),
          var(--color-white) !important;
      }
      
      .bg-dot-grid-overlay::before {
        background-image: 
          radial-gradient(circle, #00000008 1px, transparent 1px),
          radial-gradient(circle at 20% 30%, #4A90E220 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, ${hex}10 0%, transparent 50%),
          rgba(250, 250, 250, 0.85) !important;
      }
      
      .hero-layered-bg::before {
        background-image: 
          radial-gradient(circle at 20% 30%, #4A90E220 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, ${hex}10 0%, transparent 50%) !important;
      }

      /* Case study hero background */
      .case-study-hero.hero-layered-bg,
      .case-study-hero {
        background: 
          radial-gradient(circle, #00000008 1px, transparent 1px),
          radial-gradient(circle at 20% 30%, #4A90E220 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, ${hex}10 0%, transparent 50%),
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
        background: linear-gradient(90deg, rgba(74, 144, 226, 0.5), rgba(${r}, ${g}, ${b}, 0.5)) !important;
        background-image: linear-gradient(90deg, rgba(74, 144, 226, 0.5), rgba(${r}, ${g}, ${b}, 0.5)) !important;
      }

      /* Navigation link hover effects */
      .nav-links a::before,
      .navigation-container .nav-links a::before {
        background: linear-gradient(90deg, rgba(74, 144, 226, 0.5), rgba(${r}, ${g}, ${b}, 0.5)) !important;
        background-image: linear-gradient(90deg, rgba(74, 144, 226, 0.5), rgba(${r}, ${g}, ${b}, 0.5)) !important;
      }
      
      /* Timeline elements */
      .timeline-option-1::before {
        background: linear-gradient(180deg, #4A90E2, ${hex}) !important;
      }
      
      .timeline-item-v1::before,
      .timeline-item-v2::before {
        background: linear-gradient(135deg, #4A90E2, ${hex}) !important;
      }

      /* Text links */
      a {
        color: ${hex} !important;
      }

      /* Override navigation link colors to stay charcoal */
      .navigation-container a {
        color: #2D3436 !important;
      }
    `
    
    document.head.appendChild(style)
    
    // Force a repaint by temporarily changing body visibility  
    document.body.style.visibility = 'hidden'
    setTimeout(() => {
      document.body.style.visibility = 'visible'
    }, 10)
  }

  const handleColorSelect = (color) => {
    setSelectedColor(color)
    updateCSSVariables(color)
    setIsOpen(false)
  }

  return (
    <div className="color-picker">
      <div 
        className="color-picker-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div 
          className="color-preview"
          style={{ backgroundColor: selectedColor.value }}
        ></div>
        <span className="color-name">{selectedColor.name}</span>
        <span className="color-arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      
      {isOpen && (
        <div className="color-picker-dropdown">
          {colorOptions.map((color, index) => (
            <div
              key={index}
              className={`color-option ${selectedColor.value === color.value ? 'selected' : ''}`}
              onClick={() => handleColorSelect(color)}
            >
              <div 
                className="color-swatch"
                style={{ backgroundColor: color.value }}
              ></div>
              <div className="color-info">
                <div className="color-option-name">{color.name}</div>
                <div className="color-description">{color.description}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}