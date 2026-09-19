# TPL-001 · Plantilla de landing page para servicios profesionales

Plantilla de página única (landing page) reutilizable para negocios de servicios profesionales: estudios de abogados, consultoras, contadores, consultorios y similares. Está hecha en HTML, CSS y JavaScript, sin frameworks ni backend.

- **Célula:** CEL-TPL-01 · Plantillas Webs y Landing Pages
- **Empresa:** TUPLUS · 7CANALES MARKETING DIGITAL S.R.L.
- **Familia:** TPL-001 · Servicios profesionales
- **Versión:** v1 (en desarrollo)

## Qué incluye

| Sección | Qué muestra | Se configura en |
|---|---|---|
| Header | Logo/nombre, menú y botón "Contáctanos" siempre visible | `SITE` |
| Inicio (hero) | Título, subtítulo y tres acciones rápidas | `SITE` |
| Servicios | Tarjetas con ícono, título y descripción | `SERVICIOS` |
| Equipo | Foto (o iniciales), nombre, especialidad, colegiatura y descripción | `EQUIPO` |
| Testimonios | Citas de clientes con nombre y detalle | `TESTIMONIOS` |
| Contacto | Formulario con validación y envío por servicio externo | `SITE.formulario` |
| Footer | Dirección, teléfono, correo, horario, redes y mapa | `SITE` y `SITE.mapa` |
| WhatsApp | Botón flotante visible en toda la página | `SITE.whatsapp` |

Las secciones Servicios, Equipo y Testimonios se ocultan solas (junto con su enlace del menú) si su lista está vacía.

## Estructura del proyecto

```
Plantilla/
├── index.html        # Estructura de la página
├── CSS/
│   └── styles.css    # Estilos (mobile-first) y variables de marca
├── JS/
│   ├── data.js       # ÚNICO archivo que se edita por cliente
│   └── main.js       # Comportamiento: genera secciones, formulario, menú, WhatsApp, mapa
├── img/              # Imágenes (fotos del equipo, etc.)
└── README.md
```

`data.js` debe cargarse **antes** que `main.js` (ya está así en `index.html`).

## Cómo probarlo en local

1. Abre la carpeta en VS Code.
2. Instala la extensión **Live Server** y haz clic en "Go Live", o abre `index.html` directamente en el navegador.
3. Tras cambiar `data.js`, recarga con `Ctrl + F5` para evitar el caché.

## Cómo personalizarlo para un cliente

Todo el contenido vive en `JS/data.js`. No hace falta tocar el HTML ni `main.js`.

### Datos generales (`SITE`)

Nombre del negocio, título y subtítulo del hero, teléfono, correo, dirección, horario y redes sociales. Una red social sin enlace se oculta sola.

### WhatsApp

Se escribe el número en formato internacional, solo dígitos (Perú: `51` + 9 dígitos), y un mensaje inicial:

```js
whatsapp: "51987654321",
whatsappMensaje: "Hola, quisiera más información.",
```

Si `whatsapp` queda vacío se usa un número de ejemplo (`WHATSAPP_POR_DEFECTO`, definido al inicio de `main.js`) para que el botón nunca quede roto. **Antes de entregar una plantilla a un cliente hay que poner su número real.**

### Servicios, equipo y testimonios

Cada uno es una lista de objetos. Para agregar o quitar un elemento se edita la lista:

```js
const SERVICIOS = [
  { icono: "💬", titulo: "Consulta inicial", descripcion: "Texto breve." }
];
```

- **Equipo:** el campo `foto` recibe la ruta a una imagen de `img/` (por ejemplo `"img/equipo-1.jpg"`). Si queda vacío, o la imagen no carga, se muestran las iniciales. Se recomiendan fotos horizontales o cuadradas con el rostro en la parte superior.
- **Testimonios:** usar solo nombre y una inicial (por ejemplo "Rosa M."). No publicar DNI, teléfono, correo ni casos personales de terceros sin autorización por escrito. Los testimonios de la plantilla son ficticios.
- **Fotos y datos del equipo:** publicar solo lo que cada profesional haya autorizado.

### Formulario de contacto

