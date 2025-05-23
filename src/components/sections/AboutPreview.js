import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircleIcon,
  StarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const AboutPreview = () => {
  const features = [
    {
      icon: GlobeAltIcon,
      title: "Syria Expertise",
      description: "Our senior team includes native Syrians and regional veterans with deep understanding of local business practices."
    },
    {
      icon: StarIcon,
      title: "Global Standards",
      description: "We adhere to the highest compliance and governance standards following international guidelines."
    },
    {
      icon: CheckCircleIcon,
      title: "Proven Track Record",
      description: "Successfully advised investments across energy, agriculture, and infrastructure sectors."
    },
    {
      icon: UserGroupIcon,
      title: "Security & Discretion",
      description: "Trusted by Fortune 500 clients with the highest confidentiality and safety standards."
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "50+", label: "Successful Projects" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-20">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <div className="inline-block border border-gray-900 text-gray-900 text-xs font-medium px-4 py-2 mb-8 uppercase tracking-wider">
                About Nexus Bridge Advisors
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Turning Syria's Challenges into{' '}
                <span className="text-gray-600">Business Opportunities</span>
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
                Nexus Bridge Advisors is a Syria-based consulting firm serving U.S. and European companies. 
                Our team of on-the-ground agents uses tailored market-entry strategy, compliance support, 
                risk management, joint venture facilitation, and government relations.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                We act as your local partner – combining decades of regional experience with international 
                standards to deliver reliable investment outcomes in complex markets.
              </p>

              <Link to="/about" className="btn-primary inline-flex items-center group">
                Learn More About Us
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="image-sharp aspect-[4/3]">
                <img 
                  src="https://picsum.photos/600/450?random=2" 
                  alt="Business meeting representing professional consulting services" 
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="card-sharp p-8"
                >
                  <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center border border-gray-900 mb-6">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="divider-sharp pt-16 mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="card-sharp p-12 lg:p-16 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Nexus Bridge Advisors?
            </h3>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              We're committed to transparency, local partnership, and the highest ethical standards. 
              Each client benefits from our tailored approach – from structuring joint ventures to 
              liaising with government ministries, we are with you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link to="/team" className="btn-secondary">
                Meet Our Team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview; 