//include the package and file import
var fs = require('fs');

//function to log the console data and log text append
var log = function(data) {
  console.log(data);

  fs.appendFile('log.txt', data + '\n', function(err) {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = log;
