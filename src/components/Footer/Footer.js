import './Footer.scss';
import { useState } from 'react';
import arrowRight from '../../assets/arrow-right.svg';
import arrowDown from '../../assets/arrow-down.svg';


export function Footer({ handleEmailData, sending }) {

  const [inputText, setInputText] = useState('');

  const onInputChange = (e) => {
    setInputText(e.target.value);
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (!inputText) return;

    await handleEmailData(inputText);

    setInputText('');
  }

  const smoothScroll = ()=>{
    window.scrollBy({
      top:  window.screen.height,
      behavior: 'smooth'
  });
  }

  return (
    <div className='footerContainer'>
      <div className="footer">
        <form onSubmit={onFormSubmit}>
          <input
            type='email'
            value={inputText}
            className='form-input'
            placeholder='Enter your Email and get notified'
            onChange={onInputChange}
          ></input>
          {(sending)
            ? (
              <div className='loader'></div>
            )
            : <button className='form-button'>
              <img src={arrowRight} alt='arrow-right' />
            </button>
          }

        </form>

        <button
          onClick={smoothScroll}
          className='otherEventsButt'
        >Other Events <img src={arrowDown} /></button>
      </div>
    </div>
  );
}

