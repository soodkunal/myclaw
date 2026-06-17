# Token Optimalisatie Gids

Claude Code werkt met een groot contextvenster, maar efficiënt beheer van tokens is cruciaal voor zowel snelheid als kostenbesparing. Elke ontwikkelaar die Claude Code op schaal gebruikt, zou deze strategieën moeten implementeren.

## 1. Gebruik Haiku voor Triage
Standaard stuur je mogelijk alle verzoeken naar Claude 3.5 Sonnet. Basis codebase-exploratie, `grep`-opdrachten en bestandslijsten vereisen echter niet de redeneerkracht van Sonnet.

**Strategie:** Configureer een pre-tool hook of instrueer Claude Code expliciet om `claude-3-haiku-20240307` te gebruiken voor initiële verkennende taken.
*Impact: ~60% kostenreductie voor zoek- en leeslussen.*

## 2. MCP Server Pruning
Model Context Protocol (MCP) servers injecteren hun schema's direct in Claude's system prompt.
Als je 10 MCP-servers hebt ingeschakeld (bijv. GitHub, Linear, Supabase, Postgres, enz.), komt dat overeen met ongeveer 88 tools. Dit kan **~30k tokens** van je 200k venster verbruiken voordat er ook maar één regel code is gelezen.

**Actie:** Schakel alleen MCP-servers in je `.claude/settings.json` in die strikt noodzakelijk zijn voor de huidige projectcontext.

## 3. Strikte PreCompact Hooks
Claude Code comprimeert de geschiedenis wanneer de context te lang wordt. Je kunt een `PreCompact` hook schrijven in `.claude/settings.json` om ervoor te zorgen dat specifieke bestanden (zoals `architecture.md` of essentiële foutlogboeken) worden samengevat in plaats van afgekapt.

## 4. Beperk Grep Output
Wanneer je Claude vraagt om de codebase te doorzoeken, dwing dan het gebruik van `-n 5` of vergelijkbare limieten af op `ripgrep` tools zodat massale logboeken niet in het contextvenster worden gedumpt.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
