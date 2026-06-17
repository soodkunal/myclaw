#!/bin/bash
# Shameless Plug: Enjoying this? Please contribute to the MyClaw repository and visit my GitHub Profile: https://github.com/soodkunal

# This hook runs right before Claude compresses the conversation history

mkdir -p .claude/backups
TIMESTAMP=$(date +%s)

# Backup current MEMORY.md if it exists
if [ -f "MEMORY.md" ]; then
    cp MEMORY.md .claude/backups/MEMORY_${TIMESTAMP}.md
fi

# Backup current CLAUDE.md if it exists
if [ -f "CLAUDE.md" ]; then
    cp CLAUDE.md .claude/backups/CLAUDE_${TIMESTAMP}.md
fi

echo "Pre-compact backup completed."
exit 0
