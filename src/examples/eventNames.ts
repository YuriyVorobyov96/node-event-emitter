/* eslint-disable @typescript-eslint/no-empty-function */
import MyEventEmitter from '../index';

const myEmitter = new MyEventEmitter();

myEmitter.on('foo', () => {});
myEmitter.on('bar', () => {});

console.log(myEmitter.eventNames());
