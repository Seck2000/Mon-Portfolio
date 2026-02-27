import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fermer le menu quand on clique sur un lien
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>Aissatou Seck</Link>
      </div>
      
      {/* Bouton Burger */}
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
        <li><Link to="/about" onClick={closeMenu}>À propos de moi</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projets</Link></li>
        <li><Link to="/skills" onClick={closeMenu}>Compétences</Link></li>
        <li><Link to="/cv" onClick={closeMenu}>CV</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
