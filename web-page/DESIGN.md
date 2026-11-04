---
name: Cosmos Compass
description: 'Sitio de producto con la estética de una aplicación de escritorio Windows XP/Luna de 2004: campo gris, una sola ventana centrada, filetes de un píxel, tipografía pequeña y controles azul gel.'
colors:
  paper: '#f7f7f7'
  field: '#e4e4e4'
  ink: '#333333'
  muted: '#6b6b6b'
  line: '#d3d3d3'
  panel: '#ffffff'
  panel-soft: '#f2f2f2'
  panel-sunken: '#fafafa'
  blue: '#2a5db0'
  blue-deep: '#1f4b96'
  blue-bright: '#3f79cd'
  blue-pale: '#eef3fa'
  gold: '#e0b85a'
  gold-deep: '#8a6a1f'
  gold-light: '#f6e2b4'
  gold-ink: '#3a2c0a'
  green: '#4c9a4c'
  green-deep: '#2f6f2f'
  green-wash: '#eef7ea'
  green-ink: '#35662f'
  amber-wash: '#fdf6e6'
  amber-ink: '#7a6320'
  chrome: '#dcdcdc'
  chrome-deep: '#8f8f8f'
  osd-top: '#2c4a78'
  osd-bottom: '#1c3557'
  osd-active: '#4f86d6'
  banner-hi: '#2f6fd0'
  banner-mid: '#2a63be'
  banner-lo: '#1c4a94'
  banner-accent: '#ffe3a3'
  titlebar-hi: '#4a7fc4'
  nav-hover: '#7fa4dd'
  blue-gel-hi: '#6d9ee0'
  gold-gel-hi: '#fbe9bd'
  gold-gel-mid: '#efc974'
  gold-gel-lo: '#d6a43b'
  gold-border: '#96701c'
  panel-border: '#d8d8d8'
  shelf-border: '#cfcfcf'
  frame-border: '#c9c9c9'
  input-border: '#b8b8b8'
  status-green-border: '#b8cfae'
  status-amber-border: '#dcc79a'
  status-amber-dot: '#c79a33'
  close-hi: '#f4b48d'
  close-lo: '#c0562f'
  status-red: '#b8442c'
typography:
  display:
    fontFamily: 'PT Sans, Tahoma, Verdana, ui-sans-serif, system-ui, sans-serif'
    fontSize: 'clamp(1.85rem, 3.6vw, 3.15rem)'
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: '-0.025em'
  headline:
    fontFamily: 'PT Sans, Tahoma, Verdana, ui-sans-serif, system-ui, sans-serif'
    fontSize: '21px'
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: '-0.01em'
  title:
    fontFamily: 'PT Sans, Tahoma, Verdana, ui-sans-serif, system-ui, sans-serif'
    fontSize: '17px'
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: '-0.01em'
  body:
    fontFamily: 'PT Sans, Tahoma, Verdana, ui-sans-serif, system-ui, sans-serif'
    fontSize: '13px'
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '0em'
  label:
    fontFamily: 'PT Sans, Tahoma, Verdana, ui-sans-serif, system-ui, sans-serif'
    fontSize: '11px'
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: '0.08em'
  mono:
    fontFamily: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace'
    fontSize: '11px'
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '0em'
rounded:
  control: '2px'
  panel: '3px'
  pill: '10px'
spacing:
  hair: '2px'
  xs: '4px'
  sm: '8px'
  md: '12px'
  lg: '16px'
  xl: '24px'
