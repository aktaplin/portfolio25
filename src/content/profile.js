// Single source of truth for site content.
// Maps 1:1 onto CONTENT-INTAKE.md — fill that in, then transfer values here.
//
// Convention: `null` means "not supplied yet". Components skip null values entirely,
// so unfilled content renders as nothing rather than shipping placeholder text.

export const identity = {
  name: 'Adam Taplin',
  title: 'Design Leader',
  employer: null,       // OPTIONAL
  location: 'St. Helena, CA',
  yearsInPractice: 13
}

export const contact = {
  email: null,                   // deliberately unpublished — contact routes through LinkedIn
  linkedin: 'https://www.linkedin.com/in/aktaplin/',
  resume: null,                  // no résumé link by choice
  availability: null             // intentionally omitted
}

export const hero = {
  // CONFIRM — set in uppercase Barlow Condensed 700, so it needs to stay short.
  display: 'Complex systems into products people trust',
  // CONFIRM — sentence case, sits beneath the display line.
  lede: 'Thirteen years turning ambiguous briefs into transformational products — by building the teams that make it possible.'
}

// Instrument: every engagement carries the same fields in the same order.
// `cardFields` is what appears on the homepage card; the full set drives case study pages.
export const engagements = [
  {
    key: 'wex',
    href: '/innovation-transformation-WEX/',
    client: 'WEX',
    title: 'Mobility Vision 2027',
    summary: 'A story of innovation',
    year: '2025',
    sector: 'Fleet payments',
    span: '10 weeks',
    team: '8 designers',
    mandate: 'Strategic visioning',
    outcome: 'Roadmap pivot',
    locked: true
  },
  {
    key: 'verizon',
    href: '/leadership-case-study/',
    client: 'Verizon',
    title: '+play',
    summary: 'A story of leadership',
    year: '2022–2024',
    sector: 'Telecom',
    span: '5 months',
    team: '6 designers',
    mandate: 'New product launch',
    outcome: 'Full-scale redesign of MVP',
    locked: true
  }
]

// Field order is the signature — do not reorder per-engagement.
// SPEC_FIELDS drives case study pages; CARD_FIELDS is the homepage subset.
export const SPEC_FIELDS = [
  { key: 'year',    label: 'Year' },
  { key: 'sector',  label: 'Sector' },
  { key: 'span',    label: 'Span' },
  { key: 'team',    label: 'Team' },
  { key: 'mandate', label: 'Mandate' },
  { key: 'outcome', label: 'Outcome', result: true }
]

export const CARD_FIELDS = [
  { key: 'span',    label: 'Span' },
  { key: 'team',    label: 'Team' },
  { key: 'mandate', label: 'Mandate' },
  { key: 'outcome', label: 'Outcome', result: true }
]

export const access = {
  modalCopy: 'These case studies contain client-confidential work. Message me on LinkedIn and I\'ll send you the password.',
  // Where the "Request the password" link points. Falls back to email if
  // linkedin is unset; renders nothing if neither exists.
  requestVia: 'linkedin'
}

export const writing = [
  {
    title: 'I built a baseball app and accidentally learned something about AI',
    href: 'https://www.linkedin.com/pulse/i-built-baseball-app-accidentally-learned-something-ai-adam-taplin-dsmkc/'
  },
  {
    title: 'Lessons from a designer vibecoding',
    href: 'https://www.linkedin.com/pulse/lessons-from-designer-vibecoding-adam-taplin-hziic/'
  }
]

// Assembles the hero kicker from whatever identity fields exist.
export function heroKicker() {
  const role = [identity.title, identity.employer].filter(Boolean).join(' · ')
  return [role, identity.location].filter(Boolean).join(' — ') || null
}

// Resolves where "Request the password" should point.
export function accessRequestLink() {
  if (access.requestVia === 'linkedin' && contact.linkedin) {
    return { href: contact.linkedin, external: true }
  }
  if (contact.email) {
    return { href: `mailto:${contact.email}?subject=Case%20study%20access`, external: false }
  }
  return contact.linkedin ? { href: contact.linkedin, external: true } : null
}

export function engagementByKey(key) {
  return engagements.find((e) => e.key === key) || null
}
