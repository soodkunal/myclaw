# Hooks Cookbook

Mit Hooks können Sie Claude Code-Ereignisse abfangen und benutzerdefinierte Shell-Skripte ausführen. Sie werden in Ihrer `.claude/settings.json` definiert.

## 1. Kostenverfolgung (PostToolUse)
Verfolgen Sie die Token-Nutzung und Ausgaben lokal.

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
# Token-Zahlen für die Analyse an eine lokale CSV-Datei anhängen
echo "$(date +%s),$CLAUDE_TOKENS_IN,$CLAUDE_TOKENS_OUT" >> .claude/metrics/costs.csv
```

## 2. Pre-Commit Linter (PreToolUse)
Bevor Claude `git commit` ausführen darf, setzen Sie durch, dass der Linter erfolgreich ausgeführt wird.

**`.claude/hooks/lint-check.sh`:**
```bash
#!/bin/bash
TOOL_NAME=$1
COMMAND=$2

if [ "$TOOL_NAME" == "run_command" ] && [[ "$COMMAND" == *"git commit"* ]]; then
    npm run lint
    if [ $? -ne 0 ]; then
        echo "Linter fehlgeschlagen. Beheben Sie Lint-Fehler vor dem Committen."
        exit 1
    fi
fi
exit 0
```


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
