import React, { useContext } from 'react'
import { Name ,state} from '../App'


const UseContext = () => {
    const name=useContext(Name)
    const appstate=useContext(state)
  return (
    <div>
      <p>{name} i am {appstate}</p>
    </div>
  )
}

export default UseContext
