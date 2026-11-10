# Cosmos Compass — Design System (v2)

## Visual era

Windows Vista / Windows 7 Aero (2007–2009). Aurora wallpaper behind a single rounded glass window (1040px), dark glass title bar with the brand and the language switch, translucent panels with a specular top edge, glossy rounded buttons, soft layered shadows, Segoe UI. In-place panel navigation with 220ms rise.

The chrome is real: the title bar holds the logotype and the ES/EN switch (both functional). There are no fake window buttons.

The four business units are not separate pages: they are panels inside this same window, reached from the nav shelf, the unit tiles or the monitor OSD. The panel is kept in the URL hash (`/es#domotics`), and the old unit URLs (`/es/domotica`, `/en/industrial`, …) answer 308 to that canonical URL.

## Color tokens

### Global

| Token                  | Value                                                                       | Use                                       |
| ---------------------- | --------------------------------------------------------------------------- | ----------------------------------------- |
| `--aurora-deep`        | `#072744`                                                                   | Wallpaper base (deep blue)                |
| `--aurora-mid`         | `#0d4763`                                                                   | Wallpaper middle                          |
| `--aurora-green-deep`  | `#14654e`                                                                   | Wallpaper wave (emerald)                  |
| `--aurora-green`       | `#7fd8a6`                                                                   | Green bloom on the wallpaper              |
| `--aurora-warm`        | `#ffd08a`                                                                   | Warm bloom on the wallpaper               |
| `--glass-tint`         | `rgb(255 255 255 / 58%)`                                                    | Translucent surfaces                      |
| `--glass-tint-strong`  | `rgb(255 255 255 / 74%)`                                                    | Panels over the wallpaper                 |
| `--glass-edge`         | `rgb(255 255 255 / 72%)`                                                    | Glass borders                             |
| `--glass-inner`        | `inset 0 1px 0 rgb(255 255 255 / 82%)`                                      | Specular top edge                         |
| `--aero-blur`          | `18px`                                                                      | `backdrop-filter` blur of the window      |
| `--aero-saturate`      | `150%`                                                                      | `backdrop-filter` saturation              |
| `--shadow-aero-1`      | `0 2px 6px rgb(6 26 52 / 16%), 0 12px 26px -14px rgb(6 26 52 / 34%)`        | Panels                                    |
| `--shadow-aero-2`      | `0 8px 20px -10px rgb(6 26 52 / 34%), 0 30px 60px -28px rgb(3 18 40 / 48%)` | Floating cards                            |
| `--shadow-aero-window` | `0 30px 80px -30px rgb(2 16 36 / 62%), 0 4px 14px rgb(2 16 36 / 18%)`       | The glass window                          |
| `--ink`                | `#253b59`                                                                   | Primary text                              |
| `--ink-muted`          | `#47525f`                                                                   | Secondary text                            |
| `--system-blue`        | `#2a5db0`                                                                   | Title bars, focus, links, primary buttons |
| `--gold`               | `#e0b85a`                                                                   | Hero primary CTA, live status             |
| `--green`              | `#4c9a4c`                                                                   | Live/success pills                        |
| `--amber`              | `#7a6320`                                                                   | Exploration/warning pills                 |

### Unit themes (per-area)

| Unit        | `--unit-primary` | `--unit-shade` (deep) | `--unit-surface` | `--unit-accent` | `--unit-ink` | `--unit-glyph` |
| ----------- | ---------------- | --------------------- | ---------------- | --------------- | ------------ | -------------- |
| Domótica    | `#0686d4`        | `#0a4f86`             | `#ffffff`        | `#10b981`       | `#0f172a`    | `#ffffff`      |
| Industria   | `#f97316`        | `#9a4210`             | `#9ca3af`        | `#374151`       | `#1f2937`    | `#3b1603`      |
| Agricultura | `#15803d`        | `#0d5730`             | `#f5f5dc`        | `#eab308`       | `#14532d`    | `#ffffff`      |
| Salud       | `#38bdf8`        | `#0369a1`             | `#ffffff`        | `#0284c7`       | `#0c4a6e`    | `#0b3d5c`      |

- `--unit-shade` replaces `--unit-deep` for CTA backgrounds (button uses shade for AA contrast with white text).
- `--unit-glyph` is the icon stroke color inside the orb (white for 3, dark brown for Industria).

## Typography

