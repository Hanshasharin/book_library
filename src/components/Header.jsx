import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
  <nav className="navbar navbar-dark bg-dark mb-4">
    <div className="container">
      <Link to="/" className="navbar-brand">
       Book Library
      </Link>
       <Link to="/login" className="navbar-brand">
       Login
      </Link>
    </div>
  </nav>
);

export default Header;