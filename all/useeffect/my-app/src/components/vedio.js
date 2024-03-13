// import React, { useState } from 'react'

// const vedio = () => {

//     const[play,setPlay]=useState(false)
//     let click=()=>{
//         const p=!play
//         setPlay(p)
//     }

//   return (
//     <div>
//       <button onClick={click}>{play?'pause':'play'}</button>
//       <video width="250">
//         <source
//           src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           type="video/mp4"
//         />
//       </video>
        
//       </div>
//   )
// }

// export default vedio
import React, { useEffect, useState,useRef } from 'react';

const Video = () => {
  const [play, setPlay] = useState(false);
  const ref=useRef(null)

  useEffect(()=>{
    if(play){
        ref.current.play()
    }
    else{
        ref.current.pause()
    }
  },[play])
  const handleClick = () => {
    setPlay(!play);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {play ? 'Pause' : 'Play'}
      </button>
      <video width="20%" ref={ref} loop playsInline >
        <source 
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"

          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;
