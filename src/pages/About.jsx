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
            Je suis <strong>Aissatou Seck</strong>, étudiante en fin de baccalauréat en informatique à l’<strong>Université du Québec à Rimouski (UQAR)</strong>.
            Je m’intéresse particulièrement au développement d’applications web en <strong>C# et ASP.NET</strong>.
          </p>
          <p>
            Au cours de ma formation, j’ai eu l’occasion de réaliser plusieurs projets concrets intégrant une base de données, la gestion des utilisateurs et des fonctionnalités comme le paiement en ligne.
            Sérieuse, organisée et motivée, j’aime apprendre et relever de nouveaux défis.
          </p>
          <p className="highlight-box">
            🚀 <strong>Actuellement en fin de parcours universitaire, je suis à la recherche d’un stage en développement logiciel</strong> afin d’acquérir une première expérience professionnelle dans le domaine et continuer à développer mes compétences.
          </p>

          <div className="about-section">
            <h2>🎓 Formation</h2>
            <ul className="timeline">
              <li>
                <strong>Baccalauréat en Informatique (2023 – en cours)</strong><br/>
                UQAR | Campus de Lévis<br/>
                <span className="details">Programme couvrant la programmation, l’architecture logicielle, les bases de données et le développement d’applications web.</span>
              </li>
              <li>
                <strong>Études en ingénierie informatique (2021 - 2023)</strong><br/>
                Université Kofi Annan de Guinée, Conakry.
              </li>
              <li>
                <strong>DEP en Sciences Mathématiques (2020 - 2021)</strong><br/>
                Groupe Scolaire Elhadj Moryba Yansané à Conakry en Guinée.
              </li>
            </ul>
          </div>

          <div className="about-section">
            <h2>💼 Expérience de travail</h2>
            <ul className="timeline">
              <li>
                <strong>Intervenante Spécialisée en Pacification et Sécurité (2024 – en cours)</strong><br/>
                CISSS de Chaudière-Appalaches, Hôtel-Dieu de Lévis<br/>
                <span className="details">Assurer l’accompagnement des patient(e)s, prévenir et désamorcer les situations à risque, et collaborer étroitement avec les équipes interdisciplinaires.</span>
              </li>
              <li>
                <strong>Artiste Sandwich Junior (Juillet 2023 - Juillet 2024)</strong><br/>
                Subway à Lévis<br/>
                <span className="details">Service à la clientèle, gestion des transactions à la caisse et entretien.</span>
              </li>
              <li>
                <strong>Commis fruits et légumes (Juin 2023 - Août 2023)</strong><br/>
                Maxi à Lévis (rue du Président Kennedy)<br/>
                <span className="details">Approvisionnement, organisation du rayon et maintien de la propreté.</span>
              </li>
            </ul>
          </div>

          <div className="about-section">
            <h2>🌟 Loisirs et intérêts</h2>
            <p>Sport, Cuisine, Cinéma, Voyage, Technologie numérique.</p>
          </div>

          <div className="about-cta">
            <Link to="/cv" className="btn btn-primary">Voir mon CV complet</Link>
            <Link to="/contact" className="btn btn-outline">Me contacter</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
