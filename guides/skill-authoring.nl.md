# Gids voor het Schrijven van Skills

Skills zijn de fundamentele bouwstenen van MyClaw. Door hoogwaardige skills te schrijven, voorkom je dat Claude Code twee keer dezelfde fouten maakt en dwing je de architectonische beslissingen van je team af.

## Anatomie van een "Afgewerkte" Skill

Elke skill in MyClaw moet zich houden aan het volgende standaardformaat. We gebruiken een frontmatter-blok voor metadata en duidelijke markdown-koppen voor instructies.

### De Sjabloon

```markdown
---
name: "fastapi-routes"
description: "Regels voor het bouwen van FastAPI routers en dependency injection"
trigger: "Wanneer de gebruiker vraagt om een FastAPI router, endpoint of dependency te maken of te wijzigen."
model: "claude-3-5-sonnet-20240620"
---

# FastAPI Routing Richtlijnen

## 🛑 Anti-Patronen (DOE DIT NIET)
- Gebruik geen globale `app.include_router` in hetzelfde bestand als de route definities.
- Sla Pydantic responsmodellen niet over.

## ✅ Best Practices
- Gebruik altijd API routers (`APIRouter(prefix="/v1/...")`).
- Injecteer databasesessies met behulp van `Depends(get_db)`.

## 📝 Voorbeeld
\`\`\`python
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/{user_id}", response_model=UserResponse)
def get_user(user_id: int, db: Session = Depends(get_db)):
    return user_service.fetch_user(db, user_id)
\`\`\`
```

## Hoe kun je bijdragen
Als je een skill hebt geschreven die je tijd bespaart, open dan een PR! Zorg ervoor dat het het volgende bevat:
1. **Trigger voorwaarden**: Wees expliciet over wanneer Claude deze skill moet laden.
2. **Anti-patronen**: LLM's vertellen wat ze *niet* moeten doen is vaak effectiever dan ze vertellen wat ze wél moeten doen.
3. **Voorbeelden**: Geef 1-2 codeblokken op.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
