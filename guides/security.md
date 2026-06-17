# Security & Guardrails

When granting an AI autonomous execution rights in your terminal, security is paramount. MyClaw provides tested rules and hooks to prevent catastrophic mistakes.

## AgentShield Rules
We recommend enforcing strict rules in your `CLAUDE.md` to prevent destructive actions:

```markdown
## Security Rules
1. NEVER run `rm -rf` without explicitly asking for user confirmation first.
2. NEVER modify infrastructure state files (e.g., `terraform apply` or `kubectl delete`) without user review.
3. NEVER commit secrets or `.env` files to git. Always double check `.gitignore` before `git add .`.
```

## PreToolUse Hooks
You can write bash scripts that execute before Claude Code uses a tool. 

Example `PreToolUse` security hook:
```bash
#!/bin/bash
# .claude/hooks/pre-tool-use.sh

TOOL_NAME=$1
COMMAND=$2

if [ "$TOOL_NAME" == "run_command" ]; then
    if [[ "$COMMAND" == *"DROP TABLE"* || "$COMMAND" == *"terraform apply"* ]]; then
        echo "SECURITY ALERT: Destructive command detected. Requesting user intervention."
        exit 1 # Blocks Claude from executing the tool
    fi
fi
exit 0
```

## Credential Leakage
Ensure that any MyClaw skills you add do not hardcode your API keys. Always use environment variable references (e.g., `$OPENAI_API_KEY`) within prompts and scripts.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
