# Web académica de Pablo Esparcia Casado

Web estática preparada para GitHub Pages. Los archivos de esta copia están en la raíz del repositorio; no necesita instalación ni compilación. La web funciona con sus archivos locales; la carga de tipografías desde Google Fonts es opcional.

## Ver la web

Abre `index.html` en tu navegador. Abre `cv.html` para ver el currículum; el botón **Print / Save as PDF** permite imprimirlo o guardarlo en PDF desde el navegador.

## Activar GitHub Pages

El repositorio de esta web es [Pabloesparciacasado/website](https://github.com/Pabloesparciacasado/website). En la copia de GitHub, los archivos del sitio están directamente en la raíz: `index.html`, `cv.html`, `styles.css`, `app.js` y la carpeta `assets/`. La carpeta `dist` corresponde únicamente al paquete local; en GitHub se sube su contenido, sin esa carpeta contenedora.

1. Inicia sesión en GitHub con tu cuenta **Pabloesparciacasado** y abre el [repositorio website](https://github.com/Pabloesparciacasado/website).
2. Abre **Settings → Pages**. En **Build and deployment**, elige **Source: Deploy from a branch**.
3. En **Branch**, selecciona **main** y **/(root)**, y pulsa **Save**.
4. Cuando GitHub termine la publicación, abre [https://pabloesparciacasado.github.io/website/](https://pabloesparciacasado.github.io/website/). La sección Pages mostrará el estado y el enlace de la web.

Si la web tarda en aparecer, espera unos minutos y consulta el estado en **Settings → Pages**. Una actualización puede tardar un poco en reflejarse en el navegador.

## Actualizar el contenido

- Edita el texto en inglés de `index.html` para actualizar la web principal.
- Edita los textos en español del objeto `translations` de `app.js`. Cada clave corresponde al atributo `data-i18n` del mismo elemento en `index.html`; conserva esos nombres para que el selector EN/ES siga funcionando. Al cambiar un dato, actualiza ambas versiones.
- Edita `cv.html` para actualizar el currículum.
- Los documentos de los proyectos están enlazados a los originales de Google Drive. Conserva su acceso público para que los visitantes puedan abrirlos.
- Para publicar cambios, vuelve a subir los archivos modificados a la raíz del mismo repositorio y guarda los cambios en **main**.

Las rutas anteriores corresponden a esta copia de GitHub. En el paquete descargable, estos archivos están dentro de la carpeta `dist/`. Para una nueva subida manual, utiliza **Add file → Upload files** y sube el contenido de `dist`, conservando la carpeta `assets/`.

Consulta `SOURCES.md` para ver las fuentes de la información y la discrepancia de fechas del máster que se ha evitado trasladar a la web.

## Tipografías y conexión

`styles.css` solicita **DM Sans** y **Libre Caslon Display** a Google Fonts para la presentación principal. Si no hay conexión o el navegador bloquea esa carga, utiliza automáticamente Arial y Georgia/Times New Roman del dispositivo. Para prescindir de Google Fonts, elimina la primera línea `@import` de `styles.css`; las fuentes locales ya están configuradas como alternativa. El currículum utiliza únicamente fuentes locales.

Los enlaces a Google Drive, LinkedIn y otros recursos externos requieren conexión cuando se abren.

## Archivos de entrega

- `index.html`, `styles.css`, `app.js` y `assets/`: sitio listo para publicar.
- `cv.html`: currículum accesible, adaptable a móvil e imprimible.
- `SOURCES.md`: fuentes y decisiones sobre datos personales y académicos.
- `README.md`: estas instrucciones.

La subida de los archivos y la activación de GitHub Pages son pasos separados. La web será pública en la dirección indicada cuando actives Pages y GitHub termine su publicación.
