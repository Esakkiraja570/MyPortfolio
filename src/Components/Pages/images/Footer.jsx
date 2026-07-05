import React from 'react';
import '../../../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">ER.</div>

        <p className="footer-copy">
          © 2025 Esakkiraja S — Java Full-Stack Developer & UI/UX Designer
        </p>

        <div className="footer-socials">
          <a
            href="mailto:esakkiraja0409@gmail.com"
            className="footer-social-btn"
            title="Email"
          >
            📧
          </a>
          <a
            href="https://www.linkedin.com/in/esakki-raja-506b64200"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            title="LinkedIn"
          >
            💼
          </a>
          <a
            href="https://github.com/Esakkiraja570"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn"
            title="GitHub"
          >
            🐙
          </a>
          <a
            href="tel:8300264732"
            className="footer-social-btn"
            title="Phone"
          >
            📱
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;