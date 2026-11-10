# Cosmos Compass — Product Specification (v2)

## One-sentence pitch

Cosmos Compass builds domain-specific software that runs the operation — not a dashboard, not a wrapper, the actual system — for Domótica, Industria, Agricultura and Salud.

## Target visitor

Owners and operators of independent businesses (smart-home installers, gym/fitness operators, agri-ops, clinical practices) comparing Cosmos against generalist agencies, SaaS subscriptions, or in-house builds. They need to know: **does this run in production today?**

## Value proposition per unit

| Unit        | What it runs                                                                   | Proof (live product)                                                                   | Status         |
| ----------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | -------------- |
| Domótica    | IoT device fleets, small gyms and small clinics: telemetry, commands, alerts, lighting, ventilation, smart glass, scheduling and office management. | **Smart House**, **Fitness Center** and **Health consultory**                          | Operativo      |
| Industria   | Business operations: POS, inventory, members, access, audit, local-first.      | —                                                                                      | En exploración |
| Salud       | Medical systems: neuroscience, biology, sensors, neurotransmitters, human-machine interfaces, ventilators and machinery. | —                                                                                      | En exploración |
| Agricultura | (exploration)                                                                  | —                                                                                      | En exploración |

**No invented products.** Three live products, all under Domótica. The home page and each unit page state this factually.

## Home page structure (desktop, ES only)

### Section 1 — Banner + Monitor + Dock

- **Left column**: Logo, tagline (""), display headline with gold clause ("en casa, en la línea, en el campo, en la consulta"), subhead ("Tres productos en operación. Una forma de construir."), CTA row (gold "Ver productos" scrolls to carousel, light "Primer diagnóstico" → Contact panel), live note (green dot + "Tres productos operativos. El cuarto en camino."), company teaser (1 line + ghost link "Conocer más" → Method panel).
- **Right column**: SVG Monitor (blue screen, clock, OSD menu = panel navigation, product rows). Below monitor: white dock shelf with 4 unit tiles (orb + glyph + label + description). Click tile or OSD item → panel swap (220ms rise).

### Section 2 — Product Carousel (floating "Wii shelf")

- Horizontal scroll-snap list of 3 featured products (Smart House, Fitness Center, Health consultory).
- Each card: unit-colored orb with initials, name, tagline, "Ver proyecto" link → project detail.
- Prev/next arrows (Win95 3D buttons), disabled at edges.
- Section ID `#productos` for smooth scroll from banner CTA.

### Section 3 — Areas ("Cuatro áreas")

- 4 cards (1 per unit, 2×2 on tablet, 4 columns on desktop): unit orb + glyph, area name, short descriptor, the area description, and the products that unit actually holds (Domótica holds Smart House, Fitness Center and Health consultory; Industria, Salud and Agricultura show the exact working copy).
- "Ver área" per card → panel swap to that unit.

### Section 4 — How we work ("Cómo trabajamos")

- 4 principles (`home.hero.value1..value4`) with the note `home.hero.valuesNote`, visible without opening the Method panel.

### Section 5 — Closing CTA

- `CtaBand` with `home.cta` copy and the "Hablemos de tu caso" button → `/contacto` route.

The home grows with real content so tall viewports (≥1440px) never end in an empty band.

## Unit panels (in-window, `/{locale}#{area}`)

- Las áreas no tienen ruta propia: son paneles dentro de la ventana de la home. La URL canónica es `/{locale}#{domotics|agriculture|industrial|medical}`; las URLs viejas (`/es/domotica`, `/en/industrial`, …) responden 308 a esa URL.
- **Banner de unidad**: fondo con el color del área, nombre del área, descripción, botón "Cuéntanos tu caso" y la escena del sector a la derecha.
- **Productos**: `WindowPanel` con las tarjetas `ProjectCard` (miniventana Aero con su estado "Activo"). Si el área no tiene productos, un bloque "working" con el copy de estado.
- CtaBand en tono de unidad al cierre.
- No status pills ("en operación"/"en exploración") en ningún lado — el copy afirma los hechos directo.

## Project detail (`/[locale]/projects/[slug]`)

- Banner with unit color accent, project name, tagline.
- Facts grid (Vertical, Modelo, Estado — from `project.facts` only).
- Stack chips.
- Narrative sections: Challenge, Approach, Capabilities (bulleted).
- No status badge, no fake screenshots, no metrics.
- Breadcrumb: Home / Unit / Project.

## Company / Method panel (in-window)

- Title "Empresa" (nav label).
- Body paragraph (2–3 sentences).
- 3-step approach (numbered cards: 1. Mapear, 2. Construir, 3. Operar) with descriptions.
- CTA: "Primer diagnóstico" → Contact panel.

## Contact panel (in-window + routes `/contacto` / `/contact`)

- Left: Email, response SLA, privacy note + link.
- Right: Compact form (name, email, message) — same component as the route.
- One route file (`[locale]/[contact]/page.tsx`) serves both locales: `contacto` for ES, `contact` for EN.
- "Proyecto de interés" is an optional select (products + four verticals + "Otro"); it may be left empty.

## Navigation (Header + Footer)

- **Header shelf**: Globe mark + Home, Domótica, Industria, Agricultura, Salud, Empresa, Contacto, ES/EN switch.
- On home: items switch panels (aria-current) and the URL keeps the panel in the hash. Elsewhere: links to `/{locale}#{area}` for the areas, route links for the rest.
- **Footer**: Copyright, panel links, Diseños, Email, Privacidad.
- **Mobile (<1024px)**: the Aero window stops being a fixed viewport. `html`, `body`, `.win-column` and `main` return to normal flow, the page scrolls as a document and the footer follows the content instead of overlapping it.

## Content rules

- Spanish source of truth (`es.ts`). English (`en.ts`) mirrors structure exactly (`Dictionary = typeof es`), translations not required for this iteration.
- No "en operación", "en exploración", "en desarrollo" pills or labels — copy states facts.
- No invented clients, prices, benchmarks, certificates, screenshots.
- Three products, four areas — always present in nav, including the one without a product.
- Unit panels without products show the exact working copy; no placeholder cards.

## Non-goals (this iteration)

- Mobile-first responsive (desktop ≥1024px only).
- English copy polish (structural parity only).
- SEO canonicalization of the old unit URLs (already handled by the 308 redirects).
- Comparison/designs routes refresh.
- Mobile nav UX beyond era-authentic wrap.

## Acceptance criteria

- `pnpm check` green (lint, stylelint, typecheck, build).
- Home at 1440×900 and 1280×800: banner + dock + carousel visible, no overflow, CTA scroll works.
- Home fills the height at 1440×900 and 1440×1600: no empty band below the content.
- Footer follows the content on mobile (<1024px): no overlap, email visible and complete.
- Unit panels (4): banner renders in unit colors, product list or working block present, CtaBand uses unit tone.
- Company panel reachable from Home banner teaser and Header "Empresa".
- Project detail pages (3): facts grid, no status pill, breadcrumb to unit.
- All text ES; EN structure identical.
- Zero console errors on load.
- WCAG AA contrast on all interactive elements.
- `prefers-reduced-motion` disables panel swap rise and smooth scroll.

## Provenance

Screenshots in `.impeccable/review/` captured from the production build (Next.js SSG, 52 static pages). Design tokens in `src/content/unitThemes.ts`, CSS in `src/app/globals.css`, components in `src/components/window/`.
