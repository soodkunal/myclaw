# Agent Orchestration

Claude Code allows the instantiation of specific "subagents". You can define these agents via JSON configurations or markdown files, giving them specific tools and models.

## Why Orchestrate?
Instead of having a monolithic Claude prompt try to do everything, break tasks down:
1. **Planner Agent**: Uses `claude-3-opus` or `claude-3-5-sonnet`. Has read-only access. Formulates a step-by-step plan.
2. **Coder Agent**: Uses `claude-3-5-sonnet`. Has file writing and execution access. Implements the plan.
3. **Reviewer Agent**: Uses `claude-3-haiku` or `sonnet`. Runs linting tools, test suites, and does security checks.

## Creating an Agent
In your `.claude/agents/` directory, create `architect.md`:

```markdown
---
name: "Architect"
description: "High-level system designer. Use this agent for planning before writing any code."
model: "claude-3-opus-20240229"
tools: ["read_file", "list_dir", "search_code"]
---
You are an expert Software Architect.
Your job is to analyze the codebase and output a detailed Implementation Plan artifact.
DO NOT WRITE CODE. Only read and plan.
```

When using Claude Code, instruct it to: *"Instantiate the Architect subagent to plan the refactor."*


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
