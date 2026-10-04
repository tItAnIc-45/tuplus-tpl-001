from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import contacto

app = FastAPI(
    title="TUPLUS TPL-001 Backend API",
    description="API para gestión de formularios de TPL-001",
    version="1.0.0"
)

# Configuración de CORS para permitir solicitudes desde Live Server y orígenes locales
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500",
        "http://127.0.0.1:8000",
        "*"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclusión del router de contactos
app.include_router(contacto.router)

@app.get("/", tags=["Healthcheck"])
def root():
    return {"proyecto": "TUPLUS TPL-001 API", "estado": "activo"}
