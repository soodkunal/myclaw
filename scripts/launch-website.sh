#!/bin/bash
# scripts/launch-website.sh

echo "Starting website..."
cd website
npm install
npm run dev
