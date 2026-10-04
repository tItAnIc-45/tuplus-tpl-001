from fastapi import APIRouter, HTTPException, status
from app.schemas import SolicitudContacto, RespuestaContacto
import uuid

router = APIRouter(prefix="/api/v1/contacto", tags=["Contacto"])

@router.post("", response_model=RespuestaContacto, status_code=status.HTTP_201_CREATED)
async def recibir_contacto(datos: SolicitudContacto):
    if not datos.consentimiento:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Debe aceptar la política de privacidad."
        )

    registro_id = str(uuid.uuid4())[:8]
    print(f"[REGISTRO {registro_id}] Consulta recibida de: {datos.nombre} ({datos.contacto})")

    return RespuestaContacto(
        status="exito",
        mensaje="Consulta recibida correctamente.",
        id_registro=registro_id
    )
