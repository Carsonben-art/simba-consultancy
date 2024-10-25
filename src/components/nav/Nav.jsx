import React from 'react'
import './nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">Simba <span className="logo-highlight">Consultancy</span></span>
      </div>

      <ul className="navbar-links">
        <li className="dropdown">
          <a href="#Home">Home</a>
        </li>
        <li className="dropdown">
          <a href="#about">About Us</a>
        </li>
        <li className="dropdown">
          <a href="#services">Services</a>
        </li>
        <li><a href="#contacts">Our Team</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>

      <div className="navbar-cta">
        <a href="#contacts" className="appointment-btn">Get Appointment</a>
      </div>
    </nav>
  )
}

export default Nav
