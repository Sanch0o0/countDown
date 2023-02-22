import './EventsPage.scss';
import { AccordionEvent } from './Accordeon/AccordionEvent';

export function EventsPage() {

  return (
    <div className="eventsPage">
      <h1 className='header'>ALL EVENTS</h1>
      <div className='containerEvent'>
        <AccordionEvent/>
      </div>
    </div>
  );
}

