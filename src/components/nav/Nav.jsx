import React, { useState, useEffect } from 'react';
import './nav.css';
import { Menu, MenuList, MenuButton, MenuItem, IconButton } from '@chakra-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link as ScrollLink } from 'react-scroll'; 

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <ScrollLink to="home" smooth={true} duration={500}>
        <span className="logo-text">
          Simba Education <span className="logo-highlight">Consultants</span>
        </span>

        </ScrollLink>
      </div>

      <ul className="navbar-links">
        <li className="dropdown">
          <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
        </li>
        {/* <li className="dropdown">
          <ScrollLink to="about" smooth={true} duration={500}>About Us</ScrollLink>
        </li> */}
        <li className="dropdown">
          <ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink>
        </li>
        <li>
          <ScrollLink to="achievements" smooth={true} duration={500}>Our Achievements</ScrollLink>
        </li>
        <li>
          <ScrollLink to="contacts" smooth={true} duration={500}>Contact</ScrollLink>
        </li>
      </ul>

      <div className="navbar-cta">
        <ScrollLink to="contacts" smooth={true} duration={500} className="appointment-btn">
          Get Appointment
        </ScrollLink>
      </div>

      <div className="menu-container">
        <Menu>
          <MenuButton as={IconButton} aria-label="Options" icon={<RxHamburgerMenu />} variant="outline" />
          <MenuList>
            <MenuItem>
              <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
            </MenuItem>
            <MenuItem>
              <ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink>
            </MenuItem>
            <MenuItem>
              <ScrollLink to="about" smooth={true} duration={500}>About Us</ScrollLink>
            </MenuItem>
            <MenuItem>
              <ScrollLink to="achievements" smooth={true} duration={500}>Achievements</ScrollLink>
            </MenuItem>
            <MenuItem>
              <ScrollLink to="contacts" smooth={true} duration={500}>Contacts</ScrollLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
};

export default Nav;
