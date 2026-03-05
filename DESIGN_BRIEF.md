# Design Brief — Adam Taplin Portfolio
> This document is the single source of truth for implementing the visual identity system on this portfolio. Read it fully before touching any code. Preserve all existing content and copy. Replace all visual styling.

---

## 0. Implementation Instructions for Claude Code

1. **Read the repo structure first.** Understand the existing framework, file layout, and how styles are currently applied before making any changes.
2. **Preserve all content.** Case study copy, project descriptions, about text, and any other written content must not be altered.
3. **Implement in this order:**
   - Global CSS tokens and reset
   - Typography (font imports + scale)
   - Layout and spacing
   - Header and navigation
   - Hero section
   - Case study cards
   - Body sections
   - Footer
   - Motion and interactions
   - Custom cursor (last)
4. **If the site uses a framework** (Jekyll, Next.js, Astro, etc.), apply tokens via that framework's preferred method (CSS custom properties, Tailwind config, etc.).
5. **Do not add new content.** This is a styling implementation only.
6. **Reference the HTML prototype** at `adam_taplin_brand_identity.html` in this repo for full working examples of every component.

---

## 1. Brand Principles

These are the four rules the visual system never breaks. Reference them when making any design decision not explicitly covered below.

| # | Principle | Meaning |
|---|-----------|---------|
| 01 | **Nothing decorative** | Every element earns its place. No ornamentation for its own sake. |
| 02 | **Structure is visible** | The grid and hierarchy should be readable — like an architectural model. |
| 03 | **Tension, not decoration** | Two colors that have nothing in common except that they sharpen each other. |
| 04 | **Move only when it matters** | Stillness is the default. Animation appears only to orient, reveal, or confirm. |

---

## 2. Color Tokens

Apply as CSS custom properties at `:root`. Use these variable names exactly throughout the codebase.

```css
:root {
  /* Neutrals */
  --white:    #FFFFFF;      /* Primary canvas */
  --off:      #F7F7F5;      /* Section alternates, ruled backgrounds, card fills */
  --ink:      #0D0D0B;      /* Primary text — warm near-black */
  --ink-60:   rgba(13,13,11,0.60);  /* Secondary text, supporting copy */
  --ink-20:   rgba(13,13,11,0.12);  /* Borders, dividers */
  --ink-08:   rgba(13,13,11,0.06);  /* Ruled lines, ghost elements */

  /* Brand colors — two in tension */
  --steel:    #1A3A5C;      /* Primary — precision, trust, depth. CTAs, structural accents. */
  --signal:   #E84435;      /* Contrast accent — one sharp note. Labels, hover moments, cursor dot. */

  /* Derived / hover states */
  --steel-dark:  #0f2640;   /* --steel on hover */
  --signal-dark: #c4301f;   /* --signal on hover */
}
```

### Usage rules
- **`--white`**: page background, card backgrounds
- **`--off`**: alternate section backgrounds, image placeholders, spec bars
- **`--ink`**: all body text, headings
- **`--ink-60`**: secondary copy, captions, metadata
- **`--ink-20`**: all borders and dividers (`border: 1px solid var(--ink-20)`)
- **`--steel`**: primary CTAs, active states, structural accents, case card hover bar, nav active underline, left border on hero statement
- **`--signal`**: section labels, client bylines, tag outlines (signal variant), cursor dot, hero underline on key word, nav hover underline, button (signal variant)
- **Never** use `--signal` as a background for large areas. It is an accent only.

---

## 3. Typography

### Font import
Add to `<head>` or global CSS:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Barlow:wght@300;400;500&family=Barlow+Condensed:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

### Font stack tokens
```css
:root {
  --font-serif: 'Libre Baskerville', Georgia, serif;
  --font-body:  'Barlow', sans-serif;
  --font-cond:  'Barlow Condensed', sans-serif;
}
```

### Type roles

| Role | Font | Weight | Tracking | Transform | Usage |
|------|------|--------|----------|-----------|-------|
| **Display** | `--font-serif` | 400 / italic | −0.025em | — | Hero headline, pull quotes, case study titles |
| **Heading** | `--font-serif` | 400 | −0.02em | — | Section titles (h2, h3) |
| **Structure** | `--font-cond` | 500–700 | +0.14–0.20em | uppercase | Section labels, nav links, buttons, tags, metadata |
| **Body** | `--font-body` | 300 | normal | — | All running copy, descriptions |

