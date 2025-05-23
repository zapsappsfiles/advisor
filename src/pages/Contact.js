import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID"); // Replace with your Formspree ID

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: "Office Location",
      details: "Damascus, Syria",
      description: "Our headquarters in the heart of Syria's business district"
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      details: "+963 11 XXX XXXX",
      description: "Available during business hours"
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      details: "info@nexusbridgeadvisors.com",
      description: "We respond within 24 hours"
    },
    {
      icon: ClockIcon,
      title: "Business Hours",
      details: "Sun - Thu: 9AM - 6PM",
      description: "Damascus Time (GMT+3)"
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

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center p-8 card-sharp max-w-md"
        >
          <div className="w-16 h-16 bg-gray-900 border border-gray-900 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-gray-600">Touch</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Ready to explore opportunities in Syria? Contact our expert team for a confidential consultation 
              about your investment plans and market entry strategy.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="card-sharp p-8"
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </motion.h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      required
                      className="input-sharp w-full"
                      placeholder="John"
                    />
                    <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      required
                      className="input-sharp w-full"
                      placeholder="Doe"
                    />
                    <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="input-sharp w-full"
                    placeholder="john@company.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    className="input-sharp w-full"
                    placeholder="Your Company Name"
                  />
                  <ValidationError prefix="Company" field="company" errors={state.errors} />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="input-sharp w-full"
                  >
                    <option value="">Select a subject</option>
                    <option value="market-entry">Market Entry Strategy</option>
                    <option value="compliance">Regulatory & Compliance</option>
                    <option value="risk-management">Risk Management</option>
                    <option value="partnerships">Joint Ventures & Partnerships</option>
                    <option value="government-relations">Government Relations</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="input-sharp w-full resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </motion.h2>
              
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    variants={itemVariants}
                    className="card-sharp p-6"
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center border border-gray-900 mr-4 flex-shrink-0">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-900 font-medium mb-2">
                          {info.details}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              
              {/* Additional Info */}
              <motion.div variants={itemVariants} className="card-sharp p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Ready to Start?
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Our team is standing by to discuss your Syrian market entry strategy. 
                  All consultations are confidential and we provide initial assessments at no cost.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-gray-900 mr-3 flex-shrink-0"></span>
                    Free initial consultation
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-gray-900 mr-3 flex-shrink-0"></span>
                    Confidential discussions
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-gray-900 mr-3 flex-shrink-0"></span>
                    Expert market insights
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <div className="card-sharp p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Located in the heart of Damascus, our office serves as the hub for all our Syrian operations. 
                Schedule an appointment to meet our team in person.
              </p>
              <div className="bg-gray-100 border border-gray-200 h-64 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <MapPinIcon className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-sm">Interactive map coming soon</p>
                  <p className="text-xs text-gray-400 mt-1">Damascus, Syria</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 