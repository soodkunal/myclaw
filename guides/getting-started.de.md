# Erste Schritte mit MyClaw

Willkommen bei **MyClaw**! Wenn Sie Claude Code täglich nutzen, wissen Sie: Auch wenn es von Haus aus unglaublich leistungsstark ist, können Sie seine Effektivität drastisch vervielfachen, indem Sie ihm domänenspezifisches Wissen, Leitplanken und automatisierte Workflows geben. Genau das ist MyClaw.

## Installation

MyClaw ist für eine reibungslose Installation konzipiert. Sie müssen keine schwere CLI-Anwendung installieren, wenn Sie nicht möchten.

### Methode 1: NPX (Empfohlen)
Navigieren Sie zum Stammverzeichnis Ihres Projekts, in dem Sie Claude Code verwenden möchten, und führen Sie aus:
```bash
npx myclaw init
```
Dies generiert das erforderliche `.claude/`-Verzeichnis, injiziert unsere optimierte `settings.json` und fordert Sie auf auszuwählen, welche Sprach-/Framework-Skills Sie einbeziehen möchten.

### Methode 2: Manuelles Drop-in
1. Klonen Sie das MyClaw-Repository.
2. Durchsuchen Sie die Verzeichnisse `skills/` und `agents/`.
3. Kopieren Sie die spezifischen `.md`- oder `.json`-Dateien, die Sie benötigen, direkt in das `.claude/`-Verzeichnis Ihres Projekts.

## Kernkonzepte

- **Skills**: Domänenspezifische Anweisungen (z. B. "Wie man einen FastAPI-Endpunkt in dieser Codebasis schreibt").
- **Agents**: Benutzerdefinierte Personas, konfiguriert für spezifische Aufgaben (z. B. `Architect`, `SecurityReviewer`).
- **Hooks**: Bash-Skripte, die bei Lebenszyklus-Ereignissen von Claude Code ausgelöst werden (z. B. `PreToolUse`, `PreCompact`).
- **Workflows**: Mehrstufige Markdown-Dokumente, die Claude bei komplexen Refactorings befolgen soll.

Lesen Sie als Nächstes unseren [Token-Optimierungs-Leitfaden](token-optimization.de.md), um zu erfahren, wie Sie Ihre Claude API-Kosten um 60% senken können.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
