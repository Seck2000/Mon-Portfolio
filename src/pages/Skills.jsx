import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Développement Frontend",
      skills: [
        { name: "HTML5 / CSS3", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Responsive Design", level: 85 }
      ]
    },
    {
      title: "Développement Backend",
      skills: [
        { name: "C# / .NET", level: 85 },
        { name: "ASP.NET Core", level: 80 },
        { name: "SQL Server / MySQL", level: 75 },
        { name: "Node.js (Basique)", level: 60 }
      ]
    },
    {
      title: "Outils & DevOps",
      skills: [
        { name: "Git / GitHub", level: 80 },
        { name: "Visual Studio / VS Code", level: 90 },
        { name: "Postman", level: 75 },
        { name: "Méthodes Agiles (Scrum)", level: 70 }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Travail d'équipe", level: 95 },
        { name: "Résolution de problèmes", level: 90 },
        { name: "Autonomie", level: 85 },
        { name: "Communication", level: 85 }
      ]
    }
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h1>Mes Compétences</h1>
        <p>Un aperçu de mes connaissances techniques et professionnelles.</p>
        <div className="underline"></div>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-card">
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
