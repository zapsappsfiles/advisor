import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CalendarIcon, XMarkIcon } from '@heroicons/react/24/outline';

const InsightsSection = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const insights = [
    {
      id: 1,
      title: "Syria's Economic Recovery: Opportunities in Infrastructure",
      excerpt: "Analyzing the emerging opportunities in Syria's infrastructure sector as the country begins its reconstruction phase.",
      content: `
        <h2>Introduction</h2>
        <p>As Syria enters a crucial phase of reconstruction, the infrastructure sector presents significant opportunities for investors and businesses. This analysis explores key areas of development and potential investment opportunities.</p>
        
        <h2>Key Infrastructure Sectors</h2>
        <ul>
          <li>Transportation networks and logistics hubs</li>
          <li>Power generation and distribution</li>
          <li>Water treatment and distribution systems</li>
          <li>Telecommunications infrastructure</li>
        </ul>
        
        <h2>Market Analysis</h2>
        <p>The infrastructure sector is expected to see substantial growth over the next decade, with estimated investment needs exceeding $100 billion. Key factors driving this growth include:</p>
        <ul>
          <li>Urban reconstruction projects</li>
          <li>Industrial zone development</li>
          <li>Agricultural infrastructure rehabilitation</li>
          <li>Digital infrastructure expansion</li>
        </ul>
        
        <h2>Investment Framework</h2>
        <p>Recent regulatory changes have created a more favorable environment for infrastructure investment, including:</p>
        <ul>
          <li>Public-private partnership frameworks</li>
          <li>Investment protection mechanisms</li>
          <li>Streamlined approval processes</li>
          <li>Tax incentives for infrastructure projects</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The infrastructure sector in Syria represents a significant opportunity for investors who can navigate the complex regulatory environment and manage risks effectively. Early movers in this space stand to benefit from the country's long-term reconstruction and development needs.</p>
      `,
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Market Analysis",
      image: "https://picsum.photos/600/400?random=11"
    },
    {
      id: 2,
      title: "Navigating Sanctions: A Comprehensive Guide for Investors",
      excerpt: "Understanding the current sanctions landscape and how to structure compliant investments in the Syrian market.",
      content: `
        <h2>Introduction</h2>
        <p>The complex sanctions landscape affecting Syria requires careful navigation by investors. This guide provides a comprehensive overview of current sanctions regimes and compliance frameworks.</p>
        
        <h2>Current Sanctions Overview</h2>
        <ul>
          <li>US sanctions under the Caesar Act</li>
          <li>EU restrictive measures</li>
          <li>UN Security Council resolutions</li>
          <li>Regional sanctions frameworks</li>
        </ul>
        
        <h2>Compliance Frameworks</h2>
        <p>Successful investment in Syria requires robust compliance frameworks that address:</p>
        <ul>
          <li>Due diligence requirements</li>
          <li>Transaction monitoring</li>
          <li>Documentation and reporting</li>
          <li>Risk assessment procedures</li>
        </ul>
        
        <h2>Investment Structures</h2>
        <p>Several investment structures can be used to ensure compliance:</p>
        <ul>
          <li>Joint ventures with approved partners</li>
          <li>Licensed humanitarian projects</li>
          <li>Regulated financial channels</li>
          <li>Approved trade mechanisms</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>While the sanctions landscape is complex, opportunities exist for compliant investment in Syria. Success requires careful structuring and robust compliance frameworks.</p>
      `,
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Compliance",
      image: "https://picsum.photos/600/400?random=12"
    },
    {
      id: 3,
      title: "Regional Market Trends: MENA Investment Outlook 2025",
      excerpt: "Our analysis of regional investment trends and what they mean for Syria's emerging business environment.",
      content: `
        <h2>Introduction</h2>
        <p>The MENA region is experiencing significant shifts in investment patterns, with implications for Syria's market development. This analysis examines key trends and their impact on investment opportunities.</p>
        
        <h2>Regional Investment Trends</h2>
        <ul>
          <li>Increased focus on sustainable development</li>
          <li>Digital transformation initiatives</li>
          <li>Infrastructure modernization</li>
          <li>Cross-border trade expansion</li>
        </ul>
        
        <h2>Impact on Syria</h2>
        <p>These regional trends are influencing Syria's market in several ways:</p>
        <ul>
          <li>New trade corridors</li>
          <li>Technology adoption patterns</li>
          <li>Investment flow dynamics</li>
          <li>Sector development priorities</li>
        </ul>
        
        <h2>Future Outlook</h2>
        <p>Key developments expected by 2025 include:</p>
        <ul>
          <li>Enhanced regional integration</li>
          <li>Digital economy growth</li>
          <li>Sustainable infrastructure development</li>
          <li>Increased private sector participation</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Understanding regional trends is crucial for investors in Syria, as these patterns will shape market opportunities and development trajectories in the coming years.</p>
      `,
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Regional Insights",
      image: "https://picsum.photos/600/400?random=13"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 500 }
    },
    exit: { 
      opacity: 0,
      y: 50,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="section-padding bg-white" id="insights">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Stay informed with our expert analysis on Syrian market developments, 
            regulatory changes, and investment opportunities in the region.
          </p>
        </motion.div>

        {/* Insights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20"
        >
          {insights.map((insight) => (
            <motion.div
              key={insight.id}
              variants={itemVariants}
              className="relative"
            >
              <button 
                onClick={() => setSelectedArticle(insight)}
                className="w-full text-left focus:outline-none"
              >
                <article className="card-sharp overflow-hidden group transition-transform hover:scale-[1.02] hover:shadow-lg">
                  <div className="image-sharp aspect-[3/2]">
                    <img 
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <span className="text-sm font-medium text-gray-600 border border-gray-300 px-3 py-1 rounded">
                        {insight.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        {insight.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {insight.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed font-light line-clamp-3">
                      {insight.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{insight.readTime}</span>
                      <div className="flex items-center text-gray-900 text-sm font-medium group-hover:text-blue-600">
                        Read More
                        <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </article>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Article Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"
              onClick={() => setSelectedArticle(null)}
            >
              <div className="min-h-screen px-4 py-8 flex items-center justify-center">
                <motion.div
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-white rounded-lg shadow-xl max-w-3xl w-full mx-auto"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="relative">
                    <img 
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      className="w-full h-48 sm:h-64 object-cover rounded-t-lg"
                    />
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-4 mb-6 flex-wrap">
                      <span className="text-sm font-medium text-gray-600 border border-gray-300 px-3 py-1 rounded">
                        {selectedArticle.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        {selectedArticle.date}
                      </div>
                      <span className="text-sm text-gray-500">{selectedArticle.readTime}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                      {selectedArticle.title}
                    </h2>

                    <div 
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="card-sharp p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Stay Informed
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Subscribe to our newsletter for regular updates on Syrian market developments, 
              regulatory changes, and exclusive insights from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button onClick={() => window.location.href = '#insights'} className="btn-primary inline-flex items-center justify-center group">
                View All Insights
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <Link to="/newsletter" className="btn-secondary">
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsSection; 