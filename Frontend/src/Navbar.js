import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar({ toggleMenu, menuActive }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className={`navigation ${menuActive ? 'active' : ''}`}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact Us</Link>
      <button className="btnLogin-popup" onClick={handleLoginClick}>Login</button>
    </nav>
  );
}

export default NavBar;
