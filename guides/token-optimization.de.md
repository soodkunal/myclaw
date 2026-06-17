# Leitfaden zur Token-Optimierung

Claude Code arbeitet mit einem großen Kontextfenster, aber die effiziente Verwaltung von Tokens ist entscheidend für sowohl Geschwindigkeit als auch Kostenreduzierung. Jeder Entwickler, der Claude Code in großem Umfang nutzt, sollte diese Strategien anwenden.

## 1. Verwenden Sie Haiku für die Triage
Standardmäßig leiten Sie möglicherweise alle Anfragen an Claude 3.5 Sonnet weiter. Die grundlegende Code-Exploration, `grep`-Befehle und das Auflisten von Dateien erfordern jedoch nicht die Argumentationskraft von Sonnet.

**Strategie:** Konfigurieren Sie einen Pre-Tool-Hook oder weisen Sie Claude Code ausdrücklich an, `claude-3-haiku-20240307` für anfängliche Explorationsaufgaben zu verwenden.
*Auswirkung: ca. 60 % Kostenreduzierung für Such- und Leseschleifen.*

## 2. Beschneidung von MCP-Servern
Model Context Protocol (MCP)-Server injizieren ihre Schemata direkt in Claudes System-Prompt.
Wenn Sie 10 MCP-Server aktiviert haben (z. B. GitHub, Linear, Supabase, Postgres usw.), entspricht das etwa 88 Tools. Dies kann **~30.000 Tokens** aus Ihrem 200.000-Token-Fenster verbrauchen, bevor eine einzige Zeile Ihres Codes gelesen wird.

**Aktion:** Aktivieren Sie in Ihrer `.claude/settings.json` nur die MCP-Server, die für den aktuellen Projektkontext unbedingt erforderlich sind.

## 3. Strikte PreCompact-Hooks
Claude Code komprimiert den Verlauf, wenn der Kontext zu lang wird. Sie können einen `PreCompact`-Hook in `.claude/settings.json` schreiben, um sicherzustellen, dass bestimmte Dateien (wie `architecture.md` oder wichtige Fehlerprotokolle) zusammengefasst anstatt abgeschnitten werden.

## 4. Begrenzung der Grep-Ausgaben
Wenn Sie Claude bitten, die Codebasis zu durchsuchen, erzwingen Sie die Verwendung von `-n 5` oder ähnlichen Beschränkungen für `ripgrep`-Tools, damit keine massiven Protokolle in das Kontextfenster kopiert werden.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
