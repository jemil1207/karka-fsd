import React, { createContext, useState } from 'react'
import About from './components/About'
import Home from './components/Home'
import Ref from './components/Ref'
import Toogle from './components/Toogle'
import Vedio from './components/vedio'
import UseContext from './components/UseContext'

export const Name=createContext()
export const state=createContext()
const App = () => {
  const[data,setDAta]=useState('hello')
  return (
    <div>
      {/* <Home/>
      <Ref/>
      <About/>
      <Toogle/> */}
      <Vedio/>
      <Name.Provider value={'hi'} >
          <state.Provider value={data}>
                 <UseContext/>
          </state.Provider>
      </Name.Provider>
    </div>
  )
}

export default App
