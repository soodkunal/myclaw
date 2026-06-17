# Contribuir a MyClaw

¡Gracias por tu interés en contribuir! Estamos construyendo un repositorio de conocimiento modular y de alta calidad para usuarios de Claude Code.

## Enviar una Habilidad (Skill)

Una habilidad "terminada" debe cumplir con los siguientes estándares de calidad:
- Tener un desencadenante claro (cuándo activar).
- Tener antipatrones explícitos (cuándo NO usar).
- Incluir al menos un ejemplo concreto.
- Hacer referencia a las capacidades reales de Claude Code (no consejos genéricos de LLM).
- Haber sido probada en al menos una sesión real.

## Enviar un Agente

Un agente "terminado" debe:
- Tener un subconjunto de herramientas específico (no todas las herramientas).
- Tener orientación sobre el modelo (Haiku vs Sonnet vs Opus).
- Incluir un caso de uso de ejemplo.

## Estructura del Proyecto

- `skills/`: Comandos personalizados y comandos de barra (slash).
- `agents/`: Roles de agentes personalizados para `subagent_type`.
- `hooks/`: Scripts de shell para `PreToolUse`, `PostToolUse`, `PreCompact`.
- `rules/`: Reglas a nivel de proyecto/usuario/espacio de trabajo para `CLAUDE.md`.
- `workflows/`: Flujos de trabajo en markdown de múltiples pasos.

Abre primero un issue para discutir cualquier cambio importante antes de enviar un PR.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
