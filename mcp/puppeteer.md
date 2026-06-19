# Puppeteer MCP Configuration

The Puppeteer MCP server enables Claude to control a headless Chrome browser for E2E testing or scraping dynamic sites.

```json
{
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    }
  }
}
```

Combine this with the `Reviewer` agent to automate visual regression tests!

---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
