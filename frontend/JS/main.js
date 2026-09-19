/*
 * main.js — comportamiento base de la plantilla TPL-001.
 * Depende de data.js (objeto SITE).
 */

// Valor por defecto documentado: se usa cuando SITE.whatsapp está vacío,
// para que el botón nunca quede roto. Es un número de ejemplo, no real.
const WHATSAPP_POR_DEFECTO = "51900000000";

/* ---------- Datos del sitio en el HTML ---------- */
function aplicarDatosDelSitio() {
  if (typeof SITE === "undefined") return;

  document.querySelectorAll("[data-site]").forEach((el) => {
    const valor = SITE[el.dataset.site];
    if (valor) el.textContent = valor;
  });

  document.querySelectorAll("[data-red]").forEach((el) => {
    const url = SITE.redes && SITE.redes[el.dataset.red];
    if (url) {
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener";
    } else {
      // Sin enlace configurado: se oculta el elemento, no queda un enlace vacío.
      el.closest("li").hidden = true;
    }
  });

  if (SITE.nombre) {
    document.title = SITE.nombre + " | Servicios profesionales";
  }
}

/* ---------- WhatsApp (BL-06) ---------- */
function construirEnlaceWhatsApp() {
  const numeroLimpio = ((typeof SITE !== "undefined" && SITE.whatsapp) || "").replace(/\D/g, "");
  const numero = numeroLimpio || WHATSAPP_POR_DEFECTO;
  const mensaje = (typeof SITE !== "undefined" && SITE.whatsappMensaje) || "";
  return "https://wa.me/" + numero + (mensaje ? "?text=" + encodeURIComponent(mensaje) : "");
}

function aplicarWhatsApp() {
  const enlace = construirEnlaceWhatsApp();
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    el.href = enlace;
  });
}

/* ---------- Utilidad: ocultar una sección vacía y su enlace del menú ---------- */
function ocultarSeccion(id) {
  const seccion = document.getElementById(id);
  if (seccion) seccion.hidden = true;
  document.querySelectorAll('a[href="#' + id + '"]').forEach((a) => {
    const item = a.closest("li");
    if (item) item.hidden = true;
  });
}

/* ---------- Servicios (BL-02) ---------- */
function renderServicios() {
  const contenedor = document.getElementById("lista-servicios");
  if (!contenedor) return;

  const lista = typeof SERVICIOS !== "undefined" && Array.isArray(SERVICIOS) ? SERVICIOS : [];

  // Sin servicios configurados: se oculta la sección y su enlace del menú.
  if (lista.length === 0) {
    ocultarSeccion("servicios");
    return;
  }

  contenedor.textContent = "";

  lista.forEach((servicio) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "card";

    if (servicio.icono) {
      const icono = document.createElement("span");
      icono.className = "card-icono";
      icono.setAttribute("aria-hidden", "true");
      icono.textContent = servicio.icono;
      tarjeta.appendChild(icono);
    }

    const titulo = document.createElement("h3");
    titulo.className = "card-titulo";
    titulo.textContent = servicio.titulo || "";
    tarjeta.appendChild(titulo);

    const descripcion = document.createElement("p");
    descripcion.className = "card-texto";
    descripcion.textContent = servicio.descripcion || "";
    tarjeta.appendChild(descripcion);

    contenedor.appendChild(tarjeta);
  });
}

/* ---------- Equipo (BL-03) ---------- */
function iniciales(nombre) {
  return nombre
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((palabra) => palabra.charAt(0).toUpperCase())
    .join("");
}

function crearMarcadorIniciales(nombre) {
  const marcador = document.createElement("div");
  marcador.className = "foto-equipo foto-iniciales";
  marcador.setAttribute("aria-hidden", "true");
  marcador.textContent = iniciales(nombre) || "?";
  return marcador;
}

function renderEquipo() {
  const contenedor = document.getElementById("lista-equipo");
  if (!contenedor) return;

  const lista = typeof EQUIPO !== "undefined" && Array.isArray(EQUIPO) ? EQUIPO : [];

  // Sin equipo configurado: se oculta la sección y su enlace del menú.
  if (lista.length === 0) {
    ocultarSeccion("equipo");
    return;
  }

  contenedor.textContent = "";

  lista.forEach((persona) => {
    const nombre = persona.nombre || "";
    const tarjeta = document.createElement("article");
    tarjeta.className = "card card-equipo";

    // Foto: si no hay ruta, o la imagen no carga, se muestran las iniciales.
    if (persona.foto) {
      const foto = document.createElement("img");
      foto.className = "foto-equipo";
      foto.src = persona.foto;
      foto.alt = "Foto de " + nombre;
      foto.loading = "lazy";
      foto.addEventListener("error", () => {
        foto.replaceWith(crearMarcadorIniciales(nombre));
      });
      tarjeta.appendChild(foto);
    } else {
      tarjeta.appendChild(crearMarcadorIniciales(nombre));
    }

    const titulo = document.createElement("h3");
    titulo.className = "card-titulo";
    titulo.textContent = nombre;
    tarjeta.appendChild(titulo);

    if (persona.especialidad) {
      const especialidad = document.createElement("p");
      especialidad.className = "card-especialidad";
      especialidad.textContent = persona.especialidad;
      tarjeta.appendChild(especialidad);
    }

    if (persona.colegiatura) {
      const colegiatura = document.createElement("p");
      colegiatura.className = "card-meta";
      colegiatura.textContent = persona.colegiatura;
      tarjeta.appendChild(colegiatura);
    }

    if (persona.descripcion) {
      const descripcion = document.createElement("p");
      descripcion.className = "card-texto";
      descripcion.textContent = persona.descripcion;
      tarjeta.appendChild(descripcion);
    }

    contenedor.appendChild(tarjeta);
  });
}

