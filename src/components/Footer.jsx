import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/aissatou-seck-70a550393" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Seck2000" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