### Type scale (fluid, clamp-based)
```css
:root {
  --text-xs:   clamp(0.68rem,  0.65rem + 0.15vw, 0.75rem);   /* Labels, tags, captions */
  --text-sm:   clamp(0.82rem,  0.78rem + 0.20vw, 0.90rem);   /* Body small, card desc */
  --text-base: clamp(0.95rem,  0.90rem + 0.25vw, 1.00rem);   /* Body default */
  --text-lg:   clamp(1.05rem,  1.00rem + 0.25vw, 1.10rem);   /* Body large, hero statement */
  --text-xl:   clamp(1.10rem,  1.00rem + 0.50vw, 1.25rem);   /* Card titles */
  --text-2xl:  clamp(1.40rem,  1.20rem + 1.00vw, 1.75rem);   /* Section headings */
  --text-3xl:  clamp(1.80rem,  1.40rem + 2.00vw, 2.50rem);   /* Large section headings */
  --text-hero: clamp(3.00rem,  2.00rem + 5.00vw, 5.50rem);   /* Hero headline */
}
```

### Line heights
```css
:root {
  --leading-tight:  1.06;   /* Display headlines */
  --leading-snug:   1.35;   /* Card titles */
  --leading-normal: 1.65;   /* Body copy */
  --leading-loose:  1.75;   /* Long-form, hero statement */
}
```

---

## 4. Spacing Scale

```css
:root {
  --space-1:  0.5rem;    /*  8px — micro gaps, tag internal padding */
  --space-2:  1.0rem;    /* 16px — element internal padding */
  --space-3:  1.5rem;    /* 24px — tight component gaps */
  --space-4:  2.0rem;    /* 32px — between components */
  --space-6:  3.0rem;    /* 48px — section sub-spacing */
  --space-8:  4.0rem;    /* 64px — section breathing room */
  --space-12: 6.0rem;    /* 96px — major section separators */
  --space-16: 8.0rem;    /* 128px — hero / page top padding */
}
```

All values are multiples of 8px. Never use arbitrary values.

---

## 5. Layout

```css
:root {
  --max-width: 1200px;
  --gutter:    48px;    /* 24px on mobile */
  --radius:    1px;     /* Nearly square — not pill, not round. Used on cards and buttons. */
  --border:    1px solid var(--ink-20);
}

.wrap {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--gutter);
}

@media (max-width: 600px) {
  :root { --gutter: 24px; }
}
```

---

## 6. Motion

### Easing — one curve, used everywhere
```css
:root {
  --ease: cubic-bezier(0.16, 1, 0.3, 1);   /* Fast out, gentle settle */
}
```

### Three approved transitions

| Name | Property | Duration | Usage |
|------|----------|----------|-------|
| **Fade in** | `opacity` | 400ms | Page load reveals, scroll-triggered content entry |
| **Slide up** | `transform: translateY` + `opacity` | 500ms | Section and card entrances. Max 10px Y travel. |
| **Reveal** | `width` (from 0) | 600ms | Rule lines, underlines, structural accents drawing themselves |

```css
/* Standard transitions applied to interactive elements */
.transition-fast   { transition: all 200ms var(--ease); }
.transition-base   { transition: all 300ms var(--ease); }
.transition-slow   { transition: all 500ms var(--ease); }
```

### Rules
- Stillness is the default. Nothing moves without a reason.
- Longer/larger elements use longer durations.
- Never use `bounce` or `spring` easings — too playful for this system.
- Page load: stagger section reveals with `animation-delay` increments of 100ms.
- Do not animate color changes on large background areas.

---

## 7. Components

### 7.1 Site Header
- Sticky, `position: sticky; top: 0; z-index: 100`
- Background: `var(--white)` with `border-bottom: var(--border)`
- Padding: `20px 0`
- Layout: flex, space-between, align-items center
- **Wordmark**: `--font-cond`, 1rem, weight 600, tracking 0.18em, uppercase. Prefixed with a 6px signal-red dot (`background: var(--signal); border-radius: 50%`)
- **Doc label / nav**: `--font-cond`, 0.7rem, weight 400, tracking 0.14em, uppercase, color `var(--ink-60)`

### 7.2 Navigation Links
```css
.nav-link {
  font-family: var(--font-cond);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink);
  text-decoration: none;
  position: relative;
  padding-bottom: 3px;
}

/* Signal red underline — draws in on hover */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 0; height: 1px;
  background: var(--signal);
  transition: width 0.25s var(--ease);
}
.nav-link:hover::after,
.nav-link.active::after { width: 100%; }

/* Active state color */
.nav-link.active { color: var(--steel); }
```

### 7.3 Section Labels
Small uppercase mono label that appears above every section heading.
```css
.label {
  font-family: var(--font-cond);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.20em;
  text-transform: uppercase;
  color: var(--signal);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: var(--space-4);
}
/* Leading rule */
.label::before {
  content: '';
  display: block;
  width: 24px; height: 1px;
  background: var(--signal);
}
```

