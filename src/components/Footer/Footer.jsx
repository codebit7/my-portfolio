import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuArrowUp, LuCode2 } from "react-icons/lu";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-brand">
          <span className="footer-mark"><LuCode2 /></span>
          <span className="footer-text">
            &copy; {new Date().getFullYear()} Wamiq Rahim. All rights reserved.
          </span>
        </div>

        <div className="footer-actions">
          <a className="icon-btn" href="https://github.com/codebit7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a className="icon-btn" href="https://www.linkedin.com/in/wamiq-rahim-05a83222b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <button type="button" className="icon-btn to-top" onClick={scrollToTop} aria-label="Back to top">
            <LuArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
