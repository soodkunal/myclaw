# Guía de Optimización de Tokens

Claude Code opera con una gran ventana de contexto, pero administrar los tokens de manera eficiente es fundamental tanto para la velocidad como para la reducción de costos. Cada desarrollador que usa Claude Code a escala debería implementar estas estrategias.

## 1. Usa Haiku para el Triage
Por defecto, puedes enviar todas las solicitudes a Claude 3.5 Sonnet. Sin embargo, la exploración básica del código, los comandos `grep` y la lista de archivos no requieren el poder de razonamiento de Sonnet.

**Estrategia:** Configura un hook pre-herramienta o indica explícitamente a Claude Code que use `claude-3-haiku-20240307` para las tareas iniciales de exploración.
*Impacto: ~60% de reducción de costos en los bucles de búsqueda y lectura.*

## 2. Poda de Servidores MCP
Los servidores del Protocolo de Contexto de Modelos (MCP) inyectan sus esquemas directamente en el prompt del sistema de Claude.
Si tienes 10 servidores MCP habilitados (por ejemplo, GitHub, Linear, Supabase, Postgres, etc.), eso equivale a aproximadamente 88 herramientas. Esto puede consumir **~30k tokens** de tu ventana de 200k antes de que se lea una sola línea de tu código.

**Acción:** Solo habilita los servidores MCP en tu `.claude/settings.json` que sean estrictamente necesarios para el contexto del proyecto actual.

## 3. Hooks PreCompact Estrictos
Claude Code comprime el historial cuando el contexto se vuelve demasiado largo. Puedes escribir un hook `PreCompact` en `.claude/settings.json` para asegurar que archivos específicos (como `architecture.md` o registros de errores esenciales) se resuman en lugar de truncarse.

## 4. Limita las Salidas Grep
Cuando le pidas a Claude que busque en el código, exige el uso de `-n 5` o límites similares en las herramientas `ripgrep` para que los registros masivos no se vuelquen en la ventana de contexto.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
