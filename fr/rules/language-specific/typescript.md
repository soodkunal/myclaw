# TypeScript Language Rule

This rule should be copied into your `CLAUDE.md` when working in a TypeScript codebase.

```markdown
## Règles TypeScript
1. **Strict Mode**: Assume `strict: true` is enabled in `tsconfig.json`.
2. **No Any**: NEVER use `any`. Use `unknown` if the type is truly unknowable, and use type guards.
3. **Interfaces vs Types**: Prefer `interface` for object shapes that need to be extended, and `type` for unions and intersections.
4. **Imports**: Use ES6 imports (`import { x } from 'y'`) and avoid `require()`.
```

---
> **Coup de Pub :** Vous aimez ? Veuillez contribuer au dépôt MyClaw et visiter mon [Profil GitHub](https://github.com/soodkunal)!
