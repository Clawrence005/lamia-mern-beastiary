import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../..//assets/logo.svg';
import './style.css';

function Nav() {
  return (
    <nav className="nav-main">
      <img src={logo} className="logo" alt="image" />
      <h1 className="nav-title">Beastiary</h1>
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/map/">Map</Link>
      <Link className="nav-link" to="/all/">All Beasts</Link>
      <Link className="nav-link" to="/2">Home2</Link>
    </nav>
  )
}

export default Nav;