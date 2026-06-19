#!/bin/bash
# scripts/setup-and-run.sh

# 1. Make everything executable
echo "Making scripts executable..."
chmod +x hooks/pre-tool-use/*.sh
chmod +x hooks/post-tool-use/*.sh
chmod +x hooks/lifecycle/*.sh
chmod +x scripts/*.sh

# 2. Run Python translation script
echo "Running parallel translations..."
python3 scripts/translate.py &
TRANSLATE_PID=$!

# 3. Launch website setup and dev server
echo "Running parallel website setup..."
./scripts/launch-website.sh &
WEBSITE_PID=$!

# Wait for both processes (in this case, just wait a bit and exit script so the server stays up or wait indefinitely)
echo "Both processes launched in parallel!"
echo "Translation PID: $TRANSLATE_PID"
echo "Website PID: $WEBSITE_PID"

# Wait for translation to finish
wait $TRANSLATE_PID
echo "Translations finished."

# The website runs indefinitely (dev server). 
# We'll wait on it so the master script stays alive.
wait $WEBSITE_PID
