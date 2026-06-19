# Code Review Workflow

Use Claude Code to automate Pull Request reviews.

## Step 1: Diff Analysis
Check out the feature branch and run a diff against `main`:
> "Run `git diff main` and summarize the architectural changes made in this branch."

## Step 2: Security Audit
Invoke the **Security** agent to look for vulnerabilities:
> "Use the Security agent to analyze the new files for SQL injection, exposed secrets, or XSS vulnerabilities."

## Step 3: Style Enforcement
Check the code against the project's rules:
> "Ensure all new code follows the `rules/common/code-style.md` guidelines."

---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
