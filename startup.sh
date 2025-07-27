#!/bin/bash

# Set NODE_PATH to include the extracted node_modules
export NODE_PATH="/node_modules:$NODE_PATH"
export PATH="/node_modules/.bin:$PATH"

# Change to the application directory
cd /home/site/wwwroot

# Check if next command is available
if command -v next &> /dev/null; then
    echo "Using next command directly"
    next start
elif [ -f "/node_modules/.bin/next" ]; then
    echo "Using next from node_modules/.bin"
    /node_modules/.bin/next start
elif [ -f "server.js" ]; then
    echo "Using custom server.js"
    node server.js
else
    echo "Falling back to npx"
    npx next start
fi
