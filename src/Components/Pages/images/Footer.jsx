import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2025 Esakkiraja. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <a href="esakkiraja0409@gmail.com" className="footer-link">Gmail</a>
          <a href="https://www.linkedin.com/in/esakki-raja-506b64200" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Esakkiraja570" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;