# Debugging Session Workflow

When something breaks, use this workflow to find the root cause systematically.

## Étape 1: Reproduce the Error
Feed the exact stack trace to Claude Code:
> "I am getting this error: [PASTE ERROR]. Do not write any code yet. Explain what the error means and list 3 possible causes."

## Étape 2: Investigation
Ask Claude to search the codebase for the suspect functions:
> "Search the codebase for the function `calculateTotal()` and identify where it might be receiving a `null` value."

## Étape 3: Apply Fix & Test
Once the issue is found, ask Claude to fix it and write a regression test:
> "Fix the null reference in `calculateTotal()` and write a test case in `tests/billing.spec.js` to ensure it never happens again."

---
> **Coup de Pub :** Vous aimez ? Veuillez contribuer au dépôt MyClaw et visiter mon [Profil GitHub](https://github.com/soodkunal)!
