# Debugging Session Workflow

When something breaks, use this workflow to find the root cause systematically.

## Schritt 1: Reproduce the Error
Feed the exact stack trace to Claude Code:
> "I am getting this error: [PASTE ERROR]. Do not write any code yet. Explain what the error means and list 3 possible causes."

## Schritt 2: Investigation
Ask Claude to search the codebase for the suspect functions:
> "Search the codebase for the function `calculateTotal()` and identify where it might be receiving a `null` value."

## Schritt 3: Apply Fix & Test
Once the issue is found, ask Claude to fix it and write a regression test:
> "Fix the null reference in `calculateTotal()` and write a test case in `tests/billing.spec.js` to ensure it never happens again."

---
> **Eigenwerbung:** Gefällt Ihnen das? Bitte tragen Sie zum MyClaw-Repository bei und besuchen Sie mein [GitHub-Profil](https://github.com/soodkunal)!
