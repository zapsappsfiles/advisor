import React, { useState } from 'react';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';
import AboutPreview from '../components/sections/AboutPreview';
import TeamPreview from '../components/sections/TeamPreview';
import InsightsSection from '../components/sections/InsightsSection';
import ContactCTA from '../components/sections/ContactCTA';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How do you assist with market entry in Syria?",
      answer: "We provide comprehensive market entry services including regulatory compliance, local partnerships, market analysis, and risk assessment. Our team's deep local knowledge and international experience ensures a smooth entry process."
    },
    {
      question: "What regions in Syria do you cover?",
      answer: "We operate across all major commercial centers in Syria, with particular expertise in Damascus, Aleppo, Homs, and Latakia. Our network extends to all governorates where business operations are feasible."
    },
    {
      question: "How do you handle risk management?",
      answer: "Our risk management approach combines real-time local intelligence, detailed security assessments, and comprehensive due diligence. We continuously monitor political, economic, and security developments to protect our clients' interests."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have extensive experience across key sectors including infrastructure, manufacturing, agriculture, technology, and services. Our sector-specific expertise helps clients navigate unique industry challenges and opportunities."
    },
    {
      question: "How do you ensure compliance with international regulations?",
      answer: "Our legal and compliance team stays current with all relevant international sanctions, trade restrictions, and regulatory requirements. We work closely with international law firms to ensure all operations meet global compliance standards."
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutPreview />
      <ServicesSection />
      <TeamPreview />
      <section id="insights" className="section-padding bg-white">
        <InsightsSection />
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about investing and operating in the Syrian market.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  className="w-full text-left bg-white px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white px-6 py-4 rounded-b-lg shadow-sm mt-px"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default Home; 