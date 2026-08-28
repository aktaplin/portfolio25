# Case study — ____________

<!--
The structure below is lifted from the two case studies already on the site
(src/CaseStudy.jsx — WEX, and src/LeadershipCaseStudy.jsx — Verizon). Both pages
carry the same sections, in the same order, with the same label/heading pairs.
That repetition is deliberate: it makes very different projects readable against
each other. Fill in the blanks; don't reorder or rename the sections.

Blanks read `____________`. Per CONTENT-INTAKE.md, anything left unfilled ships as
nothing rather than as placeholder text — so an empty field is a real choice, not a
to-do that leaks onto the page.
-->

---

## 1. Engagement record

Goes into the `engagements` array in `src/content/profile.js`. Field order is the
signature — the same six fields, in this order, drive the spec block on every case
study page and the four-field subset on the homepage card.

| Field | Value | Notes |
|---|---|---|
| `key` | ____________ | short lowercase slug, e.g. `wex`, `verizon` |
| `href` | `/____________/` | must also be registered as a `<Route>` in `src/App.jsx` |
| `client` | ____________ | |
| `title` | ____________ | the project name, not the client |
| `summary` | A story of ____________ | one noun: *innovation*, *leadership*, … |
| `year` | ____________ | `2025` or a span like `2022–2024` |
| `sector` | ____________ | e.g. *Fleet payments*, *Telecom* |
| `span` | ____________ | e.g. *10 weeks*, *5 months* |
| `team` | ____________ | counts only, e.g. *8 designers* |
| `mandate` | ____________ | e.g. *Strategic visioning*, *New product launch* |
| `outcome` | ____________ | the result, in three or four words |
| `locked` | `true` / `false` | `true` puts the page behind the password modal |

---

## 2. Hero

- **Subtitle** (sits above the logo): A story of ____________
- **Client logo**: `src/assets/logos/____________` — SVG preferred, PNG accepted
- **Title** (`<h1>`): ____________
- **Banner image**: `src/assets/img/____________` — stays contained at 1200px

The six-field spec block renders automatically between the title and the banner.

---

## 3. Intro

One paragraph, first person, no heading. It states what kind of project this was,
the constraint that made it hard, and how it ended — the whole arc before the reader
commits to the page. Roughly 60–90 words.

> ____________

---

## 4. Context — *Problem*

<!-- Label: "Context". Heading: "Problem". -->

The situation in the world that made this work necessary, told about the client's
business rather than about the engagement. One or two paragraphs; a short bulleted
list of pressures is optional (WEX uses one, Verizon doesn't).

> ____________

- ____________
- ____________
- ____________

---

## 5. Objective — *Brief*

<!-- Label: "Objective". Heading: "Brief". -->

What the team was actually asked to do, and any sharpening of that ask that emerged
once you were inside it. One or two paragraphs.

> ____________

---

## 6. Contribution — *My role*

<!-- Label: "Contribution". Heading: "My role". -->

Four fixed cards, always these four titles, always in this order. Two to four bullets
each — verb-first, no trailing periods.

### Lead
- ____________
- ____________

### Plan
- ____________
- ____________

### Design
- ____________
- ____________

### Sell it
- ____________
- ____________

---

## 7. Process — *My activities*

<!-- Label: "Process". Heading: "My activities". -->

The phase timeline. Both existing case studies run five phases. Each phase needs a
`duration` (the sticky index shows it above the title) and a `title`. Inside a phase,
use `<h3>` subsections when a phase covers more than one kind of work, bullets when
it's a list of moves, and an `InlineImageContainer` for any artifact worth showing.
An "Outcome" `<h3>` at the end of a phase is a pattern worth keeping — it gives each
phase a result, not just a description.

### Phase 1
- **Duration**: ____________  <!-- e.g. "Week 1-2" or "Month 1-2" -->
- **Title**: ____________
- **Body**:
  > ____________
- **Image**: `src/assets/img/____________` — caption: ____________

### Phase 2
- **Duration**: ____________
- **Title**: ____________
- **Body**:
  > ____________
- **Image**: ____________ — caption: ____________

### Phase 3
- **Duration**: ____________
- **Title**: ____________
- **Body**:
  > ____________
- **Image**: ____________ — caption: ____________

### Phase 4
- **Duration**: ____________
- **Title**: ____________
- **Body**:
  > ____________
- **Image**: ____________ — caption: ____________

### Phase 5
- **Duration**: ____________
- **Title**: ____________
- **Body**:
  > ____________
- **Image**: ____________ — caption: ____________

---

## 8. Results — *Outcome*

<!-- Label: "Results". Heading: "Outcome". -->

Opens with a pullquote — a single sentence from the client, attributed by title and
organization, never by name.

> **Quote**: ____________
>
> **Attribution**: ____________  <!-- e.g. "Chief Design Officer, WEX Inc." -->

Then, optionally, one or two paragraphs of what followed: the pivot, the renewal, the
repeat business. WEX carries two paragraphs here; Verizon lets the quote stand alone.

> ____________

---

## 9. Assets checklist

- [ ] Client logo → `src/assets/logos/`
- [ ] Hero banner → `src/assets/img/`
- [ ] Phase images → `src/assets/img/`
- [ ] Client approval to publish, or `locked: true`

The "More / Other engagements" section at the foot of the page is generated from
`profile.js` — nothing to write for it.
