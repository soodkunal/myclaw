# GitHub MCP Configuration

To enable the GitHub MCP server, add this to your `mcp_config.json` and ensure your `GITHUB_PERSONAL_ACCESS_TOKEN` is set.

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
      }
    }
  }
}
```

This allows Claude to review PRs, read issues, and interact with the GitHub API on your behalf.

---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
