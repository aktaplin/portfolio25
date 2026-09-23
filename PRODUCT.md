# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience: full-time hiring managers and recruiters evaluating Adam Taplin for a permanent Design Leader / Head of Design role. The site is not optimized to also serve consulting/fractional leads — full-time hiring is the decision it needs to move.

## Product Purpose

A personal portfolio for Adam Taplin, a design leader with 13 years of practice, based in St. Helena, CA. The site's job is to serve as durable, standing proof of craft and judgment — credibility a hiring manager can check during or after a conversation that started elsewhere (referral, intro call, LinkedIn). It is not primarily an inbound-generation funnel; there is no résumé link and no published email, and the two case studies sit behind a LinkedIn-gated password rather than an open CTA.

## Positioning

Combines design leadership (13 years, 8- and 6-person teams, strategic visioning and full-scale product redesigns for enterprise clients like WEX and Verizon) with hands-on, current technical fluency — "vibecoding" with Claude/Cursor to ship real product, not just facilitate it. The claimed mechanism: domain fluency that goes beyond research, and the ability to turn ambiguous briefs into transformational products by building the teams that make it possible.

## Operating Context

- Deployed as a static site on GitHub Pages via GitHub Actions (push to `master` auto-deploys); see CLAUDE.md for the deployment workflow.
- Two engagements are documented in `src/content/profile.js`: WEX (Mobility Vision 2027, strategic visioning, 2025) and Verizon (+play, new product launch/MVP redesign, 2022–2024).
- Case study detail pages are password-protected client-side (`src/config/auth.js`, `PASSWORD_SYSTEM.md`); the homepage itself is fully public.
- Content is centralized in `src/content/profile.js` as a single source of truth — `null` fields render as nothing rather than placeholder text (see `CONTENT-INTAKE.md`).

## Capabilities and Constraints

- Contact is LinkedIn-only by deliberate choice — no email is published anywhere, including the password-request modal. Password requests route to `linkedin.com/in/aktaplin`.
- No résumé is linked; no availability line is shown. Both are intentional omissions, not gaps.
- Two case studies is currently thin for the spec-block grid's intended rhythm; a third engagement is an open item (see `CONTENT-INTAKE.md`), not yet committed.
- Engagement "year" fields for both existing case studies are still unset — an open content gap, not a product decision.
- Writing/thought-leadership section links out to two published LinkedIn articles.

## Brand Commitments

- Name: Adam Taplin. Title: Design Leader. Location: St. Helena, CA. 13 years in practice.
- Voice (per `DESIGN_BRIEF.md`): direct, confident without posturing, precise, never corporate. Sentences are short or intentionally long — nothing in between. Never uses phrases like "passionate design leader" or "leveraging AI to unlock synergies."
- Brand principles the visual system is built to honor: nothing decorative, structure is visible, tension not decoration, move only when it matters.

## Evidence on Hand

- Real, named case studies: WEX (Mobility Vision 2027) and Verizon (+play), each with team size, span, sector, mandate, and outcome fields — no fabricated metrics or testimonials.
- Two published LinkedIn articles under Writing.
- No résumé, no client testimonials/logos beyond the two named engagements, no press. Future work must not fabricate any of these.

## Product Principles

- Proof over pitch: the site should hold up as evidence, not chase inbound — no fabricated urgency, no lead-gen mechanics beyond the existing LinkedIn gate.
- Say only what's true: content stays strictly to confirmed engagements and outcomes; unfilled fields render as absence, never placeholder copy.
- Craft is the argument: for a design leader's own portfolio, execution quality is itself the primary evidence of competence.
- Restraint as signal: voice and visual system both favor precision and structural clarity over ornamentation or corporate polish.

## Accessibility & Inclusion

Reduced-motion preference is respected for scroll-reveal animations (per `CONTENT-INTAKE.md`). No further product-specific accessibility requirement has been established.
