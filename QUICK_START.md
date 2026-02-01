# MERN Valentine Website - Setup Guide

## 🚀 Quick Start (5 minutes)

### 1. Install Dependencies

**Backend dependencies are already installed!** Check:
```bash
npm list
```

**Now install frontend dependencies:**
```bash
npm run client-install
```

### 2. Add Your Photos

Place your photos in the `public/photos/` folder:
```
public/
└── photos/
    ├── photo1.jpg
    ├── photo2.jpg
    ├── photo3.jpg
    └── ...
```

Supported formats: JPG, JPEG, PNG, GIF, WebP

### 3. Run the Application

**Option A - Both servers together:**
```bash
npm run dev-all
```

**Option B - Separate terminals:**

Terminal 1:
```bash
npm run dev
```

Terminal 2:
```bash
npm run client
```

### 4. Open in Browser
- http://localhost:3000

## 📦 What's Included

✅ **Backend (Node.js + Express)**
- API to serve photos from `public/photos/`
- API to serve nicknames
- Static file serving
- CORS enabled

✅ **Frontend (React)**
- Animated scene with day/night cycle
- Walking boy and girl characters
- Mountains, clouds, sun, moon
- Twinkling stars
- Flying birds
- Beautiful photo frame gallery

✅ **Features Ready to Use**
- 7 romantic nicknames (Mum Mm, Cloudy, Naughty, Darling, Sunshine, Nightingle, Baby)
- 60-second day/night cycle
- Auto-rotating photo gallery
- Fully responsive animations

## 🎬 Animation Cycle

The application runs a complete day/night cycle every 60 seconds:

- **0-30 seconds**: DAY
  - Bright blue sky
  - Sun moves across
  - White clouds drift
  - Birds fly (🐦)
  - Bright green ground

- **30-60 seconds**: NIGHT
  - Dark blue sky
  - Moon appears
  - Stars twinkle (✨)
  - No birds
  - Dark ground

Then it repeats!

## 📸 Photo Display

Photos in `public/photos/` will:
1. Automatically appear in the frame (bottom right)
2. Display for 8 seconds each
3. Fade to next photo smoothly
4. Show a romantic nickname above each photo
5. Nicknames cycle through: Mum Mm → Cloudy → Naughty → Darling → Sunshine → Nightingle → Baby

## 🛠️ Troubleshooting

**Port 3000/5000 already in use?**
```bash
# Kill process on port 3000
npx kill-port 3000

# Kill process on port 5000
npx kill-port 5000
```

**Photos not showing?**
- Ensure photos are in `public/photos/` folder
- Check supported formats (JPG, PNG, GIF, WebP)
- Restart both servers

**npm install failing?**
```bash
# Clear npm cache
npm cache clean --force

# Try install again
npm install
npm run client-install
```

## 💡 Tips

1. Use landscape-oriented photos for best results in the frame
2. Add 5-10 photos for good rotation variety
3. The app works best on desktop browsers
4. All animations are smooth and memory-efficient

## 🎁 Customization Ideas

- Edit nicknames in `server.js`
- Change colors in `client/src/App.css`
- Adjust animation speeds
- Add more characters or elements

---

**Happy Valentine's Day! ❤️**
