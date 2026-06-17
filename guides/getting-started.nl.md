# Aan de slag met MyClaw

Welkom bij **MyClaw**! Als je dagelijks Claude Code gebruikt, weet je dat hoewel het uit de doos ongelooflijk krachtig is, je de effectiviteit ervan drastisch kunt vermenigvuldigen door het domeinspecifieke kennis, vangrails en geautomatiseerde workflows te geven. Dat is wat MyClaw is.

## Installatie

MyClaw is ontworpen voor installatie zonder wrijving. Je hoeft geen zware CLI-applicatie te installeren als je dat niet wilt.

### Methode 1: NPX (Aanbevolen)
Navigeer naar de hoofdmap van je project waar je Claude Code wilt gebruiken en voer uit:
```bash
npx myclaw init
```
Dit zal de nodige `.claude/` map structureren, onze geoptimaliseerde `settings.json` injecteren en je vragen om te selecteren welke taal/framework skills je wilt opnemen.

### Methode 2: Handmatig toevoegen
1. Clone de MyClaw repository.
2. Blader door de `skills/` en `agents/` mappen.
3. Kopieer de specifieke `.md` of `.json` bestanden die je nodig hebt rechtstreeks naar de `.claude/` map van je project.

## Kernconcepten

- **Skills**: Domeinspecifieke instructies (bijv. "Hoe schrijf je een FastAPI endpoint in deze codebase").
- **Agents**: Aangepaste persona's geconfigureerd voor specifieke taken (bijv. `Architect`, `SecurityReviewer`).
- **Hooks**: Bash scripts die worden getriggerd bij Claude Code levenscyclusgebeurtenissen (bijv. `PreToolUse`, `PreCompact`).
- **Workflows**: Meerstaps markdown documenten die je aan Claude kunt vragen om te volgen voor complexe refactoring.

Lees vervolgens onze [Token Optimalisatie Gids](token-optimization.nl.md) om te leren hoe je je Claude API-kosten met 60% kunt verlagen.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
