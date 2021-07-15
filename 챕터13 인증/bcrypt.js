const bcrypt = require('bcrypt');


//서버에서 할 때는 비동기로 ㄱㄱ
const pass = '12345tty';
const hashed = bcrypt.hashSync(pass, 4);
console.log(hashed)

const result = bcrypt.compareSync('12345tty', hashed);
console.log(result)