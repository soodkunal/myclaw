# Empezando con MyClaw

¡Bienvenido a **MyClaw**! Si usas Claude Code diariamente, sabes que aunque es increíblemente poderoso desde el primer momento, puedes multiplicar drásticamente su efectividad dándole conocimiento específico del dominio, barreras de seguridad y flujos de trabajo automatizados. Eso es MyClaw.

## Instalación

MyClaw está diseñado para una instalación sin fricciones. No necesitas instalar una aplicación CLI pesada si no quieres.

### Método 1: NPX (Recomendado)
Navega a la raíz de tu proyecto donde quieras usar Claude Code y ejecuta:
```bash
npx myclaw init
```
Esto creará el directorio `.claude/` necesario, inyectará nuestro `settings.json` optimizado y te pedirá que selecciones qué habilidades de lenguaje/framework quieres incluir.

### Método 2: Instalación manual
1. Clona el repositorio de MyClaw.
2. Explora los directorios `skills/` y `agents/`.
3. Copia los archivos `.md` o `.json` específicos que necesites directamente en el directorio `.claude/` de tu proyecto.

## Conceptos Clave

- **Habilidades (Skills)**: Instrucciones específicas del dominio (ej. "Cómo escribir un endpoint FastAPI en esta base de código").
- **Agentes (Agents)**: Personas personalizadas configuradas para tareas específicas (ej. `Architect`, `SecurityReviewer`).
- **Ganchos (Hooks)**: Scripts Bash activados en eventos del ciclo de vida de Claude Code (ej. `PreToolUse`, `PreCompact`).
- **Flujos de trabajo (Workflows)**: Documentos markdown de múltiples pasos que puedes pedirle a Claude que siga para refactorizaciones complejas.

A continuación, lee nuestra [Guía de Optimización de Tokens](token-optimization.es.md) para aprender cómo reducir los costos de la API de Claude en un 60%.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
