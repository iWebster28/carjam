const axios = require('axios');
const jwt = require('jsonwebtoken');
let seed_artists = '4NHQUGzhtTLFvgF5SZesLK';
let seed_genres = 'pop%2Cacoustic';
let seed_tracks = '1o2NpYGqHiCq7FoiYdyd1x';
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

    seed_artists = data.tracks[0].artists[0].id;
    seed_tracks = data.tracks[0].id;
    console.log(`seed_artists:${seed_artists}`);
    console.log(`seed_tracks:${seed_tracks}`);
    spotify_url = data.tracks[0].external_urls.spotify;
    //console.log(`spotify_url:${spotify_url}`);
    index_track = spotify_url.search('/track/');
    embed_url = spotify_url.slice(0, index_track)+'/embed'+spotify_url.slice(index_track);
    //console.log(`embed_url:${embed_url}`);
    return embed_url;
  };

  module.exports={getRecommendations};