const fs = require('fs');

const WriteStream = fs.createWriteStream('./new.txt');
WriteStream.on('finish', () => {
  console.log('finish');
});

WriteStream.write('hello');

WriteStream.end();