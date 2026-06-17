# Seguridad y Barreras

Cuando otorgas a una IA derechos de ejecución autónoma en tu terminal, la seguridad es primordial. MyClaw proporciona reglas y hooks probados para prevenir errores catastróficos.

## Reglas AgentShield
Recomendamos hacer cumplir reglas estrictas en tu `CLAUDE.md` para evitar acciones destructivas:

```markdown
## Reglas de Seguridad
1. NUNCA ejecutes `rm -rf` sin pedir explícitamente confirmación al usuario primero.
2. NUNCA modifiques archivos de estado de infraestructura (por ejemplo, `terraform apply` o `kubectl delete`) sin la revisión del usuario.
3. NUNCA hagas commit de secretos o archivos `.env` a git. Siempre revisa dos veces el `.gitignore` antes de hacer `git add .`.
```

## Hooks PreToolUse
Puedes escribir scripts bash que se ejecuten antes de que Claude Code use una herramienta.

Ejemplo de hook de seguridad `PreToolUse`:
```bash
#!/bin/bash
# .claude/hooks/pre-tool-use.sh

TOOL_NAME=$1
COMMAND=$2

if [ "$TOOL_NAME" == "run_command" ]; then
    if [[ "$COMMAND" == *"DROP TABLE"* || "$COMMAND" == *"terraform apply"* ]]; then
        echo "ALERTA DE SEGURIDAD: Comando destructivo detectado. Se requiere intervención del usuario."
        exit 1 # Bloquea a Claude de ejecutar la herramienta
    fi
fi
exit 0
```

## Fugas de Credenciales
Asegúrate de que cualquier habilidad de MyClaw que agregues no tenga codificadas tus claves API. Siempre usa referencias a variables de entorno (por ejemplo, `$OPENAI_API_KEY`) dentro de los prompts y scripts.


---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
