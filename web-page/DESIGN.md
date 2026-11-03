---
name: Cosmos Compass
description: Ecosistema de software de escritorio con estética retro-futurista Y2K/Frutiger Aero: cuatro unidades de negocio, catálogo multiproducto con box shots 3D, fichas técnicas y comparativas de licencias.
colors:
  paper: "#eef7fd"
  sand: "#d7e8f5"
  ink: "#0a2342"
  muted: "#4b647c"
  line: "#b9d2e6"
  cosmos: "#1769aa"
  brass: "#8a5f14"
  space: "#051a33"
  space-2: "#0a2b4f"
  space-3: "#144a75"
  star: "#f7fbff"
  gold: "#e0b85a"
  gold-soft: "#f5dfa6"
  aqua: "#4fb8e8"
  aqua-soft: "#b7e6f8"
  chrome: "#cfdce8"
  silver: "#c3d3e2"
  gold-badge: "#e0b85a"
  gold-badge-dark: "#a9781f"
  chrome-highlight: "#ffffff"
  chrome-mid: "#e4f1fa"
  chrome-shadow: "#9dbdd4"
  chrome-deep: "#5d84a6"
  window-title-blue: "#2b7fbe"
  window-title-gold: "#e0b85a"
  window-title-silver: "#9dbdd4"
  status-green: "#3f9c8f"
  status-red: "#c06a58"
typography:
  display:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.688rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.16em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0em"
  mono-sm:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.space-3}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "rgba(255,255,255,0.95)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-inverse:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  glass-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
  chrome-frame:
    backgroundColor: "{colors.chrome}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "5px"
  input:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
  bearing-chip:
    backgroundColor: "{colors.star}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
  box-shot:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.xl}"
    padding: "0"
  window-frame:
    backgroundColor: "linear-gradient(180deg, #ffffff 0%, #e4f1fa 38%, #fbfdff 48%, #9dbdd4 100%)"
    rounded: "{rounded.xl}"
    padding: "4px"
  window-titlebar:
    backgroundColor: "linear-gradient(180deg, #ffffff 0%, #e9f3fa 52%, #c2d9e9 100%)"
    rounded: "{rounded.md}"
    padding: "7px 12px"
  badge-gold:
    backgroundColor: "linear-gradient(135deg, #e0b85a 0%, #f5dfa6 50%, #e0b85a 100%)"
    textColor: "#0a2342"
    rounded: "{rounded.md}"
    padding: "6px 10px"
  license-table:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "16px"
---

# Design System: Cosmos Compass — Y2K/Frutiger Aero Product Catalog

## Overview

**Creative North Star: "Aero Product Catalog"**

Cosmos Compass se presenta como un catálogo de software de escritorio del 2003-2005 reconstruido con disciplina de 2026: pestañas metálicas, box shots 3D con biseles cromados, ventanas de sistema operativo retro con botones [ _ ][ □ ][ X ], fichas técnicas en monoespaciada, badges dorados con reflejos y tablas comparativas con bordes en relieve (inset/outset). La nostalgia aporta el material —cromo, cristal, biseles, gotas de luz, degradados glossy—; la funcionalidad moderna aporta jerarquía, espaciado, foco, respuesta y accesibilidad.

Cuatro unidades de negocio siempre visibles: **Domótica, Industria, Agricultura, Salud**. Domótica tiene 3 productos operativos (Smart House, Fitness Gym, Health Psychology); las otras tres muestran estado de exploración con box shots placeholder autorizados. Sin capturas inventadas, sin precios, sin clientes falsos.

**Key Characteristics:**

- Pestañas metálicas navegación principal con detalles en oro
- Box shots 3D (SVG autorizado) enmarcados en ventanas biseladas con barra de título retro
- Fichas de producto: resumen, enlace a suite, botón 3D glossy "Buy Now / Download Trial", ficha técnica compacta (ej. MedicalSuite_v2.4.exe - 45.8 MB)
- Badges dorados estilo sello/pixel-art: "ISO Medical Certified", "Industrial Grade", "100% Secure System"
- Capturas en marcos con botones de ventana [ _ ][ □ ][ X ]
- Tablas comparativas licencias/módulos con bordes inset/outset
- Tipografía: Space Grotesk (display/headline/title), Source Sans 3 (body), JetBrains Mono (specs/technical)

## Colors

Tres familias: hielo para el suelo, navy para tinta e instrumentos, cromo y dorado para profundidad y orientación.

### Primary

- **Navy / Tinta** (`#0a2342`): texto principal, fondos de cierre, cuerpo de ventanas y paneles profundos.
- **Aero** (`#1769aa`): enlaces, verbos de estado, acentos sobre superficies claras.
- **Cielo** (`#eef7fd`) y **Plata** (`#d7e8f5`): suelo y bandas alternas.

