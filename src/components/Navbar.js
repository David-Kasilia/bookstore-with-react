import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul className="nav-items">
      <li className="nav-item">
        <Link to="/">BOOKS</Link>
      </li>
      <li className="nav-item">
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
