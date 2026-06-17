---
name: "claude-agent-construction"
description: "Rules for writing custom agent prompts and subagents."
trigger: "When the user asks to create an AI agent, system prompt, or subagent configuration."
---

# Agent Construction Guidelines

## 🛑 Anti-Patterns
- Do not use vague identity statements ("You are a helpful AI").
- Do not give agents tools they do not need. Over-tooling leads to hallucinated tool calls.
- Do not forget to specify the exact input/output formats.

## ✅ Best Practices
- **Identity & Persona**: "You are an expert PostgreSQL database administrator with 10 years of experience tuning indexes."
- **Tool Restriction**: If the agent only needs to read logs, only provide `read_file` and `search_code`.
- **Chain of Thought**: Force the agent to think before outputting tool calls: `Always write your reasoning inside <thinking> tags before acting.`

## 📝 Example Configuration
```json
{
  "name": "DatabaseTuner",
  "model": "claude-3-5-sonnet-20240620",
  "system_prompt": "You are a DBA. Read slow query logs and propose index creations. Wrap analysis in <thinking> tags.",
  "tools": ["read_file", "run_bash_command"]
}
```


---
> **Schaamteloze Promotie:** Geniet je hiervan? Draag bij aan de MyClaw repository en bezoek mijn [GitHub Profiel](https://github.com/soodkunal)!
