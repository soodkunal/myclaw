# Gestión de Memoria

Las sesiones largas en Claude Code inevitablemente alcanzarán los límites de tokens o causarán que el LLM "olvide" el contexto anterior. Una gestión eficaz de la memoria resuelve esto.

## Persistencia del Estado de la Sesión
Para conservar la memoria a través de los reinicios de Claude Code o los ciclos de compresión, usa archivos markdown locales como un bloc de notas.

### 1. El Patrón `MEMORY.md`
Crea una regla en tu `CLAUDE.md` que le indique al agente mantener un archivo de estado:

```markdown
## Regla de Memoria
Debes mantener un archivo `MEMORY.md` en la raíz del directorio `.claude/`.
Antes de ejecutar cualquier tarea compleja, lee `MEMORY.md` para comprender el estado actual del proyecto.
Después de completar una tarea, actualiza `MEMORY.md` con una lista con viñetas de lo que se cambió y cualquier problema pendiente.
```

### 2. Hooks PreCompact
Si Claude Code decide comprimir el historial, puedes usar un hook para guardar el estado exacto de la conversación o variables en un archivo `.tmp`, y luego indicarle a Claude que lo lea en el siguiente turno.

*La redacción de scripts shell PreCompact robustos se cubre en el [Libro de Recetas de Hooks](hooks-cookbook.es.md).*


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