components:
  button-primary:
    backgroundColor: 'linear-gradient(180deg, #6d9ee0 0%, #3f79cd 48%, #2a5db0 100%)'
    textColor: '#ffffff'
    rounded: '{rounded.panel}'
    padding: '7px 16px'
  button-gold:
    backgroundColor: 'linear-gradient(180deg, #fbe9bd 0%, #efc974 46%, #d6a43b 100%)'
    textColor: '{colors.gold-ink}'
    rounded: '{rounded.panel}'
    padding: '7px 16px'
  button-light:
    backgroundColor: 'linear-gradient(180deg, #ffffff 0%, #f0f4fa 52%, #e1e9f4 100%)'
    textColor: '{colors.blue-deep}'
    rounded: '{rounded.panel}'
    padding: '7px 16px'
  panel:
    backgroundColor: '{colors.panel}'
    textColor: '{colors.ink}'
    rounded: '0'
    padding: '12px 16px'
  strip-card:
    backgroundColor: '{colors.panel-soft}'
    textColor: '{colors.ink}'
    rounded: '0'
    padding: '12px 16px'
  input:
    backgroundColor: '{colors.panel}'
    textColor: '{colors.ink}'
    rounded: '{rounded.control}'
    padding: '6px 8px'
  status-pill:
    backgroundColor: '{colors.green-wash}'
    textColor: '{colors.green-ink}'
    rounded: '{rounded.pill}'
    padding: '2px 8px'
  window-frame:
    backgroundColor: 'linear-gradient(180deg, #ffffff 0%, #e9e9e9 100%)'
    textColor: '{colors.ink}'
    rounded: '{rounded.panel}'
    padding: '3px'
  titlebar:
    backgroundColor: 'linear-gradient(180deg, #4a7fc4 0%, #2a5db0 100%)'
    textColor: '#ffffff'
    rounded: '0'
    padding: '8px 9px'
  statusbar:
    backgroundColor: 'linear-gradient(180deg, #eeeeee 0%, #dddddd 100%)'
    textColor: '{colors.muted}'
    rounded: '0'
    padding: '5px 9px'
---

# Design System: Cosmos Compass — Luna Window

## Overview

**Creative North Star: "The 2004 Desktop Window"**

Cosmos Compass se presenta como una única ventana de aplicación de escritorio sobre un campo gris: barra de menú arriba, área de contenido con scroll propio, barra de estado al pie. El material es el de Windows XP/Luna —azul gel, filetes de un píxel, degradados de tres pasos, tipografía de 10–13 px— aplicado con la disciplina de 2026: jerarquía clara, foco visible, contraste AA y navegación por teclado.

El sitio no imita un sistema operativo entero ni dibuja ventanas flotantes decorativas. Hay **una** ventana, siempre centrada, de 1040 px como máximo; dentro, cada superficie es un panel plano con cabecera gris y borde hairline. Los datos de producto son reales; no hay capturas inventadas, precios, clientes ni certificaciones falsas.

**Key Characteristics:**

- Una sola columna-ventana sobre campo gris, con nav-shelf, main con scroll interno y footer de estado.
- Paneles blancos cuadrados con borde `#d8d8d8`; cabeceras en gradiente gris claro y títulos de 15–21 px.
- Azul de barra de título (`#2a5db0`) con controles cuadrados de 13×12 px; barra de estado gris con indicador verde.
- Botones gel de tres pasos: azul primario, dorado para la acción principal del banner, claro para acciones secundarias.
- Banner azul glossy en cada página interior, con titular blanco y un solo reflejo diagonal.
- Tipografía PT Sans para todo (display, títulos, cuerpo, rótulos) y JetBrains Mono solo para fichas técnicas.
- Estados como píldoras funcionales: verde "Operativo" / ámbar "En exploración"; nunca como decoración.

## Colors

Tres familias: gris de escritorio, azul de sistema y blanco de panel. El dorado es acento escaso; el verde y el ámbar solo comunican estado.

### Primary

- **Azul sistema** (`#2a5db0`): barras de título, botones primarios, enlaces, foco y énfasis.
- **Azul profundo** (`#1f4b96`): hover de enlaces, bordes de control, texto sobre botón claro.
- **Azul brillante** (`#3f79cd`): paso medio de los degradados gel y hover de botón.

### Secondary

- **Dorado** (`#e0b85a`): acción principal del banner, viñetas de área, filetes de foco y detalles de arte.
- **Oro profundo** (`#8a6a1f`): texto dorado pequeño sobre claro (contraste AA) y bordes de viñeta.
- **Oro claro** (`#f6e2b4`): paso superior del botón dorado y reflejos.
- **Verde estado** (`#4c9a4c`) / **verde texto** (`#35662f`): indicador "Operativo".
- **Ámbar estado** (`#7a6320`) sobre `#fdf6e6`: indicador "En exploración".

### Neutral

