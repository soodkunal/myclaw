# Livre de Recettes des Hooks

Les hooks vous permettent d'intercepter les événements de Claude Code et d'exécuter des scripts shell personnalisés. Ils sont définis dans votre fichier `.claude/settings.json`.

## 1. Suivi des Coûts (PostToolUse)
Suivez l'utilisation des tokens et les dépenses localement.

**`.claude/settings.json` :**
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

**`.claude/hooks/cost-tracker.sh` :**
```bash
#!/bin/bash
# Ajouter le nombre de tokens à un fichier CSV local pour analyse
echo "$(date +%s),$CLAUDE_TOKENS_IN,$CLAUDE_TOKENS_OUT" >> .claude/metrics/costs.csv
```

## 2. Linter Pré-Commit (PreToolUse)
Avant d'autoriser Claude à exécuter `git commit`, exigez qu'il exécute avec succès le linter.

**`.claude/hooks/lint-check.sh` :**
```bash
#!/bin/bash
TOOL_NAME=$1
COMMAND=$2

if [ "$TOOL_NAME" == "run_command" ] && [[ "$COMMAND" == *"git commit"* ]]; then
    npm run lint
    if [ $? -ne 0 ]; then
        echo "Le linter a échoué. Corrigez les erreurs de lint avant de commiter."
        exit 1
    fi
fi
exit 0
```


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
