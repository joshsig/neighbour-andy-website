#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if required commands exist
command -v npx >/dev/null 2>&1 || { echo -e "${YELLOW}Error: npx is not installed. Please install Node.js and npm.${NC}" >&2; exit 1; }
command -v npm >/dev/null 2>&1 || { echo -e "${YELLOW}Error: npm is not installed. Please install Node.js and npm.${NC}" >&2; exit 1; }

echo -e "${GREEN}Starting development servers...${NC}"

# Function to cleanup background processes on exit
cleanup() {
    echo -e "\n${BLUE}Shutting down development servers...${NC}"
    if [ ! -z "$SANITY_PID" ]; then
        kill -TERM $SANITY_PID 2>/dev/null || true
    fi
    if [ ! -z "$NEXT_PID" ]; then
        kill -TERM $NEXT_PID 2>/dev/null || true
    fi
    # Give processes time to shutdown gracefully
    sleep 1
    # Force kill if still running
    if [ ! -z "$SANITY_PID" ]; then
        kill -9 $SANITY_PID 2>/dev/null || true
    fi
    if [ ! -z "$NEXT_PID" ]; then
        kill -9 $NEXT_PID 2>/dev/null || true
    fi
    exit 0
}

# Set up trap to catch Ctrl+C and other termination signals
trap cleanup SIGINT SIGTERM EXIT

# Start Sanity dev server in background
echo -e "${BLUE}Starting Sanity Studio...${NC}"
npx sanity dev &
SANITY_PID=$!

# Start Next.js dev server in background
echo -e "${BLUE}Starting Next.js dev server...${NC}"
npm run dev &
NEXT_PID=$!

echo -e "${GREEN}Development servers started!${NC}"
echo -e "${BLUE}Press Ctrl+C to stop all servers${NC}"

# Wait for both processes
wait $SANITY_PID $NEXT_PID

