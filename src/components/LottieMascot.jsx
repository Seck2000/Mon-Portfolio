import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';

const LottieMascot = ({ isFocused, isSending }) => {
  const [animationData, setAnimationData] = useState(null);

  // URLs des fichiers locaux dans le dossier public
  const SLEEPING_URL = "/404 error page with cat.json";
  const AWAKE_URL = "/Happy International Polar Bear Day!.json";
  // On réutilise l'Ours joyeux pour l'envoi en attendant une fusée
  const SENDING_URL = "/Happy International Polar Bear Day!.json"; 

  const [currentUrl, setCurrentUrl] = useState(SLEEPING_URL);

  useEffect(() => {
    let targetUrl = SLEEPING_URL;
    if (isSending) {
      targetUrl = SENDING_URL;
    } else if (isFocused) {
      targetUrl = AWAKE_URL;
    }

    // Charger le fichier JSON local
    fetch(targetUrl)
      .then(response => response.json())
      .then(data => {
        setAnimationData(data);
        setCurrentUrl(targetUrl);
      })
      .catch(error => console.error("Erreur de chargement Lottie:", error));
  }, [isFocused, isSending]);

  // Animation CSS pour l'envoi (si pas de JSON fusée)
  const sendingVariants = {
    initial: { x: 0, y: 0, scale: 1, opacity: 1 },
    animate: { 
      x: 500, 
      y: -200, 
      scale: 0.5, 
      opacity: 0,
      transition: { duration: 1.5, ease: "easeInOut" }
    },
    exit: { opacity: 0 }
  };

  return (
    <div style={{ width: 250, height: 250, margin: '0 auto', overflow: 'visible' }}>
      <AnimatePresence mode='wait'>
        {animationData && (
          <motion.div
            key={currentUrl} // Force le re-rendu lors du changement d'URL
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isSending ? sendingVariants.animate : { opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Lottie 
              animationData={animationData} 
              loop={true} 
              autoplay={true}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LottieMascot;
