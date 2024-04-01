import React from 'react'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Construction from './components/Construction';
import Bookdetails from './components/Bookdetails'
import Cart from './components/Cart';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Bookdetails" element={<Bookdetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Construction" element={<Construction />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
