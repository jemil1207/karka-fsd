import React, { useRef } from 'react'

const Ref = () => {

    const refy =useRef(null)
    let focus=()=>{
            refy.current.focus()
    }
  return (
    <div>
      <input ref={refy}/>
      <button onClick={focus}>focus</button>
    </div>
  )
}

export default Ref
