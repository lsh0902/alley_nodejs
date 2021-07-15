//fs 모듈에서 파일에 대해 할 수 있는걸 대부분 제공함.
const fs = require('fs');

//fs의 모든 api는 3가지 형태로 제공된다.

//sync는 동기 방식이니 try catch로 가야함
try {
  fs.renameSync('./sdf', './gfdsng');
} catch(e) {
  console.error(e);
}

fs.rename('./asdf', './bsdf', (error) => {
  console.log(error);
})

fs.promises.rename('./etes','sdf').then().catch(console.log);