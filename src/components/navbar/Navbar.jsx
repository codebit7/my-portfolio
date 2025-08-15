import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('HOME');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    
    { name: 'CONTACT', href: '#contact' }
  ];

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    
      <nav className="navbar container">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <h2>Portfolio</h2>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="navbar-menu">
            {navLinks.map((link) => (
              <li key={link.name} className="navbar-item">
                <a
                  href={link.href}
                  className={`navbar-link ${activeLink === link.name ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </div>

          {/* Mobile Navigation Menu */}
          <ul className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.name} className="mobile-menu-item">
                <a
                  href={link.href}
                  className={`mobile-menu-link ${activeLink === link.name ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;