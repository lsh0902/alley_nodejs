//어떤 것이 발생하기 전과 후에 이벤트를 발생시키고 싶음
const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(callback) {
    this.emit('log', 'started');
    callback();
    this.emit('log', 'end');
  }
}

module.exports.Logger = Logger