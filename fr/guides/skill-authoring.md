# Guide de création de Compétences

Les compétences sont les éléments de base de MyClaw. En créant des compétences de haute qualité, vous évitez à Claude Code de faire les mêmes erreurs deux fois et vous imposez les décisions architecturales de votre équipe.

## Anatomie d'une Compétence "Terminée"

Chaque compétence dans MyClaw doit respecter le format standard suivant. Nous utilisons un bloc frontmatter pour les métadonnées et des en-têtes markdown clairs pour les instructions.

### Le Modèle

```markdown
---
name: "fastapi-routes"
description: "Règles pour créer des routeurs FastAPI et l'injection de dépendances"
trigger: "Quand l'utilisateur demande à créer ou modifier un routeur, un point de terminaison ou une dépendance FastAPI."
model: "claude-3-5-sonnet-20240620"
---

# Directives de Routage FastAPI

## 🛑 Anti-Modèles (NE FAITES PAS CELA)
- N'utilisez pas `app.include_router` global dans le même fichier que les définitions de routes.
- Ne sautez pas les modèles de réponse Pydantic.

## ✅ Bonnes Pratiques
- Utilisez toujours des routeurs API (`APIRouter(prefix="/v1/...")`).
- Injectez les sessions de base de données en utilisant `Depends(get_db)`.

## 📝 Exemple
\`\`\`python
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/{user_id}", response_model=UserResponse)
def get_user(user_id: int, db: Session = Depends(get_db)):
    return user_service.fetch_user(db, user_id)
\`\`\`
```

## Comment Contribuer
Si vous avez créé une compétence qui vous fait gagner du temps, ouvrez une PR ! Assurez-vous qu'elle inclut :
1. **Conditions de déclenchement** : Soyez explicite sur le moment où Claude doit charger cette compétence.
2. **Anti-modèles** : Dire aux LLMs ce qu'il *ne faut pas* faire est souvent plus efficace que de leur dire quoi faire.
3. **Exemples** : Fournissez 1 à 2 blocs de code.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
