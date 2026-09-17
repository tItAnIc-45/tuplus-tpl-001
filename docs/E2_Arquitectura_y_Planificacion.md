# E2 · Arquitectura y Planificación — TPL-001 Servicios profesionales

Borrador de avance preparado por Lia Malpartida (líder CEL-TPL-01). Familia aprobada para iniciar: TPL-001. Versión 1.0.

## 1. Backlog priorizado

| ID | Función | Prioridad | Rol responsable | Dependencia | Criterio de aceptación |
|---|---|---|---|---|---|
| BL-01 | Página de inicio (hero + propuesta de valor) | Alta | Frontend | Ninguna | Carga en mobile y escritorio; botón de contacto visible sin hacer scroll |
| BL-02 | Sección de servicios | Alta | Frontend | BL-01 | Lista de servicios editable sin tocar código |
| BL-03 | Perfil del equipo | Media | Frontend | BL-01 | Fotos y descripciones configurables por cliente |
| BL-04 | Testimonios | Media | Frontend | Ninguna | Mínimo 2 testimonios de ejemplo, sin datos reales de terceros sin autorización |
| BL-05 | Formulario de contacto | Alta | Frontend + Backend | Ninguna | Envía datos correctamente y valida campos obligatorios |
| BL-06 | Botón / integración WhatsApp | Alta | Frontend | Ninguna | Abre el chat con número preconfigurable |
| BL-07 | Mapa / ubicación | Baja | Frontend | Ninguna | Se muestra en mobile y escritorio |
| BL-08 | Migración de datos del cliente antiguo | Por definir | Backend / Datos | Info pendiente del cliente | A definir cuando llegue la información; debe vivir en la capa Personalizable, no en la Base |

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

*Esto es la jerarquía de contenido, no el diseño visual final. Quien tome el rol de UX/UI debe convertir esto en wireframes reales (mobile primero, luego escritorio).*

Orden en mobile (de arriba hacia abajo): Header compacto → Hero con CTA → Servicios (lista vertical) → Perfil del equipo (tarjetas apiladas) → Testimonios → Formulario de contacto → Botón flotante de WhatsApp (fijo) → Footer con mapa.

En escritorio, servicios y equipo pueden mostrarse en 2 o 3 columnas en vez de apilados; el resto conserva el mismo orden.

## 6. Arquitectura técnica (propuesta a validar por Frontend y Backend/Datos)

| Capa | Propuesta |
|---|---|
| Frontend | HTML/CSS/JS con componentes reutilizables, mobile-first y responsive (o el framework que el equipo ya maneje) |
| Backend | No se requiere backend propio para el v1 (sitio estático); el formulario de contacto puede usar un servicio externo o un backend simple si se decide guardar los leads |
| Integraciones | WhatsApp (enlace click-to-chat), formulario de contacto, analítica básica (opcional) |
| Entornos | Desarrollo local → staging para pruebas internas → producción solo tras aprobación (E6-E7) |
| Repositorio | Estructura sugerida: /frontend, /docs, README con propósito y enlaces |

*Esta sección es una propuesta de arranque para no bloquear el trabajo; debe confirmarla o ajustarla quien tome el rol de Backend/Datos, según las herramientas que el equipo realmente maneje.*

## 7. Reparto de trabajo restante

| Sección | Estado | Quién falta confirmar / completar |
|---|---|---|
| Backlog priorizado | Borrador listo | Revisar con el equipo y ajustar prioridades |
| Mapa del producto | Borrador listo | Completar fila del cliente antiguo cuando llegue la información |
| Flujo del usuario | Borrador listo | Revisar estados de error con Backend |
| Inventario de componentes | Borrador listo | Validar con quien diseñe los wireframes |
| Wireframes visuales | Pendiente | UX/UI (Sebastián o Diego) |
| Arquitectura técnica | Propuesta a validar | Backend/Datos (Abraham) y Frontend |
