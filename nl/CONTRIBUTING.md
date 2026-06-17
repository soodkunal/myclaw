# Bijdragen aan MyClaw

Bedankt voor je interesse om bij te dragen! We bouwen een modulaire, hoogwaardige kennisrepository voor Claude Code-gebruikers.

## Een Skill indienen

Een "afgewerkte" skill moet voldoen aan de volgende kwaliteitsnormen:
- Een duidelijke trigger hebben (wanneer te activeren).
- Expliciete anti-patronen hebben (wanneer NIET te gebruiken).
- Minimaal één concreet voorbeeld bevatten.
- Verwijzen naar daadwerkelijke mogelijkheden van Claude Code (geen generiek LLM-advies).
- Getest zijn in minimaal één echte sessie.

## Een Agent indienen

Een "afgewerkte" agent moet:
- Een specifieke subset van tools hebben (niet alle tools).
- Modelbegeleiding hebben (Haiku vs Sonnet vs Opus).
- Een gebruikscase als voorbeeld bevatten.

## Projectstructuur

- `skills/`: Aangepaste opdrachten en slash-opdrachten.
- `agents/`: Aangepaste agentrollen voor `subagent_type`.
- `hooks/`: Shell-scripts voor `PreToolUse`, `PostToolUse`, `PreCompact`.
- `rules/`: Project-/gebruikers-/werkruimte-niveau regels voor `CLAUDE.md`.
- `workflows/`: Meerstaps markdown workflows.

Open eerst een issue om grote wijzigingen te bespreken voordat je een PR indient.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
