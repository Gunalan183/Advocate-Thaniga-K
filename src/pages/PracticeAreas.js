import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGavel, 
  FaUsers, 
  FaHeart, 
  FaBuilding, 
  FaHome, 
  FaFileContract,
  FaShieldAlt,
  FaHandshake
} from 'react-icons/fa';

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: <FaGavel className="text-4xl text-gold" />,
      title: "Criminal Law",
      description: "Expert defense representation in criminal cases including theft, assault, fraud, and other criminal matters. Comprehensive legal support from investigation to trial.",
      services: ["Criminal Defense", "Bail Applications", "Appeals", "Investigation Support"]
    },
    {
      icon: <FaUsers className="text-4xl text-gold" />,
      title: "Civil Litigation",
      description: "Professional representation in civil disputes, contract violations, tort claims, and commercial litigation with strategic approach to achieve favorable outcomes.",
      services: ["Contract Disputes", "Tort Claims", "Commercial Litigation", "Debt Recovery"]
    },
    {
      icon: <FaHeart className="text-4xl text-gold" />,
      title: "Family Law",
      description: "Sensitive handling of family matters including divorce, child custody, maintenance, and domestic relations with compassionate and confidential approach.",
      services: ["Divorce Proceedings", "Child Custody", "Maintenance Claims", "Domestic Violence"]
    },
    {
      icon: <FaBuilding className="text-4xl text-gold" />,
      title: "Corporate Law",
      description: "Comprehensive corporate legal services including business formation, compliance, contracts, and corporate governance for businesses of all sizes.",
      services: ["Business Formation", "Corporate Compliance", "Commercial Contracts", "Mergers & Acquisitions"]
    },
    {
      icon: <FaHome className="text-4xl text-gold" />,
      title: "Property Disputes",
      description: "Expert handling of property-related legal matters including title disputes, land acquisition, property transactions, and real estate litigation.",
      services: ["Title Disputes", "Property Transactions", "Land Acquisition", "Real Estate Litigation"]
    },
    {
      icon: <FaFileContract className="text-4xl text-gold" />,
      title: "Legal Documentation",
      description: "Professional drafting and review of legal documents including contracts, agreements, wills, and other legal instruments with attention to detail.",
      services: ["Contract Drafting", "Will Preparation", "Legal Agreements", "Document Review"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-20 overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Practice <span className="text-gold">Areas</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive legal services across multiple practice areas with expertise, 
              dedication, and commitment to achieving the best outcomes for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black/50 p-6 rounded-lg card-hover group"
              >
                <div className="text-center mb-6">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">
                    {area.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {area.description}
                </p>
                
                <div className="border-t border-gold/20 pt-4">
                  <h4 className="text-gold font-semibold mb-3">Key Services:</h4>
                  <ul className="space-y-2">
                    {area.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <FaShieldAlt className="text-6xl text-black" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">
              Need Legal Assistance?
            </h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Don't navigate legal challenges alone. Get expert legal consultation 
              and representation tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-black text-gold hover:bg-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <FaHandshake />
                <span>Schedule Consultation</span>
              </a>
              <a 
                href="tel:9629200302" 
                className="border-2 border-black text-black hover:bg-black hover:text-gold font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Call: 9629200302</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Process Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Our Legal <span className="text-gold">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to ensure comprehensive legal representation and successful outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Initial case assessment and legal strategy discussion" },
              { step: "02", title: "Analysis", desc: "Thorough case analysis and evidence evaluation" },
              { step: "03", title: "Strategy", desc: "Development of comprehensive legal strategy" },
              { step: "04", title: "Execution", desc: "Professional representation and case resolution" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-gold text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-serif font-semibold text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-300">
                  {process.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;