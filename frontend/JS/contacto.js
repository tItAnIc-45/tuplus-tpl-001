document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("form-contacto");
  const estadoDiv = document.getElementById("form-estado");

  if (!formulario) return;

  formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    // 1. Limpiar mensajes anteriores
    if (estadoDiv) {
      estadoDiv.hidden = true;
      estadoDiv.textContent = "";
      estadoDiv.className = "form-estado";
    }

    // 2. Extraer datos de los campos
    const datosContacto = {
      nombre: document.getElementById("campo-nombre")?.value.trim(),
      empresa: document.getElementById("campo-empresa")?.value.trim() || null,
      contacto: document.getElementById("campo-contacto")?.value.trim(),
      pais: document.getElementById("campo-pais")?.value.trim(),
      solucion: document.getElementById("campo-servicio")?.value,
      preferencia_contacto: document.getElementById("campo-preferencia")?.value,
      mensaje: document.getElementById("campo-mensaje")?.value.trim(),
      consentimiento: document.getElementById("campo-consentimiento")?.checked
    };

    // 3. Validar consentimiento
    if (!datosContacto.consentimiento) {
      mostrarEstado("Debes autorizar el uso de tus datos para continuar.", "error");
      return;
    }

    try {
      // 4. Enviar datos a FastAPI
      const respuesta = await fetch("http://127.0.0.1:8000/api/v1/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datosContacto)
      });

      const resultado = await respuesta.json();

      if (respuesta.ok) {
        mostrarEstado(`¡Consulta enviada con éxito! ID de registro: ${resultado.id_registro}`, "exito");
        formulario.reset();
      } else {
        const mensajeError = Array.isArray(resultado.detail) 
          ? resultado.detail[0]?.msg 
          : (resultado.detail || "Error al procesar la solicitud.");
        mostrarEstado(`Error: ${mensajeError}`, "error");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      mostrarEstado("No se pudo conectar con la API backend. Asegúrate de tener uvicorn en ejecución.", "error");
    }
  });

  function mostrarEstado(mensaje, tipo) {
    if (!estadoDiv) return;
    estadoDiv.textContent = mensaje;
    estadoDiv.className = `form-estado form-estado-${tipo}`;
    estadoDiv.hidden = false;
  }
});
