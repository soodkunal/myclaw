# Code Review Workflow

Use Claude Code to automate Pull Request reviews.

## Étape 1: Diff Analysis
Check out the feature branch and run a diff against `main`:
> "Run `git diff main` and summarize the architectural changes made in this branch."

## Étape 2: Security Audit
Invoke the **Security** agent to look for vulnerabilities:
> "Use the Security agent to analyze the new files for SQL injection, exposed secrets, or XSS vulnerabilities."

## Étape 3: Style Enforcement
Check the code against the project's rules:
> "Ensure all new code follows the `rules/common/code-style.md` guidelines."

---
> **Coup de Pub :** Vous aimez ? Veuillez contribuer au dépôt MyClaw et visiter mon [Profil GitHub](https://github.com/soodkunal)!
