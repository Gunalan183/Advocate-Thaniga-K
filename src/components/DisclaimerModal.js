import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExclamationTriangle, FaTimes, FaCheck } from 'react-icons/fa';

const DisclaimerModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if disclaimer has been shown in this browser session
    const disclaimerShown = sessionStorage.getItem('disclaimerShown');
    
    if (!disclaimerShown) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Mark disclaimer as shown for this session
    sessionStorage.setItem('disclaimerShown', 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
    // Mark disclaimer as shown for this session
    sessionStorage.setItem('disclaimerShown', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gray-900 border border-gold/30 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gold/20">
                <div className="flex items-center space-x-3">
                  <FaExclamationTriangle className="text-2xl text-gold" />
                  <h2 className="text-2xl font-serif font-bold text-white">
                    Important Disclaimer
                  </h2>
                </div>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div className="bg-gold/10 border border-gold/20 rounded-lg p-4">
                  <p className="text-gold font-semibold mb-2">
                    Bar Council of India Compliance Notice
                  </p>
                  <p className="text-gray-300 text-sm">
                    The Bar Council of India does not permit the solicitation of work and 
                    advertising by legal practitioners/advocates.
                  </p>
                </div>

                <div className="space-y-4 text-gray-300">
                  <p className="font-medium text-white">
                    By accessing our website, the user acknowledges that:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">
                        The user wishes to gain more information about us for his/her information 
                        and use. He/she also acknowledges that there has been no attempt by us to 
                        advertise or solicit work.
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">
                        Any information obtained or downloaded by the user from our website does 
                        not lead to the creation of the Advocate–Client relationship between our 
                        Law Firm and the user.
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">
                        None of the information contained in our website amounts to any form of 
                        legal opinion or legal advice.
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">
                        Our website uses cookies to improve your user experience. By using our 
                        site, you agree to our use of cookies. To find out more, please see our 
                        Cookies Policy & Privacy Policy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4">
                  <p className="text-red-400 font-medium text-sm">
                    <strong>Important:</strong> This website is for informational purposes only. 
                    For specific legal advice, please consult with a qualified attorney.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gold/20">
                <button
                  onClick={handleAccept}
                  className="flex-1 bg-gold hover:bg-darkGold text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FaCheck />
                  <span>I Understand & Accept</span>
                </button>
                <button
                  onClick={handleClose}
                  className="flex-1 border-2 border-gold/30 text-gray-300 hover:bg-gold/10 hover:text-gold font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerModal;