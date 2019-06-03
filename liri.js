require('dotenv').config();

//===========================================
var liriCommand = process.argv[2];
var commandsArgument = process.argv[3];
//===========================================

var spotifyThisSong = require('./spotifyThisSong');
var bandInTown = require('./bandintown');
var movieName = require('./moviename');

//==================================================

if (liriCommand === 'concert-this') {
  bandInTown(commandsArgument);
}

if (liriCommand === 'spotify-this-song') {
  spotifyThisSong(commandsArgument);
}

if (liriCommand === 'movie-this') {
  movieName(commandsArgument);
}
