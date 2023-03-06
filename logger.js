const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    // call event
    this.emit('message', { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (log) => {
    console.log(log.id, log.msg);
  });
  logger.log('Hello, world!');
  logger.log('Hello, world!');
  logger.log('Hello!');
  logger.log('Hi!');
