# MyClaw 🦖

> The ultimate knowledge system for Claude Code

MyClaw is an open-source collection of battle-tested patterns, skills, agents, hooks, workflows, and prompts designed to supercharge your Anthropic Claude Code CLI experience. Drop this into your environment to multiply your coding output with zero installation friction.

## Features vs Vanilla Claude Code

- **Expanded Language Support**: Pre-configured skills for Python (FastAPI/Django), Go, C#/.NET, Next.js.
- **Deep DevOps Tooling**: Specialized agents and skills for Kubernetes, Docker, Terraform, and GitHub Actions.
- **Complete End-to-End Workflows**: Multi-step markdown workflows to guide Claude through complex debugging or refactoring sessions.
- **Security & Hooks**: Pre-configured `settings.json` hooks for token optimization, safety, and git automation.

## Quick Start

You can install the full system via NPX:

```bash
npx myclaw init
```

This will copy the `.claude/` tools, skills, and settings into your current working directory.

## Manual Installation

Alternatively, you can just copy what you need:

1. Clone this repository: `git clone https://github.com/yourusername/myclaw.git`
2. Copy the desired `skills/` or `agents/` files into your project's `.claude/` directory.

## Contributing

We are building the definitive open-source extension to Claude Code. If you have a custom skill or agent that generates value for you, please read our [CONTRIBUTING.md](CONTRIBUTING.md) to submit a PR!

## License

MIT


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
