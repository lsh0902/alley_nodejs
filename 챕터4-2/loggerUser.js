const log = require('./logger.js');
const emitter = new log.Logger();


emitter.on('log', (args) => {
  console.log(args)
})
emitter.log(() => {
  console.log('함수 실행')
})