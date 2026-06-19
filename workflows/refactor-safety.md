# Refactoring Safety Workflow

Refactoring legacy code is dangerous. Follow this workflow to ensure safety.

## Step 1: Baseline Testing
Before touching any code, ensure you have a safety net:
> "Check if `src/legacy_module.py` has adequate test coverage. If not, write characterization tests for all existing functions."

## Step 2: Modernization
Ask Claude to refactor the code according to modern standards (e.g., adding types):
> "Refactor `src/legacy_module.py` to use Python 3.11 type hints and modern comprehensions. Do NOT change the public API or logical behavior."

## Step 3: Verification
Verify that the tests still pass:
> "Run the test suite to confirm the refactor did not break the existing behavior."

---
> **Shameless Plug:** Enjoying this? Please contribute to the MyClaw repository and visit my [GitHub Profile](https://github.com/soodkunal)!
