import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Mascot.css';

const InteractiveMascot = ({ isFocused, isSending, onAnimationComplete }) => {
  const [currentEmoji, setCurrentEmoji] = useState('😴');

  // Gestion des emojis selon l'état
  useEffect(() => {
    if (isSending) {
      setCurrentEmoji('🚀'); // Décollage !
    } else if (isFocused) {
      setCurrentEmoji('👀'); // Réveillé et attentif
    } else {
      setCurrentEmoji('😴'); // Dodo
    }
  }, [isFocused, isSending]);

  // Variantes d'animation
  const variants = {
    sleeping: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: { 
        repeat: Infinity, 
        duration: 3, 
        ease: "easeInOut" 
      }
    },
    awake: {
      scale: 1.2,
      y: [0, -10, 0],
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    sending: {
      x: [0, -20, 500], // Recule pour prendre de l'élan puis part
      y: [0, 20, -200], // Monte en diagonale
      scale: [1, 0.8, 0.2], // Rapetisse en s'éloignant
      rotate: [0, -10, 45],
      opacity: [1, 1, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        times: [0, 0.2, 1]
      }
    }
  };

  return (
    <div className="mascot-container">
      <AnimatePresence>
        <motion.div
          key={currentEmoji} // Change animation on emoji change
          className="mascot-emoji"
          variants={variants}
          animate={isSending ? "sending" : (isFocused ? "awake" : "sleeping")}
          initial={isSending ? "awake" : "sleeping"}
          onAnimationComplete={() => {
            if (isSending && onAnimationComplete) {
              onAnimationComplete();
            }
          }}
        >
          {currentEmoji}
        </motion.div>
        
        {/* Effet de "Zzz" quand il dort */}
        {!isFocused && !isSending && (
          <motion.div 
            className="zzz-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.span 
              className="zzz"
              animate={{ x: [0, 20], y: [0, -30], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0 }}
            >z</motion.span>
            <motion.span 
              className="zzz"
              animate={{ x: [0, 25], y: [0, -40], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
              style={{ fontSize: '1.5rem' }}
            >Z</motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveMascot;
