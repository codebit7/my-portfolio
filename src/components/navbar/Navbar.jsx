import React, { useState, useEffect, useRef } from 'react';
import { LuCode2, LuMenu, LuX } from 'react-icons/lu';
import './Navbar.css';

// Defined outside the component so it isn't re-created on every render.
const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollActiveAllowed = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      if (!scrollActiveAllowed.current) return;

      let current = NAV_LINKS[0].name;
      for (const link of NAV_LINKS) {
        const section = document.querySelector(link.href);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom > 140) {
          current = link.name;
          break;
        }
      }
      setActiveLink(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, linkName) => {
    e.preventDefault();
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
    scrollActiveAllowed.current = false;

    const link = NAV_LINKS.find((l) => l.name === linkName);
    const section = link && document.querySelector(link.href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => { scrollActiveAllowed.current = true; }, 800);
    } else {
      scrollActiveAllowed.current = true;
    }
  };

  return (
    <header className={`navbar-wrap ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="navbar-logo" onClick={(e) => handleLinkClick(e, 'Home')}>
          <span className="logo-mark"><LuCode2 /></span>
          <span className="logo-text">Wamiq Rahim</span>
        </a>

        <ul className="navbar-menu">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`navbar-link ${activeLink === link.name ? 'active' : ''}`}
                aria-current={activeLink === link.name ? 'page' : undefined}
                onClick={(e) => handleLinkClick(e, link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <LuX /> : <LuMenu />}
        </button>
      </nav>

      <ul className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={`mobile-menu-link ${activeLink === link.name ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.name)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
