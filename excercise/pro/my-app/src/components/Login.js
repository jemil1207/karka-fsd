
import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [data, setData] = useState([])
  const [pro, setPro]=useState([])
  const [change, setChange] = useState({
    email: "",
    password: ""
  })
 
  let navigate =useNavigate()

  let handlechange = (e) => {
    setChange({
      ...change, [e.target.name]: e.target.value
    })
  }

  let handleclick = () => {

    // console.log(pro)
    // console.log(data)
    if (data.find((data) => data.email === change.email && data.password === change.password)) {
      navigate("/Register")

    } else if(pro.find((item)=>item.email===change.email && item.password===change.password)){
      localStorage.setItem("currentuser",change.email)
     navigate("/Welcome")
    }
    else{
      alert("please check above email and password")
    }
  }

  let fetchdata = async () => {
    try {
      let res = await axios.get("http://localhost:3001/users")
      setData(res.data)
      
      
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])



  let fetchpro=async()=>{
    try{
      let response =await axios.get("http://localhost:3001/products")
      setPro(response.data)
    }
    catch(err){
      console.log(err)
    }
  }
 useEffect(()=>{
  fetchpro()
 },[])

  return (
    <div>
      <input placeholder='enter your email ' type='email' name='email' onChange={handlechange} value={change.email} /><br></br>
      <input placeholder='enter your pass' type='password' name='password' onChange={handlechange} value={change.password} /><br></br>
      <button onClick={handleclick}>sign in</button>
    </div>
  )
}

export default Login
