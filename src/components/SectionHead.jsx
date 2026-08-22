// Label + heading as one unit. This is the only thing that scroll-reveals —
// content below each heading appears normally.
export default function SectionHead({ label, children, as: Tag = 'h2', className = '' }) {
  return (
    <div className={`section-head${className ? ' ' + className : ''}`} data-reveal>
      <div className="label">{label}</div>
      <Tag className={Tag === 'h3' ? 'subsection-h' : 'section-h'}>{children}</Tag>
    </div>
  )
}