| Role             | Font           | Size                            | Weight | Line-height | Letter-spacing |
| ---------------- | -------------- | ------------------------------- | ------ | ----------- | -------------- |
| Display headline | Segoe UI       | `clamp(1.85rem, 3.2vw, 2.9rem)` | 700    | 1.05        | -0.025em       |
| Subhead          | Segoe UI       | 13.5px                          | 400    | 1.6         | —              |
| Body / UI        | Segoe UI       | 12–13px                         | 400    | 1.5–1.6     | —              |
| Micro / labels   | Segoe UI       | 11px                            | 400    | 1.35–1.45   | —              |
| Status / pills   | Segoe UI       | 11px                            | 600    | 1.0         | —              |
| Monospace facts  | JetBrains Mono | 12px                            | 400    | 1.5         | —              |

`--font-sans` is `'Segoe UI', PT Sans, Tahoma, Verdana, system-ui`; `--font-display` is `'Segoe UI Semibold', 'Segoe UI', Space Grotesk`. PT Sans stays as the web-font fallback of the era, so the site still reads correctly on Linux and macOS. JetBrains Mono is kept for product facts.

## Spacing scale (single-value ramp)

Base unit = 4px → steps: 2, 4, 6, 8, 12, 16, 24, 32, 48, 64. No arbitrary values.

## Radii

One ladder, defined in `@theme` as `--radius-*` (Tailwind v4 generates `rounded-sm/md/lg/…` from it):

| Token          | Value | Use                                             |
| -------------- | ----- | ----------------------------------------------- |
| `--radius-xs`  | 4px   | Window buttons, small controls                  |
| `--radius-sm`  | 7px   | Buttons, inputs, mini windows                   |
| `--radius-md`  | 10px  | Panels, nav ribbon, OSD                         |
| `--radius-lg`  | 14px  | The window, sections, unit tiles, product cards |
| `--radius-xl`  | 18px  | Floating carousel cards                         |
| `--radius-2xl` | 24px  | Reserved for large art                          |

No literal pixel radii remain in the markup; the only `rounded-[50%]` values are the orbs.

## Shadows

- **Window**: `0 30px 80px -30px rgba(2,16,36,0.62), 0 4px 14px rgba(2,16,36,0.18)` + `inset 0 1px 0 rgba(255,255,255,0.82)`
- **Panel**: `0 2px 6px rgba(6,26,52,0.16), 0 12px 26px -14px rgba(6,26,52,0.34)`
- **Floating product cards**: `0 2px 6px rgba(12,28,52,0.10), 0 18px 34px -20px rgba(12,28,52,0.42)`
- **Buttons**: `inset 0 1px 0 rgba(255,255,255,0.62), 0 2px 4px rgba(10,30,60,0.22), 0 8px 18px -12px rgba(10,30,60,0.55)`

## Motion

- Panel swap: `win-swap` 220ms ease-out (transform + opacity rise)
- Hover lift: `translateY(-0.5px)` 150ms on dock icons & unit tiles
- Orb pulse: `scale(1.04)` 150ms on hover
- OSD item highlight: instant on panel change
- `prefers-reduced-motion: reduce` disables all transforms and smooth scroll

## Focus & accessibility

- Focus ring: `2px solid #2a5db0` with 2px offset, removed only for mouse (`:focus-visible`)
- All interactive elements reachable by keyboard; panel navigation via monitor OSD or dock
- WCAG AA contrast verified with `impeccable detect` on `/es`, `/es/contacto`, `/es/proyectos/smart-house` and `/es/disenos/planetario`:
  - White on primary blue `#3f7cc9`: 4.8:1 (buttons and active nav pill)
  - Light text on the glass window: ≥ 4.5:1
  - Muted text `#47525f` on the window glass: ≥ 4.5:1
  - Unit shade on white: ≥ 4.5:1 per unit (Domótica `#0a4f86`, Industria `#9a4210`, Agricultura `#0d5730`, Salud `#0369a1`)
  - Unit glyph on primary: ≥ 3:1 (non-text decorative)
  - The two `nested-cards` warnings on `/es` are intentional: the product is a window with panels, and panels hold cards.
  - Salud is the only unit with a light primary, so its banner uses its own tones (`--unit-banner-top #1476ae`, `--unit-banner-mid #0c5f92`) to keep white body text at AA (4.96:1). Its orb glyph is dark (`#0b3d5c`) for contrast on the light blue.

