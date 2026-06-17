# Mitwirken bei MyClaw

Vielen Dank für Ihr Interesse an einer Mitarbeit! Wir bauen ein modulares, hochwertiges Wissens-Repository für Claude Code-Benutzer auf.

## Einreichen eines Skills

Ein „fertiger“ Skill muss die folgenden Qualitätskriterien erfüllen:
- Einen klaren Auslöser haben (wann er aktiviert werden soll).
- Explizite Anti-Pattern haben (wann er NICHT verwendet werden soll).
- Mindestens ein konkretes Beispiel enthalten.
- Sich auf tatsächliche Claude Code-Fähigkeiten beziehen (keine generischen LLM-Ratschläge).
- In mindestens einer echten Sitzung getestet worden sein.

## Einreichen eines Agenten

Ein „fertiger“ Agent muss:
- Eine spezifische Teilmenge an Tools haben (nicht alle Tools).
- Modellrichtlinien haben (Haiku vs. Sonnet vs. Opus).
- Ein Anwendungsbeispiel enthalten.

## Projektstruktur

- `skills/`: Benutzerdefinierte Befehle und Slash-Befehle.
- `agents/`: Benutzerdefinierte Agentenrollen für `subagent_type`.
- `hooks/`: Shell-Skripte für `PreToolUse`, `PostToolUse`, `PreCompact`.
- `rules/`: Projekt-/Benutzer-/Arbeitsbereich-spezifische Regeln für `CLAUDE.md`.
- `workflows/`: Mehrstufige Markdown-Workflows.

Bitte eröffnen Sie zunächst ein Issue, um größere Änderungen zu besprechen, bevor Sie einen PR einreichen.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
