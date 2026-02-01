# 🌹 Will You Be My Valentine? - MERN Application

A beautiful, interactive Valentine's Day website built with MERN (MongoDB, Express, React, Node.js) stack featuring animated characters, dynamic day/night cycles, and a photo gallery with rotating nicknames.

## ✨ Features

- 🎨 **Beautiful Interactive Scene**
  - Animated boy and girl characters walking together
  - Smooth walking animations with moving legs
  
- 🌅 **Dynamic Day/Night Cycle**
  - 60-second complete cycle (30s day, 30s night)
  - Sun rises and sets with realistic movements
  - Moon appears during night
  - Stars twinkle during night
  - Sky gradient changes smoothly

- 🌍 **Animated Background Elements**
  - Mountain ranges with depth layering
  - Clouds floating across the sky
  - Birds flying during the day
  - Ground with day/night variations

- 📸 **Photo Gallery with Frames**
  - Beautiful rotating photo frames
  - Displays photos from `public/photos` folder
  - Each photo paired with a rotating nickname
  - Smooth fade transitions every 8 seconds

- 💕 **Personal Nicknames**
  - Mum Mm
  - Cloudy
  - Naughty
  - Darling
  - Sunshine
  - Nightingle
  - Baby

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Step 1: Install Backend Dependencies
```bash
npm install
```

### Step 2: Install Frontend Dependencies
```bash
npm run client-install
```

### Step 3: Add Your Photos
1. Create a folder: `public/photos/`
2. Add your photos (JPG, PNG, GIF, WebP format supported)
3. Example:
   ```
   public/
   └── photos/
       ├── memory1.jpg
       ├── memory2.jpg
       ├── memory3.png
       └── ...
   ```

### Step 4: Run the Application

**Option A: Run Frontend and Backend Separately**

Terminal 1 - Backend:
```bash
npm run dev
```

Terminal 2 - Frontend (in another terminal):
```bash
npm run client
```

**Option B: Run Both Together**
```bash
npm run dev-all
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 📁 Project Structure

```
Valentine/
├── server.js                 # Express backend server
├── package.json              # Backend dependencies
├── .env                      # Environment variables
├── public/
│   └── photos/              # Your photo folder (add photos here!)
├── client/                  # React Frontend
│   ├── package.json         # Frontend dependencies
│   ├── public/
│   │   └── index.html       # Main HTML file
│   └── src/
│       ├── App.js           # Main App component
│       ├── App.css          # All animations & styles
│       ├── index.js         # React entry point
│       └── components/
│           ├── AnimatedScene.js    # Main scene with day/night cycle
│           ├── Sky.js              # Sky, sun, moon, stars, clouds, birds
│           ├── Ground.js           # Ground element
│           ├── Characters.js       # Boy & girl characters
│           └── PhotoFrame.js       # Photo gallery component
```

## 🎬 Animation Details

### Characters
- **Boy**: Red shirt, walking with leg animations
- **Girl**: Pink dress, walking with leg animations
- Both characters walk towards/away from each other in a loop

### Day/Night Cycle
- **Day Phase (0-30s)**:
  - Blue sky with sun moving across
  - White clouds floating
  - Birds flying
  - Bright ground
  
- **Night Phase (30-60s)**:
  - Dark sky with stars
  - Moon visible
  - Darker clouds
  - Dark ground

### Sun Movement
- Starts at bottom-left during morning
- Reaches peak at midday
- Sets at bottom-right during evening

### Star Animation
- 50 random stars appear during night
- Each star twinkles with different timing
- Smooth fade-in and fade-out

### Cloud Movement
- 3 clouds continuously drift from left to right
- Different speeds for depth effect
- Opacity changes during night

## 🔧 Available Scripts

```bash
# Start backend server
npm start

# Start backend with auto-reload
npm run dev

# Install frontend dependencies
npm run client-install

# Start React development server
npm run client

# Build React for production
npm run build

# Run both frontend and backend together
npm run dev-all

# Build for production
npm run build
```

## 📦 Dependencies

### Backend
- **express**: ^5.2.1 - Web framework
- **cors**: ^2.8.6 - Cross-Origin Resource Sharing
- **dotenv**: ^17.2.3 - Environment variables
- **mongoose**: ^9.1.5 - MongoDB driver (optional, for future DB features)
- **nodemon**: ^3.1.11 (dev) - Auto-reload on changes
- **concurrently**: ^8.2.2 (dev) - Run multiple commands

### Frontend
- **react**: ^18.2.0 - UI library
- **react-dom**: ^18.2.0 - React DOM rendering
- **react-scripts**: 5.0.1 - Build scripts

## 🎨 Customization

### Change Colors
Edit `client/src/App.css` and look for color values:
- `#FF1493` - Main pink color
- `#87CEEB` - Sky blue
- `#FF6B6B` - Boy's shirt color
- `#FFB6D9` - Girl's dress color

### Adjust Animation Speed
In `client/src/App.css`, modify animation durations:
- Day/night cycle: Change the `setInterval` in `AnimatedScene.js` (currently 1000ms = 1s per unit)
- Character walking: Adjust `4s` values in `boyWalk` and `girlWalk` animations
- Cloud movement: Modify duration values in `cloudFloat` animation

### Add More Nicknames
Edit `server.js` and update the nicknames array in `/api/nicknames` endpoint

## 🚀 Deployment

### Deploy on Heroku
```bash
# Create Heroku app
heroku create your-app-name

# Deploy
git push heroku main
```

### Environment Variables
No additional environment variables needed for basic deployment. For MongoDB features, add:
```
MONGODB_URI=your_mongodb_connection_string
```

## 📝 License

This project is created with ❤️ for a special Valentine's Day!

## 💖 Features Summary

| Feature | Status |
|---------|--------|
| Animated Characters | ✅ |
| Walking Animation | ✅ |
| Day/Night Cycle | ✅ |
| Sun Rising/Setting | ✅ |
| Moon at Night | ✅ |
| Twinkling Stars | ✅ |
| Floating Clouds | ✅ |
| Flying Birds (Day) | ✅ |
| Mountain Ranges | ✅ |
| Photo Gallery | ✅ |
| Rotating Nicknames | ✅ |
| Responsive Design | ✅ |
| Beautiful Animations | ✅ |

---

**Created with 💕 - Happy Valentine's Day!**
