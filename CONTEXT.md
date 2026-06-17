# MyClaw Context

A collection of agent skills, hooks, and workflows loaded by Claude Code. This file defines the shared vocabulary to ensure consistency across all subagents and skills.

## Terminology

**Skill**: 
A discrete set of rules and constraints for Claude Code, defined in a `SKILL.md` file within `skills/`.

**Agent / Subagent**:
A specialized persona configured for a specific task (e.g. `Architect`). Agents have restricted tool sets to avoid hallucination.

**Hook**:
A shell script executed by Claude Code at specific lifecycle events (e.g. `PreToolUse`, `PostToolUse`).

## Architecture

- **`plugin.json`**: The registry file located at `.claude-plugin/plugin.json` that informs Claude which skills are active.
- **Skill Bucket**: Skills are organized into buckets (e.g. `engineering/`) rather than being flat.
