# Shifa Hospital — Update v2 (redesign)

Targeted update: only changed files. Copy over your existing project, keeping the folder structure.

Changed files:
- INSTRUCTIONS.md
- frontend/index.html (adds Fraunces serif font)
- frontend/src/index.css (maroon/teal palette, animations)
- frontend/src/App.jsx (full redesign)

No new dependencies. Run: `cd frontend && npm run dev`

## What changed
- Brand palette (from official logo): purple #600CA0, cyan #00ADF1, accent yellow #F2D51A, logo green #198A2D, white base, pale-cyan tints #F1FAFE / #E4F6FE.
- New look: dark charcoal page hero shared across all pages (text left, photo right, faint `public/images/hero.jpg` + dark gradient), cyan top bar, charcoal footer, charcoal section headings, cyan links/icons, purple primary buttons with cyan accents, light-gray `#F2F2F2` section backgrounds, scroll reveals, Google Map embed on Contact.

## Photos
Images are Unsplash stock placeholders (see `P` in `src/App.jsx`). If one fails to load, a purple-to-cyan fallback shows. Replace with real photos of Shifa: put files in `frontend/src/assets/` and change the `img()` helper / `Photo` src.

## Still to verify with the hospital
Phone number, 24/7 hours, services (NICU, theatres, dental), insurance wording. Footer says "Concept demo" until then.
