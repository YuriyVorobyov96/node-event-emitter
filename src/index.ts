import { EventsList, CallbackFunction, Event } from './types';

class MyEventEmitter {
  events: EventsList;

  constructor() {
    this.events = {};
  }

  on(event: Event, cb: CallbackFunction): void {
    if (!this.checkEventExistsInList(event)) {
      this.events[event] = [cb];

      return;
    }

    this.events[event].push(cb);
  }

  emit(event: Event, ...args: unknown[]): void {
    this.checkEventOnEmit(event);

    this.events[event].forEach(cb => cb(...args));
  }

  listeners(event: Event): CallbackFunction[] {
    return this.events[event];
  }

  eventNames(): Event[] {
    return Object.keys(this.events);
  }

  private checkEventExistsInList(event: Event): boolean {
    return this.events.hasOwnProperty(event);
  }

  private checkEventOnEmit(event: Event): void | never {
    if (this.checkEventExistsInList(event)) {
      return;
    }

    throw new Error(`This event don't exist`);
  }
}

export default MyEventEmitter;
