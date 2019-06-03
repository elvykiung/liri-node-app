var Spotify = require('node-spotify-api');

var keys = require('./keys.js');

var spotifyThisSong = function(songQuery) {
  if (songQuery == null) {
    songQuery = 'The Sign Ace of Base';
  }
  var spotify = new Spotify(keys.spotify);
  spotify
    .search({ type: 'track', query: songQuery, limit: 2 })
    .then(function(response) {
      var track = response.tracks.items[0];
      var artists = track.artists;
      var songName = track.name;
      var previewLink = track.external_urls.spotify;
      var albumName = track.album.name;
      var artistNames = '';
      for (let i = 0; i < artists.length; i++) {
        artistNames += artists[i].name + ' ';
      }

      console.table(`Artist(s) name : ${artistNames} \nSong Name      : ${songName}\nPreview Link   : ${previewLink} \nAlbum Name     : ${albumName} \n =====================`);
    })
    .catch(function(err) {
      console.log(err);
    });
};

module.exports = spotifyThisSong;
