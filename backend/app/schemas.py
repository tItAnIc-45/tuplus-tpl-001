from pydantic import BaseModel, Field
from typing import Optional

class SolicitudContacto(BaseModel):
    nombre: str = Field(..., min_length=2, description="Nombre completo")
    empresa: Optional[str] = Field(None, description="Empresa o actividad")
    contacto: str = Field(..., description="Correo o teléfono")
    pais: str = Field(..., description="País de origen")
    solucion: str = Field(..., description="Solución de interés")
    preferencia_contacto: str = Field(..., description="Canal preferido")
    mensaje: str = Field(..., min_length=5, description="Detalle del mensaje")
    consentimiento: bool = Field(..., description="Aceptación de privacidad")

class RespuestaContacto(BaseModel):
    status: str
    mensaje: str
    id_registro: Optional[str] = None
