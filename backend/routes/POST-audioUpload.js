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
    // app.post('/getAudio', (req, res, err) => {
    //     const body = req.body;
    //     console.log(`from client: ${body}`);
    //     return res.status(200).json({"Status": "OK"});
    // });

    app.post('/audioUpload', upload.single('file'), (req, res) => {
        // console.log(req.body);
        console.log(req.file);
        get_audio_analysis(req.file.path);
        res.send({ message: 'Successfully uploaded audio file.' });
    })
};

/*TODO:
Set GOOGLE_APPLICATION_CREDENTIALS to a personal project with speech-to-text and automl api enabled, or contact author for their project
Get a spotify OAuth token from developer.spotify.com and set 
*/
async function get_audio_analysis(audio_path){
  transcription = await stt.stt(filename = audio_path);
  console.log(`Transcription: ${transcription}`);
  num = await sentience.sentience(transcription);
  console.log(`Num: ${num}`);
  url = await spotify.getRecommendations(num);
  console.log(`URL: ${url}`);
  // return url;
}