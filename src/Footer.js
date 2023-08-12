import React from 'react'
import './Footer.css';
import Chef from './assets/chef.jpg';

const Footer = () => {
  return (
    <footer id="footer">
      <div id="footer-container">
        <img id="footer-img" src={Chef} alt="Chef cooking" />
        <div id="doormat-navigation">
          <h1 id="doormat-title">Doormat Navigation</h1>
          <ul id="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/booking">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div id="contact">
          <h2 id="contact-title">Contact</h2>
          <ul id="contact-list">
            <li>12345 John Street</li>
            <li>555-142-9414</li>
            <li>littlelemon@support.com</li>
          </ul>
        </div>
        <div id="socials">
          <h2 id="socials-title">Socials</h2>
          <ul id="socials-list">
            <li>12345 John Street</li>
            <li>555-142-9414</li>
            <li>littlelemon@support.com</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer