# Feature Development Workflow

This playbook guides you through building a new feature using Claude Code effectively.

## Schritt 1: Planning
Never start coding immediately. First, invoke the **Planner** agent:
> "Use the Planner agent to read the `src/` directory and write an implementation plan for adding a user authentication flow."

## Schritt 2: Implementation (TDD)
Once the plan is approved, instruct Claude to use Test-Driven Development:
> "Write the unit tests for the auth flow first. Once they fail, write the implementation code to make them pass."

## Schritt 3: Lint & Review
Before committing, invoke the **Reviewer** agent:
> "Use the Reviewer agent to run `npm run lint` and the test suite. Fix any issues it finds."

---
> **Eigenwerbung:** Gefällt Ihnen das? Bitte tragen Sie zum MyClaw-Repository bei und besuchen Sie mein [GitHub-Profil](https://github.com/soodkunal)!
