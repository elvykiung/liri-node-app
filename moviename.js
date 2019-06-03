//include the package and file import
var axios = require('axios');
var log = require('./logText');

// function for movie name axios call
var movieName = function(commandsArgument) {
  //If the user doesn't type a movie i
  if (commandsArgument == null) {
    commandsArgument = 'Mr. Nobody';
  }

  axios
    .get('http://www.omdbapi.com/?t=' + commandsArgument + '&apikey=trilogy')
    .then(function(response) {
      var movieData = response.data;

      var { Title, Year, Ratings, imdbRating, Country, Language, Plot, Actors } = movieData;

      var RottenTomatoesRating = Ratings[1].Value;

      //console log te data and append to log.txt
      log(`Title                  : ${Title}\nYear                   : ${Year}\nIMDB Rating            : ${imdbRating}\nRotten Tomatoes Rating : ${RottenTomatoesRating}\nCountry produced       : ${Country}\nLanguage               : ${Language}\nPlot                   : ${Plot}\nActors                 : ${Actors}\n=======================================\n   
    `);
    })
    //if error
    .catch(function(error) {
      if (error.response) {
        console.log('---------------Data---------------');
        console.log(error.response.data);
        console.log('---------------Status---------------');
        console.log(error.response.status);
        console.log('---------------Status---------------');
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
};

//make the code available to export
module.exports = movieName;
