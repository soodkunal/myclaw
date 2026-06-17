# Beveiliging & Vangrails

Wanneer u een AI autonome uitvoeringsrechten in uw terminal verleent, is beveiliging van het grootste belang. MyClaw biedt geteste regels en hooks om catastrofale fouten te voorkomen.

## AgentShield Regels
We raden aan om strikte regels in uw `CLAUDE.md` af te dwingen om destructieve acties te voorkomen:

```markdown
## Beveiligingsregels
1. Voer NOOIT `rm -rf` uit zonder eerst expliciet om bevestiging van de gebruiker te vragen.
2. Wijzig NOOIT infrastructuurstatusbestanden (bijv. `terraform apply` of `kubectl delete`) zonder beoordeling door de gebruiker.
3. Commit NOOIT geheimen of `.env`-bestanden naar git. Controleer altijd `.gitignore` voor `git add .`.
```

## PreToolUse Hooks
U kunt bash-scripts schrijven die worden uitgevoerd voordat Claude Code een tool gebruikt.

Voorbeeld `PreToolUse` beveiligingshook:
```bash
#!/bin/bash
# .claude/hooks/pre-tool-use.sh

TOOL_NAME=$1
COMMAND=$2

if [ "$TOOL_NAME" == "run_command" ]; then
    if [[ "$COMMAND" == *"DROP TABLE"* || "$COMMAND" == *"terraform apply"* ]]; then
        echo "BEVEILIGINGSWAARSCHUWING: Destructieve opdracht gedetecteerd. Tussenkomst van de gebruiker vereist."
        exit 1 # Blokkeert Claude om de tool uit te voeren
    fi
fi
exit 0
```

## Uitlekken van gegevens
Zorg ervoor dat MyClaw-skills die u toevoegt uw API-sleutels niet hardcoderen. Gebruik altijd verwijzingen naar omgevingsvariabelen (bijv. `$OPENAI_API_KEY`) binnen prompts en scripts.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
