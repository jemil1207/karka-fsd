

import { useEffect, useRef, useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
    
//     console.log( count);

//     return () => {
//       console.log('c');
//     };
//   }, [count]);

//   const handleClick = () => {
    
//     setCount(count+1);
//   };

  

//   return (
//     <>
//       <div>
//         <button onClick={handleClick}>Cljjick</button>
//         <p>{count}</p>
//       </div>
//     </>
//   );
// }

// export default App;




import React from 'react'

const Home = () => {

  const ref=useRef(0)
  const fun=()=>{
    ref.current=ref.current+1
    console.log(ref.current)
    console.log("hello")
  }
  return (
    <div>
      <button onClick={fun}>click</button>
    </div>
  )
}

export default Home






