import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";

import {GiShoppingBag}  from 'react-icons/gi'


const Header = () => {


  const [auth, setAuth] = useState()


    const handleLogOut = () => {

      setAuth({
        ...auth,
        user : null,
        token : ""
      })



    }
 
console.log(auth?.user)


  return (

    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      🛒 Ecommerce App 
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/"  className="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>

        <li className="nav-item">
          <Link to="/category"  className="nav-link " aria-current="page" href="#">Category</Link>
        </li>



       {
        !auth?.user ? (<> <li   className="nav-item">
        <NavLink to="/register"  className="nav-link " aria-current="page" href="#">Register</NavLink>
        </li>

        <li className="nav-item">
        <NavLink to="/login"  className="nav-link " aria-current="page" href="#">Login</NavLink>
        </li>
        </>) : (<>
        
          <li className="nav-item">
        <NavLink to="/login"  onClick={handleLogOut} className="nav-link " aria-current="page" href="#">Logout</NavLink>
        </li>
        </>)
       }


        <li className="nav-item">
        <NavLink to="/cart"  className="nav-link " aria-current="page" href="#">Cart(0)</NavLink>
        </li>
        
       {/*  <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
    
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header