import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://cdn-icons-png.flaticon.com/512/1365/1365800.png" alt="Logo" />
        <h1><Link to="/">Sanity Fitness</Link></h1>
      </div>
      <div className="navbar-search">
        <form>
          <input type="text" placeholder="Search..." />
        </form>
      </div>
      <ul className="navbar-links">

        {user ? (
          <>
          <li><Link to="/myclients">My Clients</Link></li>
           <li><Link to="/services">Training Sessions</Link></li>
            <li><Link to="/employeeprofile">Profile</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="workout-routines">Memberships</Link></li>
         
        )}
      </ul>
    
    </nav>
  );
};

export default Navbar;
