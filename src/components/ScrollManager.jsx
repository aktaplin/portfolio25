import { useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

// Scroll offset per history entry, keyed by location.key.
// Bounded by the number of navigations in a session.
//
// Hung off window so a Vite HMR module reload doesn't wipe it mid-session —
// otherwise restoration appears broken in dev for reasons that have nothing
// to do with the logic.
const positions = (window.__scrollPositions ??= new Map())

// True while we're re-applying a restored offset, so the scroll listener
// below doesn't write our own intermediate (possibly clamped) values back
// over the real saved offset.
let restoring = false

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

  // Track where we are on the current entry.
  //
  // Deliberately does NOT take a final reading at teardown. This cleanup is a
  // passive effect, so it runs *after* the restore layout effect below has
  // already scrolled the new route to the top — capturing here would overwrite
  // the outgoing entry's real offset with 0. The listener has kept it current.
  useEffect(() => {
    const record = () => { if (!restoring) positions.set(key, window.scrollY) }
    window.addEventListener('scroll', record, { passive: true })
    return () => window.removeEventListener('scroll', record)
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

    // Suppress the recorder for the duration of this restore. Our own jump()
    // fires a scroll event that races React's removal of the *outgoing* page's
    // scroll listener; if that event lands first it would record the outgoing
    // entry as 0. Arm the guard before any jump, in both branches.
    restoring = true

    // `scroll-behavior: smooth` in CSS makes the positional scrollTo(x, y)
    // animate. Passing behavior explicitly in the options form overrides the
    // computed style, so the jump is instant and can't be interrupted by the
    // incoming page's images loading.
    const jump = (top) => window.scrollTo({ top, left: 0, behavior: 'instant' })

    if (target === 0) {
      jump(0)
      // Release after the jump's scroll event has flushed (next frame), so real
      // user scrolls on the new page record normally.
      const raf0 = requestAnimationFrame(() => { restoring = false })
      return () => { cancelAnimationFrame(raf0); restoring = false }
    }

    // The page may not be tall enough to hold `target` yet. Re-apply until it
    // sticks, the frame budget runs out, or the reader takes over.
    let frames = 0
    let raf = 0
    let done = false

    const finish = () => {
      if (done) return
      done = true
      restoring = false
      cancelAnimationFrame(raf)
      window.removeEventListener('wheel', finish)
      window.removeEventListener('touchstart', finish)
      window.removeEventListener('keydown', finish)
    }

    const settle = () => {
      jump(target)
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
