import React, { useEffect, useState } from 'react'
import Adminpage from './Adminpage'
import axios from 'axios'
const Viewemployee = () => {
    const [user,setuser]=useState([])

    const fetch=async()=>{
        try{
            const resp=await axios.get("http://localhost:3001/products")
            const res=resp.data
            setuser(res)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetch()
    },[])
    const handleremove=async(id)=>{
        try{
            await axios.delete(`http://localhost:3001/products/${id}`)
            setuser(prevData=>prevData.filter(task=>task.id !== id))
        }
        catch(e){
            console.log(e)
        }

    }
  return (
    <div>
       <Adminpage/>
       <table>
        <thead>
            <tr>
                <th>SI.No</th>
                <th>Email</th>
                <th>Phone No</th>
                <th>Gender</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {user.map((data,i)=>(
                <tr>
                    <td>{data.id}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.gender}</td>
                    <td><button onClick={()=>handleremove(data.id)}>Remove</button></td>
                </tr>
            ))}
        </tbody>
       </table>
    </div>
  )
}

export default Viewemployee
