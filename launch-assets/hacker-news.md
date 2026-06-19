# Hacker News Launch Post (Show HN)

**Title**: Show HN: MyClaw – A modular knowledge system that makes Claude Code production-ready

**Body**:
Hey HN,

I've been using Anthropic's Claude Code for local development, but I kept running into the same issues: context windows blowing up, hallucinated API calls, and the risk of the LLM running destructive bash commands (`rm -rf` or `terraform destroy`). 

To solve this, I built **MyClaw** - an open-source, modular knowledge system. 

It works essentially as a plugin registry (inspired by Matt Pocock's skills repo) combined with automated bash lifecycle hooks. 

Key features:
1. **The Caveman Technique**: We compress all markdown instructions by stripping grammatical filler. It reads like "caveman speak", which is ugly to humans but perfectly understood by Claude. This reduces token injection cost by up to 46% per session.
2. **Pre-Tool-Use Hooks**: We intercept Claude's `run_command` tool calls natively. If it tries to drop a table or destroy infrastructure without explicit human approval, our `security-blocker.sh` kills the action.
3. **Specialized Agents**: Instead of relying on one generic prompt, MyClaw sets up specialized agents (e.g., an Architect using `opus`, and a lightning-fast Reviewer using `haiku`). 
4. **Translated Skills**: The repository includes 13+ domain skills (Next.js, FastAPI, Polars, Kubernetes) translated into English, French, German, Dutch, and Spanish.

I'd love to hear your feedback on the architecture, particularly the Caveman token compression method and the security hooks.

Repo: https://github.com/soodkunal/myclaw

---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
