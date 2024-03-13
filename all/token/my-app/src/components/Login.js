// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// const Login = () => {

//     const[data,setData]=useState('')
//     const [user,setUser]=useState({Username:'',Password:''})
//     const fetch=async()=>{
//         try{
//             const response= await axios.get('https://reqres.in/api/login')
//             setData(response.data)
//         }
//         catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         fetch();
//     }, []);
//     console.log(data)
   

   

//    const sub=()=>{
    
//    }
//   return (
//     <>
//     {/* <div>
//     {data && data.map((item, index) => (
//         <div key={index}>
//             <p>{item.id}</p>
//         </div>
//     ))}
// </div> */}
//        <label>Email:</label>
//       <input type='text' value={email}  onChange={(e) => setUser({ ...user, email: e.target.value })}/>
//       <label>Password:</label>
//       <input type='text' value={password}  onChange={(e) => setUser({ ...user, email: e.target.value })} />
//       <button onClick={sub}>Submit</button>
// </>
//   )
// }

// export default Login




import React, { useState } from 'react';
import axios from 'axios';

 const Login = () => {

    const [data, setData] = useState('');
  const [log, setLog] = useState({
    email: '',
    password: ''
  });
  

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post('https://reqres.in/api/login', {
        email: log.email,
        password: log.password
      });

      
      setData(response.data);
      localStorage.setItem('userData', JSON.stringify(response.data));
        console.log(data)
      
      setLog({
        email: '',
        password: ''
      });
    } catch (error) {
      
      console.error('API Error:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <h1>login</h1>
        <label>Email</label>
        <input
          type="email"
          value={log.email}
          onChange={(e) => setLog({ ...log, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          value={log.password}
          onChange={(e) => setLog({ ...log, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Login