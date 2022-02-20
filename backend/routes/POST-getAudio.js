

module.exports = (app) => {
    app.post('/getAudio', (req, res, err) => {
        const body = req.body;
        console.log(`from client: ${body}`);
        console.log(body);
        return res.status(200).json({"Status": "OK"});
    });
};