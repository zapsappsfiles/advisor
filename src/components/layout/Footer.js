import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Services", href: "/services" },
        { name: "Our Team", href: "/team" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Market Entry Strategy", href: "/services#market-entry" },
        { name: "Regulatory Compliance", href: "/services#compliance" },
        { name: "Risk Management", href: "/services#risk" },
        { name: "Joint Ventures", href: "/services#partnerships" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Market Insights", href: "/insights" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Newsletter", href: "/newsletter" },
        { name: "FAQ", href: "/faq" }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: MapPinIcon,
      label: "Damascus, Syria",
      detail: "Regional Office"
    },
    {
      icon: PhoneIcon,
      label: "+963 11 XXX XXXX",
      detail: "Business Hours"
    },
    {
      icon: EnvelopeIcon,
      label: "info@nexusbridgeadvisors.com",
      detail: "24h Response"
    },
    {
      icon: GlobeAltIcon,
      label: "nexusbridgeadvisors.com",
      detail: "Online"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container-custom px-4 sm:px-6">
        {/* Main Footer */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 sm:mb-8">
                <Link to="/" className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white border border-white flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-xs sm:text-sm">N</span>
                  </div>
                  <div>
                    <span className="text-base sm:text-lg font-bold text-white">Nexus Bridge</span>
                    <div className="text-xs text-gray-400 -mt-1">ADVISORS</div>
                  </div>
                </Link>
                
                <p className="text-gray-300 leading-relaxed font-light mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
                  Your trusted partner for investment opportunities in Syria. 
                  Combining local expertise with international standards to deliver reliable outcomes.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium text-sm sm:text-base">{item.label}</div>
                        <div className="text-gray-400 text-xs sm:text-sm">{item.detail}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                >
                  <h3 className="text-white font-bold mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                      >
                        <Link
                          to={link.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 py-6 sm:py-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Nexus Bridge Advisors. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-8">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 