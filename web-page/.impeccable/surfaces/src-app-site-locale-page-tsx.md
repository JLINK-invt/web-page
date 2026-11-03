---
version: 1
slug: 'src-app-site-locale-page-tsx'
primary_target: 'src/app/(site)/[locale]/page.tsx'
related_targets:
  - 'src/components/sections/Hero.tsx'
  - 'src/components/sections/DomainGrid.tsx'
  - 'src/components/site/SolutionsMenu.tsx'
---

# Home — Cosmos Compass (aero chrome)

Scope: the bilingual home surface (`/[locale]`), including the sticky header with the Soluciones mega-menu, the hero compass, the four-area grid and the close. Visitor mode: Persuade.

## Audience, job, proof

Visitors are owners and operators comparing Cosmos Compass against generalist agencies and in-house builds. Their job in the first viewport: recognise that this is software for real operations, see which areas already have product, and start a conversation. Proof on hand: three Domotics products in production (Smart House, Fitness Gym, Health Psychology), area descriptions and statuses. No invented proof, no fake screenshots, prices, clients or benchmarks.

Constraints: four units always present in navigation, including units with no projects; each unit keeps its own page with an exploration state; Spanish default and English with localized routes and metadata; no new runtime dependencies; WCAG AA contrast; full keyboard access; `prefers-reduced-motion` disables needle and reveal motion; both locales carry equivalent structure. The user has pinned the visual era and palette: Y2K / Frutiger Aero, 2000–2010 web aesthetics, navy, silver, gold and white, with modern functionality and simple, necessary information.

## Chosen direction

Aero chrome: the optimism of a 2003 product site rebuilt with modern discipline. A sky-blue glass field, silver chrome rims, glossy white panels and navy text; gold only for the needle, active state and fine rules. Imagery is flat vector scenes behind a chrome window, not fake dashboards. The compass is the signature object: a chrome-and-glass desk instrument with an aqua face and a gold needle. The mega-menu is a four-pane glass console, each pane an area with its own solutions. No warm paper, no editorial serif, no star field, no clutter from the era — keep its material joy, drop its friction.

Memorable moment: the gold needle swings to the area under the cursor, and the Soluciones panel unfolds as four glossy columns over the sky.

## What is built

1. `Header` + `SolutionsMenu` — white glass bar, navy nav, gold underline; desktop mega-menu with four area columns (16:9 scene, name, status, description) and each area’s three solutions; anchored to the viewport so it never clips at 1024px.
2. `MobileNav` — below `lg`, an opaque ice-white panel with the Soluciones accordion: four stacked area blocks with thumbnail, status, description and two-column solution links; locale switcher and CTA at the end.
3. `Hero` — sky field, navy headline with aero-blue accent, problem-led subhead, blue primary and glass secondary actions, trust line and the interactive chrome `CompassDial` with four real area links.
4. `DomainGrid` — four glass area cards (16:10 scene, status, description, three solution names, “Ver área”) plus a custom-software band for operations that do not fit an area.
5. `ProjectsSection`, `Approach`, `CtaBand` — chrome-window proof, glass method cards and a navy close with aqua glow and concentric chrome rings.
6. Domain, projects and project-detail pages reuse `SectorScene` inside `ProductWindow`.

## Unresolved decisions

- Logo is already in the navy/silver/gold family; refine only if the build exposes a mismatch.
- Exact scope of the redesign: home, domains, projects and detail are in; contact and the legacy `disenos` comparison routes should inherit the tokens without a bespoke art pass.
- Sector scenes are hand-authored SVGs and may need illustration iteration.
- Whether upcoming-area solutions should eventually get dedicated capability pages instead of area/contact destinations.

## Direction contract

THESIS: A 2003 product site with 2026 behavior — sky-blue glass, chrome and a working compass — not a warm editorial studio page. The category default of cream paper and flat cards is refused; the first viewport pairs a navy statement with a glossy navigational instrument, and the four areas each carry their own solutions.

OWN-WORLD: Navy (#0a2342) for type and instrument bodies, silver chrome (#c9d8e6→#ffffff→#8ea9c2) for frames, aero blue (#1769aa) for links and emphasis, gold (#e0b85a) for the needle, active bearing and fine rules, and ice white (#eef7fd) for the ground. Glossy white glass panels with a top light, chrome bevels, aqua radial glows and soft bokeh. Source Sans 3 at semibold with tight tracking; uppercase micro-labels. No paper beige, no serif, no star field, no fake screenshots.

STORY: The visitor lands inside a calm sky-blue instrument. The headline names the outcome, the subhead names the operations, the chrome compass shows which areas are live and which are in exploration, the glass menu opens by area, the area grid proves three products, the method explains the build order, and the navy close asks for a first diagnosis.

FIRST VIEWPORT: White glass sticky header. Two columns on the ice-blue field: left, eyebrow, navy display headline with the second clause in aero blue, one-sentence subhead, primary “Ver sistemas en operación” and secondary “Cuéntanos tu caso”, trust line; right, the chrome-and-glass compass at more than half the viewport height, four glass bearing chips around the bezel. Below, the four-area grid begins.

FORM: Frutiger Aero chrome-and-glass web instrument, 2000–2010 nostalgia held to modern spacing, responsiveness and accessibility. Signature interaction: the gold needle swings to the focused area and the four-pane menu unfolds. seed: none (unavailable)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
