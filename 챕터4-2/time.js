let num = 1;
let interval = setInterval(()=>{
  console.log(num ++);
}, 100 )

setTimeout(() => {
  clearInterval(interval);
}, 537)