El sitio es estático, así que el envío lo hace un servicio externo:

1. Crear un formulario en [Formspree](https://formspree.io) (u otro servicio compatible).
2. Copiar la URL que entrega, con el formato `https://formspree.io/f/xxxxxxxx`.
3. Pegarla en `data.js`:

```js
formulario: {
  endpoint: "https://formspree.io/f/xxxxxxxx"
}
```

Comportamiento del formulario:

- Campos obligatorios: nombre, teléfono o correo, y mensaje (mínimo 10 caracteres).
- Los errores se muestran bajo cada campo y el foco pasa al primero inválido.
- Si el envío falla, o el endpoint no está configurado, se muestra un aviso con un enlace a WhatsApp como contacto alterno.
- Incluye un campo oculto anti-spam (`_gotcha`): si se llena, el envío se descarta.

### Mapa

En `SITE.mapa`:

- `embedUrl`: dirección del mapa incrustado. **Solo se aceptan mapas de Google Maps u OpenStreetMap**; cualquier otra URL se ignora por seguridad. En Google Maps: buscar el lugar, elegir *Compartir*, luego *Insertar un mapa*, y copiar solo el valor de `src="..."`.
- `enlace`: enlace del botón "Cómo llegar" (debe empezar con `https://`). Si queda vacío se arma con la dirección.

El mapa de ejemplo usa OpenStreetMap y apunta al centro de Lima; hay que cambiarlo por el del cliente. Si `embedUrl` queda vacío, no se muestra el mapa y quedan solo la dirección y el enlace.

### Colores y tipografía

Están como variables en el bloque `:root` de `CSS/styles.css` (`--color-primario`, `--color-acento`, `--fuente`, etc.). Los valores actuales son **provisionales**: la identidad visual definitiva la define UX/UI.

## Reglas de diseño y accesibilidad aplicadas

- Mobile-first: se adapta a móvil, tablet y escritorio.
- Enlace "Saltar al contenido", foco visible y etiquetas en todos los campos del formulario.
- Se respeta la preferencia de movimiento reducido.
- Todo el texto dinámico se inserta con `textContent`, no como HTML.

## Flujo de trabajo del equipo

- **Ramas:** `main` (estable) más una rama por tarea (por ejemplo `feat/bl-05-formulario`).
- **Pull Request:** obligatorio antes de fusionar a `main`. Quien construye una parte no la aprueba como único revisor.
- **QA/Seguridad:** antes de cada entrega se aplica el checklist EQU-02.
- **Etapas (EQU-01):** no se avanza a la siguiente sin cerrar la evidencia de la anterior.

## Estado del backlog v1

| ID | Función | Estado |
|---|---|---|
| BL-01 | Inicio (hero y propuesta de valor) | Hecha, pendiente de revisión |
| BL-02 | Sección de servicios | Hecha, pendiente de revisión |
| BL-03 | Perfil del equipo | Hecha, pendiente de revisión |
| BL-04 | Testimonios | Hecha, pendiente de revisión |
| BL-05 | Formulario de contacto | Hecha; falta probar con endpoint real |
| BL-06 | Botón de WhatsApp | Hecha, pendiente de revisión |
| BL-07 | Mapa / ubicación | Hecha, pendiente de revisión |
| BL-08 | Migración de datos del cliente antiguo | Por definir (a cargo de Documentación/Datos) |

Fuera del v1: agenda con calendario, portal de seguimiento para el cliente y chat con IA.

## Alcance

Esta plantilla es una landing page de una sola página. **No incluye** el sitio corporativo completo de TUPLUS (CEL-WEB-01) ni tiendas o catálogos de venta (CEL-COM-01).

## Equipo

| Integrante | Rol |
|---|---|
| Lia Malpartida | Líder de célula |
| Abraham Romero | QA / Seguridad y mentor técnico |
| Jorge Ventura | UX / UI |
| Sebastián Espinoza | Frontend |
| Diego Luna | Documentación / Datos |

## Accesos y enlaces

_Completar por el equipo:_

- Carpeta del proyecto en Drive (`04_DESARROLLO`): _pendiente_
- Servicio de formularios (cuenta y endpoint): _pendiente_