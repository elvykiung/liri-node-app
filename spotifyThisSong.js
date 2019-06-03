//include the package and file import
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var log = require('./logText');
var spotify = new Spotify(keys.spotify);

//=======================================================

var spotifyThisSong = function(commandsArgument) {
  //If no song is provided
  if (commandsArgument == null) {
    commandsArgument = 'The Sign Ace of Base';
  }

  spotify
    .search({ type: 'track', query: commandsArgument, limit: 2 })
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

      log(`Artist(s) name : ${artistNames} \nSong Name      : ${songName}\nPreview Link   : ${previewLink} \nAlbum Name     : ${albumName} \n =====================`);
    })
    //if error
    .catch(function(err) {
      console.log(err);
    });
};

//make the code available to export
module.exports = spotifyThisSong;
