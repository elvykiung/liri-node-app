var axios = require('axios');
var log = require('./logText');

var movieName = function(commandsArgument) {
  axios
    .get('http://www.omdbapi.com/?t=' + commandsArgument + '&apikey=trilogy')
    .then(function(response) {
      var movieData = response.data;

      var { Title, Year, Ratings, imdbRating, Country, Language, Plot, Actors } = movieData;

      var RottenTomatoesRating = Ratings[1].Value;

      log(`Title                  : ${Title}\nYear                   : ${Year}\nIMDB Rating            : ${imdbRating}\nRotten Tomatoes Rating : ${RottenTomatoesRating}\nCountry produced       : ${Country}\nLanguage               : ${Language}\nPlot                   : ${Plot}\nActors                 : ${Actors}\n=======================================\n   
    `);
    })
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
module.exports = movieName;
