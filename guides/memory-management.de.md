# Speicherverwaltung

Lang andauernde Sitzungen in Claude Code werden unweigerlich an die Token-Grenzen stoßen oder dazu führen, dass das LLM früheren Kontext "vergisst". Eine effektive Speicherverwaltung löst dies.

## Persistenz des Sitzungsstatus
Um den Speicher über Claude Code Neustarts oder Komprimierungszyklen hinweg zu erhalten, verwenden Sie lokale Markdown-Dateien als Notizblock.

### 1. Das `MEMORY.md` Muster
Erstellen Sie eine Regel in Ihrer `CLAUDE.md`, die den Agenten anweist, eine Statusdatei zu pflegen:

```markdown
## Speicherregel
Sie müssen eine `MEMORY.md`-Datei im Stammverzeichnis des `.claude/`-Ordners pflegen.
Bevor Sie eine komplexe Aufgabe ausführen, lesen Sie `MEMORY.md`, um den aktuellen Projektstatus zu verstehen.
Nachdem Sie eine Aufgabe abgeschlossen haben, aktualisieren Sie `MEMORY.md` mit einer Aufzählungsliste der Änderungen und ausstehenden Probleme.
```

### 2. PreCompact Hooks
Wenn Claude Code beschließt, den Verlauf zu komprimieren, können Sie einen Hook verwenden, um den genauen Status der Konversation oder Variablen in einer `.tmp`-Datei zu speichern, und Claude dann anweisen, diese im nächsten Zug zu lesen.

*Das Schreiben robuster PreCompact-Shell-Skripte wird im [Hooks Cookbook](hooks-cookbook.de.md) behandelt.*


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
