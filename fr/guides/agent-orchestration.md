# Orchestration d'Agents

Claude Code permet l'instanciation de "sous-agents" spécifiques. Vous pouvez définir ces agents via des configurations JSON ou des fichiers markdown, en leur donnant des outils et des modèles spécifiques.

## Pourquoi Orchestrer ?
Au lieu d'avoir un prompt Claude monolithique qui essaie de tout faire, divisez les tâches :
1. **Agent Planificateur** : Utilise `claude-3-opus` ou `claude-3-5-sonnet`. A un accès en lecture seule. Formule un plan étape par étape.
2. **Agent Codeur** : Utilise `claude-3-5-sonnet`. A un accès en écriture et exécution de fichiers. Met en œuvre le plan.
3. **Agent Réviseur** : Utilise `claude-3-haiku` ou `sonnet`. Exécute des outils de linting, des suites de tests et effectue des vérifications de sécurité.

## Créer un Agent
Dans votre répertoire `.claude/agents/`, créez `architect.md` :

```markdown
---
name: "Architect"
description: "Concepteur de système de haut niveau. Utilisez cet agent pour planifier avant d'écrire du code."
model: "claude-3-opus-20240229"
tools: ["read_file", "list_dir", "search_code"]
---
Vous êtes un Architecte Logiciel expert.
Votre travail consiste à analyser la base de code et à produire un artefact de Plan d'Implémentation détaillé.
N'ÉCRIVEZ PAS DE CODE. Contentez-vous de lire et de planifier.
```

Lorsque vous utilisez Claude Code, demandez-lui de : *"Instancier le sous-agent Architect pour planifier le refactoring."*


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
