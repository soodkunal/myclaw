# Git Conventions Rule

This rule should be copied into your `CLAUDE.md` to enforce standard Git practices.

```markdown
## Git Rules
1. **Commit Messages**: Follow Conventional Commits format (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`).
2. **Body**: Provide a detailed body explaining *why* the change was made, not just *what* changed.
3. **No Massive Commits**: Do not commit more than 300 lines of changes at a time. Break them down into logical chunks.
4. **Secrets**: ALWAYS verify `.gitignore` before running `git add .` to ensure no `.env` files are tracked.
```

---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
