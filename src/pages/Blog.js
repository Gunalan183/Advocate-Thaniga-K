import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaArrowRight, FaSearch, FaTags } from 'react-icons/fa';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Your Rights in Criminal Cases",
      summary: "A comprehensive guide to understanding your fundamental rights when facing criminal charges and how to protect yourself during legal proceedings.",
      content: "When facing criminal charges, it's crucial to understand your constitutional rights...",
      author: "Advocate Thaniga K",
      date: "2024-01-15",
      category: "Criminal Law",
      readTime: "5 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Property Disputes: Prevention and Resolution",
      summary: "Learn about common property disputes, how to prevent them, and effective legal strategies for resolution when conflicts arise.",
      content: "Property disputes are among the most common legal issues in India...",
      author: "Advocate Thaniga K",
      date: "2024-01-10",
      category: "Property Law",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Family Law: Navigating Divorce Proceedings",
      summary: "Essential information about divorce proceedings, including legal requirements, documentation, and protecting your interests during the process.",
      content: "Divorce proceedings can be emotionally and legally complex...",
      author: "Advocate Thaniga K",
      date: "2024-01-05",
      category: "Family Law",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Corporate Compliance: Key Legal Requirements",
      summary: "Understanding essential corporate compliance requirements for businesses and how to ensure your company meets all legal obligations.",
      content: "Corporate compliance is crucial for business success and legal protection...",
      author: "Advocate Thaniga K",
      date: "2023-12-28",
      category: "Corporate Law",
      readTime: "8 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Recent Amendments in Indian Legal System",
      summary: "Stay updated with the latest amendments and changes in Indian laws that may affect your legal rights and obligations.",
      content: "The Indian legal system continues to evolve with new amendments...",
      author: "Advocate Thaniga K",
      date: "2023-12-20",
      category: "Legal Updates",
      readTime: "4 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Civil Litigation: When to Consider Legal Action",
      summary: "Understanding when civil litigation is the right choice and what to expect during the legal process for civil disputes.",
      content: "Civil litigation can be an effective way to resolve disputes...",
      author: "Advocate Thaniga K",
      date: "2023-12-15",
      category: "Civil Law",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ['All', 'Criminal Law', 'Property Law', 'Family Law', 'Corporate Law', 'Legal Updates', 'Civil Law'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Legal <span className="text-gold">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest legal updates, insights, and expert analysis 
              on various areas of law from Advocate Thaniga K.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/50 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gold text-black'
                      : 'bg-black/50 text-gray-300 hover:bg-gold/20 hover:text-gold'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-300">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-900 rounded-lg overflow-hidden card-hover group"
                >
                  {/* Article Image */}
                  <div className="h-48 bg-gradient-to-br from-gold/20 to-bronze/20 flex items-center justify-center">
                    <FaTags className="text-4xl text-gold/50" />
                  </div>

                  <div className="p-6">
                    {/* Category and Date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <FaCalendar className="mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.summary}
                    </p>

                    {/* Author and Read Time */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-400 text-sm">
                        <FaUser className="mr-2" />
                        {post.author}
                      </div>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>

                    {/* Read More Button */}
                    <button className="flex items-center text-gold hover:text-darkGold font-medium transition-colors duration-300 group">
                      Read More
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">
              Stay Updated with Legal Insights
            </h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Subscribe to receive the latest legal updates, case studies, and expert insights 
              directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-black/20 focus:outline-none focus:border-black"
              />
              <button className="bg-black text-gold hover:bg-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              <strong>Legal Disclaimer:</strong> The information provided in these articles is for general 
              informational purposes only and does not constitute legal advice. For specific legal matters, 
              please consult with a qualified attorney.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;