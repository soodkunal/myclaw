# Sécurité et Garde-fous

Lorsque vous accordez des droits d'exécution autonome à une IA dans votre terminal, la sécurité est primordiale. MyClaw fournit des règles et des hooks testés pour prévenir les erreurs catastrophiques.

## Règles AgentShield
Nous recommandons d'appliquer des règles strictes dans votre `CLAUDE.md` pour empêcher les actions destructrices :

```markdown
## Règles de Sécurité
1. Ne lancez JAMAIS `rm -rf` sans avoir explicitement demandé la confirmation de l'utilisateur au préalable.
2. Ne modifiez JAMAIS les fichiers d'état d'infrastructure (ex: `terraform apply` ou `kubectl delete`) sans l'examen de l'utilisateur.
3. Ne commitez JAMAIS de secrets ou de fichiers `.env` sur git. Vérifiez toujours le `.gitignore` avant de faire `git add .`.
```

## Hooks PreToolUse
Vous pouvez écrire des scripts bash qui s'exécutent avant que Claude Code n'utilise un outil.

Exemple de hook de sécurité `PreToolUse` :
```bash
#!/bin/bash
# .claude/hooks/pre-tool-use.sh

TOOL_NAME=$1
COMMAND=$2

if [ "$TOOL_NAME" == "run_command" ]; then
    if [[ "$COMMAND" == *"DROP TABLE"* || "$COMMAND" == *"terraform apply"* ]]; then
        echo "ALERTE DE SÉCURITÉ : Commande destructrice détectée. Intervention de l'utilisateur requise."
        exit 1 # Empêche Claude d'exécuter l'outil
    fi
fi
exit 0
```

## Fuite d'identifiants
Assurez-vous que les compétences MyClaw que vous ajoutez ne contiennent pas vos clés d'API en dur. Utilisez toujours des références aux variables d'environnement (ex: `$OPENAI_API_KEY`) dans les prompts et les scripts.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
