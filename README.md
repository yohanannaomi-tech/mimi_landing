# Landing CV · Mimi

**Autora:** Yohanan Naomi Zúñiga Jiménez

Este repositorio reúne el portafolio de diseño gráfico de Mimi y la guía visual de su sistema de diseño. Ambas páginas se adaptan a móvil, tableta y escritorio y están construidas con HTML, CSS y JavaScript. [CV.md](CV.md) contiene la arquitectura y los textos del portafolio; [DESIGN.md](DESIGN.md) describe la identidad, los colores, la tipografía, los espacios, las formas y los componentes de Mimi.

El portafolio presenta proyectos de identidad de marca, diseño de etiquetas, diseño editorial, modelado 3D y motion graphics, además de las secciones Sobre mí y Contacto.

## Páginas publicadas

- [Landing del CV](https://yohanannaomi-tech.github.io/mimi_landing/)
- [Sistema de diseño](https://yohanannaomi-tech.github.io/mimi_landing/design.html)

## Documentos

- [CV.md](CV.md)
- [DESIGN.md](DESIGN.md)
- [Arquitectura del CV (PDF)](https://yohanannaomi-tech.github.io/mimi_landing/documentos/CV.pdf)
- [Sistema de diseño (PDF)](https://yohanannaomi-tech.github.io/mimi_landing/documentos/DESIGN.pdf)
- [Arquitectura del CV (Word editable)](documentos/CV.docx)
- [Sistema de diseño (Word editable)](documentos/DESIGN.docx)

## Contenido del repositorio

- [index.html](index.html) — landing del CV y portafolio.
- [design.html](design.html) — guía visual del sistema de diseño.
- [style.css](style.css) — estilos y adaptación del portafolio a distintos tamaños de pantalla.
- [app.js](app.js) — fichas de proyectos, loops animados, menú y estela del cursor.
- [design.css](design.css) — estilos del sistema de diseño.
- [design.js](design.js) — ejemplos interactivos y copia de colores de la guía.
- [fonts.css](fonts.css) — carga local de Montserrat y MuseoModerno.
- [assets/](assets/) — fotografías, logotipo, monograma, favicon, tipografías, galerías y video.
- [documentos/](documentos/) — documentos Word y PDF del proyecto.
- [design-tokens.json](design-tokens.json) — valores del sistema de diseño.
- [herramientas/](herramientas/) — herramientas de conversión de los documentos.

## Cómo verlo localmente

Desde la carpeta del proyecto, inicia un servidor local:

```bash
python3 -m http.server 4173
```

Después visita:

- Portafolio: `http://localhost:4173/`
- Sistema de diseño: `http://localhost:4173/design.html`

## Accesibilidad

Las páginas incluyen controles con nombres accesibles, textos alternativos en las imágenes y navegación por teclado. Las fichas de proyectos tienen un botón de cierre y admiten la tecla Escape. Los loops y la estela del cursor respetan la preferencia de movimiento reducido; la estela no bloquea los clics y se desactiva en dispositivos táctiles.

El sistema de diseño incluye recomendaciones sobre tamaños de texto, contraste y áreas de al menos 44 × 44 píxeles para controles táctiles.
