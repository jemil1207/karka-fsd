import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'date-fns'


const Welcome = () => {
    const [value,setvalue]=useState([])
    const datauser=localStorage.getItem("currentuser")
    const [prodata,setprodata]=useState([])
    console.log(value,"pppppp")
    const fetchdata=async()=>{
        try{
            const response=await axios.get("http://localhost:3001/projects")
            const datavalue=response.data
          
            const success=datavalue.filter(task=>task.user===datauser)
            if(success){
              setvalue(success)
            }
            
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchdata()
    },[])
    const date =new Date()
    const formatdate=format(date,'yyyy-MM-dd')
    
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>SI.No</th>
            <th>Email</th>
            <th>Project Name</th>
            <th>Project Description</th>
            <th>Project Requirement</th>
            <th>Project Created</th>
            <th>Project Deadline</th>
          </tr>
        </thead>
        <tbody>
          {value.map((data,i)=>(
            <tr>
              <td>{data.id}</td>
              <td>{data.user}</td>
              <td>{data.projectname}</td>
              <td>{data.projectdescription}</td>
              <td>{data.projectrequirement}</td>
              <td>{formatdate}</td>
              <td>{data.projectdeadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Welcome
