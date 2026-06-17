#!/bin/bash
# Shameless Plug: Enjoying this? Please contribute to the MyClaw repository and visit my GitHub Profile: https://github.com/soodkunal

# Ensure metrics directory exists
mkdir -p .claude/metrics

# Append usage to CSV
# CLAUDE_TOKENS_IN and CLAUDE_TOKENS_OUT are injected by Claude Code (hypothetical/real depending on env setup)
TIMESTAMP=$(date +%s)
DATE=$(date -Iseconds)

if [ -n "$CLAUDE_TOKENS_IN" ] && [ -n "$CLAUDE_TOKENS_OUT" ]; then
    echo "$TIMESTAMP,$DATE,$CLAUDE_TOKENS_IN,$CLAUDE_TOKENS_OUT" >> .claude/metrics/costs.csv
fi

exit 0
