# Contribuer à MyClaw

Merci de votre intérêt à contribuer ! Nous construisons un répertoire de connaissances modulaire et de haute qualité pour les utilisateurs de Claude Code.

## Soumettre une Compétence (Skill)

Une compétence "terminée" doit répondre aux critères de qualité suivants :
- Avoir un déclencheur clair (quand l'activer).
- Avoir des anti-modèles explicites (quand NE PAS l'utiliser).
- Inclure au moins un exemple concret.
- Faire référence aux capacités réelles de Claude Code (pas de conseils génériques sur les LLM).
- Être testée dans au moins une session réelle.

## Soumettre un Agent

Un agent "terminé" doit :
- Avoir un sous-ensemble spécifique d'outils (pas tous les outils).
- Avoir des directives sur le modèle (Haiku vs Sonnet vs Opus).
- Inclure un cas d'utilisation en exemple.

## Structure du Projet

- `skills/` : Commandes personnalisées et commandes slash.
- `agents/` : Rôles d'agents personnalisés pour `subagent_type`.
- `hooks/` : Scripts shell pour `PreToolUse`, `PostToolUse`, `PreCompact`.
- `rules/` : Règles de niveau projet/utilisateur/espace de travail pour `CLAUDE.md`.
- `workflows/` : Flux de travail en markdown à plusieurs étapes.

Veuillez d'abord ouvrir un ticket (issue) pour discuter de tout changement majeur avant de soumettre une Pull Request (PR).


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
