import './CounterPage.scss';
import { Logo } from '../Logo/Logo';
import { Counter } from '../Counter/Counter';
import { Footer } from '../Footer/Footer';
import leftBgPic from '../../assets/left-pic.png';
import rightBgPic from '../../assets/right-pic.png';
import { EventButton } from '../EventButton/EventButton';


export function CounterPage({ handleEmailData, sending }) {


  return (
    <div className="counterPage">
      <div className='left-bg-pic_container'>
        <img src={leftBgPic} alt="leftBgPic" className='left-bg-pic' />
      </div>
      <div className='right-bg-pic_container'>
        <img src={rightBgPic} alt="leftBgPic" className='right-bg-pic' />
      </div>
      <div className='containerCount'>
        <Logo />
        <div className='description'>
          <h1 className='h-desc'>UNDER CONSTRUCTION</h1>
          <div className='m-desc'>We're making lots of impovements and will be back soon</div>
        </div>
        <Counter />
        <EventButton />
      </div>
      <Footer handleEmailData={handleEmailData} sending={sending} />
    </div>
  );
}