/* ---------- Testimonios (BL-04) ---------- */
function renderTestimonios() {
  const contenedor = document.getElementById("lista-testimonios");
  if (!contenedor) return;

  const lista = (typeof TESTIMONIOS !== "undefined" && Array.isArray(TESTIMONIOS) ? TESTIMONIOS : [])
    .filter((t) => t && t.texto);

  // Sin testimonios configurados: se oculta la sección y su enlace del menú.
  if (lista.length === 0) {
    ocultarSeccion("testimonios");
    return;
  }

  contenedor.textContent = "";

  lista.forEach((t) => {
    const figura = document.createElement("figure");
    figura.className = "card card-testimonio";

    const cita = document.createElement("blockquote");
    cita.className = "testimonio-texto";
    const parrafo = document.createElement("p");
    parrafo.textContent = t.texto;
    cita.appendChild(parrafo);

    const pie = document.createElement("figcaption");
    pie.className = "testimonio-autor";
    const nombre = document.createElement("strong");
    nombre.textContent = t.nombre || "Cliente";
    pie.appendChild(nombre);
    if (t.detalle) {
      const detalle = document.createElement("span");
      detalle.className = "testimonio-detalle";
      detalle.textContent = t.detalle;
      pie.appendChild(detalle);
    }

    figura.appendChild(cita);
    figura.appendChild(pie);
    contenedor.appendChild(figura);
  });
}

/* ---------- Formulario de contacto (BL-05) ---------- */
const MENSAJES_FORMULARIO = {
  nombre: "Escribe tu nombre.",
  contacto: "Escribe un teléfono o un correo válido.",
  mensaje: "Cuéntanos en qué podemos ayudarte (mínimo 10 caracteres)."
};

function validarCampo(nombre, valor) {
  const v = valor.trim();
  if (nombre === "nombre") return v.length >= 2;
  if (nombre === "contacto") {
    const esCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    const digitos = v.replace(/\D/g, "");
    const esTelefono = /^[\d\s()+-]+$/.test(v) && digitos.length >= 7 && digitos.length <= 15;
    return esCorreo || esTelefono;
  }
  if (nombre === "mensaje") return v.length >= 10;
  return true;
}

function mostrarErrorCampo(campo, mensaje) {
  const error = document.getElementById("error-" + campo.name);
  if (!error) return;
  if (mensaje) {
    campo.setAttribute("aria-invalid", "true");
    error.textContent = mensaje;
    error.hidden = false;
  } else {
    campo.removeAttribute("aria-invalid");
    error.textContent = "";
    error.hidden = true;
  }
}

function mostrarEstadoFormulario(texto, tipo, conWhatsApp) {
  const estado = document.getElementById("form-estado");
  if (!estado) return;
  estado.className = "form-estado form-estado-" + tipo;
  estado.textContent = texto;
  if (conWhatsApp) {
    estado.appendChild(document.createTextNode(" "));
    const enlace = document.createElement("a");
    enlace.href = construirEnlaceWhatsApp();
    enlace.target = "_blank";
    enlace.rel = "noopener";
    enlace.textContent = "Escríbenos por WhatsApp";
    estado.appendChild(enlace);
  }
  estado.hidden = false;
}

