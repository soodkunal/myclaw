# MyClaw 🦖

> Le système de connaissances ultime pour Claude Code

MyClaw est une collection open-source de modèles, compétences, agents, hooks, flux de travail et prompts testés sur le terrain, conçue pour booster votre expérience avec le CLI Anthropic Claude Code. Ajoutez ceci à votre environnement pour démultiplier votre rendement de codage sans aucune friction d'installation.

## Fonctionnalités par rapport à Claude Code standard

- **Support linguistique étendu** : Compétences préconfigurées pour Python (FastAPI/Django), Go, C#/.NET, Next.js.
- **Outils DevOps approfondis** : Agents et compétences spécialisés pour Kubernetes, Docker, Terraform et GitHub Actions.
- **Flux de travail complets de bout en bout** : Flux de travail en markdown à plusieurs étapes pour guider Claude lors de sessions complexes de débogage ou de refactoring.
- **Sécurité et Hooks** : Hooks préconfigurés dans `settings.json` pour l'optimisation des tokens, la sécurité et l'automatisation git.

## Démarrage rapide

Vous pouvez installer le système complet via NPX :

```bash
npx myclaw init
```

Cela copiera les outils, compétences et paramètres de `.claude/` dans votre répertoire de travail actuel.

## Installation manuelle

Alternativement, vous pouvez simplement copier ce dont vous avez besoin :

1. Clonez ce dépôt : `git clone https://github.com/yourusername/myclaw.git`
2. Copiez les fichiers souhaités de `skills/` ou `agents/` directement dans le répertoire `.claude/` de votre projet.

## Contribution

Nous construisons l'extension open-source définitive pour Claude Code. Si vous avez une compétence ou un agent personnalisé qui vous génère de la valeur, veuillez lire notre [CONTRIBUTING.fr.md](CONTRIBUTING.fr.md) pour soumettre une Pull Request !

## Licence

MIT


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
