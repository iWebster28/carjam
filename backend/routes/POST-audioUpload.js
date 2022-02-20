const multer = require('multer')
require('dotenv');

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
        res.send({ message: 'Successfully uploaded audio file.' });
    })
};