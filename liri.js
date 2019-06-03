require('dotenv').config();

var spotifyThisSong = require('./spotifyThisSong');

var liriCommand = process.argv[2];
var commandsArgument = process.argv[3];

//==================================================
// spotifyThisSong function

if (liriCommand === 'spotify-this-song') {
  spotifyThisSong(commandsArgument);
}
