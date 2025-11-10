import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Create email content
    const emailSubject = `Legal Consultation Request - ${formData.subject}`;
    const emailBody = `Dear Advocate Thaniga UK,

You have received a new message through your website contact form:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

Please respond to this inquiry at your earliest convenience.
You can reply directly to: ${formData.email}

Best regards,
LawSpot Website Contact Form`;

    // Encode the email content for URL
    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);
    
    // Create mailto link
    const mailtoLink = `mailto:thniga07@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Open email client
      window.open(mailtoLink, '_blank');
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status message after 8 seconds
      setTimeout(() => setSubmitStatus(''), 8000);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-gold" />,
      title: "Phone Numbers",
      details: ["9629200302", "9445888307"],
      action: "tel:9629200302"
    },
    {
      icon: <FaEnvelope className="text-2xl text-gold" />,
      title: "Email Address",
      details: ["thniga07@gmail.com"],
      action: "mailto:thniga07@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-gold" />,
      title: "Office Address",
      details: [
        "No.62, Mudhaliyarkuppam Village,",
        "Nainarkuppam Post, Cheyyur Taluk,",
        "Chengalpattu District - 603302"
      ],
      action: "https://www.google.com/maps?q=12.318868,80.0278663"
    },
    {
      icon: <FaClock className="text-2xl text-gold" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: By Appointment"
      ],
      action: null
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 sm:mb-6 px-4">
              Contact <span className="text-gold">Us</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
              Get in touch for professional legal consultation and representation. 
              We're here to help you navigate your legal challenges with expertise and dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 sm:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-black/50 p-4 sm:p-6 rounded-lg card-hover text-center"
              >
                <div className="mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-white mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <a
                    href={info.action}
                    className="inline-block mt-4 text-gold hover:text-darkGold font-medium transition-colors duration-300 text-sm sm:text-base"
                  >
                    {info.title === "Phone Numbers" ? "Call Now" : 
                     info.title === "Email Address" ? "Send Email" : "View on Map"}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-12 sm:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Send Us a <span className="text-gold">Message</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible 
                to discuss your legal needs.
              </p>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-600/20 border border-green-600 text-green-400 p-4 rounded-lg mb-6 flex items-center space-x-3"
                >
                  <FaCheckCircle className="text-xl flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email Client Opened Successfully!</p>
                    <p className="text-sm">Your email application has opened with your message pre-filled and addressed to thniga07@gmail.com. Please send the email to complete your inquiry.</p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-600/20 border border-red-600 text-red-400 p-4 rounded-lg mb-6"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <FaExclamationTriangle className="text-xl flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Unable to Open Email Client</p>
                      <p className="text-sm">Please copy the message below and send it manually to thniga07@gmail.com</p>
                    </div>
                  </div>
                  <div className="bg-black/30 p-4 rounded border text-sm">
                    <p><strong>To:</strong> thniga07@gmail.com</p>
                    <p><strong>Subject:</strong> Legal Consultation Request - {formData.subject}</p>
                    <div className="mt-2">
                      <strong>Message:</strong>
                      <div className="mt-1 whitespace-pre-line">
                        {`Dear Advocate Thaniga UK,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

Please respond at your earliest convenience.`}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <a
                      href="mailto:thniga07@gmail.com"
                      className="bg-gold text-black px-4 py-2 rounded font-medium hover:bg-darkGold transition-colors text-center"
                    >
                      Try Email Again
                    </a>
                    <a
                      href="tel:9629200302"
                      className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors text-center"
                    >
                      Call Instead: 9629200302
                    </a>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2 text-sm sm:text-base">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-900 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2 text-sm sm:text-base">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-900 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gold/20 rounded-lg text-white focus:outline-none focus:border-gold"
                    >
                      <option value="">Select a subject</option>
                      <option value="Criminal Law">Criminal Law</option>
                      <option value="Civil Litigation">Civil Litigation</option>
                      <option value="Family Law">Family Law</option>
                      <option value="Corporate Law">Corporate Law</option>
                      <option value="Property Disputes">Property Disputes</option>
                      <option value="Legal Documentation">Legal Documentation</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-900 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold resize-vertical"
                    placeholder="Describe your legal matter or question..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-darkGold text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Professional Photo and Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            >
              {/* Professional Photo */}
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4">
                  Meet Your Advocate
                </h3>
                <div className="bg-gray-900 p-4 sm:p-6 rounded-lg text-center">
                  <div className="w-40 h-48 sm:w-48 sm:h-56 mx-auto rounded-lg overflow-hidden shadow-lg border-2 border-gold/30 mb-4">
                    <img
                      src="/images/THANIGAphoto.jpeg"
                      alt="Advocate Thaniga UK - Contact Legal Consultation Chengalpattu"
                      title="Advocate Thaniga UK - Professional Legal Consultation"
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-white mb-2">
                    Advocate Thaniga UK
                  </h4>
                  <p className="text-gold mb-2 text-sm sm:text-base">BA.LLB,</p>
                  <p className="text-gray-300 text-xs sm:text-sm">LawSpot Verified Member</p>
                </div>
              </div>
              {/* Google Maps Embed */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  Office Location
                </h3>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3897.954215806495!2d80.0278663750655!3d12.318868587939708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDE5JzA3LjkiTiA4MMKwMDEnNDkuNiJF!5e0!3m2!1sen!2sin!4v1762748006236!5m2!1sen!2sin" 
                      width="100%" 
                      height="300" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location Map"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919629200302"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <FaWhatsapp />
                    <span>WhatsApp Consultation</span>
                  </a>
                  <a
                    href="tel:9629200302"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <FaPhone />
                    <span>Call Now: 9629200302</span>
                  </a>
                  <a
                    href="mailto:thniga07@gmail.com"
                    className="w-full bg-gold hover:bg-darkGold text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <FaEnvelope />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-900/20 border border-red-600/30 p-6 rounded-lg">
                <h4 className="text-xl font-serif font-bold text-red-400 mb-3">
                  Emergency Legal Assistance
                </h4>
                <p className="text-gray-300 mb-4">
                  For urgent legal matters requiring immediate attention, 
                  please call our emergency contact number.
                </p>
                <a
                  href="tel:9445888307"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <FaPhone />
                  <span>Emergency: 9445888307</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
