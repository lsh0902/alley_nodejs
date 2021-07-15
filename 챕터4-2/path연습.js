const path = require('path');

//운영체제가 제공하는 sep 가 다르기 때문에 여기의 함수를 활용하는게 좋음

console.log(__filename );
console.log(path.basename(__filename));
console.log(path.sep);
console.log(path.delimiter);

path.join(__dirname , 'image');

const parsed = path.parse(__filename);
const str = path.format(parsed);

//isAbsolute로 절대경로인지도 확인 가능함.