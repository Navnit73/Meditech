import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaVuejs, 
  FaLaravel, 
  FaNodeJs, 
  FaReact, 
  FaAws, 
  FaDatabase 
} from 'react-icons/fa';
import { 
  SiFirebase, 
  SiTailwindcss, 
  SiMysql 
} from 'react-icons/si';

const technologies = [
  {
    name: 'Vue.js',
    icon: <FaVuejs className="text-[#4FC08D]" />,
    description: 'Progressive JavaScript framework for building user interfaces',
    category: 'Frontend'
  },
  {
    name: 'Laravel',
    icon: <FaLaravel className="text-[#FF2D20]" />,
    description: 'PHP framework for web artisans with elegant syntax',
    category: 'Backend'
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="text-[#339933]" />,
    description: 'JavaScript runtime for scalable server-side applications',
    category: 'Backend'
  },
  {
    name: 'Firebase',
    icon: <SiFirebase className="text-[#FFCA28]" />,
    description: 'Google platform for mobile and web app development',
    category: 'Database'
  },
  {
    name: 'AWS',
    icon: <FaAws className="text-[#FF9900]" />,
    description: 'Amazon Web Services for cloud computing solutions',
    category: 'Cloud'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    description: 'Utility-first CSS framework for rapid UI development',
    category: 'Styling'
  },
  {
    name: 'React',
    icon: <FaReact className="text-[#61DAFB]" />,
    description: 'JavaScript library for building user interfaces',
    category: 'Frontend'
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="text-[#4479A1]" />,
    description: 'Reliable relational database management system',
    category: 'Database'
  }
];

const Technologies = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Technologies{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              We Use
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            We leverage modern, proven technologies to build robust, scalable, 
            and secure healthcare solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border border-slate-100 hover:border-teal-100"
            >
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-16 h-16 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {tech.name}
              </h3>
              
              <div className="text-xs text-teal-600 font-medium mb-3 uppercase tracking-wide">
                {tech.category}
              </div>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;