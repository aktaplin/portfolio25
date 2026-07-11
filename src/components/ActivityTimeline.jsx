import { useState, useRef, useEffect } from 'react'

export default function ActivityTimeline({ activities }) {
  const keys = Object.keys(activities)
  const [selected, setSelected] = useState(keys[0])
  const current = activities[selected]
  const detailRef = useRef(null)
  const isInitial = useRef(true)

  // On selection change, scroll the detail pane's top into view (desktop only)
  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false
      return
    }
    if (window.matchMedia('(max-width: 767px)').matches) return
    detailRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' })
  }, [selected])

  return (
    <>
      {/* Desktop: two-column with sticky index + selected detail */}
      <div className="timeline-two-col">
        <div className="timeline-index">
          {keys.map((key) => {
            const item = activities[key]
            const isActive = selected === key
            return (
              <button
                key={key}
                type="button"
                className={`timeline-index-item${isActive ? ' active' : ''}`}
                onClick={() => setSelected(key)}
                aria-pressed={isActive}
              >
                <span className="timeline-index-duration">{item.duration}</span>
                <span className="timeline-index-title">{item.title}</span>
              </button>
            )
          })}
        </div>
        <div className="timeline-detail" aria-live="polite" ref={detailRef}>
          {current.image && (
            <img
              src={current.image}
              alt={current.imageAlt || current.title}
              className="timeline-detail-image"
            />
          )}
          {current.duration && (
            <div className="timeline-detail-duration">{current.duration}</div>
          )}
          <h3 className="timeline-detail-title">{current.title}</h3>
          <div className="timeline-detail-body">{current.content}</div>
        </div>
      </div>

      {/* Mobile: every week stacked, scroll through */}
      <ol className="timeline-stacked">
        {keys.map((key) => {
          const item = activities[key]
          return (
            <li key={key} className="timeline-stacked-item">
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
    </>
  )
}
