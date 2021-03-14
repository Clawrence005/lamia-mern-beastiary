import React from 'react';
import './style.css';
import logo from '../../assets/logo.svg';

function Footer() {

  return (
    <footer>
      <img className="footer-img" src={logo} alt="beastiary logo" />
      <p>beastiary 2021</p>
      <hr />
      <div className="footer-parent">
        <div className="footer-child">
          <p>Contact Us</p>
          <ul>
            <li><img className="footer-img" src={logo} alt="beastiary logo" /></li>
            <li><p>beastiary 2021</p></li>
          </ul>
        </div>
        <div className="footer-child">
          <p>About</p>
          <ul>
            <li><a className="footer-link" href="https://www.google.com/">instagram</a></li>
            <li><a className="footer-link" href="https://www.google.com/">dribbble</a></li>
            <li><a className="footer-link" href="https://www.google.com/">instagram</a></li>
          </ul>
        </div>
        <div className="footer-child">
          <p>Something else</p>
          <ul>
            <li><a className="footer-link" href="https://www.google.com/">instagram</a></li>
            <li><a className="footer-link" href="https://www.google.com/">dribbble</a></li>
            <li><a className="footer-link" href="https://www.google.com/">instagram</a></li>
          </ul>
        </div>
        <div className="footer-child">
          <p>Contact Us</p>
          <ul>
            <li><a className="footer-link" href="https://www.google.com/">instagram</a></li>
            <li><a className="footer-link" href="https://www.google.com/">dribbble</a></li>
            <li><a className="footer-link" href="https://www.google.com/">instagram</a></li>
          </ul>
        </div>
      </div>
      <hr />
    </footer>
  )
}

export default Footer;