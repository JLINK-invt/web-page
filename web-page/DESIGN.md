---
name: Cosmos Compass
description: Software a medida para operaciones reales, presentado como un instrumento de cristal y cromo: cuatro áreas, sus soluciones y los productos que ya están en marcha.
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
typography:
  display:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 4.6rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Source Sans 3, ui-sans-serif, system-ui, sans-serif"
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
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
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
---

# Design System: Cosmos Compass

## Overview

**Creative North Star: "Aero chrome"**

Cosmos Compass se ve como un sitio de producto de 2003 reconstruido con disciplina de 2026: un campo de cielo azul, cristal blanco, marcos de cromo y una brújula de mesa que orienta entre cuatro áreas. La nostalgia aporta el material —brillo, bisel, cromo, gotas de luz—; la funcionalidad moderna aporta la jerarquía, el espaciado, el foco y la respuesta. La página es simple: cada bloque dice lo necesario y deja el resto al menú y a las páginas de área.

El navy sostiene el texto y los instrumentos. El plateado construye marcos y biseles. El dorado se reserva a la aguja, al rumbo activo y a los filetes finos. El blanco helado es el suelo. Nada de papel cálido, serif editorial ni campo estelar decorativo. El compás es la pieza firma; el mega-menú de cuatro columnas es su mapa; las escenas vectoriales son la prueba visual de cada operación.

**Key Characteristics:**

- Cielo azul helado, cristal blanco, cromo plateado, navy y dorado.
- Un compás de mesa con bisel cromado, esfera aqua y aguja dorada.
- Cuatro áreas siempre visibles: Domótica, Agricultura, Industria y Salud, con estado y soluciones propias.
- Escenas vectoriales planas dentro de ventanas cromadas; nunca capturas inventadas.
- Source Sans 3 (sustituto libre de Frutiger) en todos los niveles.
- Movimiento breve y mecánico: la aguja gira, el menú se despliega, los bloques aparecen al hacer scroll.

## Colors

Tres familias: hielo para el suelo, navy para la tinta y los instrumentos, cromo y dorado para la profundidad y la orientación.

### Primary

- **Navy / Tinta** (`#0a2342`): texto principal, fondos de cierre, cuerpo de las ventanas y paneles profundos.
- **Aero** (`#1769aa`): enlaces, verbos de estado y acentos sobre superficies claras.
- **Cielo** (`#eef7fd`) y **Plata** (`#d7e8f5`): suelo y bandas alternas.

### Secondary

- **Dorado** (`#e0b85a`): aguja del compás, rumbo activo, filetes de foco y detalles de las escenas.
- **Oro oscuro** (`#8a5f14`): texto pequeño dorado sobre claro (etiquetas de formulario), con contraste AA.
- **Cromo** (`#cfdce8` → blanco → `#7e9fba`): biseles, marcos, tapas y barra de estado.
- **Aqua** (`#4fb8e8`) y **Aqua suave** (`#b7e6f8`): glows de fondo, burbujas y detalles de la esfera.

### Neutral

- **Blanco estrella** (`#f7fbff`): fichas, reflejos y texto sobre navy.
- **Gris azulado** (`#4b647c`): texto secundario.
- **Línea** (`#b9d2e6`): separadores y bordes.
- **Espacio** (`#051a33` / `#0a2b4f` / `#144a75`): profundidades del cierre y del instrumento.

### Named Rules

**La Regla del Dorado.** El dorado marca orientación, estado o foco: la aguja, el rumbo activo, el filete de un botón, el subrayado de un enlace. Nunca es color de cuerpo de texto sobre claro; para eso existe el oro oscuro.

**La Regla del Cielo.** El suelo es cielo helado, no papel: el sitio se lee como un instrumento sobre una mesa de luz. Las superficies oscuras son instrumentos (compás, ventanas, cierre), no decoración.

## Typography

**Display Font:** Source Sans 3 (respaldo ui-sans-serif, system-ui)
**Body Font:** Source Sans 3 (respaldo ui-sans-serif, system-ui)

**Character:** La humanista abierta de Frutiger, en su sustituto libre más cercano: claridad de señalización, altura de x generosa y una neutralidad que no compite con el instrumento. Una sola familia sostiene titulares, rótulos y prosa; la jerarquía se construye con tamaño, peso y tracking, no con una segunda fuente.

### Hierarchy

- **Display** (600, clamp 2.4–4.6rem, 0.98): portada y cabeceras de página.
- **Headline** (600, clamp 1.9–2.9rem, 1.05): títulos de sección.
- **Title** (600, 1.25rem, 1.2): áreas, productos y tarjetas.
- **Body** (400, 1rem, 1.6): prosa, máximo 75 caracteres de medida.
- **Label** (600, 0.688rem, 0.16em, mayúsculas): estados, enlaces y rótulos de instrumento.

### Named Rules

**La Regla de una Sola Voz.** No hay monoespaciada ni serif: la medida se comunica con el tamaño del rótulo, no con una fuente de consola. El tracking negativo se reserva a los titulares.

## Layout

Contenedor máximo de 1280px (`max-w-7xl`), margen lateral de 20px en móvil, 32px en sm y 48px en lg. Retícula de 12 columnas en lg; la portada se divide 6/6 entre la declaración y el compás. Las tarjetas de área van en 4 columnas en xl, 2 en md y 1 en móvil, y muestran sólo lo necesario: escena, nombre, estado, descripción, nombres de sus soluciones y “Ver área”. El menú “Soluciones” es un panel de cuatro columnas anclado al viewport, con escena 16:9, estado, descripción y las tres soluciones de cada área; en móvil se vuelve un acordeón de cuatro bloques.

## Elevation & Depth

