import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Stethoscope, Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
   
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact', href: '/contact' }
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'HIPAA Compliance', href: '/hipaa-compliance' },
      { name: 'Security', href: '/security' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
      { name: 'Disclaimer', href: '/disclaimer' }
    ]
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Stethoscope className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold">MediTech Solutions</span>
            </Link>
            
            <p className="text-slate-400 mb-6 leading-relaxed text-sm sm:text-base">
              Empowering healthcare practices with custom software solutions. 
              We specialize in building secure, compliant, and user-friendly 
              systems for clinics, labs, and medical professionals.
            </p>

            <div className="space-y-3">
              <div className="flex items-start sm:items-center space-x-3">
                <Mail className="text-teal-400 mt-1 sm:mt-0" size={16} />
                <span className="text-slate-300 text-sm sm:text-base">hello@meditechsolutions.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-teal-400" size={16} />
                <span className="text-slate-300 text-sm sm:text-base">+91 98765 43210</span>
              </div>
              <div className="flex items-start sm:items-center space-x-3">
                <MapPin className="text-teal-400 mt-1 sm:mt-0" size={16} />
                <span className="text-slate-300 text-sm sm:text-base">Bangalore, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="mt-6 sm:mt-0">
              <h3 className="text-white font-semibold mb-4 text-base sm:text-lg">{category}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
              © 2024 MediTech Solutions. All rights reserved.
            </div>

            <div className="flex items-center space-x-4 sm:space-x-6">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Youtube, href: '#', label: 'YouTube' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-slate-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} className="sm:w-18" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;