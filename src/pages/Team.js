import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, LinkedInIcon } from '@heroicons/react/24/outline';

const Team = () => {
  const leadership = [
    {
      name: "Ahmad Al-Rashid",
      title: "Founder & Managing Partner",
      background: "Former World Bank senior advisor with 15+ years in MENA region. Led infrastructure development projects worth over $500M across Syria, Jordan, and Lebanon. Holds MBA from Wharton and speaks Arabic, English, French, and Turkish.",
      image: "https://picsum.photos/400/500?random=8",
      expertise: ["Market Analysis", "Government Relations", "Infrastructure", "Strategic Planning"],
      education: "MBA, Wharton School; BA Economics, American University of Beirut",
      experience: "World Bank (2005-2015), McKinsey & Company (2003-2005)"
    },
    {
      name: "Sarah Mitchell",
      title: "Senior Partner",
      background: "Ex-U.S. State Department Middle East specialist with 12+ years diplomatic experience. Former economic attaché in Damascus (2010-2013) and Amman (2013-2016). Expert in regulatory compliance, international law, and cross-border transactions.",
      image: "https://picsum.photos/400/500?random=9",
      expertise: ["Regulatory Compliance", "International Law", "Risk Assessment", "Diplomatic Relations"],
      education: "JD, Georgetown Law; MA International Relations, Johns Hopkins SAIS",
      experience: "U.S. State Department (2008-2020), White & Case LLP (2006-2008)"
    }
  ];

  const seniorTeam = [
    {
      name: "Omar Khalil",
      title: "Government Relations Director",
      background: "Former Syrian Ministry of Economy official with extensive government connections. 20+ years experience in policy development, business facilitation, and regulatory affairs.",
      image: "https://picsum.photos/400/500?random=10",
      expertise: ["Government Relations", "Policy Development", "Local Partnerships", "Regulatory Affairs"],
      education: "MA Public Administration, Damascus University",
      experience: "Syrian Ministry of Economy (1998-2018), Private Consultant (2018-Present)"
    },
    {
      name: "Dr. Layla Hassan",
      title: "Research Director",
      background: "PhD in Economics from Oxford. Former IMF analyst specializing in post-conflict economic reconstruction. Published researcher on Syrian market development with 25+ academic papers.",
      image: "https://picsum.photos/400/500?random=14",
      expertise: ["Economic Research", "Market Analysis", "Due Diligence", "Financial Modeling"],
      education: "PhD Economics, Oxford University; MSc Economics, London School of Economics",
      experience: "International Monetary Fund (2012-2020), Oxford Economics (2010-2012)"
    },
    {
      name: "Khalid Mansour",
      title: "Security & Risk Director",
      background: "Former security consultant with 18+ years experience in conflict zones. Specialized in corporate security, threat assessment, and crisis management across MENA region.",
      image: "https://picsum.photos/400/500?random=21",
      expertise: ["Security Assessment", "Crisis Management", "Risk Analysis", "Corporate Protection"],
      education: "MS Security Studies, Georgetown University; BA International Relations",
      experience: "Control Risks (2010-2020), Blackwater/Academi (2006-2010)"
    },
    {
      name: "Nadia Khoury",
      title: "Legal Counsel",
      background: "International lawyer specializing in Middle East commercial law, sanctions compliance, and cross-border transactions. Fluent in Arabic, English, and French.",
      image: "https://picsum.photos/400/500?random=22",
      expertise: ["Commercial Law", "Sanctions Compliance", "Contract Negotiation", "Corporate Structure"],
      education: "LLM, Harvard Law School; LLB, Lebanese University",
      experience: "Clifford Chance (2015-2021), Baker McKenzie (2012-2015)"
    }
  ];

  const advisors = [
    {
      name: "Ambassador Michael Thompson",
      title: "Senior Strategic Advisor",
      background: "Former U.S. Ambassador to Syria (2008-2011) and regional expert with 30+ years diplomatic experience.",
      image: "https://picsum.photos/300/400?random=23",
      expertise: ["Diplomatic Relations", "Strategic Advisory", "Government Relations"]
    },
    {
      name: "Dr. Rami Zahra",
      title: "Economic Advisor",
      background: "Former Syrian Central Bank Deputy Governor and leading economist with expertise in monetary policy and financial markets.",
      image: "https://picsum.photos/300/400?random=24",
      expertise: ["Monetary Policy", "Financial Markets", "Economic Policy"]
    },
    {
      name: "Elena Petrov",
      title: "EU Relations Advisor",
      background: "Former European Commission official specializing in EU-MENA relations and sanctions policy.",
      image: "https://picsum.photos/300/400?random=25",
      expertise: ["EU Relations", "Sanctions Policy", "Trade Relations"]
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
              Our <span className="text-gray-600">Team</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Meet the experienced professionals who combine deep regional knowledge 
              with international expertise to guide your Syrian market entry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Our founders and senior leadership bring decades of experience from 
                international organizations, government, and consulting.
              </p>
            </motion.div>

            <div className="space-y-16">
              {leadership.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="card-sharp overflow-hidden"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="image-sharp aspect-[4/5] lg:aspect-auto">
                      <img 
                        src={member.image}
                        alt={`${member.name} - ${member.title}`}
                      />
                    </div>

                    <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      
                      <p className="text-gray-700 font-medium mb-4 text-lg">
                        {member.title}
                      </p>
                      
                      <p className="text-gray-600 leading-relaxed font-light mb-6">
                        {member.background}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">Education</h4>
                          <p className="text-gray-600 text-sm">{member.education}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">Experience</h4>
                          <p className="text-gray-600 text-sm">{member.experience}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span key={skillIndex} className="text-xs border border-gray-300 text-gray-700 px-3 py-1">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Senior Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Senior Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Experienced professionals leading our core practice areas with 
                specialized expertise in their respective fields.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seniorTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="card-sharp overflow-hidden"
                >
                  <div className="image-sharp aspect-[4/3]">
                    <img 
                      src={member.image}
                      alt={`${member.name} - ${member.title}`}
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    
                    <p className="text-gray-700 font-medium mb-4">
                      {member.title}
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed font-light mb-4 text-sm">
                      {member.background}
                    </p>

                    <div className="mb-4">
                      <div className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wider">Education</div>
                      <p className="text-gray-600 text-xs">{member.education}</p>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wider">Experience</div>
                      <p className="text-gray-600 text-xs">{member.experience}</p>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wider">Expertise</div>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs border border-gray-300 text-gray-700 px-2 py-1">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Advisory Board
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Distinguished advisors providing strategic guidance and 
                high-level expertise to support our clients' success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advisors.map((advisor, index) => (
                <motion.div
                  key={advisor.name}
                  variants={itemVariants}
                  className="card-sharp overflow-hidden text-center"
                >
                  <div className="image-sharp aspect-[3/4]">
                    <img 
                      src={advisor.image}
                      alt={`${advisor.name} - ${advisor.title}`}
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {advisor.name}
                    </h3>
                    
                    <p className="text-gray-700 font-medium mb-3 text-sm">
                      {advisor.title}
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed font-light mb-4 text-sm">
                      {advisor.background}
                    </p>

                    <div className="flex flex-wrap gap-1 justify-center">
                      {advisor.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs border border-gray-300 text-gray-700 px-2 py-1">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Work with Our Experts
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Schedule a consultation with our experienced team to discuss your 
              Syrian market entry strategy and business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-white text-gray-900 hover:bg-gray-100 border border-white font-medium py-4 px-8 transition-colors duration-300 inline-flex items-center justify-center group">
                Schedule a Consultation
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 font-medium py-4 px-8 transition-colors duration-300">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;