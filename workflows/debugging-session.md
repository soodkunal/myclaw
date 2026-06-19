# Debugging Session Workflow

When something breaks, use this workflow to find the root cause systematically.

## Step 1: Reproduce the Error
Feed the exact stack trace to Claude Code:
> "I am getting this error: [PASTE ERROR]. Do not write any code yet. Explain what the error means and list 3 possible causes."

## Step 2: Investigation
Ask Claude to search the codebase for the suspect functions:
> "Search the codebase for the function `calculateTotal()` and identify where it might be receiving a `null` value."

## Step 3: Apply Fix & Test
Once the issue is found, ask Claude to fix it and write a regression test:
> "Fix the null reference in `calculateTotal()` and write a test case in `tests/billing.spec.js` to ensure it never happens again."

---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
