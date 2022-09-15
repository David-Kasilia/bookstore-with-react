/* eslint-disable react/prop-types */
import React from 'react';
import Navbar from './Navbar';

const Header = ({ title }) => (
  <header>
    <h1 className="title">{title}</h1>
    <Navbar />
    <button type="button" className="user">User</button>
  </header>
);

Header.defaultProps = {
  title: 'Bookstore CMS',
};

export default Header;