### 7.4 Hero Section
- Background: white with ruled lines overlay (see below)
- Padding: `var(--space-16) 0 calc(var(--space-16) * 1.2)`
- Layout: two-column grid (`1fr 380px`), gap `var(--space-8)`, align-items end
- **Ghost monogram**: `position: absolute; top: 40px; right: 48px` — "AT" in `--font-cond` weight 700, `clamp(120px, 18vw, 200px)`, `color: transparent; -webkit-text-stroke: 1px var(--ink-08)`
- **Eyebrow**: `--font-cond` 0.7rem 500, tracking 0.2em, uppercase, `var(--ink-60)`, with `::before` rule (32px, `var(--ink-60)`)
- **Headline**: `--font-serif` `var(--text-hero)`, weight 400, tracking −0.025em, leading 1.06. `<em>` elements use `color: var(--steel)`. Key word has `::after` signal-red underline (3px height) that animates in via `scaleX` from 0 to 1 at 1s delay.
- **Statement (right col)**: `var(--text-lg)`, `--font-body` weight 300, leading 1.75, `var(--ink-60)`. `border-left: 2px solid var(--steel); padding-left: 20px`. `<strong>` within uses `color: var(--ink); font-weight: 400`.

#### Ruled background overlay
```css
.ruled {
  background-image: repeating-linear-gradient(
    to bottom,
    transparent,
    transparent calc(4rem - 1px),
    var(--ink-08) calc(4rem - 1px),
    var(--ink-08) 4rem
  );
}
```
Apply `.ruled` class to hero section only.

### 7.5 Buttons

Four variants:

```css
.btn {
  font-family: var(--font-cond);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 12px 24px;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.2s var(--ease);
  display: inline-block;
}

/* Primary — steel fill */
.btn-primary { background: var(--steel); color: white; }
.btn-primary:hover {
  background: var(--steel-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(26,58,92,0.25);
}

/* Signal — red fill (use for primary CTA on hero) */
.btn-signal { background: var(--signal); color: white; }
.btn-signal:hover {
  background: var(--signal-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(232,68,53,0.30);
}

/* Outline — steel border */
.btn-outline { background: transparent; color: var(--steel); border: 1.5px solid var(--steel); }
.btn-outline:hover { background: var(--steel); color: white; transform: translateY(-2px); }

/* Ghost — subtle border */
.btn-ghost { background: transparent; color: var(--ink-60); border: 1.5px solid var(--ink-20); }
.btn-ghost:hover { border-color: var(--ink); color: var(--ink); }
```

### 7.6 Tags / Chips

```css
.tag {
  font-family: var(--font-cond);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 100px;   /* Pill shape — exception to --radius rule */
  display: inline-block;
}

.tag-steel          { background: var(--steel); color: white; border: none; }
.tag-signal-outline { background: transparent; border: 1px solid var(--signal); color: var(--signal); }
.tag-outline        { background: transparent; border: 1px solid var(--ink-20); color: var(--ink-60); }
```

### 7.7 Case Study Cards

```css
.case-card {
  border: var(--border);
  background: var(--white);
  border-radius: var(--radius);
  position: relative;
  overflow: hidden;
  transition: transform 0.35s var(--ease), box-shadow 0.35s var(--ease);
}

/* Steel bar draws in across top on hover */
.case-card::before {
  content: '';
  position: absolute; top: 0; left: 0;
  width: 0; height: 2px;
  background: var(--steel);
  transition: width 0.4s var(--ease);
}
.case-card:hover::before { width: 100%; }

.case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(13,13,11,0.08);
}

/* Image area */
.case-card-image {
  height: 200px;
  background: var(--off);
  display: flex; align-items: center; justify-content: center;
}

/* Body */
.case-card-body { padding: var(--space-4); }

/* Client byline */
.case-card-client {
  font-family: var(--font-cond);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--signal);
  margin-bottom: var(--space-1);
}

/* Title */
.case-card-title {
  font-family: var(--font-serif);
  font-size: var(--text-xl);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-2);
}

/* Description */
.case-card-desc {
  font-size: var(--text-sm);
  color: var(--ink-60);
  line-height: var(--leading-normal);
}

/* Footer */
.case-card-footer {
  padding: var(--space-2) var(--space-4);
  border-top: var(--border);
  display: flex; justify-content: space-between; align-items: center;
}

/* Arrow */
.case-card-arrow {
  font-size: var(--text-xl);
  color: var(--steel);
  transition: transform 0.25s var(--ease);
  line-height: 1;
}
.case-card:hover .case-card-arrow { transform: translateX(6px); }
```

