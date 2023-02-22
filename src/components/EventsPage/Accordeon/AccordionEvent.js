import { useState } from 'react';
import './AccordionEvent.scss'
import { AccordionItem } from './AccordionItem/AccordionItem';


export function AccordionEvent() {
  const accordionData = [
    {
      title: 'Hawaiian party',
      content: ``
    },
    {
      title: 'Mafia party',
      content: ``
    },
    {
      title: 'Party',
      content: ``
    },
    {
      title: 'Party on the beach',
      content: ``
    },
    {
      title: 'Home Security',
      content: ``
    },

    {
      title: 'Network Design & Implementation',
      content: ``
    },
    {
      title: 'System Design & Engineering',
      content: ``
    },
    {
      title: 'Client Care Plans',
      content: ``
    }
  ];

  const [selected, setSelected] = useState(0);

  const activeAcc = (id) => {
    if (selected !== id) {
      setSelected(id);
    }
  }

  return (
    <div className="accordion">
      {accordionData.map(({ title, content }, id) => (
        <AccordionItem title={title} content={content} key={id} id={id} activeAcc={activeAcc} selected={selected} />
      ))}
    </div>
  );
}
