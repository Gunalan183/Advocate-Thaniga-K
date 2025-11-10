import React from 'react';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FaBalanceScale className="text-gold text-2xl" />
              <span className="text-xl font-serif font-bold text-gold">LawSpot</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Advocate Thaniga K - Committed to Justice and Client Success. 
              Providing expert legal representation with dedication and integrity.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/919629200302" className="text-gray-400 hover:text-gold transition-colors">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://linkedin.com/in/advocatethaniga" className="text-gray-400 hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com/advocatethaniga" className="text-gray-400 hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-gold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <Link to="/" className="text-gray-300 hover:text-gold transition-colors text-sm">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-gold transition-colors text-sm">About</Link>
              <Link to="/practice-areas" className="text-gray-300 hover:text-gold transition-colors text-sm">Practice Areas</Link>
              <Link to="/testimonials" className="text-gray-300 hover:text-gold transition-colors text-sm">Testimonials</Link>
              <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors text-sm">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-gold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaPhone className="text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">9629200302</p>
                  <p className="text-gray-300">9445888307</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gold flex-shrink-0" />
                <p className="text-gray-300">thniga07@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-gold mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  No.62, Mudhaliyarkuppam Village,<br />
                  Nainarkuppam Post, Cheyyur Taluk,<br />
                  Chengalpattu District - 603302
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center mb-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Advocate Thaniga K. All rights reserved. | 
              <span className="text-gold"> LawSpot Verified Member</span>
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-xs leading-relaxed max-w-4xl mx-auto">
              <strong>Disclaimer:</strong> The Bar Council of India does not permit solicitation of work and advertising by legal practitioners. 
              This website is for informational purposes only and does not constitute legal advice. 
              No advocate-client relationship is created by accessing this website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;