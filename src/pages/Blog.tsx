import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'How to Digitize Your Clinic in 2025: A Complete Guide',
    excerpt: 'A comprehensive guide for healthcare practices looking to transition from paper-based systems to digital solutions.',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Dr. Arjun Sharma',
    date: 'January 15, 2025',
    category: 'Digital Transformation',
    readTime: '8 min read'
  },
  {
    title: '5 Common Mistakes Clinics Make When Buying Software',
    excerpt: 'Learn about the most common pitfalls healthcare practices encounter when selecting software solutions and how to avoid them.',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Priya Patel',
    date: 'January 10, 2025',
    category: 'Software Selection',
    readTime: '6 min read'
  },
  {
    title: 'HIPAA Compliance for Small Healthcare Practices',
    excerpt: 'Understanding HIPAA requirements and implementing compliant systems in small healthcare practices.',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Amit Singh',
    date: 'January 5, 2025',
    category: 'Compliance',
    readTime: '10 min read'
  },
  {
    title: 'The Future of Telemedicine in Rural Healthcare',
    excerpt: 'Exploring how telemedicine technology is bridging the healthcare gap in rural and underserved areas.',
    image: 'https://images.pexels.com/photos/6812418/pexels-photo-6812418.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Sneha Gupta',
    date: 'December 28, 2024',
    category: 'Telemedicine',
    readTime: '7 min read'
  },
  {
    title: 'Building Patient Trust Through Digital Transparency',
    excerpt: 'How digital tools can enhance patient trust and improve communication between healthcare providers and patients.',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Rajesh Kumar',
    date: 'December 20, 2024',
    category: 'Patient Experience',
    readTime: '5 min read'
  },
  {
    title: 'ROI of Healthcare Software: What to Expect',
    excerpt: 'Understanding the return on investment when implementing healthcare software solutions in your practice.',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Kavya Reddy',
    date: 'December 15, 2024',
    category: 'Business',
    readTime: '9 min read'
  }
];

const Blog = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Healthcare{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Insights
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Stay updated with the latest trends, insights, and best practices 
              in healthcare technology and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{post.readTime}</span>
                    <button className="text-teal-600 hover:text-teal-700 font-medium flex items-center space-x-1">
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Subscribe to our newsletter for the latest healthcare technology insights 
              and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;