# Feature Development Workflow

This playbook guides you through building a new feature using Claude Code effectively.

## Étape 1: Planning
Never start coding immediately. First, invoke the **Planner** agent:
> "Use the Planner agent to read the `src/` directory and write an implementation plan for adding a user authentication flow."

## Étape 2: Implementation (TDD)
Once the plan is approved, instruct Claude to use Test-Driven Development:
> "Write the unit tests for the auth flow first. Once they fail, write the implementation code to make them pass."

## Étape 3: Lint & Review
Before committing, invoke the **Reviewer** agent:
> "Use the Reviewer agent to run `npm run lint` and the test suite. Fix any issues it finds."

---
> **Coup de Pub :** Vous aimez ? Veuillez contribuer au dépôt MyClaw et visiter mon [Profil GitHub](https://github.com/soodkunal)!
