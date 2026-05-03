#!/usr/bin/env bash
set -e

# ============================================
# WhatsApp Bot Auto Installer
# Support: Termux, Ubuntu, Debian, Arch, Fedora, CentOS
# ============================================

# Define color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
PURPLE='\033[1;35m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Clear screen
clear

# Banner
echo -e "${CYAN}"
echo "╔════════════════════════════════════════════╗"
echo "║                                            ║"
echo "║    WhatsApp Bot Auto Installer v2.0        ║"
echo "║    Multi-Platform Support                  ║"
echo "║                                            ║"
echo "╚════════════════════════════════════════════╝"
echo -e "${NC}"
echo ""

# Function to detect the package manager
detect_pkg() {
  if command -v pkg >/dev/null 2>&1; then
    echo "pkg"
  elif command -v apt >/dev/null 2>&1; then
    echo "apt"
  elif command -v apt-get >/dev/null 2>&1; then
    echo "apt-get"
  elif command -v pacman >/dev/null 2>&1; then
    echo "pacman"
  elif command -v dnf >/dev/null 2>&1; then
    echo "dnf"
  elif command -v yum >/dev/null 2>&1; then
    echo "yum"
  else
    echo ""
  fi
}

# Function to run commands as root if not in Termux
run_as_root() {
  if [ "$(id -u)" -ne 0 ] && command -v sudo >/dev/null 2>&1; then
    sudo "$@"
  else
    "$@"
  fi
}

# Main installation function
main() {
  local PKG=$(detect_pkg)

  # Check if package manager is supported
  if [ -z "$PKG" ]; then
    echo -e "${RED}[✗ ERROR] Unsupported or missing package manager.${NC}"
    echo -e "${YELLOW}[!] Please install manually:${NC}"
    echo -e "   - Node.js (v16+)"
    echo -e "   - Git"
    echo -e "   - FFmpeg"
    echo -e "   - ImageMagick"
    exit 1
  fi

  echo -e "${CYAN}[✓ INFO] Detected package manager: ${GREEN}$PKG${NC}"
  echo -e "${CYAN}[➜ INFO] Starting installation...${NC}"
  echo ""

  # Update package list
  echo -e "${CYAN}[➜] Updating package list...${NC}"
  case "$PKG" in
    pkg) # Termux
      pkg update -y >/dev/null 2>&1
      ;;
    apt|apt-get) # Ubuntu/Debian
      run_as_root $PKG update -y >/dev/null 2>&1
      ;;
    pacman) # Arch Linux
      run_as_root pacman -Sy --noconfirm >/dev/null 2>&1
      ;;
    dnf) # Fedora
      run_as_root dnf check-update -y >/dev/null 2>&1 || true
      ;;
    yum) # CentOS/RHEL
      run_as_root yum check-update -y >/dev/null 2>&1 || true
      ;;
  esac
  echo -e "${GREEN}[✓] Package list updated${NC}"

  # Install system dependencies
  echo -e "${CYAN}[➜] Installing system dependencies...${NC}"
  
  case "$PKG" in
    pkg) # Termux
      echo -e "${YELLOW}   Installing: git nodejs ffmpeg imagemagick python${NC}"
      pkg install -y git nodejs ffmpeg imagemagick python >/dev/null 2>&1
      ;;
    apt|apt-get) # Ubuntu/Debian
      echo -e "${YELLOW}   Installing: git nodejs npm ffmpeg imagemagick python3${NC}"
      run_as_root $PKG install -y git nodejs npm ffmpeg imagemagick python3 python3-pip >/dev/null 2>&1
      ;;
    pacman) # Arch Linux
      echo -e "${YELLOW}   Installing: git nodejs npm ffmpeg imagemagick python${NC}"
      run_as_root pacman -S --noconfirm git nodejs npm ffmpeg imagemagick python >/dev/null 2>&1
      ;;
    dnf) # Fedora/AlmaLinux
      echo -e "${YELLOW}   Installing: git nodejs npm ffmpeg ImageMagick python3${NC}"
      run_as_root dnf install -y git nodejs npm ffmpeg ImageMagick python3 >/dev/null 2>&1
      ;;
    yum) # CentOS/RHEL
      echo -e "${YELLOW}   Installing: git nodejs npm ffmpeg ImageMagick python3${NC}"
      run_as_root yum install -y epel-release >/dev/null 2>&1
      run_as_root yum install -y git nodejs npm ffmpeg ImageMagick python3 >/dev/null 2>&1
      ;;
  esac
  
  echo -e "${GREEN}[✓] System dependencies installed successfully${NC}"
  echo ""

  # Install additional libraries for canvas (Termux only)
  if [ "$PKG" = "pkg" ]; then
    echo -e "${CYAN}[➜] Installing additional libraries for Termux...${NC}"
    pkg install -y libpng libjpeg-turbo giflib >/dev/null 2>&1
    echo -e "${GREEN}[✓] Additional libraries installed${NC}"
  fi

  # Check if package.json exists
  if [ ! -f "package.json" ]; then
    echo -e "${RED}[✗ ERROR] package.json not found!${NC}"
    echo -e "${YELLOW}[!] Make sure you are in the correct directory.${NC}"
    exit 1
  fi

  # Install Node.js dependencies
  echo -e "${CYAN}[➜] Installing Node.js packages...${NC}"
  echo -e "${YELLOW}   This may take a few minutes...${NC}"
  
  if npm install >/dev/null 2>&1; then
    echo -e "${GREEN}[✓] Node.js packages installed successfully${NC}"
  else
    echo -e "${YELLOW}[!] First attempt failed. Trying again...${NC}"
    rm -rf node_modules package-lock.json
    npm install
  fi

  echo ""
  echo -e "${GREEN}╔════════════════════════════════════════════╗${NC}"
  echo -e "${GREEN}║                                            ║${NC}"
  echo -e "${GREEN}║   ✓ Installation Completed Successfully!   ║${NC}"
  echo -e "${GREEN}║                                            ║${NC}"
  echo -e "${GREEN}╚════════════════════════════════════════════╝${NC}"
  echo ""
  
  # Show next steps
  echo -e "${CYAN}[INFO] Starting the bot...${NC}"
  echo ""
  echo -e "${PURPLE}═══════════════════════════════════════════════${NC}"
  echo -e "${BLUE}   Bot is starting, please wait...${NC}"
  echo -e "${PURPLE}═══════════════════════════════════════════════${NC}"
  echo ""

  # Start the bot
  npm start
}

# Run main function
main "$@"
