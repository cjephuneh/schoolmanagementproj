import React from 'react';
import './Navbar.css';
import logo from '../assets/logo1.png';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo"/>
        </div>
        <ul className="nav-links">
          <li className="nav-link"><a href="#">Home</a></li>
          <li className="nav-link"><a href="#">Features</a></li>
          <li className="nav-link"><a href="#">Pricing</a></li>
          <li className="nav-link"><a href="#">Contact</a></li>
        </ul>
        <button className="demo-button">Request Demo</button>
      </div>
    </nav>
  );
}

export default Navbar;
