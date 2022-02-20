const express = require('express');
const querystring = require('querystring');
const axios = require('axios');
const jwt = require('jsonwebtoken');


// const router = express.Router();

// router.get('/login', (req, res) => {
//     res.redirect(`https://accounts.spotify.com/authorize?${querystring.stringify({
//         response_type: 'code',
//         client_id: process.env.SPOTIFY_CLIENT_ID,
//         redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
//     })}`);
// });

// router.get('/callback', async (req, res) => {
//     const {code} = req.query;
//     const clientId = process.env.SPOTIFY_CLIENT_ID;
//     const secret = process.env.SPOTIFY_CLIENT_SECRET;
//     const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;
//     const grant_type = 'authorization_code';

//     const basicHeader = Buffer.from(`${clientId}:${secret}`).toString('base64');
//     const {data} = await axios.post('https://accounts.spotify.com/api/token', querystring.stringify({
//         grant_type,
//         code,
//         redirect_uri,
//     }), {
//         headers: {
//             Authorization: `Basic ${basicHeader}`,
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     });

//     const sessionJWTObject = {
//         token: data.access_token,
//     };

//     req.session.jwt = jwt.sign(sessionJWTObject, process.env.JWT_SECRET_KEY)
//     return res.redirect('/');
// });

// router.get('/current-session', (req, res) => {
//     jwt.verify(req.session.jwt, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
//         if (err || !decodedToken) {
//             res.send(false);
//         } else {
//             res.send(decodedToken);
//         }
//     });
// })

// router.get('/logout', (req, res) => {
//     req.session = null;
//     res.redirect(
//         `/`
//     );
// });

// module.exports = router;







//Maybe frontend stuff?
const getRecommendations = async () => {
    const url = 'https://api.spotify.com/v1/recommendations';
  
    let token = 'BQCd8dIRpy_5oaJbxmeFnUNIHqSfu6fYUy7HR4W24q8sSORi3JRWNeSZrS-xlHTVvJjrDnjDUHLaIp8mSF2d27xyEshSL9X4bT9t36CWbiQo9ygyE2u-boN2hRoFlYO-6qx4x_LfC-0FTGz38mDxhoDWsiYmlaBRM3Y'
    const {data} = await axios.get(`${url}?limit=1&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA&target_energy=0.5&target_liveness=0.5`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    if (!data.tracks || data.tracks.length === 0) {
        console.log("No result!");
        
    }else{
        spotifyURL = (data.tracks[0].external_urls.spotify);
        spotifyURL = spotifyURL.replace('/track/','/embed/track/');
        console.log(spotifyURL);
    }
  };

  getRecommendations();