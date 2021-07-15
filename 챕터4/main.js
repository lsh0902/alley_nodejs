//노드에는 global 오브젝트라는 것이 있음.
//이는 전역 객체를 말하는데 브라우저에서는 Window고 노드js에서는 global은 global임 ㅋㅋㅋ

//let 키워드 없이 선언하면 곧 global 객체에 선언한것.
console.log(global);
james = 234;
console.log(global.james);
global.console.log(global.james);

let obj = [
  {name : 'james', age : 23},
  {name : 'sdgnfes', age : 23235},
]
console.table(obj);
console.dir(obj, {depth:2})


console.time('s');
console.timeEnd('s');

console.count('a'); //카운트 기능.
console.trace(); //도대체 어디서 이 함수를 호출했는가!

console.clear();

function hello() {
  console.log("hello의 ", this);

  [1,3,4].forEach((i) => {
    console.log(this, i)
  });

}

class A {
  constructor(num) {
    this.num = num;
  }
  func = () => {
    console.log(this);
  }
}

let aObj = new A(1);
aObj.func();
hello.call(aObj);

console.log(this === module.exports)