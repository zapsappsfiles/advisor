import React from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
  const positions = [
    {
      title: "Market Research Analyst",
      location: "Damascus",
      type: "Full-time",
      description: "Join our research team to analyze market trends, conduct sector studies, and provide actionable insights for our clients.",
      requirements: [
        "3+ years experience in market research or consulting",
        "Strong analytical and quantitative skills",
        "Fluency in Arabic and English",
        "Experience in MENA region preferred"
      ]
    },
    {
      title: "Investment Associate",
      location: "Aleppo",
      type: "Full-time",
      description: "Support our investment advisory team in due diligence, financial modeling, and client relationship management.",
      requirements: [
        "5+ years in investment banking or consulting",
        "Strong financial modeling skills",
        "MBA or equivalent degree",
        "Experience in emerging markets"
      ]
    },
    {
      title: "Legal Compliance Specialist",
      location: "Remote",
      type: "Full-time",
      description: "Ensure compliance with international regulations and support our clients in navigating complex regulatory environments.",
      requirements: [
        "Law degree with focus on international business law",
        "4+ years experience in compliance",
        "Knowledge of MENA regulations",
        "Strong attention to detail"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-gray-600">Team</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Help shape the future of Syrian market advisory. We're looking for passionate 
              individuals who want to make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore current opportunities to join our growing team.
            </p>
          </motion.div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {position.location}
                      </span>
                      <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="btn-primary text-sm py-2 px-4">
                    Apply Now
                  </button>
                </div>

                <p className="text-gray-600 mb-6">{position.description}</p>

                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Requirements</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply Now</h2>
              <p className="text-lg text-gray-600">
                Take the first step towards joining our team.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 bg-white rounded-lg shadow-sm p-8"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select a position</option>
                  {positions.map((pos, index) => (
                    <option key={index} value={pos.title.toLowerCase().replace(/\s+/g, '-')}>
                      {pos.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV
                </label>
                <input
                  type="file"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                  placeholder="Tell us why you'd be a great fit"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary py-3 px-6"
              >
                Submit Application
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 