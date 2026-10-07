# tuplus-tpl-001

Plantilla web reutilizable para servicios profesionales (TPL-001), TUPLUS · CEL-TPL-01.

## Enlaces

- **Sitio publicado:** https://titanic-45.github.io/tuplus-tpl-001/
- **Repositorio:** https://github.com/titanic-45/tuplus-tpl-001
- **Drive de TUPLUS:** [pegar enlace aquí]
- **Guía de investigación (Servicios profesionales, Salud y Educación):** [pegar enlace aquí]

## Estado actual

- **TPL-001 · Servicios profesionales:** versión 1 publicada, a la espera de la aprobación del diseño.
- **Formulario de contacto:** envía con Formspree y ofrece WhatsApp como respaldo si el envío falla (BL-05, PR #4).
- **Pendientes de TPL-001:** texto de privacidad y de consentimiento, confirmar la cuenta de Formspree, revisión formal de seguridad con EQU-02, contenido real del cliente y traducción de los mensajes nuevos del formulario.
- **En curso:** separar el núcleo compartido de las variantes por familia (ver "Estructura").
- **Siguientes familias:** TPL-002 (Salud y bienestar) y TPL-003 (Educación y formación).

## Cómo ver y probar el sitio

- **En línea:** abre el enlace del sitio publicado.
- **En tu computadora:** abre `frontend/index.html` o usa Live Server en VS Code.
- **Publicación automática:** cada cambio que se fusiona en `main` vuelve a publicar el sitio en 1 o 2 minutos (GitHub Pages). Puedes ver el proceso en la pestaña *Actions*. Por eso `main` siempre debe estar estable.

## Estructura del repositorio

Estructura actual:

- `/frontend`: el sitio que se publica (`index.html`, `privacidad.html`, `CSS/`, `JS/`, `assets/`).
- `/backend`: reservado. TPL-001 es un sitio estático y no usa backend.
- `/docs`: documentación de arquitectura y planificación (E2).
- `/.github/workflows/static.yml`: despliegue automático desde `./frontend`.

Propuesta en revisión (núcleo + variantes):

- `/core`: lo compartido entre familias (header, footer, botón de WhatsApp, variables de color y tipografía, tarjetas genéricas).
- `/tpl-001`, `/tpl-002`, `/tpl-003`: lo específico de cada familia (textos, secciones, contenido).

Reglas del núcleo:

- Las variantes reutilizan el núcleo; no se duplican proyectos sin justificación.
- Ninguna variante modifica el núcleo en silencio.
- Si mueves archivos, actualiza las rutas relativas del HTML y la ruta de despliegue en `static.yml`; de lo contrario se rompe el sitio publicado.

## Archivos clave

- `frontend/JS/data.js`: textos de ejemplo, destino de WhatsApp, logo, datos, redes y mapa.
- `frontend/JS/contacto.js`: envío del formulario con Formspree y respaldo a WhatsApp.
- `frontend/JS/translations.js` y `frontend/JS/i18n.js`: traducciones. Si cambias un texto de la plantilla, actualiza su equivalente.
- `frontend/privacidad.html`: información de privacidad. Está pendiente de aprobación.

## Cómo trabajar

1. Pide acceso al repositorio a la líder del equipo (usuario de GitHub).
2. Crea una rama desde `main`, nombrada por función: `feat/...`, `fix/...` o `docs/...`.
3. Haz tus cambios y confirma (commit) con un mensaje claro.
4. Abre un Pull Request hacia `main`: explica qué cambia y qué pruebas hiciste.
5. Otra persona, distinta de quien lo escribió, lo revisa. La líder lo fusiona.

Si no tienes Git instalado, puedes subir cambios desde la web de GitHub: *Add file → Upload files*, y marca *Create a new branch for this commit*.

Reglas:

- Nadie sube directo a `main`.
- No se suben claves, contraseñas ni datos reales de clientes. Solo contenido de ejemplo.
- Antes de mover o renombrar archivos, avisa en el canal del equipo.

## Roles por función

- **Líder de célula:** coordina, hace la revisión final y fusiona.
- **Frontend y UX/UI:** construyen y mantienen el sitio.
- **QA y revisión de código:** pruebas funcionales y revisión de Pull Requests.
- **Seguridad:** revisión con el checklist EQU-02.
- **Documentación y datos:** ordenan la información del cliente y los manuales.

## Documentación relacionada

- `CONTRIBUTING.md`: flujo de ramas y revisión.
- `docs/E2_Arquitectura_y_Planificacion.md`: backlog, mapa del producto y arquitectura de TPL-001.
- `LEEME-CAMBIOS.txt`: historial de la entrega V3. Ojo: describe el formulario como local; hoy envía con Formspree.
