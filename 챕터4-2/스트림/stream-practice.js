const fs = require('fs');

const before = process.memoryUsage().rss;

//다 ~~~~ 읽어와서 쓰는 방식임. 만약 파일의 크기가 23253테라 바이트면??? 불가능함
// 그러니까 이제 스트림을 써보자고

// fs.readFile('./text.txt', (_, data) => {
//   fs.writeFile('./text.txt', data, () => {});
//   const after = process.memoryUsage().rss;
//   const diff = (after - before) / 1024 / 1024 ;
//   console.log(diff);
// })


let res = []
//이벤트 베이스임.
const readStream = fs.createReadStream('./text.txt', {
  highWaterMark : 8, // 64 키로 바이트
  encoding : 'utf-8'
}).on('data', chunk => {
  res.push(chunk);
}).on('end', () => {
  console.log(res.join(''));
});

