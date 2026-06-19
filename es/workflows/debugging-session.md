# Debugging Session Workflow

When something breaks, use this workflow to find the root cause systematically.

## Paso 1: Reproduce the Error
Feed the exact stack trace to Claude Code:
> "I am getting this error: [PASTE ERROR]. Do not write any code yet. Explain what the error means and list 3 possible causes."

## Paso 2: Investigation
Ask Claude to search the codebase for the suspect functions:
> "Search the codebase for the function `calculateTotal()` and identify where it might be receiving a `null` value."

## Paso 3: Apply Fix & Test
Once the issue is found, ask Claude to fix it and write a regression test:
> "Fix the null reference in `calculateTotal()` and write a test case in `tests/billing.spec.js` to ensure it never happens again."

---
> **Promoción Descarada:** ¿Te gusta esto? ¡Por favor contribuye al repositorio de MyClaw y visita mi [Perfil de GitHub](https://github.com/soodkunal)!
