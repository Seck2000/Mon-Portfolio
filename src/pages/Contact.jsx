import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import InteractiveMascot from '../components/InteractiveMascot';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    
    // Simuler un délai d'envoi pour laisser l'animation se jouer
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      alert('Message envoyé avec succès ! 🚀');
      setIsSending(false); // La mascotte revient
      setFormData({ name: '', email: '', message: '' });
    }, 2000); // 2 secondes pour laisser le temps à l'animation
  };

  return (
    <div className="contact-container">
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
              <span>📞</span>
              <a href="tel:+14184552011">418 455 2011</a>
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
             <h3>Ma localisation</h3>
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
          <form onSubmit={handleSubmit}>
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
                name="email" 
                value={formData.email} 
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
