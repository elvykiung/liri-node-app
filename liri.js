require('dotenv').config();

//===========================================
var liriCommand = process.argv[2];
var commandsArgument = process.argv[3];
//===========================================

var spotifyThisSong = require('./spotifyThisSong');
var bandInTown = require('./bandintown');

//==================================================

if (liriCommand === 'concert-this') {
  bandInTown(commandsArgument);
}

if (liriCommand === 'spotify-this-song') {
  spotifyThisSong(commandsArgument);
}
