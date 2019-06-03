var axios = require('axios');
var moment = require('moment');

var bandInTown = function(commandsArgument) {
  axios
    .get('https://rest.bandsintown.com/artists/' + commandsArgument + '/events?app_id=codingbootcamp')
    .then(function(response) {
      var concertsData = response.data;
      for (let i = 0; i < concertsData.length; i++) {
        var concert = concertsData[i];
        var venueName = concert.venue.name;
        var venueCity = concert.venue.city;
        var venueCountry = concert.venue.country;
        var eventDate = moment(concert.datetime).format('MM/DD/YYYY');
        console.log(`Name of the venue: ${venueName}\nVenue location   : ${venueCity}, ${venueCountry}\nDate of the Event: ${eventDate}\n======================================\n`);
      }
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

module.exports = bandInTown;
