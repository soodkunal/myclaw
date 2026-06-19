# FastAPI Backend Reference

Include this file in your FastAPI project root to load the necessary MyClaw rules and skills.

## Architecture
- Backend: FastAPI (Python 3.11)
- Database: PostgreSQL (SQLAlchemy + Alembic)
- Deployment: Docker

## Plugin Loading
Ensure your `plugin.json` loads the `python`, `postgresql`, and `docker` skills.

```bash
npx @myclaw/init
```

---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
