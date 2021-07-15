const os = require('os');
const process = require('process');

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());


const arr = [process.exec, process.version, process.pid, process.env];

arr.forEach(console.log);

process.nextTick(() => {
  console.log("process tick!");
})