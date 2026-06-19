# Fetch MCP Configuration

The Fetch server allows Claude to read remote documentation and REST APIs over HTTP.

```json
{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    }
  }
}
```

Use this server to let Claude ingest latest docs that were published after its training cutoff.

---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
