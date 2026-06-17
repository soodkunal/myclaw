# Agent Orkestratie

Claude Code maakt de instantiëring van specifieke "subagents" mogelijk. U kunt deze agenten definiëren via JSON-configuraties of markdown-bestanden, waardoor ze specifieke tools en modellen krijgen.

## Waarom Orkestreren?
In plaats van een monolithische Claude-prompt alles te laten proberen, splits u taken op:
1. **Planner Agent**: Gebruikt `claude-3-opus` of `claude-3-5-sonnet`. Heeft alleen leestoegang. Formuleert een stapsgewijs plan.
2. **Coder Agent**: Gebruikt `claude-3-5-sonnet`. Heeft toegang tot het schrijven en uitvoeren van bestanden. Implementeert het plan.
3. **Reviewer Agent**: Gebruikt `claude-3-haiku` of `sonnet`. Voert linting-tools en testsuites uit en doet veiligheidscontroles.

## Een Agent Maken
Maak `architect.md` in je `.claude/agents/` map:

```markdown
---
name: "Architect"
description: "Systeemontwerper op hoog niveau. Gebruik deze agent voor planning voordat je code schrijft."
model: "claude-3-opus-20240229"
tools: ["read_file", "list_dir", "search_code"]
---
Je bent een expert Software Architect.
Jouw taak is om de codebase te analyseren en een gedetailleerd Implementatieplan-artefact te produceren.
SCHRIJF GEEN CODE. Lees en plan alleen.
```

Wanneer je Claude Code gebruikt, instrueer het dan om: *"Instantieer de Architect subagent om de refactor te plannen."*


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
