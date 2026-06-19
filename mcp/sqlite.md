# SQLite MCP Configuration

To enable the SQLite MCP server in Claude Code, add the following to your `mcp_config.json`:

```json
{
  "mcpServers": {
    "sqlite": {
      "command": "uvx",
      "args": ["mcp-server-sqlite", "--db-path", "./local.db"]
    }
  }
}
```

This allows Claude to read, query, and modify local SQLite databases directly.

---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
