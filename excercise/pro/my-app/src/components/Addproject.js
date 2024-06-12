import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Adminpage from './Adminpage'

const Addproject = () => {

    const[data, setData]=useState([])

    const[project, setProject]=useState({
        user:"",
        projectname:"",
        projectdescription:"",
        projectrequirement:"",
        projectdeadline:""
        // projectstatus:"pending"
    })

    let handlechange=(e)=>{

        setProject({
            ...project,[e.target.name]:e.target.value
        })
    }

let handleadd=()=>{

    const prodata=async()=>{
        try{
            const res=await axios.post(`http://localhost:3001/projects`,project)
        }
        catch(err){
            console.log(err)
        }
    }
    prodata()

    setProject({
        user:"",
        projectname:"",
        projectdescription:"",
        projectrequirement:"",
        projectdeadline:""
    })
}

let fetchpro=async()=>{
    try{
      let response =await axios.get("http://localhost:3001/products")
      setData(response.data)
    }
    catch(err){
      console.log(err)
    }
  }
 useEffect(()=>{
  fetchpro()
 },[])


let handleselect=(e)=>{
    setProject({
        ...project,user:e.target.value
    })

}

  return (
    <div>
        <Adminpage/>
        <select name='user' value={data.email} onChange={handleselect}>
            <option value="">--select user</option>
            {data.map((item,i)=>(
                <option value={item.email}>{item.email}</option>
            ))}
        </select><br></br>
      {/* <input placeholder='user'type='text' onChange={handlechange} name='user' value={project.user}/><br></br><br></br> */}
      <input placeholder='project name'type='text' onChange={handlechange} name='projectname' value={project.projectname}/><br></br><br></br>
      <input placeholder='description' type='text' value={project.projectdescription} onChange={handlechange} name='projectdescription'/><br></br>


      <input placeholder='project requirement'type='text' onChange={handlechange} name='projectrequirement' value={project.projectrequirement}/><br></br><br></br>

      <input placeholder='deadline' type='date' onChange={handlechange} name='projectdeadline' value={project.projectdeadline}/>

<button onClick={handleadd}>Add</button>

      



    </div>
  )
}

export default Addproject
