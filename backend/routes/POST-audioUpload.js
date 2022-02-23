const multer = require('multer')
require('dotenv');

stt = require('..\\stt.js');
sentience = require('..\\sentience.js');
spotify = require('..\\spotify.js');

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
    destination: function (req, file, cb) {
      cb(null, process.env.UPLOAD_PATH);
    },
  })
  
const upload = multer({ storage });

module.exports = (app) => {
    app.post('/audioUpload', upload.single('file'), async (req, res) => {
        // console.log(req.body);
        console.log(req.file);
        await get_audio_analysis(req.file.path) // Analyze audio
          .then(url => {
            res.status(200).json({ message: 'Successfully uploaded audio file.', spotify_url: url }); // Return Spotify URL to frontend
          });
    })
};

/*TODO:
Set GOOGLE_APPLICATION_CREDENTIALS to a personal project with speech-to-text and automl api enabled, or contact author for their project
Get a spotify OAuth token from developer.spotify.com and set 
*/
async function get_audio_analysis(audio_path){
  transcription = await stt.stt(filename = audio_path);
  console.log(`Transcription: ${transcription}`);
  const num = await sentience.sentience(transcription);
  console.log(`Num: ${num}`);
  const url = await spotify.getRecommendations(num);
  console.log(`URL: ${url}`);
  // let url = "https://open.spotify.com/embed/track/0kD586ste6xyDRqUYhVlCh"; // example
  return url;
}