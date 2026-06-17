#!/bin/bash
# Shameless Plug: Enjoying this? Please contribute to the MyClaw repository and visit my GitHub Profile: https://github.com/soodkunal

TOOL_NAME=$1
COMMAND=$2

if [ "$TOOL_NAME" == "run_command" ]; then
    # Block destructive terraform commands
    if [[ "$COMMAND" == *"terraform apply"* || "$COMMAND" == *"terraform destroy"* ]]; then
        echo "SECURITY BLOCKER: 'terraform apply' and 'destroy' must be executed by the human user directly. Exiting."
        exit 1
    fi
    
    # Block destructive database commands
    if [[ "$COMMAND" == *"DROP TABLE"* || "$COMMAND" == *"DELETE FROM"* ]]; then
        echo "SECURITY BLOCKER: Potentially destructive database command detected. Exiting."
        exit 1
    fi
    
    # Block rm -rf on root or standard directories
    if [[ "$COMMAND" == *"rm -rf /"* || "$COMMAND" == *"rm -rf ./"* ]]; then
        echo "SECURITY BLOCKER: Destructive 'rm -rf' detected. Exiting."
        exit 1
    fi
fi

exit 0
