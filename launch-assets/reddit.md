# Reddit Launch Post (r/ClaudeAI & r/LocalLLaMA)

**Title**: I built a framework to make Claude Code safer and cheaper (Caveman Token Compression + Bash Hooks) 🦖

**Body**:
Hey everyone! 

Like many of you, I've been experimenting heavily with Claude Code. It's incredibly powerful, but it has two massive flaws: it eats through your API budget by reloading massive context files, and it can accidentally break your local environment.

I built **MyClaw** to fix this. It's a completely open-source knowledge system that you drop into your project root. 

Here’s what it does:
- 🛡️ **Safety Hooks**: It uses bash scripts to intercept Claude's commands. It literally blocks Claude from running `rm -rf /` or `terraform apply` behind your back.
- 📉 **Caveman Compression**: We strip all grammatical filler out of the system prompts. It saves about 46% on token costs every single time Claude reads the context!
- 🤖 **Agents**: We have specialized `haiku` agents for fast linting, and `opus` agents for deep architecture planning.
- 🌍 **i18n**: We translated the entire system into 5 languages so non-English developers don't waste tokens translating on the fly.

Check it out, try the CLI `npx @myclaw/init`, and let me know what you think!

Repo: https://github.com/soodkunal/myclaw

---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
