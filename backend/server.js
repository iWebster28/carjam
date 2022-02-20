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

// Routes
require('./routes/POST-audioUpload')(app);

app.listen(process.env.BACKEND_PORT, () => {
    console.log(`Backend listening on port ${process.env.BACKEND_PORT}`);
});

app.get('/', (req, res) => {
  let response = {
    "current_song": "AllStar - Hello",
    "current_song_artist": "Allstart",
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


process.env.GOOGLE_APPLICATION_CREDENTIALS = 'C:\\Users\\Jonathan\\Documents\\carjam\\backend\\Google_stt_api_example\\spherical-proxy-341819-f1a9c98447b2.json';

// Imports the Google Cloud client library
const fs = require('fs');
const speech = require('@google-cloud/speech');

// Creates a client
const speech_client = new speech.SpeechClient();

// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const language_client = new language.LanguageServiceClient();


async function quickstart() {
  // The path to the remote LINEAR16 file

  let filename = ".\\Google_stt_api_example\\spurs_winning.wav";
  // The audio file's encoding, sample rate in hertz, and BCP-47 language code

  const audio = {
    content: fs.readFileSync(filename).toString('base64'),
  };

  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 44100,
    languageCode: 'en-US',
  };
  const request = {
    audio: audio,
    config: config,
  };

  // Detects speech in the audio file
  const [response] = await speech_client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  console.log(`Transcription: ${transcription}`);

  // Prepares a document, representing the provided text
  const document = {
    content: transcription,
    type: 'PLAIN_TEXT',
  };
  
  // Detects the sentiment of the document
  const [result] = await language_client.analyzeSentiment({document});
  
  const sentiment = result.documentSentiment;
  console.log('Document sentiment:');
  console.log(`  Score: ${sentiment.score}`);
  console.log(`  Magnitude: ${sentiment.magnitude}`);
  
  const sentences = result.sentences;
  sentences.forEach(sentence => {
    console.log(`Sentence: ${sentence.text.content}`);
    console.log(`  Score: ${sentence.sentiment.score}`);
    console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
  });
}


