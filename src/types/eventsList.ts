import CallbackFunction from './cbFunction';
import Event from './event';

type EventsList = {
  // eslint-disable-next-line no-unused-vars
  [key in Event]: CallbackFunction[];
}

export default EventsList;
