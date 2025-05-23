import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const ContactCTA = () => {
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
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Connect with our expert team to explore opportunities in Syria's evolving market. 
              We're here to guide you through every step of your investment journey.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border border-gray-700 p-8 text-center">
              <EnvelopeIcon className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">info@nexusbridgeadvisors.com</p>
              <p className="text-gray-400 text-sm">Response within 24 hours</p>
            </div>
            
            <div className="border border-gray-700 p-8 text-center">
              <PhoneIcon className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">+963 11 XXX XXXX</p>
              <p className="text-gray-400 text-sm">Available during business hours</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-white text-gray-900 hover:bg-gray-100 border border-white font-medium py-4 px-8 transition-colors duration-300 inline-flex items-center justify-center group">
                Start Your Journey
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link to="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 font-medium py-4 px-8 transition-colors duration-300 inline-flex items-center justify-center">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA; 