### Secondary

- **Dorado** (`#e0b85a`): aguja compás, rumbo activo, filetes de foco, badges, botones 3D, detalles escenas.
- **Oro oscuro** (`#8a5f14`): texto pequeño dorado sobre claro (etiquetas), contraste AA.
- **Cromo** (`#cfdce8` → `#ffffff` → `#8ea9c2` → `#5d84a6`): biseles, marcos, remaches, barras de título.
- **Aqua** (`#4fb8e8`) / **Aqua suave** (`#b7e6f8`): glows, burbujas, detalles de esfera.
- **Verde estado** (`#3f9c8f`): indicadores live/operativo.
- **Rojo estado** (`#c06a58`): alertas, badges críticos.

### Neutral

- **Blanco estrella** (`#f7fbff`): fichas, reflejos, texto sobre navy.
- **Gris azulado** (`#4b647c`): texto secundario.
- **Línea** (`#b9d2e6`): separadores, bordes.
- **Espacio** (`#051a33` / `#0a2b4f` / `#144a75`): profundidades de cierre e instrumentos.

### Named Rules

**La Regla del Dorado.** El dorado marca orientación, estado, foco, badges y botones de acción principal. Nunca es color de cuerpo de texto sobre claro; para eso existe el oro oscuro.

**La Regla del Cielo.** El suelo es cielo helado, no papel: el sitio se lee como un instrumento sobre mesa de luz. Superficies oscuras son instrumentos (compás, ventanas, cierre), no decoración.

**La Regla del Bisel.** Toda superficie recibe luz de arriba, bisel abajo, sombra proyectada. Un componente sin esa tríada no pertenece al mundo.

**La Regla de la Ventana.** Product windows y box shots usan barra de título de 3 luces (azul, dorado, plata) + botones [ _ ][ □ ][ X ]. El marco es cromo 4-5px con remaches en esquinas.

## Typography

**Display/Headline/Title Font:** Space Grotesk (corporate tech sans-serif, geometric, high x-height, distinctive numerals)
**Body/Label Font:** Source Sans 3 (humanista abierta, claridad señalización, respaldo Frutiger)
**Mono Font:** JetBrains Mono (clean monospace for engineering specs, file names, versions, sizes)

**Character:** Space Grotesk aporta la voz técnica corporativa; Source Sans 3 la legibilidad de prosa; JetBrains Mono la precisión de ficha técnica. Una sola familia display sostiene titulares, rótulos y tarjetas; la jerarquía se construye con tamaño, peso y tracking.

### Hierarchy

- **Display** (700, clamp 2.4–4.6rem, 0.95, -0.02em): portada y cabeceras de página.
- **Headline** (600, clamp 1.9–2.9rem, 1.05, -0.015em): títulos de sección.
- **Title** (600, 1.25rem, 1.2, -0.01em): áreas, productos, tarjetas, box shots.
- **Body** (400, 1rem, 1.6): prosa, máximo 75 caracteres.
- **Label** (600, 0.688rem, 0.16em, mayúsculas): estados, enlaces, rótulos instrumento.
- **Mono** (400, 0.8125rem, 1.55): fichas técnicas, nombres archivo, versiones, tamaños.
- **Mono-sm** (400, 0.6875rem, 1.5): badges, etiquetas compactas, tablas comparativas.

### Named Rules

**La Regla de Tres Voces.** Display/Headline/Title = Space Grotesk; Body/Label = Source Sans 3; Mono = JetBrains Mono. No hay serif editorial. El tracking negativo se reserva a Display/Headline.

## Layout

Contenedor máximo 1280px (`max-w-7xl`), margen lateral 20px móvil, 32px sm, 48px lg. Retícula 12 columnas en lg.

**Home:** Hero 6/6 (declaración + compás) → DomainGrid 4 columnas xl / 2 md / 1 móvil (box shots en ventanas) → FeaturedProjects (product cards con fichas) → Approach → CtaBand.

**Domain Page:** Header con escena + estado → Grid productos (3 columnas lg, 2 md, 1 móvil) con ProductWindow → Exploration state para unidades upcoming.

**Project Detail:** Header con ProductWindow → Facts table → Summary/Challenge/Approach → Capabilities grid → Aside tech stack + CTA → Next project.

**Navegación:** Sticky header con pestañas metálicas (4 unidades) + mega-menu 4 columnas anclado a viewport. Móvil: panel opaco con acordeón.

## Elevation & Depth

Profundidad material y física: luz desde arriba, bisel oscuro abajo, sombra proyectada. Cristal = blanco translúcido con filo interior claro. Cromo = degradado vertical blanco → hielo → blanco → azul acero. Navy profundo en cierre y cuerpo de ventanas.

### Shadow Vocabulary

