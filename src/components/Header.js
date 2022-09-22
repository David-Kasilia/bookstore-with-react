/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaUser } from 'react-icons/fa';
import Navbar from './Navbar';

const Header = ({ title }) => (
  <header>
    <h1 className="title">{title}</h1>
    <Navbar />
    <button type="button" className="user"><FaUser className="userIcon" /></button>
  </header>
);

Header.defaultProps = {
  title: 'Bookstore CMS',
};

export default Header;
