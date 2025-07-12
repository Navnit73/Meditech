import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Shield, Clock, Activity, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 bg-gradient-to-b from-teal-50 to-white">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-teal-100/40 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-blue-100/40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium"
          >
            <Activity className="mr-2" size={16} />
            Transforming Healthcare Technology
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight"
          >
            Elevate Your Clinic with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Tailored Digital Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-slate-600 leading-relaxed max-w-2xl"
          >
            We design and develop custom medical software and websites that streamline operations, enhance patient care, and grow your practice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              to="/contact"
              className="relative overflow-hidden group bg-gradient-to-r from-teal-600 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 shadow-md hover:shadow-teal-200 text-center"
            >
              <span className="relative z-10">Schedule Free Consultation</span>
              <span className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <Link
              to="/portfolio"
              className="relative overflow-hidden group border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-50 transition-all duration-300 text-center"
            >
              <span className="relative z-10">View Our Work</span>
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8"
          >
            {[
              { icon: <CheckCircle className="text-teal-600" size={20} />, text: "HIPAA Compliant" },
              { icon: <Clock className="text-teal-600" size={20} />, text: "Fast Implementation" },
              { icon: <Shield className="text-teal-600" size={20} />, text: "Secure Systems" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                {feature.icon}
                <span className="text-sm font-medium text-slate-700">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-8 shadow-2xl overflow-hidden hidden sm:block">
            {/* Floating elements in the card */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5"></div>
            
            <div className="relative bg-white rounded-2xl p-6 mb-6 shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                <div className="h-4 bg-teal-200 rounded w-2/3"></div>
                <div className="h-4 bg-slate-200 rounded w-5/6 mt-4"></div>
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
              </div>
              
              {/* Progress bar */}
              <div className="mt-6 bg-slate-100 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center transition-transform hover:scale-105">
                <div className="bg-white/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Calendar className="text-white" size={20} />
                </div>
                <div className="text-white text-sm font-medium">
                  Appointment Scheduling
                </div>
                <div className="text-white/80 text-xs mt-1">Real-time availability</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center transition-transform hover:scale-105">
                <div className="bg-white/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-white" size={20} />
                </div>
                <div className="text-white text-sm font-medium">
                  Secure Patient Portal
                </div>
                <div className="text-white/80 text-xs mt-1">HIPAA compliant</div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-slate-100 hidden sm:block"
          >
            <div className="flex items-center space-x-2 ">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">
                System Online
              </span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-slate-100 w-40 hidden sm:block"
          >
            <div className="text-xs text-slate-500 mb-1">Active Users</div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-teal-600">1,240+</span>
              <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">+12%</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;