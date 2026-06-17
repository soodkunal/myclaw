# Hooks Kookboek

Met hooks kun je Claude Code-gebeurtenissen onderscheppen en aangepaste shell-scripts uitvoeren. Ze worden gedefinieerd in je `.claude/settings.json`.

## 1. Kosten Bijhouden (PostToolUse)
Houd lokaal het tokengebruik en de kosten bij.

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
# Voeg tokenaantallen toe aan een lokale CSV voor analyse
echo "$(date +%s),$CLAUDE_TOKENS_IN,$CLAUDE_TOKENS_OUT" >> .claude/metrics/costs.csv
```

## 2. Pre-Commit Linter (PreToolUse)
Voordat Claude `git commit` mag uitvoeren, dwing je af dat de linter met succes wordt uitgevoerd.

**`.claude/hooks/lint-check.sh`:**
```bash
#!/bin/bash
TOOL_NAME=$1
COMMAND=$2

if [ "$TOOL_NAME" == "run_command" ] && [[ "$COMMAND" == *"git commit"* ]]; then
    npm run lint
    if [ $? -ne 0 ]; then
        echo "Linter is mislukt. Los lint-fouten op voor het committen."
        exit 1
    fi
fi
exit 0
```


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
