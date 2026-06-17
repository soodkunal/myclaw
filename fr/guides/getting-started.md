# Démarrer avec MyClaw

Bienvenue dans **MyClaw** ! Si vous utilisez Claude Code tous les jours, vous savez que bien qu'il soit incroyablement puissant dès le départ, vous pouvez multiplier drastiquement son efficacité en lui fournissant des connaissances spécifiques au domaine, des garde-fous et des flux de travail automatisés. C'est ce qu'est MyClaw.

## Installation

MyClaw est conçu pour une installation sans friction. Vous n'avez pas besoin d'installer une application CLI lourde si vous ne le souhaitez pas.

### Méthode 1 : NPX (Recommandé)
Naviguez jusqu'à la racine de votre projet où vous souhaitez utiliser Claude Code et exécutez :
```bash
npx myclaw init
```
Cela préparera le répertoire `.claude/` nécessaire, injectera notre `settings.json` optimisé et vous invitera à sélectionner les compétences (langages/frameworks) que vous souhaitez inclure.

### Méthode 2 : Ajout manuel
1. Clonez le dépôt MyClaw.
2. Parcourez les répertoires `skills/` et `agents/`.
3. Copiez les fichiers `.md` ou `.json` spécifiques dont vous avez besoin directement dans le répertoire `.claude/` de votre projet.

## Concepts fondamentaux

- **Compétences (Skills)** : Instructions spécifiques au domaine (ex: "Comment écrire un point de terminaison FastAPI dans cette base de code").
- **Agents** : Personas personnalisés configurés pour des tâches spécifiques (ex: `Architect`, `SecurityReviewer`).
- **Hooks** : Scripts Bash déclenchés lors des événements du cycle de vie de Claude Code (ex: `PreToolUse`, `PreCompact`).
- **Flux de travail (Workflows)** : Documents markdown en plusieurs étapes que vous pouvez demander à Claude de suivre pour un refactoring complexe.

Ensuite, lisez notre [Guide d'Optimisation des Tokens](token-optimization.fr.md) pour apprendre comment réduire vos coûts d'API Claude de 60%.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
