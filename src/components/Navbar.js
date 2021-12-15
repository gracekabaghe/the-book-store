import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => (
  <div className="navbar">
    <h1>The Bookstore</h1>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/AddNewBook">AddNewBook</Link>
      <Link to="/Categories">Categories</Link>
    </div>
  </div>
);

export default Navbar;
