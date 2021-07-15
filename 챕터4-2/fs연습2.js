const fs = require('fs').promises;

//아래는 모두 비동기이기 때문에 순차적으로 실행이 안될 수 있음.

fs.readFile('./text.txt', 'utf8').then(console.log).catch(console.log);

//리턴이 void 라서 catch 처리만 함.
fs.writeFile('./text.txt','sesesexxxx').catch(console.log);
fs.appendFile('./text.txt','sesesexxxx').catch(console.log);

fs.copyFile('file').catch();


//folder
fs.mkdir('sub=folder').catch(console.log)

fs.readdir('./').then(console.log).catch(console.log);