- **Cristal** (`inset 0 1px 0 #fff, inset 0 -1px 0 rgba(10,35,66,.08), 0 22px 46px -30px rgba(5,26,51,.55)`): paneles, tarjetas, fichas.
- **Cromo** (`inset 0 1px 0 #fff, inset 0 -2px 5px rgba(5,26,51,.2), 0 26px 54px -34px rgba(5,26,51,.6)`): marcos, biseles, pedestales.
- **Instrumento** (`inset 0 1px 0 rgba(183,230,248,.4), 0 26px 60px -34px rgba(5,26,51,.9)`): superficies navy.
- **Flotante** (`0 16px 30px -22px rgba(5,26,51,.7)`): fichas de rumbo, avisos, badges.
- **Box Shot** (`inset 0 2px 0 rgba(255,255,255,.3), inset 0 -3px 8px rgba(5,26,51,.4), 0 32px 64px -40px rgba(5,26,51,.85)`): renders 3D de cajas.
- **Botón 3D** (`inset 0 2px 0 rgba(255,255,255,.4), inset 0 -3px 6px rgba(5,26,51,.35), 0 12px 24px -16px rgba(5,26,51,.7)`): botones Buy Now / Download Trial.

### Named Rules

**La Regla del Bisel.** Toda superficie recibe luz de arriba, bisel abajo, sombra proyectada. Un componente sin esa tríada no pertenece al mundo.

**La Regla del Cromo.** Los marcos de ventana, remaches y barras de título usan el degradado cromo completo (4 stops). Los biseles internos usan `inset 0 1px 0 #fff` + `inset 0 -1px 0 rgba(10,35,66,.15)`.

## Shapes

Radios: 8px (campos, badges), 12px (fichas, botones), 16px (tarjetas, paneles), 20px (ventanas producto, box shots), 9999px (píldoras, botones redondos). Compás = círculo perfecto con bisel cromado. Ventanas retro = 20px radio exterior, 14px interior, 5px marco cromo. Cortes rectos = separadores, reglas finas, tablas.

## Components

### Navigation Tabs (Pestañas Metálicas)

- 4 tabs fijas: Domótica, Industria, Agricultura, Salud
- Fondo: degradado cromo vertical, borde inferior 2px dorado en active
- Texto: navy, 13px, semibold, tracking 0.05em
- Hover: fondo aero-claro, subrayado dorado
- Active: filete dorado inferior 3px, texto aero
- Remache dorado sutil en esquinas superiores

### Mega-menu (Soluciones)

- Panel 4 columnas anclado bajo header, una por área
- Cada columna: escena 16:9 en ventana cromo, nombre, estado, descripción, 3 soluciones
- Fondo: cristal helado opaco (no translúcido en menú)
- Pie: nota, "Ver proyectos", "Cuéntanos tu caso"
- Abre hover/teclado, cierra Escape/clic fuera/pérdida foco

### Hero

- Campo cielo con glow aqua radial superior-derecha, glow oro inferior-izquierda
- Izquierda: eyebrow (punto latón), headline navy con cláusula en aero, subhead, botón primario navy+filete oro + secundario cristal, trust line con check
- Derecha: CompassDial cromado (bisel, esfera aqua, rosa vientos grabada, aguja oro/norte, plata/sur, pomo cromo) + 4 bearing chips reales alrededor
- Aguja gira 90° al señalado/enfocado en 700ms ease-out

### Domain Grid (Catálogo Multiproducto)

- 4 tarjetas área (xl:4, md:2, móvil:1)
- Cada tarjeta: ProductWindow con box shot 3D (SVG autorizado) → marco cromo 5px + remaches + barra título 3 luces + botones ventana
- Overlay status badge (live/exploration) esquina superior-izquierda
- Debajo escena: nombre área (Space Grotesk Title), descripción (Source Sans 3 Body), 3 soluciones como lista con puntos de estado (live=verde lleno, exploration=oro hueco)
- Link "Ver área" con flecha

### Product Window (Ventana de Producto / Box Shot)

- Marco cromo 5px con 4 remaches (radial gradient blanco→hielo→cromo→azul acero)
- Barra título: gradiente horizontal 3 luces (azul `#2b7fbe`, dorado `#e0b85a`, plata `#9dbdd4`) + 3 botones ventana [ _ ][ □ ][ X ] (9px redondos, sombras inset) + título centrado en pista cristal
- Cuerpo: navy (`#0a2342`) con escena vectorial SectorScene (aspect-ratio 4/3)
- Sheen superior: `linear-gradient(105deg, transparent, rgba(255,255,255,.22) 46%, transparent)`
- Barra estado inferior: cromo gradiente + indicador verde pulso + controles ficticios (3 botones redondos cromo/oro)

### Product Card (Ficha de Producto/Software)

