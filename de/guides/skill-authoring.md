# Leitfaden zur Skill-Erstellung

Skills sind die grundlegenden Bausteine von MyClaw. Indem Sie hochwertige Skills erstellen, verhindern Sie, dass Claude Code dieselben Fehler zweimal macht, und setzen die architektonischen Entscheidungen Ihres Teams durch.

## Anatomie eines "fertigen" Skills

Jeder Skill in MyClaw muss sich an das folgende Standardformat halten. Wir verwenden einen Frontmatter-Block für Metadaten und klare Markdown-Überschriften für Anweisungen.

### Die Vorlage

```markdown
---
name: "fastapi-routes"
description: "Regeln für die Erstellung von FastAPI-Routern und Dependency Injection"
trigger: "Wenn der Benutzer bittet, einen FastAPI-Router, Endpunkt oder eine Abhängigkeit zu erstellen oder zu ändern."
model: "claude-3-5-sonnet-20240620"
---

# FastAPI Routing Richtlinien

## 🛑 Anti-Pattern (TUN SIE DIES NICHT)
- Verwenden Sie kein globales `app.include_router` in derselben Datei wie die Routendefinitionen.
- Überspringen Sie keine Pydantic-Antwortmodelle.

## ✅ Best Practices
- Verwenden Sie immer API-Router (`APIRouter(prefix="/v1/...")`).
- Injizieren Sie Datenbanksitzungen mit `Depends(get_db)`.

## 📝 Beispiel
\`\`\`python
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/{user_id}", response_model=UserResponse)
def get_user(user_id: int, db: Session = Depends(get_db)):
    return user_service.fetch_user(db, user_id)
\`\`\`
```

## Wie Sie mitwirken können
Wenn Sie einen Skill erstellt haben, der Ihnen Zeit spart, öffnen Sie einen PR! Stellen Sie sicher, dass er Folgendes enthält:
1. **Auslösebedingungen (Trigger)**: Seien Sie explizit darüber, wann Claude diesen Skill laden soll.
2. **Anti-Pattern**: LLMs zu sagen, was sie *nicht* tun sollen, ist oft effektiver als ihnen zu sagen, was sie tun sollen.
3. **Beispiele**: Geben Sie 1-2 Codeblöcke an.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
