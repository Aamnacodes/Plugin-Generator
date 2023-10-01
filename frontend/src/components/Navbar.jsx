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
            <button className="btn btn-danger" onClick={logout} >Logout</button>
          </li>
          
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
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
    <button
      className="navbar-toggler"
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
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/">
            Home
          </NavLink>
        </li>
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
        <li className="nav-item">
          <NavLink className="nav-link text-light" to="/newsletter">
            Newsletter
          </NavLink>
       </li>
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

          {showLoginOptions()}
      </ul>
      
      {/* <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}
          </div>
        </div>
      </nav>

  )
}
  

export default Navbar;
