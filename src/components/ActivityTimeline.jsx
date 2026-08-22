import { useState, useRef, useEffect, useMemo } from 'react'

// Two-column reading view: a sticky phase index (desktop) beside the full
// sequence of phase panels, which live in the normal scroll flow. As the reader
// scrolls, the index highlights whichever phase is in the reading zone; clicking
// an index item jumps to that phase. No scroll hijacking — native scroll only,
// so speed, keyboard, and momentum all behave normally.
export default function ActivityTimeline({ activities }) {
  const keys = useMemo(() => Object.keys(activities), [activities])
  const [activeKey, setActiveKey] = useState(keys[0])
  const panelRefs = useRef({})

  // Highlight the phase currently being read. Enhancement only — the index
  // works via clicks regardless. A scroll computation (not IntersectionObserver)
  // so the last phase can become active at the page bottom, where the page can
  // no longer scroll it up into a fixed reading band.
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const line = window.innerHeight * 0.3 // reading line, 30% down
      let next = keys[0]
      for (const key of keys) {
        const el = panelRefs.current[key]
        if (el && el.getBoundingClientRect().top <= line) next = key
      }
      // At the page bottom the last panel may never reach the line; force it.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) next = keys[keys.length - 1]
      setActiveKey(next)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }

    update() // set initial state for the current scroll position
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [keys])

  const jumpTo = (key) => {
    setActiveKey(key) // immediate feedback, and covers the no-observer case
    const el = panelRefs.current[key]
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }

  const activeIndex = keys.indexOf(activeKey)

  return (
    <div className="timeline">
      <nav
        className="timeline-index"
        aria-label="Project phases"
        style={{ '--timeline-progress': keys.length ? (activeIndex + 1) / keys.length : 0 }}
      >
        {keys.map((key, i) => {
          const item = activities[key]
          const isActive = key === activeKey
          return (
            <button
              key={key}
              type="button"
              className={`timeline-index-item${isActive ? ' active' : ''}${i < activeIndex ? ' is-past' : ''}`}
              onClick={() => jumpTo(key)}
              aria-current={isActive ? 'true' : undefined}
            >
              <span className="timeline-index-duration">{item.duration}</span>
              <span className="timeline-index-title">{item.title}</span>
            </button>
          )
        })}
      </nav>

      <ol className="timeline-panels">
        {keys.map((key) => {
          const item = activities[key]
          return (
            <li
              key={key}
              className="timeline-panel"
              data-key={key}
              ref={(el) => { panelRefs.current[key] = el }}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  className="timeline-detail-image"
                />
              )}
              {item.duration && (
                <div className="timeline-detail-duration">{item.duration}</div>
              )}
              <h3 className="timeline-detail-title">{item.title}</h3>
              <div className="timeline-detail-body">{item.content}</div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
