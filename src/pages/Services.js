import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChartBarIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      icon: ChartBarIcon,
      title: "Market Entry Strategy",
      description: "Comprehensive analysis and strategic planning for entering the Syrian market, tailored to your industry and business objectives.",
      image: "https://picsum.photos/600/400?random=16",
      features: [
        "Market size analysis and opportunity assessment",
        "Competitive landscape mapping",
        "Regulatory environment analysis",
        "Entry strategy development",
        "Timeline and milestone planning",
        "Risk assessment and mitigation strategies"
      ],
      process: [
        "Initial market assessment",
        "Stakeholder mapping",
        "Strategy development",
        "Implementation roadmap"
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: "Regulatory & Compliance",
      description: "Navigate complex sanctions, local laws, and regulations to ensure your operations meet all requirements and maintain compliance.",
      image: "https://picsum.photos/600/400?random=17",
      features: [
        "U.S. and EU sanctions compliance guidance",
        "Syrian regulatory requirements analysis",
        "Licensing and permit assistance",
        "Ongoing compliance monitoring",
        "Legal documentation support",
        "Regulatory change notifications"
      ],
      process: [
        "Compliance audit",
        "Requirements mapping",
        "Documentation preparation",
        "Ongoing monitoring"
      ]
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to protect your investments and operations in challenging environments.",
      image: "https://picsum.photos/600/400?random=18",
      features: [
        "Political and economic risk analysis",
        "Security assessment and planning",
        "Insurance advisory services",
        "Contingency planning",
        "Crisis management support",
        "Regular risk monitoring and updates"
      ],
      process: [
        "Risk identification",
        "Impact assessment",
        "Mitigation planning",
        "Implementation support"
      ]
    },
    {
      icon: UserGroupIcon,
      title: "Joint Ventures & Partnerships",
      description: "Identify, vet, and structure partnerships with local entities to ensure successful collaboration and shared value creation.",
      image: "https://picsum.photos/600/400?random=19",
      features: [
        "Partner identification and vetting",
        "Due diligence services",
        "Deal structuring and negotiation",
        "Joint venture agreement drafting",
        "Partnership management",
        "Dispute resolution support"
      ],
      process: [
        "Partner sourcing",
        "Due diligence",
        "Negotiation support",
        "Agreement finalization"
      ]
    },
    {
      icon: BuildingOfficeIcon,
      title: "Government & Stakeholder Relations",
      description: "Leverage our extensive network and relationships to facilitate smooth interactions with government entities and key stakeholders.",
      image: "https://picsum.photos/600/400?random=20",
      features: [
        "Government liaison services",
        "Permit and license facilitation",
        "Stakeholder mapping and engagement",
        "Public relations support",
        "Crisis communication",
        "Ongoing relationship management"
      ],
      process: [
        "Stakeholder analysis",
        "Engagement strategy",
        "Relationship building",
        "Ongoing management"
      ]
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
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-gray-600">Services</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive advisory services designed to guide you through every aspect 
              of your Syrian market entry and business operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => {
        const IconComponent = service.icon;
        const isEven = index % 2 === 0;

        return (
          <section key={service.title} className={`section-padding ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container-custom">
              <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={!isEven ? 'lg:order-2' : ''}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center border border-gray-900 mr-4">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="inline-block border border-gray-900 text-gray-900 text-xs font-medium px-4 py-2 uppercase tracking-wider">
                      Service {index + 1}
                    </div>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-gray-900 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Our Process:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.process.map((step, stepIndex) => (
                        <span key={stepIndex} className="border border-gray-300 text-gray-700 px-3 py-1 text-sm">
                          {stepIndex + 1}. {step}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={!isEven ? 'lg:order-1' : ''}
                >
                  <div className="image-sharp aspect-[4/3]">
                    <img 
                      src={service.image}
                      alt={`${service.title} consulting service`}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Our comprehensive approach ensures you have everything you need for successful market entry and operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div variants={itemVariants} className="text-center p-8 border border-gray-700">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center p-8 border border-gray-700">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Successful Projects</div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center p-8 border border-gray-700">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <Link to="/contact" className="bg-white text-gray-900 hover:bg-gray-100 border border-white font-medium py-4 px-8 transition-colors duration-300 inline-flex items-center group">
                Start Your Project
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="card-sharp p-12 lg:p-16 max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                Schedule a consultation to discuss your specific needs and learn how our services 
                can support your Syrian market entry and business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="btn-primary inline-flex items-center group">
                  Schedule Consultation
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/about" className="btn-secondary">
                  Learn About Our Team
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 