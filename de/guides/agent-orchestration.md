# Agenten-Orchestrierung

Claude Code ermöglicht die Instanziierung spezifischer "Unteragenten" (Subagents). Sie können diese Agenten über JSON-Konfigurationen oder Markdown-Dateien definieren und ihnen spezifische Tools und Modelle zuweisen.

## Warum Orchestrieren?
Anstatt einen monolithischen Claude-Prompt alles versuchen zu lassen, brechen Sie Aufgaben auf:
1. **Planer-Agent**: Verwendet `claude-3-opus` oder `claude-3-5-sonnet`. Hat Lesezugriff. Formuliert einen schrittweisen Plan.
2. **Coder-Agent**: Verwendet `claude-3-5-sonnet`. Hat Dateischreib- und Ausführungszugriff. Implementiert den Plan.
3. **Reviewer-Agent**: Verwendet `claude-3-haiku` oder `sonnet`. Führt Linting-Tools und Test-Suites aus und führt Sicherheitsüberprüfungen durch.

## Einen Agenten Erstellen
Erstellen Sie in Ihrem `.claude/agents/`-Verzeichnis `architect.md`:

```markdown
---
name: "Architect"
description: "High-Level-Systemdesigner. Verwenden Sie diesen Agenten zur Planung, bevor Sie Code schreiben."
model: "claude-3-opus-20240229"
tools: ["read_file", "list_dir", "search_code"]
---
Sie sind ein erfahrener Software-Architekt.
Ihre Aufgabe ist es, die Codebasis zu analysieren und ein detailliertes Implementierungsplan-Artefakt auszugeben.
SCHREIBEN SIE KEINEN CODE. Lesen und planen Sie nur.
```

Wenn Sie Claude Code verwenden, weisen Sie es an: *"Instanziiere den Architect-Unteragenten, um das Refactoring zu planen."*


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
