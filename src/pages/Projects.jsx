import React from 'react';
import './Projects.css';

const Projects = () => {
  // Vos vrais projets avec des images thématiques
  const projects = [
    {
      id: 1,
      title: "CineReserv",
      description: "Développement d'un système de réservation de billets de Cinéma en ligne complet. Permet aux utilisateurs de consulter les séances et de réserver leurs places.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Cinéma
      technologies: ["C#", "ASP.NET", "SQL Server"],
      githubLink: "https://github.com/Seck2000/CineReserv",
      demoLink: null
    },
    {
      id: 2,
      title: "Cinema Reservation Backend",
      description: "L'API Backend robuste pour le système de réservation de cinéma, gérant la logique métier, les réservations et l'authentification.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Serveurs / Code
      technologies: ["C#", ".NET Core", "API REST"],
      githubLink: "https://github.com/Seck2000/CinemaReservationBackend",
      demoLink: null
    },
    {
      id: 3,
      title: "TP1 Hachage Mot De Passe",
      description: "Implémentation en C# (.NET 8, WPF) d’un générateur de dictionnaire de mots de passe et d’une application de test de hachages bcrypt (10). Projet axé sur la sécurité.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Sécurité / Cadenas
      technologies: ["C#", ".NET 8", "WPF", "Sécurité", "Bcrypt"],
      githubLink: "https://github.com/Seck2000/TP1_HachageMotDePass",
      demoLink: null
    },
    {
      id: 4,
      title: "Revenus Québec",
      description: "Application de gestion liée à la fiscalité et aux revenus (Projet C#).",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Finance / Calcul
      technologies: ["C#", ".NET"],
      githubLink: "https://github.com/Seck2000/Revenue_Quebec",
      demoLink: null
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Mes Projets</h1>
        <p>Voici une sélection de mes travaux disponibles sur mon GitHub.</p>
        <div className="underline"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="view-btn">
                  Voir le code
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-tech-container">
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
