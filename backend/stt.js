// Imports the Google Cloud client library
const fs = require('fs');
const speech = require('@google-cloud/speech');
// Creates a client
const speech_client = new speech.SpeechClient();

async function stt(filename) {
    // The path to the remote LINEAR16 file

    console.log(`Read audio file from ${filename}`);
  
    const audio = {
      content: fs.readFileSync(filename).toString('base64'),
    };
  
    const config = {
      encoding: 'WEBM_OPUS',
      sampleRateHertz: 48000,
      languageCode: 'en-US',
      audioChannelCount : 2
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
    
    return transcription;
}

module.exports = {stt};
  