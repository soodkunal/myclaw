# Gestion de la Mémoire

Les sessions longues dans Claude Code finiront inévitablement par atteindre les limites de tokens ou feront "oublier" le contexte précédent au LLM. Une gestion efficace de la mémoire résout ce problème.

## Persistance de l'État de la Session
Pour conserver la mémoire entre les redémarrages de Claude Code ou les cycles de compression, utilisez des fichiers markdown locaux comme bloc-notes.

### 1. Le Modèle `MEMORY.md`
Créez une règle dans votre `CLAUDE.md` qui demande à l'agent de maintenir un fichier d'état :

```markdown
## Règle de Mémoire
Vous devez maintenir un fichier `MEMORY.md` à la racine du répertoire `.claude/`.
Avant d'exécuter une tâche complexe, lisez `MEMORY.md` pour comprendre l'état actuel du projet.
Après avoir terminé une tâche, mettez à jour `MEMORY.md` avec une liste à puces de ce qui a été modifié et des problèmes en suspens.
```

### 2. Hooks PreCompact
Si Claude Code décide de compresser l'historique, vous pouvez utiliser un hook pour sauvegarder l'état exact de la conversation ou des variables dans un fichier `.tmp`, puis demander à Claude de le lire au tour suivant.

*La rédaction de scripts shell PreCompact robustes est couverte dans le [Livre de Recettes des Hooks](hooks-cookbook.fr.md).*


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
