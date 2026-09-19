/*
 * data.js — ÚNICO archivo que el cliente edita.
 * Todo lo personalizable de la plantilla vive aquí (capa Personalizable).
 * No pongas datos reales de terceros (DNI, historias clínicas, etc.).
 */
const SITE = {
  nombre: "Nombre del negocio",
  titulo: "Asesoría profesional clara, cuando la necesitas",
  subtitulo: "Texto de ejemplo: explica en una o dos frases qué hace el negocio y a quién ayuda.",

  // Número en formato internacional, solo dígitos (ej. Perú: 51 + 9 dígitos).
  // Si se deja vacío, main.js usa WHATSAPP_POR_DEFECTO.
  whatsapp: "",
  whatsappMensaje: "Hola, quisiera más información.",

  telefono: "(01) 000 0000",
  correo: "correo@ejemplo.com",
  direccion: "Dirección de ejemplo, Ciudad",
  horario: "Lunes a viernes, 9:00 a 18:00",

  redes: {
    facebook: "",
    instagram: ""
  },

  // Formulario de contacto (BL-05). Sitio estático: el envío lo hace un servicio
  // externo (por ejemplo Formspree). Pega aquí la URL que te da el servicio,
  // con este formato: "https://formspree.io/f/xxxxxxxx".
  // Si queda vacío, el formulario valida pero avisa que el envío no está
  // configurado y ofrece WhatsApp.
  formulario: {
    endpoint: ""
  },

  // Mapa (BL-07). Dos opciones, ambas opcionales:
  //  - embedUrl: dirección del mapa incrustado. Solo se aceptan mapas de Google Maps
  //    o de OpenStreetMap. En Google Maps: buscar el lugar > Compartir > "Insertar un
  //    mapa" > copiar solo el valor de src="..." del código.
  //  - enlace: enlace para el botón "Cómo llegar". Si se deja vacío, se arma solo
  //    con la dirección de arriba.
  // Si embedUrl queda vacío, no se muestra el mapa; solo la dirección y el enlace.
  // El mapa de ejemplo apunta al centro de Lima; cámbialo por el del cliente.
  mapa: {
    embedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-77.0500%2C-12.0500%2C-77.0350%2C-12.0420&layer=mapnik&marker=-12.0464%2C-77.0428",
    enlace: ""
  }
};

/*
 * SERVICIOS (BL-02)
 * Una entrada por servicio. Para agregar, quitar o cambiar un servicio
 * solo se edita esta lista; no hace falta tocar el HTML ni el JS.
 *   - titulo:      nombre corto del servicio
 *   - descripcion: una o dos frases
 *   - icono:       opcional; un emoji o un símbolo corto (puede dejarse vacío)
 * Si la lista queda vacía, la sección Servicios se oculta sola.
 */
const SERVICIOS = [
  {
    icono: "💬",
    titulo: "Consulta inicial",
    descripcion: "Conversamos sobre tu caso y te explicamos las opciones disponibles, sin compromiso."
  },
  {
    icono: "📋",
    titulo: "Asesoría continua",
    descripcion: "Acompañamiento periódico para resolver dudas y tomar decisiones con respaldo profesional."
  },
  {
    icono: "🗂️",
    titulo: "Revisión de documentos",
    descripcion: "Revisamos contratos, informes y otros documentos para detectar riesgos y mejoras."
  },
  {
    icono: "✅",
    titulo: "Gestión de trámites",
    descripcion: "Nos encargamos de los trámites y seguimientos para que tú te enfoques en lo importante."
  }
];

/*
 * EQUIPO (BL-03)
 * Una entrada por profesional. Solo se edita esta lista.
 *   - nombre:       nombre completo (obligatorio)
 *   - especialidad: cargo o área (ej. "Abogada laboralista")
 *   - colegiatura:  opcional; número de colegiatura o credencial
 *   - descripcion:  opcional; una o dos frases sobre su experiencia
 *   - foto:         opcional; ruta a una imagen en la carpeta img/ (ej. "img/equipo-1.jpg")
 *                   Si se deja vacía o la imagen no carga, se muestran las iniciales.
 * Usa solo datos que el profesional haya autorizado publicar.
 * Si la lista queda vacía, la sección Equipo se oculta sola.
 */
const EQUIPO = [
  {
    nombre: "María Quispe",
    especialidad: "Especialidad de ejemplo",
    colegiatura: "Colegiatura N.º 00000",
    descripcion: "Texto de ejemplo sobre formación y experiencia profesional.",
    foto: "img/imagen.jpeg"
  },
  {
    nombre: "Carlos Rojas",
    especialidad: "Especialidad de ejemplo",
    colegiatura: "Colegiatura N.º 00000",
    descripcion: "Texto de ejemplo sobre formación y experiencia profesional.",
    foto: ""
  },
  {
    nombre: "Lucía Paredes",
    especialidad: "Especialidad de ejemplo",
    colegiatura: "Colegiatura N.º 00000",
    descripcion: "Texto de ejemplo sobre formación y experiencia profesional.",
    foto: ""
  }
];

/*
 * TESTIMONIOS (BL-04)
 * Una entrada por testimonio. Mínimo 2 de ejemplo en la plantilla.
 *   - texto:   lo que dijo el cliente (obligatorio)
 *   - nombre:  solo nombre y una inicial (ej. "Rosa M."). No pongas apellidos completos
 *   - detalle: opcional; ej. "Cliente de asesoría" o "Empresa de ejemplo"
 * IMPORTANTE: no publiques datos reales de terceros (DNI, teléfono, correo,
 * casos personales) sin autorización por escrito. Los de abajo son ficticios.
 * Si la lista queda vacía, la sección Testimonios se oculta sola.
 */
const TESTIMONIOS = [
  {
    texto: "Nos explicaron cada paso con claridad y resolvieron mis dudas sin apuros. Me sentí acompañada desde la primera consulta.",
    nombre: "Rosa M.",
    detalle: "Testimonio de ejemplo"
  },
  {
    texto: "Respondieron rápido y el trámite quedó listo en el tiempo que prometieron. Los volvería a contratar.",
    nombre: "Luis T.",
    detalle: "Testimonio de ejemplo"
  },
  {
    texto: "Revisaron todos mis documentos y encontraron detalles que yo había pasado por alto. Muy profesionales.",
    nombre: "Andrea C.",
    detalle: "Testimonio de ejemplo"
  }
];