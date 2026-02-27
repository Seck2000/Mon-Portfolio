import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Aissatou Seck</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos de moi</Link></li>
        <li><Link to="/projects">Projets</Link></li>
        <li><Link to="/skills">Compétences</Link></li>
        <li><Link to="/cv">CV</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
