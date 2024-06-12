// import React from 'react'
// import customerData from './product.json';


// const Index = () => {

// const data=customerData.customer

//   return (
//     <div>
//      {
//       data.map((customer,index)=>(
//         <div>

//             <p>{customer.name}</p>

//         </div>
//       ))
//      }
      
//     </div>
//   )
// }

// export default Index



import React, { useEffect, useState } from 'react'
import axios from "axios"

const Index = () => {

  const[data,setData]=useState([])
  const[item,setItem]=useState([])

 const fetchdata=async()=>{

 try{
  let response = await axios.get("https://fakestoreapi.com/products")
  setData(response.data)
  setItem(response.data)
  console.log(response.data)
 }
catch(error){
  console.error(error)
}
 }

 useEffect(()=>{
  fetchdata()
 },[])


const handledelete=(index)=>{

  let updated = data.filter((_,i)=>index!==i)
  setData(updated)
  setItem(updated)
}


const handlefilter=(e)=>{
  let updatedfil=data.filter(f=>f.title.toLowerCase().includes(e.target.value))
  setItem(updatedfil)
}
  return (
    <div>

      <input onChange={handlefilter}/>
      {item.map((item,index)=>(
        <div>
          <div>{item.title}</div>
          <div> <button onClick={()=>handledelete(index)}>delete</button></div>
        </div>
      ))}
    </div>
  )
}

export default Index
