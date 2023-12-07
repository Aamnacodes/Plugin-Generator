import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useUserContext from '../UserContext';


const Navbar = () => {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );

  const { loggedIn, logout } = useUserContext();

  const showLoginOptions = () => {
    if (currentUser !== null || loggedIn ) {
      return (
        <>
          
       <li className="nav-item">
            <NavLink className="nav-link text-light" to="/subscriber">
              Manage Subscriber
            </NavLink>
          </li>

        
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="/content">
              Mail Content
            </NavLink>
          </li>

           
        <li className="nav-item">
            <NavLink className="px-3 nav-link text-light" to="/docs">
              Docs
            </NavLink>
       </li>

          <li className="px-2 nav-item">
            <button className="btn btn-light fw-bold" onClick={logout} >Logout</button>
          </li>
          
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="/signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="/login">
              Login
            </NavLink>
          </li>
         
        </>
      );
    }
  };     
   return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:'#053B50'}}>
  <div className="container-fluid">
    <a className="navbar-brand text-light fw-bold" href="#">
      MailMagnet
    </a>
    <img 
      src='\gif.gif'
      width={55} height={55} 
      alt='main' />
    <button
      className="navbar-toggler bg-light"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="px-4 nav-link text-light" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="px-3 nav-link text-light" to="/newsletter">
            Newsletter
          </NavLink>
       </li>
          </ul>
          </div>
        <div>
        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
          {showLoginOptions()}
      </ul>
          </div>
        </div>
      </nav>

  )
}
export default Navbar;
