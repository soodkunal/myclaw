# Sicherheit & Leitplanken

Wenn Sie einer KI autonome Ausführungsrechte in Ihrem Terminal gewähren, steht Sicherheit an erster Stelle. MyClaw bietet getestete Regeln und Hooks, um katastrophale Fehler zu verhindern.

## AgentShield Regeln
Wir empfehlen, strenge Regeln in Ihrer `CLAUDE.md` durchzusetzen, um destruktive Aktionen zu verhindern:

```markdown
## Sicherheitsregeln
1. Führen Sie NIEMALS `rm -rf` aus, ohne vorher ausdrücklich um Bestätigung durch den Benutzer zu bitten.
2. Ändern Sie NIEMALS Infrastruktur-Statusdateien (z. B. `terraform apply` oder `kubectl delete`) ohne Benutzerüberprüfung.
3. Committen Sie NIEMALS Geheimnisse oder `.env`-Dateien in Git. Überprüfen Sie immer `.gitignore`, bevor Sie `git add .` ausführen.
```

## PreToolUse Hooks
Sie können Bash-Skripte schreiben, die ausgeführt werden, bevor Claude Code ein Tool verwendet.

Beispiel für einen `PreToolUse`-Sicherheits-Hook:
```bash
#!/bin/bash
# .claude/hooks/pre-tool-use.sh

TOOL_NAME=$1
COMMAND=$2

if [ "$TOOL_NAME" == "run_command" ]; then
    if [[ "$COMMAND" == *"DROP TABLE"* || "$COMMAND" == *"terraform apply"* ]]; then
        echo "SICHERHEITSWARNUNG: Destruktiver Befehl erkannt. Eingreifen des Benutzers erforderlich."
        exit 1 # Blockiert Claude daran, das Tool auszuführen
    fi
fi
exit 0
```

## Preisgabe von Anmeldeinformationen
Stellen Sie sicher, dass von Ihnen hinzugefügte MyClaw-Skills Ihre API-Schlüssel nicht fest codieren. Verwenden Sie in Prompts und Skripten immer Referenzen auf Umgebungsvariablen (z. B. `$OPENAI_API_KEY`).


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
