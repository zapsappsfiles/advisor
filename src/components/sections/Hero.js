import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-white pt-16 sm:pt-20">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)]">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 py-8 sm:py-12 lg:py-0"
          >
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <div className="inline-block border border-gray-900 text-gray-900 text-xs font-medium px-3 py-1 sm:px-4 sm:py-2 mb-6 sm:mb-8 uppercase tracking-wider">
                Syria Market Experts
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 mb-4 sm:mb-6">
                Nexus Bridge
                <br />
                <span className="text-gray-600">Advisors</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light leading-relaxed mb-8 sm:mb-10 max-w-xl">
                Guiding your investment in Syria with deep local knowledge and global standards. 
                We combine decades of regional experience with international expertise.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md">
                <Link to="/services" className="btn-primary inline-flex items-center justify-center group text-sm sm:text-base py-3 px-6 sm:py-4 sm:px-8">
                  Explore Services
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <Link to="/about" className="btn-secondary inline-flex items-center justify-center text-sm sm:text-base py-3 px-6 sm:py-4 sm:px-8">
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="divider-sharp pt-6 sm:pt-8">
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">50+</div>
                  <div className="text-gray-600 text-xs sm:text-sm font-medium">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">15+</div>
                  <div className="text-gray-600 text-xs sm:text-sm font-medium">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">100%</div>
                  <div className="text-gray-600 text-xs sm:text-sm font-medium">Success</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="image-sharp aspect-[4/5] sm:aspect-[4/5] lg:aspect-[3/4]">
                <img 
                  src="https://picsum.photos/600/800?random=1" 
                  alt="Damascus cityscape representing Syria business opportunities" 
                />
              </div>
              
              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 sm:p-6">
                <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">Market Status</div>
                <div className="text-sm sm:text-lg font-bold text-gray-900">Growing Opportunities</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 