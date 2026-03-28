import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <SEO 
        title="Accueil" 
        description="Bienvenue sur le portfolio d'Aissatou Seck, étudiante en informatique. Découvrez mes projets, compétences et parcours." 
        keywords="Aissatou Seck, Portfolio, Informatique, Développement Web, React, C#"
      />
      <div className="hero-content">
        <div className="profile-image-container">
          <img 
            src="/photo.jpeg" 
            alt="Photo de profil" 
            className="profile-image" 
          />
        </div>
        <h1>Bonjour, je suis <span className="highlight">Aissatou</span></h1>
        <h2>Étudiante en informatique</h2>
        <p>
          Bienvenue sur mon portfolio !
          <br />
          Je suis étudiante en informatique passionnée par le développement web. J’aime comprendre comment les choses fonctionnent et transformer des idées en applications concrètes.
        </p>
        <p>
          J’ai créé ce portfolio pour montrer les projets sur lesquels j’ai travaillé et illustrer les compétences que j’ai développées au cours de ma formation.
        </p>
        <p className="status-text">
          Actuellement en fin de parcours universitaire, <strong>je suis à la recherche d’un stage</strong> afin de continuer à apprendre et à évoluer professionnellement.
        </p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn btn-primary">Voir mes projets</Link>
          <Link to="/contact" className="btn btn-secondary">Me contacter</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
