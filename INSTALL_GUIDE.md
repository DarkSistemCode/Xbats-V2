# 📖 Installation Guide

Panduan lengkap instalasi WhatsApp Bot untuk berbagai platform.

---

## 🎯 Quick Start (Termux - Recommended)

### Step 1: Install Termux
Download Termux dari [F-Droid](https://f-droid.org/en/packages/com.termux/) atau [GitHub](https://github.com/termux/termux-app/releases)

⚠️ **Jangan download dari Play Store!** (versi Play Store sudah deprecated)

### Step 2: Update Termux
```bash
pkg update && pkg upgrade -y
```
Tekan `Y` atau `Enter` jika ditanya.

### Step 3: Install Git
```bash
pkg install git -y
```

### Step 4: Clone Repository
```bash
git clone https://github.com/username/BaseBugXbats
cd BaseBugXbats
```

### Step 5: Run Installer
```bash
bash install.sh
```

**Installer akan otomatis:**
1. ✅ Install Node.js
2. ✅ Install FFmpeg
3. ✅ Install ImageMagick
4. ✅ Install Python
5. ✅ Install semua npm packages
6. ✅ Start bot

### Step 6: Setup Bot

1. **Masukkan Password**
   - Default: `GulbatGanteng`
   - Tekan Enter

2. **Masukkan Nomor WhatsApp**
   - Format: `628123456789` (dengan kode negara 62)
   - Contoh untuk nomor 0812-3456-789: `628123456789`

3. **Pairing Code**
   - Akan muncul kode 8 digit
   - Contoh: `ABCD-EFGH`

4. **Buka WhatsApp**
   - Tap **⋮** (titik tiga di pojok kanan atas)
   - Pilih **Linked Devices**
   - Tap **Link a Device**
   - Tap **Link with Phone Number Instead**
   - Masukkan kode pairing (tanpa tanda `-`)
   - Contoh: `ABCDEFGH`

5. **Done! ✅**
   - Bot akan otomatis connect
   - Bot siap digunakan!

---

## 💻 Ubuntu/Debian Installation

### Prerequisites
```bash
sudo apt update
sudo apt upgrade -y
```

### Install Dependencies
```bash
sudo apt install git nodejs npm ffmpeg imagemagick python3 -y
```

### Clone & Install
```bash
git clone https://github.com/username/BaseBugXbats
cd BaseBugXbats
bash install.sh
```

---

## 🐧 Arch Linux Installation

### Install Dependencies
```bash
sudo pacman -Syu
sudo pacman -S git nodejs npm ffmpeg imagemagick python
```

### Clone & Install
```bash
git clone https://github.com/username/BaseBugXbats
cd BaseBugXbats
bash install.sh
```

---

## 🎩 Fedora Installation

### Install Dependencies
```bash
sudo dnf install git nodejs npm ffmpeg ImageMagick python3 -y
```

### Clone & Install
```bash
git clone https://github.com/username/BaseBugXbats
cd BaseBugXbats
bash install.sh
```

---

## 🔄 Update Bot

Jika ada update baru:

```bash
cd BaseBugXbats
git pull
npm install
npm start
```

---

## 🔧 Advanced Configuration

### Auto-Restart dengan PM2

1. **Install PM2**
```bash
npm install -g pm2
```

2. **Start dengan PM2**
```bash
pm2 start connection.js --name "whatsapp-bot"
```

3. **Auto-start on boot**
```bash
pm2 save
pm2 startup
```

4. **Monitoring**
```bash
pm2 logs whatsapp-bot
pm2 status
pm2 restart whatsapp-bot
pm2 stop whatsapp-bot
```

---

## 🐛 Common Issues & Solutions

### Issue 1: Canvas installation error
**Error:** `node-pre-gyp install --fallback-to-build`

**Solution (Termux):**
```bash
pkg install libpng libjpeg-turbo giflib -y
rm -rf node_modules
npm install
```

**Solution (Ubuntu/Debian):**
```bash
sudo apt install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev -y
npm install
```

---

### Issue 2: Permission denied
**Error:** `bash: ./install.sh: Permission denied`

**Solution:**
```bash
chmod +x install.sh
bash install.sh
```

---

### Issue 3: Bot disconnected
**Error:** Bot terus disconnect/reconnect

**Solution:**
```bash
# Hapus session lama
rm -rf session

# Restart bot
npm start

# Pairing ulang
```

---

### Issue 4: Module not found
**Error:** `Cannot find module 'xyz'`

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

---

### Issue 5: Node.js version too old
**Error:** `Node.js version not supported`

**Solution (Termux):**
```bash
pkg upgrade nodejs -y
```

**Solution (Ubuntu):**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install nodejs -y
```

---

## 📞 Support & Help

Jika masih mengalami kendala:

1. **Cek logs:**
   ```bash
   npm start 2>&1 | tee bot.log
   ```

2. **Clear cache:**
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Fresh install:**
   ```bash
   cd ..
   rm -rf BaseBugXbats
   git clone https://github.com/username/BaseBugXbats
   cd BaseBugXbats
   bash install.sh
   ```

---

## 💡 Tips & Tricks

### Keep Termux Running
```bash
# Install Termux:Boot
# Set termux to run on background
```

### Monitor Resources
```bash
# CPU & Memory usage
top

# Disk space
df -h

# Network usage
nethogs
```

### Backup Session
```bash
# Backup session folder
cp -r session session_backup

# Restore session
cp -r session_backup session
```

---

## 🎓 Learning Resources

- [Baileys Documentation](https://github.com/WhiskeySockets/Baileys)
- [Node.js Documentation](https://nodejs.org/docs)
- [Termux Wiki](https://wiki.termux.com)

---

**Happy Bot-ing! 🚀**
