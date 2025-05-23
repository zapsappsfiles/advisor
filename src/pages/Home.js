import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';
import AboutPreview from '../components/sections/AboutPreview';
import TeamPreview from '../components/sections/TeamPreview';
import InsightsSection from '../components/sections/InsightsSection';
import ContactCTA from '../components/sections/ContactCTA';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutPreview />
      <ServicesSection />
      <TeamPreview />
      <InsightsSection />
      <ContactCTA />
    </div>
  );
};

export default Home; 