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
    res.send("Song playing: Adele");
});