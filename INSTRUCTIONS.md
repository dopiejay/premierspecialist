# Shifa Hospital — Update v2 (redesign)

Targeted update: only changed files. Copy over your existing project, keeping the folder structure.

Changed files:
- INSTRUCTIONS.md
- frontend/index.html (adds Fraunces serif font)
- frontend/src/index.css (maroon/teal palette, animations)
- frontend/src/App.jsx (full redesign)

No new dependencies. Run: `cd frontend && npm run dev`

## What changed
- Brand palette: maroon #701F35, teal #087F8C, pale rose #F4E9ED, pale teal #E5F3F3, white base.
- New look: arched hero photo with floating cards, animated heartbeat line, maroon stats band, photo bento services grid, 3-step visit section, scroll reveals, Google Map embed on Contact.

## Photos
Images are Unsplash stock placeholders (see `P` in `src/App.jsx`). If one fails to load, a maroon-to-teal fallback shows. Replace with real photos of Shifa: put files in `frontend/src/assets/` and change the `img()` helper / `Photo` src.

## Still to verify with the hospital
Phone number, 24/7 hours, services (NICU, theatres, dental), insurance wording. Footer says "Concept demo" until then.
