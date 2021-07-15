const buf = Buffer.from('hi');
console.log(buf) // 유니코드의 형태로 출력됨.

//기본은 utf-8
console.log(buf.toString());

const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2);

buf2[0] = 52;
buf2[1] = 77;

buf2.copy(buf3); // 이렇게 하면 buf3로 카피됨
console.log(buf2.toString())
console.log(buf3.toString())

// 묶어줄 수도 있음!
const newBuf = Buffer.concat([buf2,buf3])
console.log(newBuf.toString())