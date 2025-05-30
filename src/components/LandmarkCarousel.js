import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LandmarkCarousel = () => {
  // This will be replaced with actual landmarks data
  const [landmarks] = useState([
    {
      id: 1,
      image: 'https://picsum.photos/1920/1080?random=1',
      name: 'Placeholder Landmark',
      location: 'Syria',
    },
    {
      id: 2,
      image: 'https://picsum.photos/1920/1080?random=2',
      name: 'Placeholder Landmark 2',
      location: 'Syria',
    },
    {
      id: 3,
      image: 'https://picsum.photos/1920/1080?random=3',
      name: 'Placeholder Landmark 3',
      location: 'Syria',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === landmarks.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [landmarks.length]);

  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const infoVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={landmarks[currentIndex].image}
            alt={landmarks[currentIndex].name}
            className="w-full h-full object-cover"
          />
          
          {/* Landmark Info */}
          <div className="absolute bottom-8 right-8 text-right">
            <motion.div
              variants={infoVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, delay: 0.5 }}
              key={`info-${currentIndex}`}
            >
              <div className="text-xs text-white/80 mb-1 uppercase tracking-wider">
                {landmarks[currentIndex].location}
              </div>
              <div className="text-lg font-medium text-white">
                {landmarks[currentIndex].name}
              </div>
            </motion.div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/20">
            <motion.div
              className="h-full bg-white/40"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              key={`progress-${currentIndex}`}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LandmarkCarousel; 