La profundidad es material y física: luz desde arriba, bisel oscuro abajo, sombra proyectada. El cristal es blanco translúcido con un filo interior claro; el cromo es un degradado vertical blanco → hielo → blanco → azul acero. El navy profundo se usa en el cierre y en el cuerpo de las ventanas. No hay halos de color como profundidad ni sombras de desplazamiento nulo.

### Shadow Vocabulary

- **Cristal** (`inset 0 1px 0 #fff, inset 0 -1px 0 rgba(10,35,66,.08), 0 22px 46px -30px rgba(5,26,51,.55)`): paneles, tarjetas y fichas.
- **Cromo** (`inset 0 1px 0 #fff, inset 0 -2px 5px rgba(5,26,51,.2), 0 26px 54px -34px rgba(5,26,51,.6)`): marcos, biseles y pedestales.
- **Instrumento** (`inset 0 1px 0 rgba(183,230,248,.4), 0 26px 60px -34px rgba(5,26,51,.9)`): superficies navy.
- **Flotante** (`0 16px 30px -22px rgba(5,26,51,.7)`): fichas de rumbo y avisos.

### Named Rules

**La Regla del Bisel.** Toda superficie recibe luz de arriba y bisel abajo. Un componente sin esa tríada no pertenece al mundo.

## Shapes

Radios suaves y continuos: 12px en campos y fichas, 16px en tarjetas y paneles, 20px en ventanas de producto, 9999px en botones y píldoras. El compás es el único círculo perfecto y siempre lleva bisel cromado. Los cortes rectos se reservan a separadores y reglas finas.

## Components

### Buttons

- **Primary:** píldora navy con degradado azul, filo claro superior, filete dorado inferior y sombra proyectada; hover sube 2px y aclara el azul.
- **Secondary:** cristal blanco con borde blanco y texto navy. **Inverse:** blanco/plata para fondos navy, con filete dorado. **Ghost:** texto navy con subrayado dorado.
- **Focus:** anillo de 2px en aero con 3px de separación.

### Chips y estados

- Píldora blanca translúcida, borde blanco y rótulo de 0.6rem en mayúsculas.
- **Activo / live:** punto lleno en aero sobre fondo azul claro.
- **Exploración:** punto hueco con borde dorado.

### Cards / Containers

- 16px de radio, fondo blanco helado translúcido, luz superior interior, borde blanco y sombra de cristal.
- Padding de 16px en fichas, 20–24px en tarjetas, 24–32px en paneles.

### Inputs / Fields

- 12px de radio, fondo blanco, borde de línea azul, sombra interior tenue. Foco con borde aero y anillo al 20%.
- Error con aviso dorado y ruta de recuperación (email).

### Navigation

- Barra pegajosa de cristal helado con filo interior claro y filete dorado inferior; el difuminado vive en una capa interna para no romper el anclaje del menú.
- Enlaces en 13px; hover aero con subrayado dorado. Selector de idioma en píldora navy/clara.
- **Soluciones:** panel de cuatro columnas, una por área, anclado bajo la barra, con escena 16:9, nombre, estado, descripción y soluciones; pie con nota, “Ver proyectos” y “Cuéntanos tu caso”. Abre con hover o teclado, cierra con Escape, clic fuera o pérdida de foco.
- **Móvil:** panel sólido helado con acordeón de Soluciones (cuatro bloques con miniatura, estado, descripción y soluciones en dos columnas), nota, selector de idioma y CTA.

### El Compás (componente firma)

- Bisel cromado, esfera aqua con rosa de los vientos grabada, marcas de grado navy, aguja dorada al norte y plateada al sur, pomo cromado.
- Cuatro fichas de rumbo reales alrededor; al señalarlas o enfocarlas la aguja gira 90° hacia ese rumbo en 700ms.
- En móvil baja a `max-w-[20rem]` y las fichas se reacomodan sin salir del viewport.

### La Escena de Sector (componente firma)

- Ilustración vectorial plana, sin degradados fotográficos ni capturas: casa conectada, gimnasio, consultorio, invernadero, planta y laboratorio.
- Paleta navy / aqua / dorado / verde aqua sobre cielo helado.
- Tres tamaños: ventana de producto, tarjeta de área (16:10) y menú (16:9). La escena explica el dominio; el marco aporta el peso físico.

### La Ventana de Producto (componente firma)

- Marco cromado de 5px con remaches, barra de título de tres luces (azul, dorado, plata), cuerpo navy y escena de sector.
- Barra de estado inferior de cromo con píldora de progreso y controles. En detalle de proyecto va a tamaño natural; en el home ocupa el ancho de la tarjeta.

## Do's and Don'ts

### Do:

- **Do** reservar el dorado para orientación, estado y foco.
- **Do** dar a cada superficie luz de arriba, bisel abajo y sombra proyectada.
- **Do** usar cristal blanco y cromo para los paneles; navy para los instrumentos y el cierre.
- **Do** dibujar cada dominio con una escena plana reconocible antes que con una interfaz genérica.
- **Do** enlazar cada solución a un destino real: proyecto, área o contacto.
- **Do** mantener el menú móvil y el mega-menú opacos: la legibilidad gana al vidrio.

### Don't:

- **Don't** volver al papel cálido, al latón envejecido ni a la serif editorial.
- **Don't** usar campo estelar decorativo, marquesinas ni contadores de visitas.
- **Don't** usar sombras duras ni halos de color como profundidad.
- **Don't** usar monoespaciada como atajo de “técnico”.
- **Don't** ocultar un área sin proyectos: se muestra en exploración y tiene su propia página.
- **Don't** inventar capturas, precios, clientes o métricas.
- **Don't** prometer productos que no existen: las soluciones enlazan a capacidades reales, áreas en exploración o al contacto.
