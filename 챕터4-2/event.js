const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('승환', (args) => {
  console.log(args);
})

emitter.emit('승환', {message : 1, sadf : 2});

emitter.removeAllListeners();
emitter.removeListener('승환');
