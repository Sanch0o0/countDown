import { useState } from 'react';
import './CountType.scss';
import { CountTypeElem } from './CountType/CountTypeElem';
import { useType } from '../../../hooks/use-type';

export function CountType() {
  const [type] =  useState(['DD', 'HH', 'MM', 'SS']);

//  // window.addEventListener('resize', ()=>newFun(window.screen.width))

//   useEffect(() => {

//     const newFun(width) => {setWidth(width);
//     console.log(width);
// }
//     console.log(window.screen.width)
//   }, [width])


  return (
    <div className='countType'>
      {type?.map((type, id) => {
        return <CountTypeElem type={type} key={id} />
      })}
    </div>
  );
}