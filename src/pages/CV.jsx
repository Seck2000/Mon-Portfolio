import React from 'react';
import SEO from '../components/SEO';
import './CV.css';

const CV = () => {
  const cvUrl = "/Aissatou_Seck_CV.pdf";

  return (
    <div className="cv-container">
      <SEO 
        title="Mon CV" 
        description="Téléchargez le CV d'Aissatou Seck. Étudiante en informatique, expériences et formation détaillée." 
        keywords="CV, Curriculum Vitae, Aissatou Seck, Recrutement, Stage"
      />
      <h1>Mon Curriculum Vitae</h1>
      <p>Voici un aperçu de mon parcours académique et professionnel.</p>
      
      <div className="cv-actions">
        <a href={cvUrl} download="Aissatou_Seck_CV.pdf" className="btn btn-primary">
          📥 Télécharger mon CV
        </a>
      </div>

      <div className="pdf-viewer">
        <iframe 
          src={cvUrl} 
          title="CV Aissatou Seck" 
          width="100%" 
          height="100%"
        >
          <p>
            Votre navigateur ne supporte pas l'affichage direct du PDF.
            <br />
            <a href={cvUrl}>Cliquez ici pour le télécharger.</a>
          </p>
        </iframe>
      </div>
    </div>
  );
};

export default CV;
