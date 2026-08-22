import { useLayoutEffect } from 'react'

// One observer for every [data-reveal] element on the page.
//
// Fail-safe by design: markup ships visible, and this hook *arms* the hidden
// state before first paint. If JS never runs, nothing is invisible.
export function useReveal() {
  useLayoutEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    if (els.length === 0) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || typeof IntersectionObserver === 'undefined') return

    els.forEach((el) => { el.dataset.reveal = 'armed' })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.dataset.reveal = 'shown'
          io.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.15 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
