//디버깅 한번 체험해보려고 짠 코드

function aaa(a) {
  for(let i = 0 ;i <100; i++) {
    if (i < 40) {
      a++;
    }else {
      a--;
    }
  }
  return a;
}

let b = 32;
let a = 0;
a = aaa(a);
b++;
console.log(a+b);
console.log('end');