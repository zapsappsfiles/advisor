import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const Careers = () => {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID"); // Replace with your Formspree ID
  const [selectedPosition, setSelectedPosition] = useState('');

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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
          <p className="text-gray-600">Thank you for your interest in joining our team. We'll review your application and get back to you soon.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
            transition={{ duration: 0.5 }}
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
                className="card-sharp p-8 hover:shadow-lg transition-shadow"
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
                  <button 
                    onClick={() => {
                      setSelectedPosition(position.title);
                      document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
                    }} 
                    className="btn-primary text-sm py-2 px-4"
                  >
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
      <section id="application-form" className="section-padding bg-gray-50">
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply Now</h2>
              <p className="text-lg text-gray-600">
                Take the first step towards joining our team.
              </p>
            </motion.div>

            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="card-sharp p-8 space-y-6"
            >
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="input-sharp w-full"
                    placeholder="John"
                  />
                  <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
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
                <label className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input-sharp w-full"
                  placeholder="john@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                  Position
                </label>
                <select 
                  name="position"
                  required
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                  className="input-sharp w-full"
                >
                  <option value="">Select a position</option>
                  {positions.map((pos, index) => (
                    <option key={index} value={pos.title}>
                      {pos.title}
                    </option>
                  ))}
                </select>
                <ValidationError prefix="Position" field="position" errors={state.errors} />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                  Resume/CV
                </label>
                <input
                  type="file"
                  name="resume"
                  required
                  accept=".pdf,.doc,.docx"
                  className="input-sharp w-full"
                />
                <ValidationError prefix="Resume" field="resume" errors={state.errors} />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider">
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  rows={4}
                  className="input-sharp w-full"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                />
                <ValidationError prefix="Cover Letter" field="coverLetter" errors={state.errors} />
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-primary w-full justify-center py-3"
                >
                  {state.submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 