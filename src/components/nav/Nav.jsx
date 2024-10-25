import React, { useState, useEffect } from 'react';
import './nav.css';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
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
  );
};

export default Nav;