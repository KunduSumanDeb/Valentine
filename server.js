const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/nicknames", (req, res) => {
  const nicknames = [
    "Mum Mm",
    "Cloudy",
    "Naughty",
    "Darling",
    "Sunshine",
    "Nightingle",
    "Baby"
  ];
  res.json(nicknames);
});

app.get("/api/photos", (req, res) => {
  const photoDir = path.join(__dirname, "public", "photos");

  fs.readdir(photoDir, (err, files) => {
    if (err) {
      return res.json([]);
    }

    const photos = files.filter(file =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    res.json(photos.map(file => `/photos/${file}`));
  });
});

app.use(express.static(path.join(__dirname, "client", "build")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✨ Valentine Server running on port ${PORT}`);
});
