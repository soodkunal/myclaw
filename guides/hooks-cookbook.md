# Hooks Cookbook

Hooks allow you to intercept Claude Code events and run custom shell scripts. They are defined in your `.claude/settings.json`.

## 1. Cost Tracking (PostToolUse)
Track token usage and expenses locally.

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
# Append token counts to a local CSV for analysis
echo "$(date +%s),$CLAUDE_TOKENS_IN,$CLAUDE_TOKENS_OUT" >> .claude/metrics/costs.csv
```

## 2. Pre-Commit Linter (PreToolUse)
Before Claude is allowed to run `git commit`, enforce that it successfully runs the linter.

**`.claude/hooks/lint-check.sh`:**
```bash
#!/bin/bash
TOOL_NAME=$1
COMMAND=$2

if [ "$TOOL_NAME" == "run_command" ] && [[ "$COMMAND" == *"git commit"* ]]; then
    npm run lint
    if [ $? -ne 0 ]; then
        echo "Linter failed. Fix lint errors before committing."
        exit 1
    fi
fi
exit 0
```


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
