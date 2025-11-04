import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBalanceScale, FaAward, FaHandshake } from 'react-icons/fa';

const About = () => {
  const qualifications = [
    {
      icon: <FaGraduationCap className="text-3xl text-gold" />,
      title: "Educational Background",
      description: "Bachelor of Arts (B.A.) and Bachelor of Laws (LL.B.) with comprehensive legal education and training."
    },
    {
      icon: <FaBalanceScale className="text-3xl text-gold" />,
      title: "Legal Expertise",
      description: "Specialized knowledge in Criminal Law, Civil Litigation, Family Law, Corporate Law, and Property Disputes."
    },
    {
      icon: <FaAward className="text-3xl text-gold" />,
      title: "Professional Recognition",
      description: "LawSpot Verified Member with proven track record of successful case outcomes and client satisfaction."
    },
    {
      icon: <FaHandshake className="text-3xl text-gold" />,
      title: "Client Relations",
      description: "Strong commitment to building lasting relationships based on trust, transparency, and effective communication."
    }
  ];

  const whyChooseMe = [
    {
      title: "Experience",
      description: "Years of practical experience handling diverse legal matters with successful outcomes."
    },
    {
      title: "Dedication",
      description: "Unwavering commitment to each case with thorough preparation and strategic approach."
    },
    {
      title: "Client-Centered Approach",
      description: "Personalized attention to understand your unique situation and provide tailored legal solutions."
    },
    {
      title: "Legal Expertise",
      description: "Deep understanding of law with continuous learning to stay updated with legal developments."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 px-4">
              About <span className="text-gold">Advocate Thaniga K</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
              A dedicated legal professional committed to providing exceptional legal services 
              with integrity, expertise, and unwavering dedication to justice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Professional Biography
              </h2>
              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Advocate Thaniga K is a distinguished legal professional with a Bachelor of Arts (B.A.) 
                  and Bachelor of Laws (LL.B.) degree, bringing comprehensive legal knowledge and 
                  practical experience to serve clients across various legal domains.
                </p>
                <p>
                  As a verified member of LawSpot, Advocate Thaniga K has established a reputation 
                  for providing reliable, ethical, and effective legal representation. With expertise 
                  spanning Criminal Law, Civil Litigation, Family Law, Corporate Law, and Property 
                  Disputes, clients receive comprehensive legal solutions tailored to their specific needs.
                </p>
                <p>
                  Based in Chengalpattu District, Advocate Thaniga K serves clients throughout the 
                  region with a commitment to justice, client success, and professional excellence. 
                  The practice is built on the foundation of trust, transparency, and delivering 
                  favorable outcomes for every client.
                </p>
              </div>
            </motion.div>

            {/* Professional Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="relative">
                <div className="w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 rounded-lg overflow-hidden shadow-2xl border-4 border-gold/30">
                  <img
                    src="/images/THANIGAphoto.jpeg"
                    alt="Advocate Thaniga K - Professional Legal Services"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gold text-black px-2 py-1 sm:px-4 sm:py-2 rounded-lg font-semibold shadow-lg">
                  <p className="text-xs sm:text-sm">B.A., LL.B.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mission Statement - Separate Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/50 p-6 sm:p-8 rounded-lg mt-12"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gold mb-6">Mission Statement</h3>
            <blockquote className="text-base sm:text-lg text-gray-300 italic mb-6 leading-relaxed">
              "To provide exceptional legal services with unwavering commitment to justice, 
              ensuring every client receives personalized attention, strategic representation, 
              and favorable outcomes. My mission is to be a trusted advocate who stands by 
              clients through their legal challenges with integrity and expertise."
            </blockquote>
            <div className="border-l-4 border-gold pl-4">
              <p className="text-gold font-semibold">Advocate Thaniga K</p>
              <p className="text-gray-400 text-sm sm:text-base">B.A., LL.B. | LawSpot Verified Member</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Professional Qualifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive education and professional credentials that ensure quality legal representation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-900 p-6 rounded-lg card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {qual.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-white mb-3">
                      {qual.title}
                    </h3>
                    <p className="text-gray-300">
                      {qual.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Why Choose <span className="text-gold">Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Four key pillars that define my approach to legal practice and client service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseMe.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-gold/10 border border-gold/20 p-6 rounded-lg card-hover h-full">
                  <h3 className="text-xl font-serif font-semibold text-gold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;