### 7.8 Principle Cards

```css
.principle {
  padding: var(--space-4);
  border-right: var(--border);
  position: relative;
  overflow: hidden;
  transition: background 0.3s var(--ease);
}
.principle:last-child { border-right: none; }
.principle:hover { background: var(--off); }

/* Large ghost number */
.principle-number {
  font-family: var(--font-cond);
  font-size: 3rem; font-weight: 700; line-height: 1;
  color: var(--ink-08);
  margin-bottom: var(--space-4);
  transition: color 0.3s var(--ease);
}
.principle:hover .principle-number { color: var(--signal); }

/* Bottom bar reveals on hover */
.principle-bar {
  position: absolute; bottom: 0; left: 0;
  width: 0; height: 2px; background: var(--steel);
  transition: width 0.4s var(--ease);
}
.principle:hover .principle-bar { width: 100%; }
```

### 7.9 Custom Cursor

Implement in JavaScript. Two elements: a fast-responding dot and a lagging ring.

```css
body { cursor: none; }

.cursor {
  width: 8px; height: 8px;
  background: var(--signal);
  border-radius: 50%;
  position: fixed; top: 0; left: 0;
  pointer-events: none; z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.2s var(--ease), height 0.2s var(--ease), background 0.2s;
}

.cursor-ring {
  width: 32px; height: 32px;
  border: 1px solid var(--steel);
  border-radius: 50%;
  position: fixed; top: 0; left: 0;
  pointer-events: none; z-index: 9998;
  transform: translate(-50%, -50%);
  transition: width 0.25s var(--ease), height 0.25s var(--ease), border-color 0.2s;
}
```

```javascript
const cursor = document.querySelector('.cursor');
const ring   = document.querySelector('.cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function tick() {
  rx += (mx - rx) * 0.12;   // Lag factor — adjust for more/less lag
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(tick);
})();
```

Add `.cursor` and `.cursor-ring` divs as first children of `<body>`.

---

## 8. Voice & Tone

This is a reminder for any copy that needs to be written or updated during implementation.

**Write like this:**
- "Most design organizations are caught between two failure modes. I work in the gap."
- "Domain fluency that goes beyond research."
- "If your design function needs to move faster without losing coherence — that's the problem I know how to solve."

**Never write:**
- "Passionate design leader with a proven track record..."
- "Leveraging AI to unlock synergies..."
- "I'm excited to bring my unique skill set..."

**Voice:** Direct. Confident without posturing. Precise. Never corporate. Sentences are short or intentionally long — nothing in between.

---

## 9. Responsive Breakpoints

```css
/* Desktop first */
@media (max-width: 1024px) {
  /* Reduce hero grid to single column */
  /* Stack principle cards 2x2 */
}

@media (max-width: 768px) {
  /* Single column layouts throughout */
  /* Reduce palette to 3-col grid */
  /* Stack type-row and component-row meta labels above samples */
  /* Hide ghost monogram */
}

@media (max-width: 480px) {
  /* Full-width cards */
  /* Reduce hero headline size further if needed */
  /* Disable custom cursor */
}
```

---

## 10. Reference Files

| File | Purpose |
|------|---------|
| `adam_taplin_brand_identity.html` | Full working HTML prototype — all components implemented and interactive. Use as ground truth for visual output. |
| `adam_taplin_narrative.md` | Written narrative, LinkedIn headline, and voice/tone guidelines. |

---

## 11. Checklist for Claude Code

Before considering implementation complete, verify:

- [ ] CSS custom properties defined at `:root`
- [ ] Google Fonts imported and loading correctly
- [ ] All text uses correct font roles (serif display, condensed structure, body copy)
- [ ] All borders use `var(--ink-20)` — no hardcoded colors
- [ ] All transitions use `var(--ease)` — no `ease-in-out` or `linear`
- [ ] Section labels appear above every major heading with signal-red color and leading rule
- [ ] Nav links have signal-red underline on hover, steel color on active
- [ ] Case cards: top border reveals on hover, 4px lift, arrow translates right
- [ ] Hero: ruled background, ghost AT monogram, italic steel headline, statement with steel left border
- [ ] Custom cursor: signal dot + lagging steel ring
- [ ] Buttons: all four variants implemented with correct hover states
- [ ] Tags: all three variants (steel filled, signal outlined, neutral outlined)
- [ ] Mobile: single column, cursor disabled, ghost monogram hidden
- [ ] No decorative elements added beyond what is specified here
