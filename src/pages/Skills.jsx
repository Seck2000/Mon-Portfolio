import React from 'react';
import SEO from '../components/SEO';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Langages de programmation",
      icon: "💻",
      skills: [
        "C#", "JavaScript", "PHP", "C"
      ]
    },
    {
      title: "Développement Web",
      icon: "🌐",
      skills: [
        "HTML5", "CSS3", "ASP.NET MVC", "React.js"
      ]
    },
    {
      title: "Bases de données",
      icon: "🗄️",
      skills: [
        "SQL Server", "MySQL", "Entity Framework Core"
      ]
    },
    {
      title: "Outils & environnements",
      icon: "🛠",
      skills: [
        "Visual Studio", "VS Code", "Git", "GitHub", 
        "Windows", "Méthodologies Agile / Kanban"
      ]
    },
    {
      title: "Compétences bureautiques",
      icon: "📊",
      skills: [
        "Microsoft Word", "Excel", "PowerPoint", "Access"
      ]
    },
    {
      title: "Langues",
      icon: "🗣️",
      skills: [
        "Français (Excellente maîtrise)", 
        "Anglais (Niveau académique)", 
        "Poular (Langue maternelle)"
      ]
    },
    {
      title: "Qualités personnelles",
      icon: "✨",
      skills: [
        "Persévérante", "Rigoureuse", "Organisée", 
        "Autonome", "Esprit d’équipe"
      ]
    }
  ];

  return (
    <div className="skills-container">
      <SEO 
        title="Mes Compétences" 
        description="Aperçu des compétences techniques (C#, React, SQL) et personnelles d'Aissatou Seck." 
        keywords="Compétences, Skills, C#, React, SQL Server, Développement Web"
      />
      <div className="skills-header">
        <h1>Mes Compétences</h1>
        <p>Un aperçu de mes acquis techniques, linguistiques et professionnels.</p>
        <div className="underline"></div>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-card">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skills-badges">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
