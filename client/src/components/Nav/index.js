import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Nav() {
  return (
    <nav className="nav-main">
      <h1>Beastiary</h1> <p>logo</p>
      <Link to="/">Home</Link>
      <Link to="/map/">Map</Link>
      <Link to="/all/">All Beasts</Link>
      <Link to="/2">Home2</Link>
    </nav>
  )
}

export default Nav;