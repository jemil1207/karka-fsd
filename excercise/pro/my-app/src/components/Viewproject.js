import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {format} from 'date-fns'
import Adminpage from './Adminpage'
const Viewproject = () => {
    const[get,setget]=useState([])
    const getdata=async()=>{
        try{
            const resp=await axios.get("http://localhost:3001/projects")
            const response=resp.data
            setget(response)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getdata()
    },[])
    const date=new Date()
    const formatdate=format(date,'yyyy-MM-dd')
  return (
    <div>
         <Adminpage/>
        <table>
            <thead>
                <tr>
                    <th>SI.No</th>
                    <th>Email</th>
                    <th>Project Name</th>
                    <th>Project Description</th>
                    <th>Project Requirement</th>
                    <th>Project Created </th>
                    <th>Project Deadline</th>
                </tr>
            </thead>
            <tbody>
                {get.map((data,i)=>(
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

export default Viewproject
