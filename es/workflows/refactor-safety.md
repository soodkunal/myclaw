# Refactoring Safety Workflow

Refactoring legacy code is dangerous. Follow this workflow to ensure safety.

## Paso 1: Baseline Testing
Before touching any code, ensure you have a safety net:
> "Check if `src/legacy_module.py` has adequate test coverage. If not, write characterization tests for all existing functions."

## Paso 2: Modernization
Ask Claude to refactor the code according to modern standards (e.g., adding types):
> "Refactor `src/legacy_module.py` to use Python 3.11 type hints and modern comprehensions. Do NOT change the public API or logical behavior."

## Paso 3: Verification
Verify that the tests still pass:
> "Run the test suite to confirm the refactor did not break the existing behavior."

---
> **Promoción Descarada:** ¿Te gusta esto? ¡Por favor contribuye al repositorio de MyClaw y visita mi [Perfil de GitHub](https://github.com/soodkunal)!
