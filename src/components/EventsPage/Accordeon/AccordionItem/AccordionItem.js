import './AccordionItem.scss';
import bgAccordionPic from '../../../../assets/bg-pic-accodion.png'

export const AccordionItem = ({ title, id, activeAcc, selected }) => {


  return (
    <div
      className={selected === id ? "accordion-item selected" : "accordion-item"}
      id={id}>
      <div
        className={selected === id ? "accordion-title selected" : "accordion-title"}
        onClick={() => activeAcc(id)}>
        <div className='title-text'>{title} </div>
        <span className='title-number'> 0{id+1} </span>
      </div>
      <div
        className={selected === id ? "accordion-content display" : 'accordion-content'}
      >
        <div className='left-content'>
          <div className='left-title'>{title}</div>
          <div className='left-date'>13.02.2023</div>
          <button className='left-butt'>More Information</button>
        </div>
        <div className='right-content'>
          <img src={bgAccordionPic}/>
        </div>
      </div>
    </div>
  );
};
