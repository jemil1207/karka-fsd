import React from 'react'
import { useState, useRef } from 'react';
const Toogle = () => {

    const [show, setShow] = useState(true);
    const ref = useRef(null);
    let remov=()=>{
          ref.current.remove()
    }
    let to=()=>{
      setShow(!show)
    }
  return (

    <div>
    <button onClick={to}>Toggle with setState </button>
    <button onClick={remov}> Remove from the DOM</button>
     <p ref={ref}>Hello world</p>
  </div>
  )}
  export default Toogle
