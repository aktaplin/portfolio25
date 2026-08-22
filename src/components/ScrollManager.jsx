import { useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

// Scroll offset per history entry, keyed by location.key.
// Bounded by the number of navigations in a session.
const positions = new Map()

// How long to keep re-applying a restored offset while the page is still
// growing (images loading, fonts settling). ~20 frames at 60fps.
const MAX_SETTLE_FRAMES = 20

export default function ScrollManager() {
  const { key } = useLocation()
  const navigationType = useNavigationType()

  // The browser restores scroll before React has rendered the route, so the
  // document is still short and the offset gets clamped. We do it ourselves.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      const previous = window.history.scrollRestoration
      window.history.scrollRestoration = 'manual'
      return () => { window.history.scrollRestoration = previous }
    }
  }, [])

  // Track where we are on the current entry, and capture a final reading
  // when we leave it.
  useEffect(() => {
    const record = () => { positions.set(key, window.scrollY) }
    window.addEventListener('scroll', record, { passive: true })
    return () => {
      record()
      window.removeEventListener('scroll', record)
    }
  }, [key])

  useLayoutEffect(() => {
    // A modal open during navigation still holds the body scroll lock at this
    // point in the commit — its cleanup is a passive effect. Release it, or
    // every scroll below is a no-op.
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = ''
    }

    // Back/forward returns to where you were; a new navigation starts at the top.
    const target = navigationType === 'POP' ? (positions.get(key) ?? 0) : 0

    const root = document.documentElement
    const previousBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'   // defeat `scroll-behavior: smooth`

    if (target === 0) {
      window.scrollTo(0, 0)
      root.style.scrollBehavior = previousBehavior
      return
    }

    // The page may not be tall enough to hold `target` yet. Re-apply until it
    // sticks, the frame budget runs out, or the reader takes over.
    let frames = 0
    let raf = 0
    let done = false

    const finish = () => {
      if (done) return
      done = true
      cancelAnimationFrame(raf)
      root.style.scrollBehavior = previousBehavior
      window.removeEventListener('wheel', finish)
      window.removeEventListener('touchstart', finish)
      window.removeEventListener('keydown', finish)
    }

    const settle = () => {
      window.scrollTo(0, target)
      if (Math.abs(window.scrollY - target) < 2 || frames++ >= MAX_SETTLE_FRAMES) {
        finish()
        return
      }
      raf = requestAnimationFrame(settle)
    }

    // Any deliberate input wins over restoration.
    window.addEventListener('wheel', finish, { passive: true, once: true })
    window.addEventListener('touchstart', finish, { passive: true, once: true })
    window.addEventListener('keydown', finish, { once: true })

    settle()
    return finish
  }, [key, navigationType])

  return null
}
