require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const cors_options = () => {
    return {
      origin: `http://localhost:${process.env.FRONTEND_PORT}`, // frontend port
    };
  };

app.use(cors(cors_options()));

app.listen(process.env.BACKEND_PORT, () => {
    console.log(`Backend listening on port ${process.env.BACKEND_PORT}`);
});

app.get('/', (req, res) => {
  let response = {
    "current_song": "Adele - Hello",
    "current_song_artist": "Adele",
    "current_song_album": "Hello",
    "current_song_album_art": "https://i.scdn.co/image/ab67616d0000b2735c9b9b9b9b9b9b9b9b9b9b9b9",
    "current_song_album_art_large": "https://i.scdn.co/image/ab67616d0000b2735c9b9b9b9b9b9b9b9b9b9b9b9b",
    "current_song_album_art_small": "https://i.scdn.co/image/ab67616d00001e025c9b9b9b9b9b9b9b9b9b9b9b9",
    "current_song_artist_art": "https://i.scdn.co/image/ab67616d0000b273c9b9b9b9b9b9b9b9b9b9b9b9b",
    "current_song_artist_art_large": "https://i.scdn.co/image/ab67616d0000b273c9b9b9b9b9b9b9b9b9b9b9b9b",
    "current_song_artist_art_small": "https://i.scdn.co/image/ab67616d00001e02c9b9b9b9b9b9b9b9b9b9b9b9",
    "current_song_duration": "4:00",
    "current_song_id": "4Z8W4fKeB5YtRbvGeDGEB4",
    "current_song_name": "Hello",
    "current_song_popularity": "0",
    "current_song_progress": "0",
    "current_song_progress_ms": "0",
    "current_song_time_ms": "0",
  };
  res.send(response);
});


