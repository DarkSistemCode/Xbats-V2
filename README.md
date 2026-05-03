# WhatsApp Bot - Multi-Platform Support 🚀

<div align="center">

![Version](https://img.shields.io/badge/version-2.0-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)
![License](https://img.shields.io/badge/license-ISC-orange.svg)

WhatsApp Bot dengan Auto Installer yang support berbagai platform (Termux, Ubuntu, Debian, Arch, Fedora, CentOS)

</div>

---

## ✨ Features
- ✅ **One-Click Installation** - Install semua dependencies otomatis
- ✅ **Multi-Platform** - Support Termux, Ubuntu, Debian, Arch, Fedora, CentOS
- ✅ **Auto Package Manager Detection** - Deteksi otomatis package manager sistem
- ✅ **Pairing Code** - Tidak perlu scan QR Code
- ✅ **Auto Start** - Bot langsung jalan setelah install

---

## 📋 Requirements

Minimum requirements:
- **Node.js** v16 or higher
- **Git**

System dependencies (handled automatically by `install.sh`):
- FFmpeg
- ImageMagick
- Python

---

## 🚀 Installation

### Method 1: Automatic Installation (Recommended) ⭐

```bash
git clone https://github.com/username/BaseBugXbats
cd BaseBugXbats
bash install.sh
```

**Script akan otomatis:**
- ✓ Detect package manager (pkg, apt, dnf, pacman, yum)
- ✓ Install system dependencies
- ✓ Install Node.js packages
- ✓ Start bot automatically

---

### Method 2: Manual Installation

#### 📱 Termux (Android)
```bash
pkg update && pkg upgrade
pkg install git nodejs ffmpeg imagemagick python
git clone https://github.com/username/BaseBugXbats
cd BaseBugXbats
npm install
npm start
```

#### 💻 Ubuntu / Debian
```bash
sudo apt update
sudo apt install git nodejs npm ffmpeg imagemagick python3
git clone https://github.com/username/BaseBugXbats
cd BaseBugXbats
npm install
npm start
```

#### 🐧 Arch Linux
```bash
sudo pacman -Syu
sudo pacman -S git nodejs npm ffmpeg imagemagick python
git clone https://github.com/username/BaseBugXbats
cd BaseBugXbats
npm install
npm start
```

#### 🎩 Fedora / AlmaLinux
```bash
sudo dnf install git nodejs npm ffmpeg ImageMagick python3
git clone https://github.com/username/BaseBugXbats
cd BaseBugXbats
npm install
npm start
```

---

## ▶️ Running the Bot

Setelah install selesai, bot akan otomatis running. Anda akan diminta:

1. **Password** (default: `GulbatGanteng`)
2. **Nomor WhatsApp** dengan kode negara (contoh: `628123456789`)
3. **Pairing Code** akan muncul

### Cara Pairing:
1. Buka WhatsApp di HP
2. Tap **⋮** (titik tiga) → **Linked Devices**
3. Tap **Link a Device**
4. Tap **Link with Phone Number Instead**
5. Masukkan **Pairing Code** yang muncul di terminal
6. ✅ **Bot Connected!**

---

## 🔄 Restart Bot

Jika bot mati atau ingin restart:

```bash
npm start
```

atau gunakan PM2 untuk auto-restart:

```bash
npm install -g pm2
pm2 start connection.js --name "wabot"
pm2 save
pm2 startup
```

---

## ⚙️ Configuration

### Ganti Password
Edit file `connection.js` baris 12:
```javascript
const pw = "GulbatGanteng"; // Ganti dengan password Anda
```

### Ganti Pairing Code Prefix
Edit file `connection.js` baris 73:
```javascript
const pair = "GLBTGNTG" // Ganti dengan prefix Anda
```

---

## 🛠️ Troubleshooting

### Bot tidak connect?
```bash
rm -rf session
npm start
```

### Error saat install npm packages?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Canvas installation error (Termux)?
```bash
pkg install libpng libjpeg-turbo giflib
npm install
```

### Permission denied saat install?
```bash
chmod +x install.sh
bash install.sh
```

---

## 📁 Project Structure

```
BaseBugXbats/
├── case.js              # Command handler
├── connection.js        # Main bot connection
├── settings.js          # Bot settings
├── package.json         # Dependencies
├── install.sh          # Auto installer script
├── database/           # Database storage
├── lib/                # Helper functions
└── image/              # Image assets
```

---

## 🔧 Supported Platforms

| Platform | Package Manager | Status |
|----------|----------------|--------|
| Termux | pkg | ✅ Tested |
| Ubuntu/Debian | apt | ✅ Tested |
| Arch Linux | pacman | ✅ Supported |
| Fedora/AlmaLinux | dnf | ✅ Supported |
| CentOS/RHEL | yum | ✅ Supported |

---

## 📝 Notes

- Nomor WhatsApp harus menggunakan **kode negara** (62 untuk Indonesia)
- Pastikan **koneksi internet stabil** saat pairing
- Jangan logout dari WhatsApp Web saat bot running
- Session tersimpan di folder `session/`

---

## 👨‍💻 Credits

- **Base By:** Lezz DcodeR
- **Optimization By:** Eriza Offc
- **Installer System:** Inspired by [Hitori](https://github.com/nazedev/hitori)

---

## 📄 License

ISC License - See LICENSE file for details

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

**Made with ❤️ for WhatsApp Bot Community**

</div>
