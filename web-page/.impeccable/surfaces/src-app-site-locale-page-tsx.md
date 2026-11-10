---
version: 2
slug: 'src-app-site-locale-page-tsx'
primary_target: 'src/app/(site)/[locale]/page.tsx'
related_targets:
  - 'src/components/window/WindowPanels.tsx'
  - 'src/components/window/MonitorArt.tsx'
  - 'src/components/window/UnitTile.tsx'
  - 'src/components/window/UnitGlyph.tsx'
  - 'src/components/window/ProductCarousel.tsx'
  - 'src/components/window/navItems.ts'
  - 'src/components/site/Header.tsx'
  - 'src/components/site/Footer.tsx'
  - 'src/app/(site)/[locale]/layout.tsx'
---

# Home — Cosmos Compass (Aero window, v3)

Scope: the bilingual home surface (`/[locale]`), including the window shell, the nav shelf, the in-place panels (home, four areas, method, contact) and the footer status bar. Visitor mode: Persuade.

## Audience, job, proof

Visitors are owners and operators comparing Cosmos Compass against generalist agencies and in-house builds. Their job in the first viewport: recognise that this is software for real operations, see which areas already have product, and start a conversation. Proof on hand: three products in production under Domotics (Smart House, Fitness Center, Health consultory), area descriptions and the factual status in `project.facts`. No invented proof, no fake screenshots, prices, clients, certificates or benchmarks.

Constraints: four units always present in navigation, including units with no products; each unit keeps its own panel with a "working" state; Spanish default and English with localized routes and metadata; on desktop the content lives in one fixed window with an internal scroll and below 1024px the same shell returns to normal document flow so the footer follows the content; no new runtime dependencies; WCAG AA contrast; full keyboard access; `prefers-reduced-motion` disables panel and icon motion. The visual era: Windows Vista/Windows 7 Aero — one rounded glass window over an Aurora wallpaper, dark glass title bar with the brand and the language switch, translucent panels, glossy rounded controls, Segoe UI — with modern behavior and only the necessary information.

## Chosen direction

The Aero window: a single 1040px glass column over the Aurora wallpaper, with a dark glass title bar (brand + ES/EN), a nav shelf of glass pills, a scrolling content area and a glass footer. The home has **five sections**:

1. **Banner + Monitor + Dock** (merged Info + Hero): blue glossy masthead holding the logo, tagline, display headline with a pale-gold accent clause, subhead, gold + light gel buttons, live note, company teaser (1 line + ghost link to Method). Right side: an SVG monitor whose on-screen menu (OSD) doubles as navigation, with product rows below. Under the monitor: a white dock shelf of four glossy unit tiles (orb + glyph + label + description). Clicking an OSD item or a dock tile swaps the whole panel in place with a 220ms rise; the monitor's OSD highlights the active area.

2. **Product Carousel** (floating "Wii shelf"): a horizontal scroll-snap list of the three featured products, each card showing a unit-colored orb with initials, name, tagline, and a "Ver proyecto" link. The section floats above the gray field with a subtle aero shadow (the one exception to the flat desktop metaphor). Prev/next arrows at the header.

3. **Areas** ("Cuatro áreas"): four cards, one per unit, each with the unit orb and glyph, the area name and descriptor, the area description and the products that unit actually holds (name + tagline, linked to the project). The area without a product shows the exact working copy. "Ver área" swaps to that unit panel.

4. **How we work** ("Cómo trabajamos"): the four principles as a compact strip, so the method is readable without opening the Method panel.

5. **Closing CTA**: `CtaBand` with the diagnostic copy and the "Hablemos de tu caso" button → `/contacto`.

Every destination replaces the panel inside the same window — the four areas included, whose canonical URL is `/{locale}#{area}`. Only the project-detail, contact, privacy and designs pages keep their own route, using the same shell.

Memorable moment: clicking a menu item on the illustrated monitor (or a dock tile) swaps the whole panel with a short `win-swap` rise, and the monitor's OSD highlights the active area.

## What is built

1. `LocaleLayout` — `body` at `100dvh`, `.win-column` at max 1040px, `WindowProvider`, header, `main` with internal scroll, footer. Only `main` scrolls.
2. `Header` — nav shelf with Home, four areas, Empresa, Contacto; on the home they switch panels with `aria-current` and the URL keeps the panel in the hash; elsewhere the areas link to `/{locale}#{area}` and the rest route. ES/EN switcher lives at the right; the footer repeats the essentials.
3. `HomePanel` — blue `.win-banner` (left column: logo, tagline, headline, subhead, CTAs, live note, company teaser; right column: `MonitorArt` with navigable OSD + product rows, `win-dock` of four `UnitTile` area shortcuts). Below the banner: `ProductCarousel` (floating shelf, scroll-snap, ID `#productos`), the four area cards with their products, the "Cómo trabajamos" strip and the closing `CtaBand`.
4. `UnitPanel` — per-area panel inside the home window: unit-colored banner (area name, description, ghost contact button, sector scene), then a `WindowPanel` with the area's `ProjectCard`s or the "working" block, then a unit-tone `CtaBand`.
5. `CompanyPanel` (Method) — "Empresa" title, body paragraph, 3-step approach cards, CTA → Contact.
6. `ContactPanel` — email + SLA left, compact form right; also at the `/contacto` (ES) and `/contact` (EN) routes, served by the single file `[locale]/[contact]/page.tsx`.
7. Project-detail, contact, privacy and designs routes re-cut with `WindowPanel`, `.win-banner` (unit-themed), `ProductWindow` and `CtaBand`; `ProjectCard` shows only `project.facts` and `project.stack`. The four area routes were retired: their URLs answer 308 to `/{locale}#{area}`.
8. `Footer` — status bar with copyright, panel links, diseños, email and privacy; on desktop it is pinned to the bottom of the window, below 1024px it follows the content in normal flow.

