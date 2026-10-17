# Premier Specialist Clinic — Website

Rebrand of the previous Shifa Hospital demo build into a **specialist clinic** concept for
Premier Specialist Clinic, Off Ndola Road, Beaton, Blantyre, Malawi.

Run the frontend: `cd frontend && npm run dev`
Run the API: `cd backend && npm run dev` (needs `.env`; see `.env.example`)

## What this build is

A patient-facing website plus a small staff admin portal for appointment requests.

- Frontend: React + Vite + Tailwind CSS v4, routed pages (Home, About, Services, Doctors,
  Booking, Health Tips) and a `/admin` portal.
- Backend: Express + PostgreSQL. Public endpoint creates appointment requests; authenticated
  endpoints let staff review, confirm and annotate requests. No medical records.

## Changes made in this rebrand

- Name: Shifa Hospital → **Premier Specialist Clinic** (header, footer, admin, page copy, title).
- Scope: reframed from a full private hospital to a **specialist outpatient clinic**.
  Removed hospital-only services (Emergency & Walk-in, Neonatal/NICU, Surgery & Theatres)
  and reshaped services, navigation and copy accordingly.
- Contact: replaced with the clinic's public directory details
  (`+265 999 562 272`, `premclinics@gmail.com`, Off Ndola Road, Beaton, Blantyre) and the
  listed hours (Mon–Fri 08:00–17:00, Sat 08:00–12:00, Sun closed).
- Directions and the Contact/Booking map now point at Premier Specialist Clinic, Beaton.
- Backend: session cookie renamed `psc_admin`, appointment reference prefix `SH-` → `PSC-`.

## Palette

Brand colours sampled visually from the clinic banner (working estimates, not official specs),
set in `frontend/src/index.css`. Token names are legacy from the previous build — read them as
roles:

- `purple` = clinic green `#279B60` (primary — buttons, service panels, highlights)
- `cyan` = deep blue `#283D91` (secondary — headings, icons, links)
- `charcoal` = `#263238` (dark surfaces and headings), `ink` = `#263238` (body text)
- `yellow` = light green `#A7E3C2` (accent on dark backgrounds), `green` = `#279B60` (success)
- `cloud` / `mint` = soft green/blue tints for section backgrounds

Since deep blue is too dark to read on the charcoal hero/footer, the on-dark accent uses the
light green tint instead.

## Photos

Images are Unsplash stock placeholders plus a few files in `frontend/public/images/`.
Replace with genuine clinic photography (with permission). The `img()` helper and `Photo`
component in `frontend/src/data/site.js` / `frontend/src/components/Photo.jsx` handle sources.

## Still to verify with the clinic — do not treat as final

- **Services**: `SERVICES` (`frontend/src/data/site.js`) now reflects the clinic's directory-listed
  mix — Dermatology & Advanced Skin Care, Ophthalmology, Optics and Specialist Consultations — and
  each service carries a `categories` breakdown shown on its detail page. Category wording is
  indicative and still needs confirmation by the clinic.
- **Doctors**: `TEAM` profiles are illustrative placeholders (invented names). Replace with
  verified, approved practitioner details before launch, or remove the page from `NAV`.
- Contact details, opening hours and location (sourced from a directory listing, unverified).
- Insurance/medical-scheme wording.
- Colours are visual estimates from the banner and fonts should follow the official logo.

The footer states "Concept demo — not an official Premier Specialist Clinic website" until
management approves the content.
