import React from 'react';
import Index from './components/Index';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Ensure this import is correct
import Adminpage from './components/Adminpage';
import Addproject from './components/Addproject';
import Viewproject from './components/Viewproject'
import Viewemployee  from './components/Viewemployee';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Welcome' element={<Welcome />} />
          <Route path='/Adminpage' element={<Adminpage/>}/>
          <Route path='/Addproject' element={<Addproject/>}/>
          <Route path='/Viewproject' element={<Viewproject/>}/>
          <Route path='/Viewemployee' element={<Viewemployee/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
