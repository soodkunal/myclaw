# Code Review Workflow

Use Claude Code to automate Pull Request reviews.

## Schritt 1: Diff Analysis
Check out the feature branch and run a diff against `main`:
> "Run `git diff main` and summarize the architectural changes made in this branch."

## Schritt 2: Security Audit
Invoke the **Security** agent to look for vulnerabilities:
> "Use the Security agent to analyze the new files for SQL injection, exposed secrets, or XSS vulnerabilities."

## Schritt 3: Style Enforcement
Check the code against the project's rules:
> "Ensure all new code follows the `rules/common/code-style.md` guidelines."

---
> **Eigenwerbung:** Gefällt Ihnen das? Bitte tragen Sie zum MyClaw-Repository bei und besuchen Sie mein [GitHub-Profil](https://github.com/soodkunal)!
