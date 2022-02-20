const axios = require('axios');
const jwt = require('jsonwebtoken');
let seed_artists = '5he5w2lnU9x7JFhnwcekXX';
let seed_genres = 'classical%2Cpop%2Cacoustic';
let seed_tracks = '6JyuJFedEvPmdWQW0PkbGJ';
let target_popularity = '90';
let target_energy = '0.2';
let target_liveness = '0.2';

//Maybe frontend stuff?
const getRecommendations = async (num) => {
    const url = 'https://api.spotify.com/v1/recommendations';
    target_num = (num/2.0) + 0.5;
    console.log(`${target_num}`);
    const {data} = await axios.get(`${url}?limit=1&seed_artists=${seed_artists}&seed_genres=${seed_genres}&seed_tracks=${seed_tracks}&target_energy=${target_num}&target_liveness=${target_num}&target_popularity=${target_popularity}`, {
      headers: {
        Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`,
      }
    });

    if (!data.tracks || data.tracks.length === 0) {
      console.log("No result!");
      return null;
    } 



    return data.tracks[0].external_urls.spotify;
  };

  module.exports={getRecommendations};