import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CalendarIcon } from '@heroicons/react/24/outline';

const InsightsSection = () => {
  const insights = [
    {
      title: "Syria's Economic Recovery: Opportunities in Infrastructure",
      excerpt: "Analyzing the emerging opportunities in Syria's infrastructure sector as the country begins its reconstruction phase.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Market Analysis",
      image: "https://picsum.photos/600/400?random=11"
    },
    {
      title: "Navigating Sanctions: A Comprehensive Guide for Investors",
      excerpt: "Understanding the current sanctions landscape and how to structure compliant investments in the Syrian market.",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Compliance",
      image: "https://picsum.photos/600/400?random=12"
    },
    {
      title: "Regional Market Trends: MENA Investment Outlook 2025",
      excerpt: "Our analysis of regional investment trends and what they mean for Syria's emerging business environment.",
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
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
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
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              variants={itemVariants}
              className="card-sharp overflow-hidden group"
            >
              <div className="image-sharp aspect-[3/2]">
                <img 
                  src={insight.image}
                  alt={insight.title}
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700 border border-gray-700 px-3 py-1">
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
                
                <p className="text-gray-600 mb-4 leading-relaxed font-light">
                  {insight.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{insight.readTime}</span>
                  <div className="flex items-center text-gray-900 text-sm font-medium">
                    Read More
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="card-sharp p-12 lg:p-16 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Stay Informed
            </h3>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Subscribe to our newsletter for regular updates on Syrian market developments, 
              regulatory changes, and exclusive insights from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/insights" className="btn-primary inline-flex items-center group">
                View All Insights
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
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