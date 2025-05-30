import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const TeamPreview = () => {
  const teamMembers = [
    {
      name: "Ahmad Al-Rashid",
      title: "Managing Partner",
      background: "Former World Bank, 15+ years in MENA region with extensive experience in market analysis",
      image: "https://picsum.photos/400/400?random=8"
    },
    {
      name: "Sarah Mitchell",
      title: "Senior Advisor",
      background: "Ex-State Department, Middle East specialist with deep knowledge of regulatory frameworks",
      image: "https://picsum.photos/400/400?random=9"
    },
    {
      name: "Omar Khalil",
      title: "Government Relations Director",
      background: "Former Syrian Ministry official, regulatory expert with strong government connections",
      image: "https://picsum.photos/400/400?random=10"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Experts
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Our advisors are proven experts with deep regional knowledge and international experience. 
            They combine local insight with global standards to deliver exceptional results.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div 
                className="relative w-48 h-48 mx-auto mb-6"
                variants={imageVariants}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 to-gray-100"></div>
                <div className="absolute inset-2 overflow-hidden rounded-full border-4 border-white shadow-lg">
                  <img 
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                
                <p className="text-gray-700 font-medium mb-4">
                  {member.title}
                </p>
                
                <p className="text-gray-600 leading-relaxed font-light">
                  {member.background}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="card-sharp p-12 lg:p-16 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Work with Industry Leaders
            </h3>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Our team includes former diplomats, ex-UN officials, and regional business leaders 
              who have spent their careers in the Middle East.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/team" className="btn-primary inline-flex items-center group">
                Meet the Full Team
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview; 