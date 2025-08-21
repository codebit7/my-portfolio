import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-text">
          &copy; {new Date().getFullYear()} Wamiq Rahim. All rights reserved.
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
