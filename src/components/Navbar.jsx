import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="https://cdn-icons-png.flaticon.com/512/1365/1365800.png"/>
          <h1><Link to="/">Sanity Fitness </Link> </h1>
        </div>
        <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
        <ul className="navbar-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        
      </nav>


    );
  };
  
  export default Navbar;