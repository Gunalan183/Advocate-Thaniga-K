import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      case: "Property Dispute Resolution",
      rating: 5,
      text: "Advocate Thaniga K provided exceptional legal representation in my property dispute case. His thorough understanding of property law and strategic approach helped me achieve a favorable outcome. Highly professional and dedicated to client success.",
      location: "Chennai"
    },
    {
      name: "Priya Sharma",
      case: "Family Law Matter",
      rating: 5,
      text: "During a difficult divorce proceeding, Advocate Thaniga K handled my case with utmost sensitivity and professionalism. His expertise in family law and compassionate approach made the process much easier. I'm grateful for his excellent service.",
      location: "Chengalpattu"
    },
    {
      name: "Suresh Patel",
      case: "Criminal Defense",
      rating: 5,
      text: "I was facing serious criminal charges and was extremely worried. Advocate Thaniga K took my case and provided excellent defense representation. His knowledge of criminal law and dedication to my case resulted in a successful outcome.",
      location: "Kanchipuram"
    },
    {
      name: "Meera Reddy",
      case: "Corporate Legal Services",
      rating: 5,
      text: "As a business owner, I needed reliable legal counsel for various corporate matters. Advocate Thaniga K has been instrumental in helping my business navigate legal complexities. His expertise and prompt service are commendable.",
      location: "Tambaram"
    },
    {
      name: "Arun Krishnan",
      case: "Civil Litigation",
      rating: 5,
      text: "Advocate Thaniga K represented me in a complex civil litigation matter. His strategic thinking, attention to detail, and persistent efforts led to a successful resolution. I would definitely recommend his services to others.",
      location: "Mahabalipuram"
    },
    {
      name: "Lakshmi Iyer",
      case: "Legal Documentation",
      rating: 5,
      text: "I needed help with various legal documents for my property transactions. Advocate Thaniga K provided comprehensive legal documentation services with great attention to detail. His professionalism and expertise are outstanding.",
      location: "Cheyyur"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Client <span className="text-gold">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience working with 
              Advocate Thaniga K and the successful outcomes achieved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-black/50 p-8 md:p-12 rounded-lg">
              <div className="text-center mb-8">
                <FaQuoteLeft className="text-4xl text-gold mx-auto mb-6" />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} className="text-gold text-xl mx-1" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-300 text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="text-center">
                <h3 className="text-xl font-serif font-semibold text-white mb-2">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gold mb-1">{testimonials[currentTestimonial].case}</p>
                <p className="text-gray-400">{testimonials[currentTestimonial].location}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-gold text-black p-3 rounded-full hover:bg-darkGold transition-colors duration-300"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-gold text-black p-3 rounded-full hover:bg-darkGold transition-colors duration-300"
            >
              <FaChevronRight />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-gold' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              What Our <span className="text-gold">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Success stories and feedback from clients across various practice areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg card-hover"
              >
                <div className="flex justify-between items-start mb-4">
                  <FaQuoteLeft className="text-2xl text-gold" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-gold text-sm" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gold/20 pt-4">
                  <h4 className="font-serif font-semibold text-white mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-gold text-sm mb-1">{testimonial.case}</p>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">
              Ready to Share Your Success Story?
            </h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Join our satisfied clients and experience professional legal representation 
              that delivers results. Contact us today for your legal consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-black text-gold hover:bg-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get Legal Consultation
              </a>
              <a 
                href="tel:9629200302" 
                className="border-2 border-black text-black hover:bg-black hover:text-gold font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Call: 9629200302
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;