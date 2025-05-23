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

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-sharp border-b' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 border border-gray-900 flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">N</span>
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold text-gray-900">Nexus Bridge</span>
                <div className="text-xs text-gray-600 -mt-1 hidden sm:block">ADVISORS</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-center space-x-6 xl:space-x-8"
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`nav-link text-sm xl:text-base ${isActive(item.href) ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden lg:block"
          >
            <Link to="/contact" className="btn-primary text-sm xl:text-base py-3 px-6 xl:py-4 xl:px-8">
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 border border-gray-300 hover:border-gray-900 transition-colors duration-200"
          >
            {isOpen ? (
              <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
            ) : (
              <Bars3Icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
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
            className="lg:hidden bg-white border-t border-gray-200"
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
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 text-sm font-medium border border-transparent hover:border-gray-200 transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-gray-900 border-gray-200'
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navigation.length * 0.1 }}
                  className="pt-2"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full text-center block text-sm py-3"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 