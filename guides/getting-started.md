# Getting Started with MyClaw

Welcome to **MyClaw**! If you use Claude Code daily, you know that while it's incredibly powerful out of the box, you can drastically multiply its effectiveness by giving it domain-specific knowledge, guardrails, and automated workflows. That's what MyClaw is.

## Installation

MyClaw is designed for zero-friction installation. You don't need to install a heavy CLI application if you don't want to.

### Method 1: NPX (Recommended)
Navigate to the root of your project where you want to use Claude Code and run:
```bash
npx myclaw init
```
This will scaffold the necessary `.claude/` directory, inject our optimized `settings.json`, and prompt you to select which language/framework skills you want to include.

### Method 2: Manual Drop-in
1. Clone the MyClaw repository.
2. Browse the `skills/` and `agents/` directories.
3. Copy the specific `.md` or `.json` files you need directly into your project's `.claude/` directory.

## Core Concepts

- **Skills**: Domain-specific instructions (e.g., "How to write a FastAPI endpoint in this codebase").
- **Agents**: Custom personas configured for specific tasks (e.g., `Architect`, `SecurityReviewer`).
- **Hooks**: Bash scripts triggered on Claude Code lifecycle events (e.g., `PreToolUse`, `PreCompact`).
- **Workflows**: Multi-step markdown documents that you can ask Claude to follow for complex refactoring.

Next, read our [Token Optimization Guide](token-optimization.md) to learn how to cut your Claude API costs by 60%.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
