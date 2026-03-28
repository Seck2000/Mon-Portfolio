import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import emailjs from '@emailjs/browser';
import InteractiveMascot from '../components/InteractiveMascot';
import SEO from '../components/SEO';
import './Contact.css';

// Correctif pour l'icône par défaut de Leaflet
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  const form = useRef();
  
  const [formData, setFormData] = useState({
    name: '',
    user_email: '',
    message: ''
  });
  
  // États pour la mascotte
  const [isFocused, setIsFocused] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const position = [46.8033, -71.1779]; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    // On attend un peu pour voir si le focus passe à un autre champ
    setTimeout(() => {
      const activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        return;
      }
      setIsFocused(false);
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // Déclenche l'animation d'envoi (fusée/courrier)
    
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // On prépare explicitement les variables pour EmailJS, en incluant l'email dans le message
    const templateParams = {
      name: formData.name,
      user_email: formData.user_email,
      message: `[Email de l'expéditeur : ${formData.user_email}]\n\n${formData.message}`
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
          console.log('Success:', result.text);
          alert('Message envoyé avec succès ! 🚀');
          setFormData({ name: '', user_email: '', message: '' });
      }, (error) => {
          console.log('Error:', error.text);
          alert("Une erreur s'est produite lors de l'envoi du message.");
      })
      .finally(() => {
          setIsSending(false); // La mascotte revient
      });
  };

  return (
    <div className="contact-container">
      <SEO 
        title="Contact" 
        description="Contactez Aissatou Seck via le formulaire, par email ou téléphone. Localisée à Lévis, Québec." 
        keywords="Contact, Aissatou Seck, Email, Téléphone, Lévis"
      />
      <h1>Me contacter</h1>
      <p>N'hésitez pas à me laisser un message pour toute opportunité ou question.</p>
      
      <div className="contact-content">
        
        {/* Informations de contact */}
        <div className="contact-info">
          <h2>Mes coordonnées</h2>
          <div className="contact-details">
            <div className="contact-item">
              <span>📍</span>
              <span>Rue Langlois, Levis, Quebec, G6V 2N5</span>
            </div>
            <div className="contact-item">
              <span>📧</span>
              <a href="mailto:aminabalde200@gmail.com">aminabalde200@gmail.com</a>
            </div>
            
            <div className="contact-item">
              <span>🔗</span>
              <a href="https://www.linkedin.com/in/aissatou-seck-70a550393" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="contact-item">
              <span>💻</span>
              <a href="https://github.com/Seck2000" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          {/* Carte */}
          <div className="map-wrapper">
             <h3>Localisation</h3>
             <div className="map-container-leaflet">
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>
                      Aissatou Seck <br /> Lévis, Québec.
                    </Popup>
                  </Marker>
                  <Circle 
                    center={position} 
                    pathOptions={{ fillColor: 'blue', color: 'blue' }} 
                    radius={1500} 
                  />
                </MapContainer>
             </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="contact-form">
          
          {/* Mascotte Interactive */}
          <InteractiveMascot isFocused={isFocused} isSending={isSending} />

          <h2>Envoyer un message</h2>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                onFocus={handleFocus}
                onBlur={handleBlur}
                required 
                placeholder="Votre nom"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="user_email" 
                value={formData.user_email} 
                onChange={handleChange} 
                onFocus={handleFocus}
                onBlur={handleBlur}
                required 
                placeholder="votre.email@exemple.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                onFocus={handleFocus}
                onBlur={handleBlur}
                required 
                placeholder="Votre message..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" disabled={isSending}>
              {isSending ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
