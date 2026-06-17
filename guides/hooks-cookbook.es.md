# Libro de Recetas de Hooks

Los hooks te permiten interceptar eventos de Claude Code y ejecutar scripts shell personalizados. Se definen en tu archivo `.claude/settings.json`.

## 1. Seguimiento de Costos (PostToolUse)
Realiza un seguimiento del uso de tokens y gastos a nivel local.

**`.claude/settings.json`:**
```json
{
  "hooks": [
    {
      "type": "PostToolUse",
      "script": "./.claude/hooks/cost-tracker.sh"
    }
  ]
}
```

**`.claude/hooks/cost-tracker.sh`:**
```bash
#!/bin/bash
# Agregar los recuentos de tokens a un CSV local para su análisis
echo "$(date +%s),$CLAUDE_TOKENS_IN,$CLAUDE_TOKENS_OUT" >> .claude/metrics/costs.csv
```

## 2. Linter Pre-Commit (PreToolUse)
Antes de permitir que Claude ejecute `git commit`, haz cumplir que ejecute con éxito el linter.

**`.claude/hooks/lint-check.sh`:**
```bash
#!/bin/bash
TOOL_NAME=$1
COMMAND=$2

if [ "$TOOL_NAME" == "run_command" ] && [[ "$COMMAND" == *"git commit"* ]]; then
    npm run lint
    if [ $? -ne 0 ]; then
        echo "El linter falló. Corrige los errores de lint antes de hacer el commit."
        exit 1
    fi
fi
exit 0
```


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
