import React, { useRef } from 'react'

const About = () => {

    const firstm =useRef(null)
    const secondm = useRef(null)
    const thirdm = useRef(null)

    let first=()=>{
        firstm.current.scrollIntoView()
    }
    let second=()=>{
        secondm.current.scrollIntoView()
    }
    let third=()=>{
        thirdm.current.scrollIntoView()
    }
  return (
    <div>
        <nsv>
        <button onClick={first}> tom</button>
        <button onClick={second}> jerry</button>
        <button onClick={third}> dog</button>
        </nsv>

        <ul>
            <li>
                <img  src="https://placekitten.com/g/200/200" ref={firstm}/>
            </li>
            <li>
                <img  src="https://placekitten.com/g/300/200" ref={secondm}/>
            </li>
            <li>
                <img  src="https://placekitten.com/g/250/200" ref={thirdm}/>
            </li>
        </ul>
    </div>
  )
}

export default About