- **Campo** (`#e4e4e4`, degradado a `#dedede`): escritorio detrás de la ventana.
- **Papel** (`#f7f7f7`): suelo de la ventana y de las páginas interiores.
- **Blanco panel** (`#ffffff`): superficies de contenido.
- **Gris panel** (`#f2f2f2`): cabeceras de panel y barras de herramientas.
- **Gris hundido** (`#fafafa`): filas y cajas dentro de un panel.
- **Tinta** (`#333333`): texto principal.
- **Apagado** (`#6b6b6b`): texto secundario y barras de estado.
- **Línea** (`#d3d3d3` → `#d8d8d8`): bordes hairline.
- **Cromo** (`#dcdcdc` → `#8f8f8f`): controles y marcos de ventana.
- **OSD** (`#2c4a78` → `#1c3557`): menú del monitor del hero.

### Named Rules

**La Regla del Gris.** El suelo es gris de escritorio, no blanco. La ventana se distingue del campo por un filete y una sombra de un píxel, no por una elevación grande.

**La Regla del Azul.** El azul pertenece a la barra de título, al foco, a los enlaces y al botón primario. No se usa como fondo de bloques de texto ni como decoración de sección.

**La Regla del Dorado Escaso.** El dorado aparece en la acción principal del banner, en las viñetas de estado y en detalles de arte. Nunca es texto de cuerpo ni fondo extenso.

## Typography

**Una sola familia:** PT Sans (con Tahoma/Verdana como respaldo) para display, titulares, cuerpo y rótulos. **JetBrains Mono** aparece únicamente en fichas técnicas y metadatos de producto. La jerarquía se construye con tamaño, peso y caja, no con familias distintas.

### Hierarchy

- **Display** (700, `clamp(1.85rem, 3.6vw, 3.15rem)`, 1.04, -0.025em): titular del hero, máximo ~19ch.
- **Headline** (700, 21px, 1.15): título de panel o de página interior; el mismo rol a 19px en `.win-title`.
- **Title** (700, 16–17px, 1.18): tarjetas, filas de proyecto, cabeceras de panel compartido.
- **Body** (400, 12–13.5px, 1.5–1.65): prosa; medida de 65–75 caracteres en páginas de lectura.
- **Label** (400, 11px, 0.08em, mayúsculas): rótulos de campo, metadatos, cabeceras de lista.
- **Mono** (400, 11px, 1.5): pares etiqueta/valor de las fichas de producto.

### Named Rules

**La Regla de una Sola Voz.** No hay serif ni una segunda sans. El tracking negativo se reserva al display; los rótulos en mayúsculas llevan tracking positivo.

**La Regla del Tamaño Pequeño.** El cuerpo no sube de 14px en superficies de ventana. La legibilidad se gana con interlineado y contraste, no agrandando la interfaz.

## Layout

Una columna centrada de **máximo 1040 px** (`.win-column`) sobre el campo gris. La página ocupa `100dvh` con `overflow: hidden`; solo `main` hace scroll. El header y el footer quedan siempre visibles. Márgenes interiores de 8–16 px; en móvil, padding lateral de 12 px.

**Shell:** `body` (flex column) → `.win-column` (borde izquierdo/derecho `#cfcfcf`) → `Header` (nav-shelf) → `main` (flex 1, scroll) → `Footer` (barra de estado).

**Home:** banner azul a sangre con dos columnas (logo + titular + subhead + acciones + nota de estado; monitor SVG con menú OSD y dock de iconos). Debajo, tres tarjetas de franja en rejilla de 3 columnas (1 en móvil, 2 en tablet): producción, exploración, método.

**Páginas interiores:** banner azul con titular y subtítulo → paneles de contenido `.win-panel` con cabecera gris y cuerpo blanco. Dominio: productos y estado de exploración. Proyectos: tarjetas y dominios próximos. Detalle: ficha, reto, enfoque, capacidades y siguiente proyecto. Contacto: datos directos + formulario. Privacidad: prosa a 72ch. Diseños: tres paneles de variantes.

**Navegación:** una sola fila de enlaces de 12 px con subrayado azul en activo; logo-globo en Inicio; selector ES/EN a la derecha. En móvil los enlaces envuelven a dos líneas (comportamiento aceptado). No hay mega-menú ni menú flotante: en la home, los enlaces cambian de panel en el mismo sitio.

