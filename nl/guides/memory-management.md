# Geheugenbeheer

Langlopende sessies in Claude Code zullen onvermijdelijk de tokenlimieten bereiken of ervoor zorgen dat de LLM eerdere context "vergeet". Effectief geheugenbeheer lost dit op.

## Sessiestatus Persistentie
Gebruik lokale markdown-bestanden als kladblok om het geheugen te behouden bij het opnieuw opstarten of compressiecycli van Claude Code.

### 1. Het `MEMORY.md` Patroon
Maak een regel in je `CLAUDE.md` die de agent instrueert om een statusbestand bij te houden:

```markdown
## Geheugen Regel
Je moet een `MEMORY.md` bestand bijhouden in de hoofdmap van de `.claude/` directory.
Lees `MEMORY.md` om de huidige projectstatus te begrijpen voordat je een complexe taak uitvoert.
Werk `MEMORY.md` bij met een opsommingslijst van wat is gewijzigd en eventuele openstaande problemen nadat je een taak hebt voltooid.
```

### 2. PreCompact Hooks
Als Claude Code besluit de geschiedenis te comprimeren, kun je een hook gebruiken om de exacte status van het gesprek of de variabelen op te slaan in een `.tmp` bestand, en Claude vervolgens instrueren om het bij de volgende beurt te lezen.

*Het opstellen van robuuste PreCompact shell-scripts wordt behandeld in de [Hooks Cookbook](hooks-cookbook.nl.md).*


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
