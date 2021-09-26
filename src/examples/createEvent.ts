/* eslint-disable no-magic-numbers */
import MyEventEmitter from '../index';

const myEmitter = new MyEventEmitter();

// First listener
myEmitter.on('event', () => {
  console.log('Helloooo! first listener');
});

// Second listener
myEmitter.on('event', (arg1, arg2) => {
  console.log(`event with parameters ${arg1 as string}, ${arg2 as string} in second listener`);
});

// Third listener
myEmitter.on('event', (...args) => {
  const parameters = args.join(', ');

  console.log(`event with parameters ${parameters} in third listener`);
});

myEmitter.emit('event', 1, 2, 3, 4, 5);
