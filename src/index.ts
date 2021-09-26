import IEventsList from './types/eventsList';
import CallbackFunction from './types/cbFunction';
import Event from './types/event';

class MyEventEmitter {
  events: IEventsList;

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

    this.events[event].forEach(cb => cb(args));
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
