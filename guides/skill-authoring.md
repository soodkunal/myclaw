# Skill Authoring Guide

Skills are the fundamental building blocks of MyClaw. By authoring high-quality skills, you prevent Claude Code from making the same mistakes twice and enforce your team's architectural decisions.

## Anatomy of a "Done" Skill

Every skill in MyClaw must adhere to the following standard format. We use a frontmatter block for metadata and clear markdown headers for instructions.

### The Template

```markdown
---
name: "fastapi-routes"
description: "Rules for building FastAPI routers and dependency injection"
trigger: "When the user asks to create or modify a FastAPI router, endpoint, or dependency."
model: "claude-3-5-sonnet-20240620"
---

# FastAPI Routing Guidelines

## 🛑 Anti-Patterns (DO NOT DO THIS)
- Do not use global `app.include_router` in the same file as the route definitions.
- Do not skip Pydantic response models.

## ✅ Best Practices
- Always use API routers (`APIRouter(prefix="/v1/...")`).
- Inject database sessions using `Depends(get_db)`.

## 📝 Example
\`\`\`python
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/{user_id}", response_model=UserResponse)
def get_user(user_id: int, db: Session = Depends(get_db)):
    return user_service.fetch_user(db, user_id)
\`\`\`
```

## How to Contribute
If you've authored a skill that saves you time, open a PR! Ensure it includes:
1. **Trigger conditions**: Be explicit about when Claude should load this skill.
2. **Anti-patterns**: Telling LLMs what *not* to do is often more effective than telling them what to do.
3. **Examples**: Provide 1-2 code blocks.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