- Contenedor glass-panel redondeado 16px
- Header: ProductWindow miniatura (aspect 16:10) + badge status
- Título producto (Space Grotesk Title) + tagline (Body)
- Resumen servicios (Body, 2-3 líneas)
- Enlace "Ver suite del sistema" (aero, subrayado oro hover)
- Botón 3D glossy: "Buy Now" / "Download Trial" (gradiente oro→oro-claro→oro, bisel superior blanco, filete inferior oro-oscuro, sombra profunda, hover: translateY(-2px) + brillo sweep)
- Ficha técnica compacta (Mono): archivo, versión, tamaño, plataforma, checksum
- Badges dorados flotantes: "ISO Medical Certified", "Industrial Grade", "100% Secure System" (sello con reflejo radial, texto navy, tracking ancho)

### Screenshot Frame (Marco Captura)

- Ventana retro completa: marco cromo + barra título 3 luces + botones [ _ ][ □ ][ X ] funcionales
- Contenido: SectorScene o placeholder
- Sheen superior, barra estado inferior

### License Comparison Table (Tabla Comparativa)

- Tabla con bordes inset/outset (relieve físico)
- Header: gradiente cromo, texto navy, tracking ancho
- Filas: alternadas cielo/plata, hover highlight aero-suave
- Columnas: Módulo (Mono), Licencia Básica, Profesional, Enterprise (badges píldora)
- Checkmarks: círculos verde estado con pulso sutil
- Footer: nota legal mono-sm

### Badges (Insignias Flotantes)

- Forma: sello redondeado 12px o escudo pixel-art
- Fondo: gradiente oro 135° (`#e0b85a` → `#f5dfa6` → `#e0b85a`)
- Texto: navy, Label (600, 0.688rem, 0.16em tracking)
- Reflejo: radial gradient blanco 30% esquina superior-izquierda
- Sombra flotante + bisel inferior sutil
- Variantes: "ISO Medical Certified" (salud), "Industrial Grade" (industria), "100% Secure System" (todos), "CE Marked" (médico), "FDA Compliant" (médico)

### Compass Dial (Componente Firma)

- Bisel cromado 8px (gradiente 4 stops), esfera aqua con rosa vientos grabada navy
- Marcas grado navy cada 15°, cardinales cada 90°
- Aguja: oro norte (triángulo alargado con reflejo central), plata sur (contrapeso), pomo cromo central
- 4 bearing chips reales alrededor (cristal, navy, radio 1/8 compás)
- Interacción: hover/focus bearing → aguja gira 90° en 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
- Móvil: max-w-[20rem], chips reacomodados

### Sector Scene (Componente Firma)

- Ilustración vectorial plana SVG, sin degradados fotográficos: house, gym, clinic, agro, industry, lab
- Paleta navy / aqua / dorado / verde aqua / rojo médico sobre cielo helado
- 3 tamaños: ProductWindow (4/3), DomainGrid card (16:10), Mega-menu (16:9)

## Do's and Don'ts

### Do:

- **Do** reservar dorado para orientación, estado, foco, badges, botones acción principal.
- **Do** dar a cada superficie luz arriba, bisel abajo, sombra proyectada.
- **Do** usar cristal blanco y cromo para paneles; navy para instrumentos y cierre.
- **Do** dibujar cada dominio con escena plana reconocible antes que interfaz genérica.
- **Do** enlazar cada solución a destino real: proyecto, área o contacto.
- **Do** mantener menú móvil y mega-menú opacos: legibilidad gana al vidrio.
- **Do** usar Space Grotesk para display/headline/title, Source Sans 3 para body/label, JetBrains Mono para specs.
- **Do** autor box shots SVG como renders 3D creíbles (perspectiva isométrica, biseles, reflejos).
- **Do** implementar barras de título retro con 3 luces + botones [ _ ][ □ ][ X ] en todas las ventanas.
- **Do** usar bordes inset/outset en tablas comparativas para relieve físico.

### Don't:

- **Don't** volver a papel cálido, latón envejecido, serif editorial.
- **Don't** usar campo estelar decorativo, marquesinas, contadores visitas.
- **Don't** usar sombras duras ni halos color como profundidad.
- **Don't** usar monoespaciada como atajo de "técnico" fuera de fichas técnicas.
- **Don't** ocultar área sin proyectos: se muestra en exploración con box shot placeholder.
- **Don't** inventar capturas, precios, clientes, métricas, benchmarks.
- **Don't** prometer productos que no existen: soluciones enlazan a capacidades reales, áreas exploración o contacto.
- **Don't** usar una sola familia tipográfica para todo.
- **Don't** omitir remaches en marcos cromo de ventanas/product windows.
- **Don't** usar botones planos: botones de acción son 3D glossy con bisel y sombra.

(End of file)
