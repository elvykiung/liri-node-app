require('dotenv').config();
var fs = require('fs');

//===========================================
var liriCommand = process.argv[2];
var commandsArgument = process.argv[3];
//===========================================

var spotifyThisSong = require('./spotifyThisSong');
var bandInTown = require('./bandintown');
var movieName = require('./moviename');

//==================================================
var doWhatItSay = function() {
  fs.readFile('random.txt', 'utf8', function(error, data) {
    if (error) {
      return console.log(error);
    }

    var dataArr = data.split(',');
    liriCommand = dataArr[0];
    commandsArgument = dataArr[1];

    doLiriCommand();
  });
};

var doLiriCommand = function() {
  if (liriCommand === 'concert-this') {
    bandInTown(commandsArgument);
  }

  if (liriCommand === 'spotify-this-song') {
    spotifyThisSong(commandsArgument);
  }

  if (liriCommand === 'movie-this') {
    movieName(commandsArgument);
  }
};

doLiriCommand();

if (liriCommand === 'do-what-it-says') {
  doWhatItSay(commandsArgument);
}
