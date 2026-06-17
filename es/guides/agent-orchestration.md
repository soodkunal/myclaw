# Orquestación de Agentes

Claude Code permite la instanciación de "subagentes" específicos. Puedes definir estos agentes a través de configuraciones JSON o archivos markdown, dándoles herramientas y modelos específicos.

## ¿Por qué Orquestar?
En lugar de tener un prompt de Claude monolítico tratando de hacer todo, divide las tareas:
1. **Agente Planificador (Planner)**: Usa `claude-3-opus` o `claude-3-5-sonnet`. Tiene acceso de solo lectura. Formula un plan paso a paso.
2. **Agente Programador (Coder)**: Usa `claude-3-5-sonnet`. Tiene acceso de escritura y ejecución de archivos. Implementa el plan.
3. **Agente Revisor (Reviewer)**: Usa `claude-3-haiku` o `sonnet`. Ejecuta herramientas de linting, suites de pruebas y realiza controles de seguridad.

## Creando un Agente
En tu directorio `.claude/agents/`, crea `architect.md`:

```markdown
---
name: "Architect"
description: "Diseñador de sistemas de alto nivel. Usa este agente para planificar antes de escribir cualquier código."
model: "claude-3-opus-20240229"
tools: ["read_file", "list_dir", "search_code"]
---
Eres un Arquitecto de Software experto.
Tu trabajo es analizar la base de código y generar un artefacto de Plan de Implementación detallado.
NO ESCRIBAS CÓDIGO. Solo lee y planifica.
```

Cuando uses Claude Code, indícale: *"Instancia el subagente Architect para planificar la refactorización."*


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