## Unresolved decisions

- `DesignVariantPage.tsx` still carries the old aero art (`CelestialGlobe`, `OrbitalCompass`, `Approach`) on the comparison routes. It renders inside the new shell but has not had a bespoke pass; retire those routes or re-cut them if the comparison is kept.
- The unused legacy `GoldBadge` / `ScreenshotFrame` components remain on disk with old class names; delete them with the next cleanup.
- Duplicate localized route folders remain for privacy, projects and designs (`privacy`/`privacidad`, `projects`/`proyectos`, `designs`/`disenos`), so each of those locales is reachable under two URL sets. Pre-existing SEO duplication; out of scope here, but a canonical redirect is the eventual fix. Resolved for contact on 2026-11-09: one `[locale]/[contact]/page.tsx` file generates `contacto` (ES) and `contact` (EN), each URL still serving only its own locale.
- The area URLs used to be duplicated between the home panel and a standalone route. Resolved on 2026-11-05: the panels are canonical and the old URLs redirect (308) to `/{locale}#{area}`.
- Mobile nav wraps to two lines at 390px. Accepted as authentic to the era; revisit only if it hurts tap accuracy.
- Whether upcoming-area solutions should eventually get dedicated capability pages instead of area/contact destinations.
- The tall-viewport home used to end in an empty gray band below the carousel. Resolved on 2026-11-10: the home grew the areas cards, the "Cómo trabajamos" strip and the closing `CtaBand`, so 1440×900 and 1440×1600 fill with real content and the internal scroll carries the rest.

## Direction contract

THESIS: A Windows 7 Aero window rebuilt with 2026 discipline — Aurora wallpaper, one rounded glass window, a real title bar (brand + language switch, no fake window buttons), translucent panels and glossy rounded controls — not a warm editorial studio page and not a minimal flat web page. The category default of cream paper is refused; the first viewport pairs a navy statement with a working monitor interface.

OWN-WORLD: Field gray `#e4e4e4`, paper `#f7f7f7`, panel white `#ffffff`, system blue `#2a5db0` (title bars, focus, links, primary button), gold `#e0b85a` only for the banner's main action and status bullets, green `#4c9a4c` for live and amber `#7a6320` for exploration. PT Sans everywhere, JetBrains Mono only in product facts. 1px hairlines, `inset 0 1px 0 #fff` top light, 2–3px radii, 11px status pills. **Exception**: the product carousel cards (`.win-float`) use a modern aero shadow (`0 4px 10px rgba(12,28,52,0.10), 0 0 0 1px rgba(12,28,52,0.04)`) with `rounded-[10px]` — justified as the "Wii shelf" floating above the desktop. No large shadows elsewhere, no glassmorphism, no chrome bevels, no 3D box shots, no fake screenshots.

STORY: The visitor lands inside a calm gray desktop with one window open. The headline names the outcome, the subhead names the operations, the monitor shows which areas are live and which are in exploration, the dock offers instant area access, the floating shelf proves three products, and the method panel closes with a first diagnosis.

FIRST VIEWPORT (1440×900): Nav shelf with globe mark and small links. Blue banner filling most of the frame: left, logo, uppercase tagline, display headline with a pale-gold clause, one-sentence subhead, gold primary and light secondary buttons, a green live note, one-line company teaser with ghost link; right, an SVG monitor with a blue screen, clock, OSD menu and three product rows, plus a white dock of four glossy area tiles. Below the banner, the product carousel shelf is fully visible — three cards with unit-colored orbs, names, taglines and "Ver proyecto" links, scrollable with Win95-style arrows.

FORM: Windows Vista/Windows 7 Aero, nostalgia held to modern spacing, responsiveness and accessibility. Signature interaction: the monitor OSD and dock switch panels in place with a 220ms rise. seed: none (unavailable)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, PRODUCT.md, and every shipping raster carrying its provenance.

## Finish review

**Verdict: ship.** The home shell and all converted inner routes hold one visual world at 1440, 1280, 1024 and 390.

- Detector: 0 primary findings on the source tree and on nine representative routes at 1280 plus four routes at 390. Remaining output is advisory only (literal size steps outside the documented single-value ramp, legacy colors, one legacy radius).
- Checks: `pnpm check` green — lint, stylelint, typecheck, production build (52 static pages).
- Craft floor: body and placeholder contrast verified by the detector; focus rings, selection, caret, scrollbars and disabled states themed; one authored motion (`win-swap`); real content and working controls at every breakpoint.
- Provenance: `.impeccable/review/*.png` regenerated from this build at their recorded dimensions: `home-1440-final.png`, `home-1280.png`, `domotica-1440.png`, `industria-1440.png`, `agricultura-1440.png`, `salud-1440.png`, `company-panel.png`.
- Known gaps are listed under Unresolved decisions; none blocks the current surface.
