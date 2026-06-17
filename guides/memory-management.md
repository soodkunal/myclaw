# Memory Management

Long-running sessions in Claude Code will inevitably hit the token limits or cause the LLM to "forget" earlier context. Effective memory management solves this.

## Session State Persistence
To persist memory across Claude Code restarts or compact cycles, use local markdown files as a scratchpad.

### 1. The `MEMORY.md` Pattern
Create a rule in your `CLAUDE.md` that instructs the agent to maintain a state file:

```markdown
## Memory Rule
You must maintain a `MEMORY.md` file in the root of the `.claude/` directory.
Before you execute any complex task, read `MEMORY.md` to understand the current project state.
After you complete a task, update `MEMORY.md` with a bulleted list of what was changed and any pending issues.
```

### 2. PreCompact Hooks
If Claude Code decides to compress history, you can use a hook to save the exact state of the conversation or variables to a `.tmp` file, and then instruct Claude to read it upon the next turn.

*Drafting robust PreCompact shell scripts is covered in the [Hooks Cookbook](hooks-cookbook.md).*


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
