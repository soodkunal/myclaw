# Guide d'Optimisation des Tokens

Claude Code fonctionne avec une grande fenêtre de contexte, mais gérer les tokens efficacement est essentiel pour la vitesse et la réduction des coûts. Tout développeur utilisant Claude Code à grande échelle devrait implémenter ces stratégies.

## 1. Utilisez Haiku pour le Triage
Par défaut, vous pouvez diriger toutes vos requêtes vers Claude 3.5 Sonnet. Cependant, l'exploration basique du code, les commandes `grep` et le listage de fichiers ne nécessitent pas la puissance de raisonnement de Sonnet.

**Stratégie :** Configurez un hook pré-outil ou demandez explicitement à Claude Code d'utiliser `claude-3-haiku-20240307` pour les tâches d'exploration initiales.
*Impact : Réduction d'environ 60% des coûts pour les boucles de recherche et de lecture.*

## 2. Élaguez les serveurs MCP
Les serveurs Model Context Protocol (MCP) injectent leurs schémas directement dans le prompt système de Claude.
Si vous avez 10 serveurs MCP activés (ex: GitHub, Linear, Supabase, Postgres, etc.), cela équivaut à environ 88 outils. Cela peut consommer **~30k tokens** de votre fenêtre de 200k avant même qu'une seule ligne de code ne soit lue.

**Action :** N'activez que les serveurs MCP dans votre `.claude/settings.json` qui sont strictement nécessaires pour le contexte du projet actuel.

## 3. Hooks PreCompact stricts
Claude Code compresse l'historique lorsque le contexte devient trop long. Vous pouvez écrire un hook `PreCompact` dans `.claude/settings.json` pour vous assurer que des fichiers spécifiques (comme `architecture.md` ou des journaux d'erreurs essentiels) soient résumés plutôt que tronqués.

## 4. Limitez les sorties Grep
Lorsque vous demandez à Claude de chercher dans le code, imposez l'utilisation de `-n 5` ou de limites similaires sur les outils `ripgrep` afin que des journaux massifs ne soient pas déversés dans la fenêtre de contexte.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
