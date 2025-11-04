import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaGavel, FaShieldAlt, FaUsers, FaWhatsapp, FaPhone } from 'react-icons/fa';
import SEO from '../components/SEO';

const Home = () => {
  const features = [
    {
      icon: <FaBalanceScale className="text-4xl text-gold" />,
      title: "Expert Legal Representation",
      description: "Comprehensive legal services with years of experience in various practice areas."
    },
    {
      icon: <FaGavel className="text-4xl text-gold" />,
      title: "Proven Track Record",
      description: "Successfully handled numerous cases with favorable outcomes for clients."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-gold" />,
      title: "Client Protection",
      description: "Dedicated to protecting your rights and interests with unwavering commitment."
    },
    {
      icon: <FaUsers className="text-4xl text-gold" />,
      title: "Client-Centered Approach",
      description: "Personalized legal solutions tailored to meet your specific needs and circumstances."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Advocate Thaniga K - Professional Legal Services | Criminal Law, Civil Litigation, Family Law"
        description="Expert legal representation by Advocate Thaniga K. Specializing in Criminal Law, Civil Litigation, Family Law. LawSpot verified member. Book consultation today."
        keywords="advocate thaniga k, lawyer chengalpattu, criminal law attorney, civil litigation lawyer, family law advocate, legal services tamil nadu, court representation, legal consultation"
        url="/"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-hexagon-pattern pt-16 lg:pt-0">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)] lg:min-h-screen">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 md:mb-6 leading-tight">
                <span className="text-white">Advocate </span>
                <span className="text-gradient block sm:inline">Thaniga K</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 md:mb-4">
                B.A., LL.B. | LawSpot Verified Member
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-serif text-gold mb-6 md:mb-8 px-4 lg:px-0">
                "Committed to Justice and Client Success"
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-8 md:mb-12 px-4 lg:px-0 leading-relaxed">
                Professional legal services with expertise in Criminal Law, Civil Litigation, 
                Family Law, and Corporate Legal matters. Your trusted advocate for justice.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 lg:px-0">
                <Link to="/contact" className="btn-primary text-center">
                  Book Consultation
                </Link>
                <a href="tel:9629200302" className="btn-secondary flex items-center space-x-2 justify-center">
                  <FaPhone />
                  <span className="hidden sm:inline">Contact Now</span>
                  <span className="sm:hidden">Call</span>
                </a>
                <a 
                  href="https://wa.me/919629200302" 
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 flex items-center space-x-2 justify-center"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Professional Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="relative">
                <div className="w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/50">
                  <img
                    src="/images/THANIGAphoto.jpeg"
                    alt="Advocate Thaniga K - Professional Legal Services"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gold text-black px-2 py-1 sm:px-4 sm:py-2 rounded-full font-bold shadow-lg">
                  <p className="text-xs sm:text-sm">LawSpot Verified</p>
                </div>
                {/* Decorative Elements - Hidden on small screens */}
                <div className="hidden sm:block absolute -bottom-6 -left-6 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
                <div className="hidden sm:block absolute -top-6 -left-4 w-16 h-16 bg-bronze/30 rounded-full blur-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 px-4">
              Why Choose <span className="text-gold">Advocate Thaniga K</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Experience the difference of working with a dedicated legal professional 
              who puts your interests first.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-black/50 p-4 sm:p-6 rounded-lg card-hover text-center"
              >
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">
              Need Legal Assistance?
            </h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Get professional legal consultation and representation. 
              Contact us today to discuss your case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-black text-gold hover:bg-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <a 
                href="tel:9629200302" 
                className="border-2 border-black text-black hover:bg-black hover:text-gold font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Call Now: 9629200302
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;