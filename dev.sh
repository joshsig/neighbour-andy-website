#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting development servers...${NC}"

# Function to cleanup background processes on exit
cleanup() {
    echo -e "\n${BLUE}Shutting down development servers...${NC}"
    kill $SANITY_PID $NEXT_PID 2>/dev/null
    exit 0
}

# Set up trap to catch Ctrl+C and other termination signals
trap cleanup SIGINT SIGTERM

# Start Sanity dev server in background
echo -e "${BLUE}Starting Sanity Studio...${NC}"
npx sanity dev &
SANITY_PID=$!

# Start Next.js dev server in background
echo -e "${BLUE}Starting Next.js dev server...${NC}"
npm run dev &
NEXT_PID=$!

# Wait for both processes
wait $SANITY_PID $NEXT_PID