function iniciarFormulario() {
  const form = document.getElementById("form-contacto");
  if (!form) return;

  const boton = form.querySelector('button[type="submit"]');
  const textoBoton = boton.textContent;
  const campos = ["nombre", "contacto", "mensaje"].map((n) => form.elements[n]);

  campos.forEach((campo) => {
    // Al salir del campo se valida; al corregirlo, el error desaparece.
    campo.addEventListener("blur", () => {
      mostrarErrorCampo(campo, validarCampo(campo.name, campo.value) ? "" : MENSAJES_FORMULARIO[campo.name]);
    });
    campo.addEventListener("input", () => {
      if (campo.hasAttribute("aria-invalid") && validarCampo(campo.name, campo.value)) {
        mostrarErrorCampo(campo, "");
      }
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    document.getElementById("form-estado").hidden = true;

    // 1) Validar campos obligatorios antes de enviar.
    let primerInvalido = null;
    campos.forEach((campo) => {
      const ok = validarCampo(campo.name, campo.value);
      mostrarErrorCampo(campo, ok ? "" : MENSAJES_FORMULARIO[campo.name]);
      if (!ok && !primerInvalido) primerInvalido = campo;
    });
    if (primerInvalido) {
      mostrarEstadoFormulario("Revisa los campos marcados antes de enviar.", "error", false);
      primerInvalido.focus();
      return;
    }

    // 2) Trampa anti-spam: las personas no ven este campo, los bots suelen llenarlo.
    if (form.elements["_gotcha"] && form.elements["_gotcha"].value) {
      form.reset();
      mostrarEstadoFormulario("¡Listo! Recibimos tu mensaje y te responderemos pronto.", "exito", false);
      return;
    }

    // 3) Enviar al servicio externo configurado en data.js.
    const endpoint = (typeof SITE !== "undefined" && SITE.formulario && SITE.formulario.endpoint) || "";
    if (!endpoint) {
      mostrarEstadoFormulario("El envío del formulario todavía no está configurado.", "error", true);
      return;
    }

    boton.disabled = true;
    boton.textContent = "Enviando…";
    try {
      const respuesta = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      });
      if (!respuesta.ok) throw new Error("Respuesta " + respuesta.status);
      form.reset();
      mostrarEstadoFormulario("¡Listo! Recibimos tu mensaje y te responderemos pronto.", "exito", false);
    } catch (error) {
      mostrarEstadoFormulario("No pudimos enviar tu mensaje. Inténtalo de nuevo.", "error", true);
    } finally {
      boton.disabled = false;
      boton.textContent = textoBoton;
    }
  });
}

/* ---------- Mapa y ubicación (BL-07) ---------- */
// Solo se incrusta un mapa si viene de uno de estos orígenes. Así, si alguien
// pega una URL rara en data.js, no se carga contenido de sitios desconocidos.
function urlDeMapaPermitida(texto) {
  try {
    const url = new URL(texto);
    const esGoogle = url.origin === "https://www.google.com" && url.pathname.indexOf("/maps/embed") === 0;
    const esOsm = url.origin === "https://www.openstreetmap.org" && url.pathname === "/export/embed.html";
    return esGoogle || esOsm ? url.href : "";
  } catch (e) {
    return "";
  }
}

function urlHttpsValida(texto) {
  try {
    return new URL(texto).protocol === "https:" ? texto : "";
  } catch (e) {
    return "";
  }
}

function renderMapa() {
  if (typeof SITE === "undefined") return;
  const config = SITE.mapa || {};

  // Enlace "Cómo llegar": el configurado, o uno armado con la dirección.
  const ruta = document.getElementById("ruta");
  const enlaceRuta = document.getElementById("enlace-ruta");
  if (ruta && enlaceRuta) {
    const enlace =
      urlHttpsValida(config.enlace || "") ||
      (SITE.direccion
        ? "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(SITE.direccion)
        : "");
    if (enlace) {
      enlaceRuta.href = enlace;
      ruta.hidden = false;
    } else {
      ruta.hidden = true;
    }
  }

  // Mapa incrustado: solo si hay una URL permitida.
  const contenedor = document.getElementById("contenedor-mapa");
  if (!contenedor) return;
  const src = urlDeMapaPermitida(config.embedUrl || "");
  if (!src) {
    contenedor.hidden = true;
    if (config.embedUrl) {
      console.warn("SITE.mapa.embedUrl no es un mapa permitido (Google Maps u OpenStreetMap).");
    }
    return;
  }

  contenedor.textContent = "";
  const marco = document.createElement("iframe");
  marco.src = src;
  marco.title = "Mapa de ubicación" + (SITE.nombre ? " de " + SITE.nombre : "");
  marco.loading = "lazy";
  marco.referrerPolicy = "no-referrer-when-downgrade";
  contenedor.appendChild(marco);
  contenedor.hidden = false;
}

/* ---------- Menú móvil ---------- */
function iniciarMenu() {
  const boton = document.querySelector(".nav-toggle");
  const menu = document.getElementById("menu-principal");
  if (!boton || !menu) return;

  function cerrar() {
    menu.classList.remove("is-open");
    boton.setAttribute("aria-expanded", "false");
  }

  boton.addEventListener("click", () => {
    const abierto = menu.classList.toggle("is-open");
    boton.setAttribute("aria-expanded", String(abierto));
  });

  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", cerrar));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrar();
  });
}

/* ---------- Inicio ---------- */
document.addEventListener("DOMContentLoaded", () => {
  aplicarDatosDelSitio();
  aplicarWhatsApp();
  renderServicios();
  renderEquipo();
  renderTestimonios();
  iniciarFormulario();
  renderMapa();
  iniciarMenu();

  const anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();
});