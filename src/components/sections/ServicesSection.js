import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChartBarIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const ServicesSection = () => {
  const services = [
    {
      icon: ChartBarIcon,
      title: "Market Entry Strategy",
      description: "Analyze your industry and craft step-by-step plans to enter Syria or similar markets.",
      details: "Market sizing, partner identification, licensing roadmaps",
      image: "https://picsum.photos/400/300?random=3"
    },
    {
      icon: ShieldCheckIcon,
      title: "Regulatory & Compliance",
      description: "Navigate sanctions, local laws, and regulations to ensure your operations meet requirements.",
      details: "U.S./EU sanctions compliance, Syrian government requirements",
      image: "https://picsum.photos/400/300?random=4"
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Risk Management",
      description: "Help you anticipate and mitigate risks – from security to political uncertainty.",
      details: "Travel security plans, insurance advice, contingency strategies",
      image: "https://picsum.photos/400/300?random=5"
    },
    {
      icon: UserGroupIcon,
      title: "Joint Ventures & Partnerships",
      description: "Identify and vet local partners, and negotiate terms for successful collaborations.",
      details: "Structuring partnerships to balance control and local interests",
      image: "https://picsum.photos/400/300?random=6"
    },
    {
      icon: BuildingOfficeIcon,
      title: "Government & Stakeholder Relations",
      description: "Leverage relationships with government and industry to support your projects.",
      details: "Securing support, navigating bureaucracy, managing PR",
      image: "https://picsum.photos/400/300?random=7"
    }
  ];

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

  const cardVariants = {
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            We offer end-to-end advisory services for foreign investors in Syria and similar markets. 
            Our five core specialties ensure comprehensive support throughout your investment journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-20"
        >
          {services.slice(0, 4).map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="bg-white border border-gray-200 overflow-hidden"
              >
                <div className="grid md:grid-cols-2 h-full">
                  {/* Image */}
                  <div className="image-sharp aspect-[4/3] md:aspect-auto">
                    <img 
                      src={service.image}
                      alt={`${service.title} consulting service`}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 text-white flex items-center justify-center border border-gray-900 mb-4 sm:mb-6">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed font-light text-sm sm:text-base">
                      {service.description}
                    </p>

                    <div className="text-xs sm:text-sm text-gray-700 mb-4 sm:mb-6 font-medium">
                      {service.details}
                    </div>

                    <div className="flex items-center text-gray-900">
                      <span className="text-xs sm:text-sm font-medium">Learn More</span>
                      <ArrowRightIcon className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* More Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <Link 
            to="/services" 
            className="inline-flex items-center border border-white text-white hover:bg-white hover:text-gray-900 font-medium py-3 px-6 sm:py-4 sm:px-8 transition-colors duration-300 group"
          >
            <span className="text-sm sm:text-base">View All Services</span>
            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="border border-gray-700 p-12 lg:p-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to explore Syrian opportunities?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Let our expert team guide you through every step of your investment journey 
              with our comprehensive advisory services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-white text-gray-900 hover:bg-gray-100 border border-white font-medium py-4 px-8 transition-colors duration-300">
                Talk to Our Team
              </Link>
              <Link to="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 font-medium py-4 px-8 transition-colors duration-300">
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 