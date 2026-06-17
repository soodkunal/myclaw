---
name: "fastapi-core"
description: "Core patterns for FastAPI applications"
trigger: "When generating FastAPI routes, services, or models."
---

# FastAPI Best Practices

## 🛑 Anti-Patterns
- Never define business logic inside the route handler.
- Do not use global variables for database connections.

## ✅ Best Practices
- **Layered Architecture**: Routes -> Services -> Repositories.
- **Pydantic V2**: Use `model_validate` instead of `from_orm`.
- **Async DB**: Always use `AsyncSession` with SQLAlchemy 2.0.

## 📝 Example
```python
@router.post("/items/", response_model=ItemResponse)
async def create_item(item: ItemCreate, db: AsyncSession = Depends(get_db)):
    # Logic is delegated to the service layer
    return await item_service.create(db, item)
```


---
> **Eigenwerbung:** Gefällt Ihnen das? Bitte tragen Sie zum MyClaw-Repository bei und besuchen Sie mein [GitHub-Profil](https://github.com/soodkunal)!
