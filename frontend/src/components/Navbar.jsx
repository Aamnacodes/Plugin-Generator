import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg" style={{backgroundColor: '#053B50'}}>
    <div className="container-fluid">
        <a className="navbar-brand text-light fw-bold" href="#">PLUGIN GENERATOR</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link" style={{color:'#64CCC5'}} to="/">
                Home
                </NavLink>
                </li>
                <li className="nav-item" >
                <NavLink className="nav-link" style={{color:'#64CCC5'}} to="/login">
                Login
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" style={{color:'#64CCC5'}} to="/signup">
                Signup
                </NavLink>
                </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control bg-light rounded-pill me-2" type="search" placeholder="Search here" aria-label="Search"/>
            <button className="btn fw-bold rounded-pill" style={{backgroundColor: '#64CCC5', color: '#053B50'}} type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
  )
}

export default Navbar
