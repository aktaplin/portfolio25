import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function AnalyticsPageView() {
  const location = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    // gtag's own 'config' call already sends a page_view for the initial load
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      })
    }
  }, [location])

  return null
}

export default AnalyticsPageView
