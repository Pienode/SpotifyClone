// src/components/Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Spotify 2.0</h1>
      <ul>
        <li>Home</li>
        <li>Search</li>
        <li>Your Library</li>
      </ul>
    </nav>
  );
};

export default Navbar;
