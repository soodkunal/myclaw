# Token Optimization Guide

Claude Code operates with a large context window, but managing tokens efficiently is critical for both speed and cost reduction. Every developer using Claude Code at scale should implement these strategies.

## 1. Use Haiku for Triage
By default, you might route all requests to Claude 3.5 Sonnet. However, basic codebase exploration, `grep` commands, and file listing do not require Sonnet's reasoning power.

**Strategy:** Configure a pre-tool hook or explicitly instruct Claude Code to use `claude-3-haiku-20240307` for initial exploration tasks.
*Impact: ~60% cost reduction for search and read loops.*

## 2. MCP Server Pruning
Model Context Protocol (MCP) servers inject their schemas directly into Claude's system prompt.
If you have 10 MCP servers enabled (e.g., GitHub, Linear, Supabase, Postgres, etc.), that equates to approximately 88 tools. This can consume **~30k tokens** from your 200k window before a single line of your code is read.

**Action:** Only enable MCP servers in your `.claude/settings.json` that are strictly required for the current project context.

## 3. Strict PreCompact Hooks
Claude Code compresses history when the context gets too long. You can write a `PreCompact` hook in `.claude/settings.json` to ensure that specific files (like `architecture.md` or essential error logs) are summarized rather than truncated.

## 4. Limit Grep Outputs
When asking Claude to search the codebase, enforce the use of `-n 5` or similar limits on `ripgrep` tools so that massive logs aren't dumped into the context window.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
