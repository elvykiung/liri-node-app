var fs = require('fs');

var log = function(data) {
  console.log(data);

  fs.appendFile('log.txt', data + '\n', function(err) {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = log;
