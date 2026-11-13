# Mimi

Portafolio de Yohanan Naomi Zúñiga Jiménez y sistema de diseño de su marca personal.

## Páginas publicadas

- [Landing del CV](https://yohanannaomi-tech.github.io/mimi_landing/)
- [Sistema de diseño](https://yohanannaomi-tech.github.io/mimi_landing/design.html)

## Documentos

- [CV.md](CV.md)
- [DESIGN.md](DESIGN.md)
- [Arquitectura del CV (Word)](documentos/CV.docx)
- [Sistema de diseño (Word)](documentos/DESIGN.docx)
- [Tokens del sistema de diseño (JSON)](design-tokens.json)

## Documento a Markdown y guía visual

Los Word son editables. Para convertirlos de nuevo y actualizar la guía:

```bash
python3 -m pip install -r herramientas/requirements.txt
python3 herramientas/convertir_y_construir.py
```

El script lee los Word, conserva encabezados, párrafos y tablas en Markdown, y construye `design.html` con ese contenido y ejemplos de interfaz. Los tokens complementarios se declaran en el script. El portafolio existente se conserva: su estructura y contenido están documentados en CV.md; los cambios posteriores de arquitectura se aplican a index.html y app.js.

Los documentos definen el contenido del portafolio y las reglas generales de identidad de Mimi. La guía visual es una página independiente, sin navegación lateral, con seis bloques visuales y ejemplos de uso.

## Vista previa

No requiere framework ni compilación para visitar las páginas.

```bash
python3 -m http.server 4173
```

Abrir `http://localhost:4173/` y `http://localhost:4173/design.html`.

## Publicar en GitHub Pages

1. Subir el contenido de esta carpeta a la raíz de un repositorio propio, conservando `assets` y sus subcarpetas.
2. En Settings → Pages, seleccionar Deploy from a branch, la rama principal y la carpeta raíz.
3. Al terminar la publicación, el portafolio estará en la dirección base del repositorio y el sistema en esa misma dirección seguida de `/design.html`.
4. Verificar navegación, imágenes, documentos y reproducción del video desde la URL publicada.

Los enlaces son relativos: funcionan en un repositorio de proyecto sin escribir un nombre de usuario de GitHub en el código.

## Tecnología y recursos

HTML, CSS y JavaScript locales. MuseoModerno y Montserrat se sirven desde `assets`. El video ICEE y las fotografías se incluyen en la carpeta. Las marcas de los proyectos se muestran como parte del portafolio; los ejercicios académicos no implican encargos o afiliaciones oficiales.

