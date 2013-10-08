var Encoder = require('qr').Encoder;
var encoder = new Encoder();
var fs = require('fs');
var encodeOptions = { dot_size: 10 };

var items = [
  "Good painting is the kind that looks like sculpture",
  "Nobody ever went broke underestimating the taste of the American public",
  "It is not who is right, but what is right, that is of importance",
  "The work of art is a scream of freedom",
  "The miracle on earth are the laws of heaven"
];

if (!fs.existsSync(__dirname + '/codes'))
  fs.mkdirSync(__dirname + '/codes');

encoder.on('error', function(err) {
  console.error(err);
});

for(var i = 0, len = items.length; i < len; ++i) {
  encoder.encode(items[i], __dirname + '/codes/code-' + i + '.png', encodeOptions);
}
