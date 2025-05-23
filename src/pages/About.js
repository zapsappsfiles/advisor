import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircleIcon,
  StarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "50+", label: "Successful Projects" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "$2B+", label: "Projects Facilitated" }
  ];

  const values = [
    {
      icon: ShieldCheckIcon,
      title: "Integrity",
      description: "We operate with the highest ethical standards and complete transparency in all our dealings."
    },
    {
      icon: GlobeAltIcon,
      title: "Expertise",
      description: "Deep local knowledge combined with international experience and global best practices."
    },
    {
      icon: UserGroupIcon,
      title: "Partnership",
      description: "We work as an extension of your team, fully committed to your success in the Syrian market."
    },
    {
      icon: ChartBarIcon,
      title: "Results",
      description: "Proven track record of delivering measurable outcomes for our clients across various sectors."
    }
  ];

  const teamMembers = [
    {
      name: "Ahmad Al-Rashid",
      title: "Founder & Managing Partner",
      background: "Former World Bank senior advisor with 15+ years in MENA region. Led infrastructure development projects worth over $500M. Holds MBA from Wharton and speaks 4 languages.",
      image: "https://picsum.photos/400/500?random=8",
      expertise: ["Market Analysis", "Government Relations", "Infrastructure"]
    },
    {
      name: "Sarah Mitchell",
      title: "Senior Partner",
      background: "Ex-U.S. State Department Middle East specialist with 12+ years diplomatic experience. Former economic attaché in Damascus. Expert in regulatory compliance and international law.",
      image: "https://picsum.photos/400/500?random=9",
      expertise: ["Regulatory Compliance", "International Law", "Risk Assessment"]
    },
    {
      name: "Omar Khalil",
      title: "Government Relations Director",
      background: "Former Syrian Ministry of Economy official with extensive government connections. 20+ years experience in policy development and business facilitation.",
      image: "https://picsum.photos/400/500?random=10",
      expertise: ["Government Relations", "Policy Development", "Local Partnerships"]
    },
    {
      name: "Dr. Layla Hassan",
      title: "Research Director",
      background: "PhD in Economics from Oxford. Former IMF analyst specializing in post-conflict economic reconstruction. Published researcher on Syrian market development.",
      image: "https://picsum.photos/400/500?random=14",
      expertise: ["Economic Research", "Market Analysis", "Due Diligence"]
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
              About <span className="text-gray-600">Nexus Bridge</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Your trusted partner for navigating Syria's complex business landscape. 
              We bridge the gap between international opportunities and local expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block border border-gray-900 text-gray-900 text-xs font-medium px-4 py-2 mb-8 uppercase tracking-wider">
                Our Story
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Founded on <span className="text-gray-600">Vision and Experience</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  Nexus Bridge Advisors was founded in 2010 by a team of experienced professionals 
                  who recognized the unique opportunity that Syria presented despite its challenges. 
                  Our founders combined decades of regional experience with international expertise.
                </p>
                
                <p>
                  Since our inception, we have successfully guided over 50 international companies 
                  through market entry, regulatory compliance, and business development in Syria. 
                  Our track record speaks to our deep understanding of both local dynamics and global standards.
                </p>

                <p>
                  Today, we stand as the premier advisory firm for international businesses seeking 
                  to establish operations in Syria, with a network spanning government, business, 
                  and civil society sectors.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="image-sharp aspect-[4/5]">
                <img 
                  src="https://picsum.photos/600/750?random=15" 
                  alt="Nexus Bridge Advisors office in Damascus"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Proven Track Record
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Our numbers reflect our commitment to delivering exceptional results for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-8 card-sharp"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                These core principles guide everything we do and ensure we deliver 
                the highest quality advisory services to our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    variants={itemVariants}
                    className="card-sharp p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-gray-900 text-white flex items-center justify-center border border-gray-900 mx-auto mb-6">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
                Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Our leadership combines decades of regional experience with international expertise, 
                ensuring you have the best guidance for your Syrian market entry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  className="card-sharp overflow-hidden"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="image-sharp aspect-[4/5] md:aspect-auto">
                      <img 
                        src={member.image}
                        alt={`${member.name} - ${member.title}`}
                      />
                    </div>

                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      
                      <p className="text-gray-700 font-medium mb-4">
                        {member.title}
                      </p>
                      
                      <p className="text-gray-600 leading-relaxed font-light mb-6">
                        {member.background}
                      </p>

                      <div>
                        <div className="text-sm font-medium text-gray-900 mb-2">Expertise:</div>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span key={skillIndex} className="text-xs border border-gray-300 text-gray-700 px-2 py-1">
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Let our experienced team guide you through the complexities of the Syrian market. 
              Schedule a consultation to discuss your specific needs.
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

export default About; 