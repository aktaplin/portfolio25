import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Initialize Google Tag Manager only in production
if (import.meta.env.PROD && import.meta.env.VITE_GTM_CONTAINER_ID) {
  // GTM is already loaded via script in index.html
  console.log('Google Tag Manager initialized with Container ID:', import.meta.env.VITE_GTM_CONTAINER_ID)
} else {
  console.log('Google Tag Manager disabled in development mode')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
