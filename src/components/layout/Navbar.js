import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToInsights = () => {
    setIsOpen(false); // Close mobile menu first
    setTimeout(() => {
      const insightsSection = document.getElementById('insights');
      if (insightsSection) {
        const yOffset = -80; // Offset for navbar height
        const y = insightsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else if (location.pathname !== '/') {
        window.location.href = '/#insights';
      }
    }, 100);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Insights', onClick: scrollToInsights },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => {
    if (typeof path === 'string') {
      return location.pathname === path;
    }
    return false;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 backdrop-blur-md ${isScrolled ? 'bg-white/80' : 'bg-white/50'}`}
    >
      <div className="container-custom px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-900 flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Nexus Bridge</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-center space-x-8"
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                {item.href ? (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-gray-900'
                        : 'text-gray-800 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={item.onClick}
                    className="text-sm font-medium text-gray-800 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            {isOpen ? (
              <XMarkIcon className="h-5 w-5 text-gray-900" />
            ) : (
              <Bars3Icon className="h-5 w-5 text-gray-900" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg border-t border-gray-100"
          >
            <div className="container-custom px-4 sm:px-6 py-4">
              <div className="flex flex-col space-y-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.href ? (
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 text-sm font-medium transition-colors ${
                          isActive(item.href)
                            ? 'text-gray-900 bg-gray-50'
                            : 'text-gray-800 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        onClick={item.onClick}
                        className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                      >
                        {item.name}
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 