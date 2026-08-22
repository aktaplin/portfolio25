# Content intake

Values live in `src/content/profile.js`. Anything still `null` renders as nothing —
no placeholder text can ship.

---

## Still open

### Engagement years — the only NEEDED field left

Without these, the card kicker reads `WEX · Fleet payments` instead of
`WEX · Fleet payments · 2024`, and the Year cell is dropped from the six-field spec
block on the case study pages — which breaks the "same fields every time" device.

| Engagement | Year |
|---|---|
| WEX — Mobility Vision 2027 | ____________ |
| Verizon — +play | ____________ |

### A third engagement?

Two case studies is thin, and the spec-block grid wants a rhythm. Even a short one with
no case study page behind it — just the six fields and an outcome — would strengthen the
Work section. Add to `engagements` in `profile.js` with `locked: false` and no `href`,
and I'll make the card non-navigating.

______________________________________________

### Photography for Philosophy

`workshop.jpg` is the right kind of image and isn't used anywhere on the homepage. The
Philosophy section now carries your portrait — a room-with-people shot would support the
"build collaboratively / listen well" claims better than a headshot does.

Want me to swap or add it? ____________

---

## Settled

| Decision | Outcome |
|---|---|
| Contact channel | LinkedIn only. No email published anywhere, including the password modal. |
| Password requests | Route to `linkedin.com/in/aktaplin` via "Request the password". |
| Availability line | Omitted. |
| Résumé link | None. |
| Title / location | `Design Leader` — `St. Helena, CA` |
| Hero copy | Display + lede as edited in `profile.js`. |
| Team field | Counts only — `8 designers` / `6 designers`. |
| Serif | Libre Baskerville retreats to long-form prose: case study body, intro leads, pullquotes, modal text. All headings are Barlow Condensed. |
| Expertise section | Kept as-is, three columns. |
| Spec block | Six fields, between title and banner on case study pages. |
| Work section | Full-bleed ink band `#0E1419` — the one inversion on the page. |
| Case study banners | Stay contained at 1200px. |
| Hover | Signal rule on clickables only. Philosophy blocks and client logos have no hover. |
| Scroll reveal | Section heads only. 12px rise, 400ms, once, reduced-motion respected. |
| Portrait | Moved out of the hero into Philosophy. Square, grayscale, 104px. |

---

## If you change your mind

Everything above is one edit in `src/content/profile.js`:

- **Publish an email** — set `contact.email`. It becomes the primary contact action and
  the password modal switches to a mailto automatically (`accessRequestLink()` handles it).
- **Add a résumé** — set `contact.resume` to a path in `public/` or an external URL. The
  button appears.
- **Add an availability line** — set `contact.availability`.
- **Reword a spec field** — edit the engagement. Field *order* is the signature; don't
  reorder per-engagement.
