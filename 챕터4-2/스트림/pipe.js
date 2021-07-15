const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./text.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./pipe-result.txt');
//이렇게 해서 압축도 가능 대신에 writeStream 결과 파일 확장자를 zip으로 해야함
// const piping = readStream.pipe(zlibstream).pipe(writeStream);
const piping = readStream.pipe(writeStream);
piping.on('finish', ()=>{
  console.log('done');
})

const http = require('http');
const server = http.createServer((req, res) => {
  fs.readFile('text.txt', (err, data)=>{
    // res.end(data);
    // 위에보다는 파이핑 통해서 더 빠르게!
    const stream = fs.createReadStream('text.txt');
    stream.pipe(res);
  })
})
server.listen(3001);
