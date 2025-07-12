import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Aditi Mehta',
    role: 'Dental Surgeon',
    clinic: 'SmileCare Dental Clinic',
    image: 'https://images.pexels.com/photos/8459997/pexels-photo-8459997.jpeg',
    rating: 5,
    text: 'The team truly understood the day-to-day issues we face in small clinics. Our patient queue management has never been smoother! The EMR system they built is intuitive and saves us hours every day.',
    location: 'Mumbai, India'
  },
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Pathologist',
    clinic: 'Advanced Diagnostics Lab',
    image: 'https://images.pexels.com/photos/6234600/pexels-photo-6234600.jpeg',
    rating: 5,
    text: 'The automated report generation system has revolutionized our lab operations. What used to take hours now takes minutes. Our patients receive results faster and our staff can focus on quality control.',
    location: 'Delhi, India'
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'General Physician',
    clinic: 'HealthFirst Clinic',
    image: 'https://images.pexels.com/photos/15752232/pexels-photo-15752232.jpeg',
    rating: 5,
    text: 'As a solo practitioner, I needed something simple yet powerful. The patient portal they developed has improved communication with my patients tremendously. Highly recommended for small practices!',
    location: 'Bangalore, India'
  },
  {
    name: 'Dr. Amit Patel',
    role: 'Orthopedic Surgeon',
    clinic: 'BoneHealth Specialty Center',
    image: 'https://images.pexels.com/photos/6129648/pexels-photo-6129648.jpeg',
    rating: 5,
    text: 'The appointment scheduling system has reduced our no-shows by 60%. The WhatsApp integration for reminders is brilliant. Our patients love the convenience and we love the efficiency.',
    location: 'Pune, India'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isMobile]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Clients Say
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what healthcare professionals 
            are saying about our solutions.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4">
          <div 
            className="overflow-hidden"
            onMouseEnter={() => !isMobile && setIsAutoPlaying(false)}
            onMouseLeave={() => !isMobile && setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: isMobile ? 0 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isMobile ? 0 : -100 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center border border-slate-100"
              >
                <Quote className="text-teal-600 mx-auto mb-4 md:mb-6" size={isMobile ? 32 : 48} />
                
                <div className="flex items-center justify-center mb-4 md:mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={isMobile ? 16 : 20} />
                  ))}
                </div>

                <p className="text-base md:text-lg lg:text-xl text-slate-700 mb-6 md:mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
                  />
                  <div className="text-center sm:text-left">
                    <div className="font-bold text-slate-800 text-sm sm:text-base">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-teal-600 font-medium text-sm">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-slate-500 text-xs sm:text-sm">
                      {testimonials[currentIndex].clinic} • {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons - Hidden on mobile */}
          {!isMobile && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute left-0 sm:-left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-teal-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={isMobile ? 20 : 24} />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 sm:-right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-teal-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={isMobile ? 20 : 24} />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-teal-600' : 'bg-slate-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 bg-teal-50 rounded-full px-6 py-3 sm:px-8 sm:py-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={isMobile ? 16 : 20} />
              ))}
            </div>
            <div className="text-slate-700 text-sm sm:text-base">
              <span className="font-bold">4.9/5</span> average rating from 50+ healthcare clients
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;