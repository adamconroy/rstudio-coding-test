var fs = require('fs');
var path = require('path');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var readStream = fs.createReadStream('./dictionary.txt', 'utf8');
let data = '';

readStream.on('data', function(chunk) {
  data += chunk;
}).on('end', function() {
  data = data.toLowerCase().split('\n').filter(word => word.length >= 3 && getRandomInt(10) == 0);
  data = data.join('\n');

  fs.writeFile('./boggle_dict.txt', data, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('Dictionary saved to disk as ./boggle_dict.txt');
  });
});
