# E2 · Arquitectura y Planificación — TPL-001 Servicios profesionales

Preparado por Lia Malpartida (líder CEL-TPL-01). Familia aprobada para iniciar: TPL-001. Roles reales asignados según Roles_y_Responsabilidades_CEL-TPL-01. Versión 1.1.

> **Nota:** EQU-03 numera esta etapa como "E2 - Arquitectura y planificación"; el documento de Roles y Responsabilidades (que cita EQU-01) numera "E2" como Diseño. Pendiente confirmar con Llamoca cuál numeración rige los entregables.

## 1. Backlog priorizado

| ID | Función | Prioridad | Rol responsable | Dependencia | Criterio de aceptación |
|---|---|---|---|---|---|
| BL-01 | Página de inicio (hero + propuesta de valor) | Alta | Sebastián Espinoza (Frontend) | Ninguna | Carga en mobile y escritorio; botón de contacto visible sin hacer scroll |
| BL-02 | Sección de servicios | Alta | Sebastián Espinoza (Frontend) | BL-01 | Lista de servicios editable sin tocar código |
| BL-03 | Perfil del equipo | Media | Sebastián Espinoza (Frontend) | BL-01 | Fotos y descripciones configurables por cliente |
| BL-04 | Testimonios | Media | Sebastián Espinoza (Frontend) | Ninguna | Mínimo 2 testimonios de ejemplo, sin datos reales de terceros sin autorización |
| BL-05 | Formulario de contacto | Alta | Sebastián Espinoza (Frontend) | Ninguna | Envía datos correctamente y valida campos obligatorios |
| BL-06 | Botón / integración WhatsApp | Alta | Sebastián Espinoza (Frontend) | Ninguna | Abre el chat con número preconfigurable |
| BL-07 | Mapa / ubicación | Baja | Sebastián Espinoza (Frontend) | Ninguna | Se muestra en mobile y escritorio |
| BL-08 | Migración de datos del cliente antiguo | Por definir | Diego Luna (Documentación/Datos) | Info pendiente del cliente | A definir cuando llegue la información; debe vivir en la capa Personalizable, no en la Base |

Fuera del v1 (Futuro): agenda con calendario, portal de seguimiento para el cliente, chat con IA.

## 2. Mapa del producto

| Módulo | Contenido / función | Capa |
|---|---|---|
| Inicio | Propuesta de valor, llamado a la acción | Base |
| Servicios | Lista de servicios ofrecidos | Base (textos personalizables) |
| Perfil del equipo | Presentación de profesionales | Base (contenido personalizable) |
| Testimonios | Experiencias de clientes | Base (contenido personalizable) |
| Contacto | Formulario + botón de WhatsApp | Base |
| Ubicación | Mapa / dirección | Base |
| Blog o noticias | Artículos del profesional | Personalizable (opcional por cliente) |
| — cliente antiguo — | Contenido a migrar, pendiente de definición | Por clasificar (Personalizable una vez definido) |
| Reserva de citas / Chat IA / Área privada | — | Futuro (fuera del v1) |

## 3. Flujo del usuario

Flujo principal: Visitante entra al sitio → lee servicios y perfil del equipo → decide contactar → llena el formulario o hace clic en WhatsApp → recibe confirmación.

**Estados de error a contemplar**
- Formulario incompleto o con campos inválidos: mostrar mensaje de validación antes de enviar.
- Falla de envío del formulario: mostrar mensaje de error y ofrecer contacto alterno por WhatsApp.
- Botón de WhatsApp sin número configurado: no debe mostrarse roto; debe tener un valor por defecto documentado.

## 4. Inventario de componentes

| Componente | Descripción |
|---|---|
| Header / navegación | Logo + menú simple + botón de contacto visible |
| Hero | Título, subtítulo y llamado a la acción principal |
| Cards de servicios | Una tarjeta por servicio, ícono/título/descripción breve |
| Cards de equipo | Foto, nombre y especialidad por profesional |
| Bloque de testimonios | Lista o carrusel de reseñas |
| Formulario de contacto | Nombre, contacto, mensaje, validación de campos obligatorios |
| Botón flotante de WhatsApp | Visible en todas las secciones, especialmente en mobile |
| Footer | Ubicación, mapa, datos de contacto y redes |

## 5. Wireframes (borrador de contenido y jerarquía)

*Esto es la jerarquía de contenido, no el diseño visual final. Jorge Ventura (UX/UI) debe convertir esto en wireframes reales (mobile primero, luego escritorio).*

Orden en mobile (de arriba hacia abajo): Header compacto → Hero con CTA → Servicios (lista vertical) → Perfil del equipo (tarjetas apiladas) → Testimonios → Formulario de contacto → Botón flotante de WhatsApp (fijo) → Footer con mapa.

En escritorio, servicios y equipo pueden mostrarse en 2 o 3 columnas en vez de apilados; el resto conserva el mismo orden.

## 6. Arquitectura técnica (Sebastián Espinoza — Frontend, revisa Abraham Romero — QA/Seguridad)

| Capa | Propuesta |
|---|---|
| Frontend | HTML/CSS/JS con componentes reutilizables, mobile-first y responsive — implementa Sebastián Espinoza |
| Backend | No existe rol de Backend en el equipo (stack: HTML, CSS, JavaScript, Git/GitHub, VS Code); el sitio es estático para el v1 y el formulario de contacto usa un servicio externo |
| Integraciones | WhatsApp (enlace click-to-chat), formulario de contacto, analítica básica (opcional) — implementa Sebastián, revisa Abraham (QA/Seguridad) |
| Entornos | Desarrollo local → staging para pruebas internas → producción solo tras aprobación de Lia (Líder) |
| Repositorio | Estructura: /frontend, /backend, /docs — enlace y accesos documentados en el README del repo, no aquí |

*Abraham Romero (QA/Seguridad) aplica el checklist EQU-02 antes de cada entrega y revisa el trabajo de los integrantes de 4to ciclo, sin aprobar su propio trabajo.*

## 7. Reparto de trabajo restante

| Sección | Estado | Quién falta confirmar / completar |
|---|---|---|
| Backlog priorizado | Borrador listo | Jorge Ventura (UX/UI) y Sebastián Espinoza (Frontend) lo revisan |
| Mapa del producto | Borrador listo | Diego Luna (Documentación/Datos) ordena la información del cliente antiguo cuando llegue |
| Flujo del usuario | Borrador listo | Sebastián Espinoza (Frontend) valida los estados de error; revisa Abraham (QA/Seguridad) |
| Inventario de componentes | Borrador listo | Jorge Ventura (UX/UI) lo valida |
| Wireframes visuales | Pendiente | Jorge Ventura (UX/UI) |
| Arquitectura técnica | Propuesta a validar | Sebastián Espinoza (Frontend) confirma stack; revisa Abraham (QA/Seguridad) |
| Consolidación general y presentación del domingo | En curso | Lia Malpartida (Líder) |
