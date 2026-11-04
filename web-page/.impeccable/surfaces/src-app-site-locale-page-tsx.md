---
version: 1
slug: 'src-app-site-locale-page-tsx'
primary_target: 'src/app/(site)/[locale]/page.tsx'
related_targets:
  - 'src/components/window/WindowPanels.tsx'
  - 'src/components/window/MonitorArt.tsx'
  - 'src/components/window/StripArt.tsx'
  - 'src/components/site/Header.tsx'
  - 'src/components/site/Footer.tsx'
  - 'src/app/(site)/[locale]/layout.tsx'
---

# Home — Cosmos Compass (Luna window)

Scope: the bilingual home surface (`/[locale]`), including the window shell, the nav shelf, the in-place panels (home, four areas, projects, method, contact) and the footer status bar. Visitor mode: Persuade.

## Audience, job, proof

Visitors are owners and operators comparing Cosmos Compass against generalist agencies and in-house builds. Their job in the first viewport: recognise that this is software for real operations, see which areas already have product, and start a conversation. Proof on hand: three Domotics products in production (Smart House, Fitness Gym, Health Psychology), area descriptions and the factual status in `project.facts`. No invented proof, no fake screenshots, prices, clients, certificates or benchmarks.

Constraints: four units always present in navigation, including units with no projects; each unit keeps its own page with an exploration state; Spanish default and English with localized routes and metadata; the content lives in one fixed window with an internal scroll; no new runtime dependencies; WCAG AA contrast; full keyboard access; `prefers-reduced-motion` disables panel and icon motion. The user pinned the visual era: Windows XP/Luna, 2004 desktop application, gray field, blue title bars, small type and gel controls, with modern behavior and only the necessary information.

## Chosen direction

The 2004 desktop window: a single 1040px application column on a gray field, with a nav shelf, a scrolling content area and a status bar. The home banner is a blue glossy masthead holding the logo, the statement, a note of real status and an SVG monitor whose on-screen menu doubles as navigation; a dock of glossy area icons sits under it. Below, three flat strip cards summarise production, exploration and method. Every destination replaces the panel inside the same window — except the domain, projects, contact, privacy and designs pages, which use the same shell on their own route.

Memorable moment: clicking a menu item on the illustrated monitor (or a dock icon) swaps the whole panel with a short `win-swap` rise, and the monitor's OSD highlights the active area.

## What is built

1. `LocaleLayout` — `body` at `100dvh`, `.win-column` at max 1040px, `WindowProvider`, header, `main` with internal scroll, footer. Only `main` scrolls.
2. `Header` — nav shelf with Home, four areas, Projects, Method and Contact; on the home they switch panels with `aria-current`, elsewhere they route. ES/EN switcher lives at the right; the footer repeats the essentials.
3. `HomePanel` — blue `.win-banner` (logo, tagline, display headline with a pale-gold accent clause, subhead, gold + light gel buttons, live note) and `MonitorArt` with a navigable OSD plus the `win-dock` of four `GlossIcon` area shortcuts. Under the banner, three `.win-strip-card`s: production, exploration, method, each with a small SVG art object and a ghost CTA.
4. `UnitPanel` — per-area panel: status pill, solutions with live/exploration pills, the exploration note, `UnitArt` and the area description; links to the area page and contact.
5. `ProjectsPanel`, `MethodPanel`, `ContactPanel` — the same panel grammar: gray header strip, small type, flat rows, one primary action and a ghost secondary.
6. Domain, projects, project-detail, contact, privacy and designs routes re-cut with `WindowPanel`, `.win-banner`, `ProductWindow` and `CtaBand`; `ProjectCard` shows only `project.facts` and `project.stack`.
7. `Footer` — status bar with copyright, panel links, designs, email and privacy; it never scrolls away.

## Unresolved decisions

- `DesignVariantPage.tsx` still carries the old aero art (`CelestialGlobe`, `OrbitalCompass`, `Approach`) on the comparison routes. It renders inside the new shell but has not had a bespoke pass; retire those routes or re-cut them if the comparison is kept.
- The unused legacy `GoldBadge` / `ScreenshotFrame` components remain on disk with old class names; delete them with the next cleanup.
- Both localized route folders exist for contact, privacy, projects and designs (`contact`/`contacto`, etc.), so every locale is reachable under two URL sets. Pre-existing SEO duplication; out of scope here, but a canonical redirect is the eventual fix.
- Mobile nav wraps to two lines at 390px. Accepted as authentic to the era; revisit only if it hurts tap accuracy.
- Whether upcoming-area solutions should eventually get dedicated capability pages instead of area/contact destinations.
- The tall-viewport home banner stretches because the shell is `100dvh`; at 900px it reads correctly. Revisit if full-height hero is dropped.

## Direction contract

THESIS: A 2004 desktop application window rebuilt with 2026 discipline — gray field, one window, blue title bars, hairline borders and small type — not a warm editorial studio page and not a glossy Frutiger Aero revival. The category default of cream paper and floating cards is refused; the first viewport pairs a navy-blue statement with a working monitor interface.

OWN-WORLD: Field gray `#e4e4e4`, paper `#f7f7f7`, panel white `#ffffff`, system blue `#2a5db0` (title bars, focus, links, primary button), gold `#e0b85a` only for the banner's main action and status bullets, green `#4c9a4c` for live and amber `#7a6320` for exploration. PT Sans everywhere, JetBrains Mono only in product facts. 1px hairlines, `inset 0 1px 0 #fff` top light, 2–3px radii, 11px status pills. No large shadows, no glassmorphism, no chrome bevels, no 3D box shots, no fake screenshots.

STORY: The visitor lands inside a calm gray desktop with one window open. The headline names the outcome, the subhead names the operations, the monitor shows which areas are live and which are in exploration, the strip cards prove three products and explain the build order, and the method panel closes with a first diagnosis.

FIRST VIEWPORT: Nav shelf with the globe mark and small links. Blue banner filling most of the frame: left, logo, uppercase tagline, display headline with a pale-gold clause, one-sentence subhead, gold primary and light secondary buttons, a green live note; right, an SVG monitor with a blue screen, clock, OSD menu and three product rows, plus a white dock of four glossy area icons. Under the banner, the top of the three strip cards is visible.

FORM: Windows XP/Luna desktop window, 2004 nostalgia held to modern spacing, responsiveness and accessibility. Signature interaction: the monitor OSD and dock switch panels in place with a 220ms rise. seed: none (unavailable)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Finish review

**Verdict: ship.** The home shell and all converted inner routes hold one visual world at 1440, 1280, 1024 and 390.

- Detector: 0 primary findings on the source tree and on nine representative routes at 1280 plus four routes at 390. Remaining output is advisory only (literal size steps outside the documented single-value ramp, legacy colors, one legacy radius).
- Checks: `pnpm check` green — lint, stylelint, typecheck, production build (52 static pages).
- Craft floor: body and placeholder contrast verified by the detector; focus rings, selection, caret, scrollbars and disabled states themed; one authored motion (`win-swap`); real content and working controls at every breakpoint.
- Provenance: `.impeccable/review/*.png` regenerated from this build at their recorded dimensions.
- Known gaps are listed under Unresolved decisions; none blocks the current surface.
