import { SPEC_FIELDS } from '../content/profile'

// The six fields, same order, every engagement. The repetition is the point:
// it makes two very different projects readable against each other.
export default function SpecBlock({ engagement }) {
  const fields = SPEC_FIELDS
    .map((f) => ({ ...f, value: engagement[f.key] }))
    .filter((f) => f.value)

  if (fields.length === 0) return null

  return (
    <dl className="spec-block">
      {fields.map((f) => (
        <div key={f.key} className={`spec-item${f.result ? ' is-result' : ''}`}>
          <dt>{f.label}</dt>
          <dd>{f.value}</dd>
        </div>
      ))}
    </dl>
  )
}
