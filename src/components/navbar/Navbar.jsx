import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Navbar.css'; 

const Navbar = () => {

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' }
  ];


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });

    // Intersection Observer for active nav link on scroll
    const handleScrollActive = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      let found = false;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            setActiveLink(navLinks[i].name);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveLink(navLinks[0].name);
    };
    window.addEventListener('scroll', handleScrollActive);
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, [navLinks]);
  const [activeLink, setActiveLink] = useState('HOME');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);





  

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
    const linkObj = navLinks.find(l => l.name === linkName);
    if (linkObj) {
      const section = document.querySelector(linkObj.href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    
      <nav className="navbar container">
        <div className="navbar-container">
         
          <div className="navbar-logo" data-aos="fade-right" data-aos-delay="100">
            <h2>Portfolio</h2>
          </div>

         
          <ul className="navbar-menu">
            {navLinks.map((link, idx) => (
              <li key={link.name} className="navbar-item" data-aos="fade-down" data-aos-delay={200 + idx * 100}>
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

          
          <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </div>

         
          <ul className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}> 
            {navLinks.map((link, idx) => (
              <li key={link.name} className="mobile-menu-item" data-aos="fade-up" data-aos-delay={200 + idx * 100}>
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