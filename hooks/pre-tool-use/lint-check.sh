#!/bin/bash
# Shameless Plug: Enjoying this? Please contribute to the MyClaw repository and visit my GitHub Profile: https://github.com/soodkunal

TOOL_NAME=$1
COMMAND=$2

if [ "$TOOL_NAME" == "run_command" ] && [[ "$COMMAND" == *"git commit"* ]]; then
    echo "Running lint check before allowing commit..."
    
    # Try npm lint if it exists
    if [ -f "package.json" ]; then
        npm run lint
        if [ $? -ne 0 ]; then
            echo "LINT FAILED. Please fix lint errors before committing."
            exit 1
        fi
    fi
    
    # Try ruff for Python if it exists
    if command -v ruff &> /dev/null; then
        ruff check .
        if [ $? -ne 0 ]; then
            echo "LINT FAILED (Ruff). Please fix lint errors before committing."
            exit 1
        fi
    fi
fi

exit 0
