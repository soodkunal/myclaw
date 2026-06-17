# Contributing to MyClaw

Thank you for your interest in contributing! We are building a modular, high-quality knowledge repository for Claude Code users.

## Submitting a Skill

A "done" skill must meet the following quality benchmarks:
- Have a clear trigger (when to activate).
- Have explicit anti-patterns (when NOT to use).
- Include at least one concrete example.
- Reference actual Claude Code capabilities (not generic LLM advice).
- Be tested in at least one real session.

## Submitting an Agent

A "done" agent must:
- Have a specific tool subset (not all tools).
- Have model guidance (Haiku vs Sonnet vs Opus).
- Include an example use case.

## Project Structure

- `skills/`: Custom commands and slash commands.
- `agents/`: Custom agent roles for `subagent_type`.
- `hooks/`: Shell scripts for `PreToolUse`, `PostToolUse`, `PreCompact`.
- `rules/`: Project/user/workspace level rules for `CLAUDE.md`.
- `workflows/`: Multi-step markdown workflows.

Please open an issue first to discuss any major changes before submitting a PR.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
