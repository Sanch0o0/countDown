// import { useEffect, useMemo, useState } from 'react';

// export const useType = () => {
//   const [type, setType] = useState(['Days', 'Hours', 'Minutes', 'Seconds']);
//   const [size, setSize] = useState([window.innerWidth, window.innerHeight])

//   const handleResize = () => {
//     setSize([window.innerWidth, window.innerHeight]);




//   }

//   console.log(window.screen.width);
//    setType( useMemo(() => {
//     (window.screen.width >= '768px')
//       ? ['Days', 'Hours', 'Minutes', 'Seconds']
//       : ['DD', 'HH', 'MM', 'SS']
//   }))

//   useEffect(() => {
//     window.addEventListener('resize', handleResize)

//     return () => window.removeEventListener('resize', handleResize)
//   }, [size])

//   console.log(type)

//   return type;
// }
