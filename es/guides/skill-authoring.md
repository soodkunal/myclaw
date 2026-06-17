# Guía de Creación de Habilidades

Las habilidades (skills) son los bloques de construcción fundamentales de MyClaw. Al crear habilidades de alta calidad, evitas que Claude Code cometa los mismos errores dos veces y haces cumplir las decisiones arquitectónicas de tu equipo.

## Anatomía de una Habilidad "Terminada"

Cada habilidad en MyClaw debe adherirse al siguiente formato estándar. Usamos un bloque frontmatter para los metadatos y encabezados markdown claros para las instrucciones.

### La Plantilla

```markdown
---
name: "fastapi-routes"
description: "Reglas para construir enrutadores FastAPI e inyección de dependencias"
trigger: "Cuando el usuario pide crear o modificar un enrutador, endpoint o dependencia FastAPI."
model: "claude-3-5-sonnet-20240620"
---

# Pautas de Enrutamiento FastAPI

## 🛑 Antipatrones (NO HAGAS ESTO)
- No uses `app.include_router` global en el mismo archivo que las definiciones de ruta.
- No omitas los modelos de respuesta de Pydantic.

## ✅ Mejores Prácticas
- Siempre usa enrutadores API (`APIRouter(prefix="/v1/...")`).
- Inyecta sesiones de base de datos usando `Depends(get_db)`.

## 📝 Ejemplo
\`\`\`python
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/{user_id}", response_model=UserResponse)
def get_user(user_id: int, db: Session = Depends(get_db)):
    return user_service.fetch_user(db, user_id)
\`\`\`
```

## Cómo Contribuir
Si has creado una habilidad que te ahorra tiempo, ¡abre un PR! Asegúrate de que incluya:
1. **Condiciones de activación (Trigger)**: Sé explícito sobre cuándo Claude debería cargar esta habilidad.
2. **Antipatrones**: Decirle a los LLMs qué *no* hacer a menudo es más efectivo que decirles qué hacer.
3. **Ejemplos**: Proporciona 1 o 2 bloques de código.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
