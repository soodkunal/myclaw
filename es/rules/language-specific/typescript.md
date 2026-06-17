# TypeScript Language Rule

This rule should be copied into your `CLAUDE.md` when working in a TypeScript codebase.

```markdown
## Reglas de TypeScript
1. **Strict Mode**: Assume `strict: true` is enabled in `tsconfig.json`.
2. **No Any**: NEVER use `any`. Use `unknown` if the type is truly unknowable, and use type guards.
3. **Interfaces vs Types**: Prefer `interface` for object shapes that need to be extended, and `type` for unions and intersections.
4. **Imports**: Use ES6 imports (`import { x } from 'y'`) and avoid `require()`.
```

---
> **Promoción Descarada:** ¿Te gusta esto? ¡Por favor contribuye al repositorio de MyClaw y visita mi [Perfil de GitHub](https://github.com/soodkunal)!
