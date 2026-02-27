import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Développement Frontend",
      icon: "💻",
      skills: [
        "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", 
        "Responsive Design", "Framer Motion", "Tailwind CSS"
      ]
    },
    {
      title: "Développement Backend",
      icon: "⚙️",
      skills: [
        "C#", ".NET Core", "ASP.NET", "SQL Server", 
        "MySQL", "API REST", "Entity Framework"
      ]
    },
    {
      title: "Outils & DevOps",
      icon: "🛠",
      skills: [
        "Git", "GitHub", "Visual Studio", "VS Code", 
        "Postman", "Agile / Scrum", "Vercel"
      ]
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: [
        "Travail d'équipe", "Résolution de problèmes", 
        "Autonomie", "Communication", "Curiosité", "Gestion du temps"
      ]
    }
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h1>Mes Compétences</h1>
        <p>Les technologies et outils que j'utilise au quotidien.</p>
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
