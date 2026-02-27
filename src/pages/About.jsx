import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>À propos de moi</h1>
        <div className="underline"></div>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src="/profile.jpg" alt="Aissatou Seck" />
        </div>
        
        <div className="about-text">
          <h2>Qui suis-je ?</h2>
          <p>
            Je m'appelle <strong>Aissatou Seck</strong>, je suis étudiante en informatique basée à <strong>Lévis, Québec</strong>.
            Passionnée par le numérique depuis toujours, j'ai orienté mes études vers le développement logiciel et la conception d'applications.
          </p>

          <h2>Mon Parcours</h2>
          <p>
            Actuellement en fin de formation universitaire, j'ai acquis des bases solides en algorithmique, en bases de données et en développement web.
            J'aime particulièrement le côté créatif du développement front-end (React, CSS) tout en appréciant la rigueur du back-end.
          </p>

          <h2>Mes Objectifs</h2>
          <p>
            Mon objectif principal aujourd'hui est de décrocher un <strong>stage de fin d'études</strong>.
            Je souhaite rejoindre une équipe dynamique où je pourrai :
          </p>
          <ul>
            <li>Mettre en pratique mes compétences techniques.</li>
            <li>Apprendre des meilleures pratiques de l'industrie.</li>
            <li>Contribuer à des projets concrets et utiles.</li>
          </ul>

          <div className="about-cta">
            <Link to="/cv" className="btn btn-primary">Voir mon CV</Link>
            <Link to="/contact" className="btn btn-outline">Me contacter</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