## Breakpoints

- Desktop only (≥1024px) for this iteration. Mobile wraps nav to two lines; panel stack is single-column inside the window. No responsive grid changes beyond the 1040px max-width.

## Layout grid

- Window column: `max-width: 1040px`, `height: calc(100dvh - 28px)`, `margin: 14px auto`, radius 14px, centered over the Aurora wallpaper, only `<main>` scrolls.
- Home banner: `grid` two columns (`1.05fr` / `0.95fr`), 8px gap, 24px horizontal padding, 28px vertical (lg: 40/28).
- Dock shelf: `grid` 4 columns, `max-width: 860px`, gap 6px.
- Product carousel: horizontal scroll-snap list, `gap: 12px`, cards `248px` wide, scrollable with prev/next arrows.
- Unit page: banner (3px top rule), header strip, grid `1.35fr / 0.65fr`, art thumbnail max 220px.

## Components reference

### `.win-banner` (hero de la portada)

Sección `.win-section.win-section-hero`: degradado azul `#1c5c9c → #2b71b9 → #3d89cc` con dos halos radiales suaves, radio **24px** (`--radius-2xl`) para que el redondeo se lea de inmediato, canto claro de 1px (`rgb(255 255 255 / 30%)`) y sombra en dos capas (`0 12px 30px -10px`, `0 34px 64px -32px`). Encima sólo hay **un** brillo diagonal muy ancho y suave (`.win-hero-bg`, sin `backdrop-filter`): nada de bandas diagonales duras ni doble capa difuminada. Contenido: marca, titular con acento dorado, subtítulo, CTA (dorado + claro), nota en vivo, teaser de empresa y el monitor "Panel de control".

### `.win-monitor`

SVG monitor frame (dark bezel `#1a1a2e`, screen `#0d1f3a`), clock top-right, OSD list (menu items = panels), active highlight (`#2a5db0` background, white text), product rows below OSD. Click OSD item → panel swap.

### `.win-dock`

Glass shelf (`border-top: 1px solid rgba(255,255,255,0.70)`), 4 unit tiles.

### `.win-titlebar-app`

Dark glass bar at the top of the window: brand mark + `Cosmos Compass` + window subtitle on the left, ES/EN switch on the right (`.win-locale-switch`, active locale as a white capsule).

### `.win-tile` (unit tile)

Rounded 14px (`rounded-lg`), `px-2 py-2`, centered column: orb (56px, glossy sphere in `var(--unit-primary)`, `color: var(--unit-glyph)`), glyph 30px, label (12.5px bold, `--unit-ink`), description (11px, muted). Hover: `translateY(-0.5px)` + orb `scale(1.04)`.

### `.win-float` (product carousel section)

Relative, `win-float-sheen` pseudo (top gradient sheen), header with title/subhead + prev/next arrows (Win95-style 3D buttons), scroll-snap list.

### `.win-carousel` card

248px wide, `rounded-xl` (18px), `win-float` glass surface with a top sheen, `p-2.5`. Top: orb (40px, unit primary bg, unit glyph color) + initials (13px bold), name (14px bold). Tagline (11.5px). CTA button (light glossy, full width).

### `.unit-banner`

Gradient in the unit color with a specular edge, header strip (glass, unit name 21px, action buttons: unit btn with shade bg + white text, ghost contact), content grid.

### `.win-btn-unit`

Gradient from `var(--unit-shade)` to a darker shade, white text, glossy top edge, hover lifts 1px.

### `.win-btn-gold` / `.win-btn-light` / `.win-btn-ghost`

All buttons use `rounded-sm` (7px) with a specular `inset 0 1px 0` edge and a two-layer shadow. Gold: warm gradient with dark ink. Light: white-blue gradient with blue text. Ghost: transparent, blue text, underlined.

### `.win-title`, `.win-label`, `.win-link`

Title: 21px bold, ink. Label: 11px uppercase, tracking-wider, muted. Link: blue, underline on hover.

## Provenance

This document reflects the state after the home redesign (2026-11-04), after unifying the four business units as panels of the home window (2026-11-05) and after the Vista/Win7 Aero visual pass with the glass title bar (2026-11-06). Reference screenshots of the home design: `~/backups/web-page/home-design-2026-11-06/shots/`. All `pnpm check` (lint, stylelint, typecheck, build) pass.
