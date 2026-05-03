#!/usr/bin/env bash

# ============================================
# WhatsApp Bot Starter
# Quick start script without reinstalling
# ============================================

RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
PURPLE='\033[1;35m'
NC='\033[0m'

clear

echo -e "${CYAN}"
echo "╔════════════════════════════════════════════╗"
echo "║                                            ║"
echo "║       Starting WhatsApp Bot...             ║"
echo "║                                            ║"
echo "╚════════════════════════════════════════════╝"
echo -e "${NC}"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${RED}[✗ ERROR] node_modules not found!${NC}"
    echo -e "${CYAN}[INFO] Please run: ${GREEN}bash install.sh${NC}"
    exit 1
fi

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo -e "${RED}[✗ ERROR] package.json not found!${NC}"
    echo -e "${CYAN}[INFO] Make sure you are in the correct directory.${NC}"
    exit 1
fi

echo -e "${GREEN}[✓] Dependencies found${NC}"
echo -e "${CYAN}[➜] Starting bot...${NC}"
echo ""
echo -e "${PURPLE}═══════════════════════════════════════════════${NC}"
echo ""

# Start the bot
npm start