**Breakpoints:** `sm` 640, `md` 768, `lg` 1024. La rejilla de franjas pasa de 1 → 2 → 3 columnas; las páginas interiores pasan de una a dos columnas en `lg`.

## Elevation & Depth

El mundo es **plano**. La profundidad se consigue con filetes de un píxel, luz interior superior y degradados cortos de tres pasos, no con sombras grandes ni desenfoques.

### Shadow Vocabulary

- **Ventana** (`0 0 0 1px rgb(255 255 255 / 40%) inset`): filo interior de la columna-ventana.
- **Nav-shelf** (`inset 0 1px 0 #ffffff`): luz superior de la barra de navegación y del footer.
- **Panel** (`inset 0 1px 0 #ffffff` + borde `#d8d8d8`): separa el panel del papel sin elevarlo.
- **Botón gel** (`inset 0 1px 0 rgb(255 255 255 / 45%)`, `inset 0 -1px 0 rgb(0 0 0 / 18%)`): luz arriba, bisel abajo.
- **Campo** (`inset 1px 1px 2px rgb(0 0 0 / 8%)`): inputs hundidos.
- **Menú OSD** (`inset 0 1px 0 rgb(255 255 255 / 22%)`, `2px 3px 8px rgb(10 25 45 / 45%)`): única sombra proyectada del sistema, dentro del arte del monitor.

### Named Rules

**La Regla del Filete.** La separación se dibuja con una línea de 1 px. Si un bloque necesita una sombra grande para entenderse, la jerarquía está mal resuelta.

**La Regla de la Luz Superior.** Toda superficie recibe `inset 0 1px 0` blanco; los controles añaden un bisel oscuro inferior. No hay luz lateral ni halos de color.

## Shapes

Radios mínimos: **2 px** en controles e inputs, **3 px** en paneles, botones y marcos de ventana, **10 px** solo en píldoras de estado y puntos. El resto son esquinas rectas. Los iconos de lanzamiento son círculos glossy de 28–36 px dentro del dock; los controles de barra de título son rectángulos de 13×12 px. No hay cápsulas grandes, blobs ni clip-paths decorativos.

## Components

### Navigation Shelf (`.win-nav`)

- Fondo `linear-gradient(180deg, #fdfdfd, #f0f0f0 62%, #e6e6e6)`, borde inferior `#cfcfcf` y luz interior superior.
- Enlaces de 12 px en `#5a5a5a`; hover azul con subrayado `#7fa4dd`; activo azul negrita con subrayado `#2a5db0`.
- En la home los enlaces son botones que cambian el panel activo; fuera de la home son enlaces de ruta. El logo-globo solo aparece en Inicio.

### Window Column (`.win-column`)

- Máximo 1040 px, centrada, fondo `#f7f7f7`, bordes laterales `#cfcfcf` y filo interior blanco al 40%.
- Contiene header, `main` con scroll y footer; nunca se desplaza como un todo.

### Banner (`.win-banner`)

- Azul de tres pasos (`#2f6fd0` → `#2a63be` → `#1c4a94`) con un reflejo radial en la esquina superior derecha y dos barridos diagonales en `::after`.
- Titular blanco con la cláusula de acento en `#ffe3a3`; subhead `#f4f8ff`; acciones a la izquierda y arte a la derecha.
- Altura determinada por el contenido; no se fuerza a pantalla completa.

### Window Panel (`.win-panel` / `WindowPanel`)

- Fondo blanco, borde `1px #d8d8d8`, sin radio en las páginas interiores.
- Cabecera propia: `linear-gradient(180deg, #fbfbfb, #efefef)`, borde inferior `#d8d8d8`, título de 15 px y `aside` opcional a la derecha.
- Cuerpo con padding de 12–16 px. Es el contenedor por defecto de cualquier sección interior.

### Window Frame (`.window-frame` / `ProductWindow`)

- Marco de 3 px con degradado blanco→gris, borde `#c9c9c9`, radio 3 px y filo interior `#f7f7f7`.
- Barra de título azul (`#4a7fc4` → `#2a5db0`) con texto blanco de 11 px y tres controles: minimizar (azul claro), maximizar (azul muy claro), cerrar (rojo `#f4b48d` → `#c0562f`).
- Barra de estado gris con un indicador verde de 7 px y tres controles decorativos de 11 px (uno dorado).
- El cuerpo aloja `SectorScene` (SVG plano) o `MonitorArt`, nunca una captura raster.

