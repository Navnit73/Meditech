import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-slate-900 z-50 flex flex-col items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-6"
      >
        <Stethoscope className="text-white" size={32} />
      </motion.div>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "50%" }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full max-w-xs"
      />
      
      <p className="mt-6 text-slate-300 text-sm font-medium">
        Loading MediTech Solutions...
      </p>
    </div>
  );
};

export default Loading;