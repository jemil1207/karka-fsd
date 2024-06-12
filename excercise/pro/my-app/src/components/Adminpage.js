import React from 'react'
import {Link } from 'react-router-dom'

const Adminpage = () => {
  return (
   <>
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
      <Link to ="/Addproject" class="nav-link active" aria-current="page" href="#">add Project</Link>
        </li>
        <li class="nav-item">
    <Link to ="/Viewproject" class="nav-link" href="#">view project</Link>
        </li>
        <li class="nav-item">
          <Link to="/Viewemployee" class="nav-link" href="#">View Employee</Link>
        </li>
        <li class="nav-item">
          <Link to="/Logout" class="nav-link" href="#">LogOut</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    
    </div>



   </>
  )
}

export default Adminpage