### Status Pill (`.win-status`)

- Píldora de 10 px, mayúsculas, tracking 0.04em, punto de 6 px.
- Operativo: borde `#b8cfae`, fondo `#eef7ea`, texto `#35662f`, punto `#4c9a4c`.
- Exploración: borde `#dcc79a`, fondo `#fdf6e6`, texto `#7a6320`, punto `#c79a33`.
- Siempre refleja un dato real de `project.facts` o del contenido; nunca se inventa un estado.

### Gel Buttons (`.win-btn`)

- Radio 3 px, borde `#1f4b96`, PT Sans 12 px/700, padding 7×16 px.
- Primario: azul de tres pasos con luz superior y bisel inferior; hover un paso más claro; activo invertido con sombra interior.
- Dorado (`.win-btn-gold`): el único botón cálido; reservado a la acción principal del banner.
- Claro (`.win-btn-light`): blanco→azul pálido, texto azul profundo; acciones secundarias y enlaces de tarjeta.
- Plano (`.win-btn-plain`): gris claro para acciones terciarias.
- Fantasma (`.win-btn-ghost`): enlace subrayado sin caja.

### Inputs (`.win-input`)

- Fondo blanco, borde `#b8b8b8`, radio 2 px, texto de 12 px y sombra interior de 2 px.
- Foco: borde azul `#2a5db0` más un anillo de 2 px al 22%. Placeholder `#9a9a9a`.

### Strip Card (`.win-strip-card`)

- Fondo `#f3f3f3`, borde `#dcdcdc`, luz interior superior; sin radio.
- Rótulo de 10 px, título de 17 px, cuerpo de 12.5 px y lista de enlaces con viñetas de 5 px (verde = live, dorado = abierto).
- Arte de 72–84 px anclado arriba a la derecha; el texto reserva 102–122 px de padding derecho.

### Monitor Art & Dock

- Monitor SVG con pantalla azul, barra "Panel de control", reloj, menú OSD navegable y tres filas de producto con punto verde.
- Dock de lanzamiento rápido: banda blanca con borde `#b9c8dc`, iconos glossy circulares (casa, fábrica, brote, cruz) y etiquetas navy de 10 px.

### Footer Status Bar (`.win-footer`)

- Fondo `#ededed` → `#e2e2e2`, borde superior `#cfcfcf`, luz interior.
- Enlaces de 11 px en `#5f5f5f`; hover azul subrayado. Incluye copyright, navegación, email y privacidad.

## Do's and Don'ts

### Do:

- **Do** mantener una sola ventana centrada y dejar que solo `main` haga scroll.
- **Do** separar superficies con filetes de 1 px y luz interior superior.
- **Do** usar PT Sans en todos los niveles y JetBrains Mono solo en fichas técnicas.
- **Do** reservar el azul para navegación, foco, enlaces y botón primario; el dorado para la acción principal del banner y las viñetas.
- **Do** mostrar estados reales como píldoras verde/ámbar, con el valor que existe en el contenido.
- **Do** reutilizar `WindowPanel`, `ProductWindow`, `.win-btn` y `.win-status` antes de crear una variante.
- **Do** mantener el foco visible con un anillo azul de 2 px y objetivos táctiles de al menos 24 px.
- **Do** respetar `prefers-reduced-motion`; el único movimiento autorado es el cambio de panel (`win-swap`, 220 ms).

### Don't:

- **Don't** reintroducir cromo brillante de gran radio, remaches, box shots 3D ni ventanas flotantes.
- **Don't** usar sombras grandes, halos de color, desenfoques de fondo ni glassmorphism.
- **Don't** volver al papel cálido, al latón envejecido ni a la serif editorial.
- **Don't** inventar certificaciones, capturas, archivos `.exe`, versiones, checksums, precios, clientes o métricas.
- **Don't** usar el dorado como color de cuerpo ni como fondo extenso.
- **Don't** añadir un segundo sistema de botones o tarjetas junto a `.win-btn` / `.win-panel`.
- **Don't** ocultar áreas sin producto: se muestran en exploración y tienen página propia.
- **Don't** hacer que el header o el footer desaparezcan al hacer scroll.
