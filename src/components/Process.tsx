import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  PenTool,
  Palette,
  Code,
  TestTube,
  Rocket,
  ChevronDown,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We understand your practice, workflow, and specific requirements through detailed consultation.",
    duration: "1-2 weeks",
    color: "from-teal-500 to-teal-600",
    details: [
      "Stakeholder interviews with doctors and staff",
      "Current workflow analysis and pain point identification",
      "Technical requirements gathering",
      "Compliance and security assessment",
    ],
  },
  {
    icon: PenTool,
    title: "Wireframing",
    description:
      "Create detailed wireframes and user flow diagrams to map out the entire system architecture.",
    duration: "1 week",
    color: "from-blue-500 to-blue-600",
    details: [
      "User journey mapping for patients and staff",
      "Information architecture design",
      "Interactive wireframe prototypes",
      "Stakeholder feedback and iterations",
    ],
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Design intuitive, healthcare-focused interfaces that work for both staff and patients.",
    duration: "2 weeks",
    color: "from-purple-500 to-purple-600",
    details: [
      "Visual design system creation",
      "Responsive UI design for all devices",
      "Accessibility compliance (WCAG 2.1)",
      "Brand integration and customization",
    ],
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Build your custom solution using modern technologies with regular progress updates.",
    duration: "3-4 weeks",
    color: "from-emerald-500 to-emerald-600",
    details: [
      "Agile development with weekly demos",
      "HIPAA-compliant backend architecture",
      "Real-time features and integrations",
      "Automated testing and quality assurance",
    ],
  },
  {
    icon: TestTube,
    title: "Testing",
    description:
      "Rigorous testing including security audits, performance testing, and user acceptance testing.",
    duration: "1 week",
    color: "from-amber-500 to-amber-600",
    details: [
      "Comprehensive security penetration testing",
      "Performance and load testing",
      "User acceptance testing with real staff",
      "Cross-browser and device compatibility",
    ],
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Smooth deployment with staff training, documentation, and ongoing support setup.",
    duration: "1 week",
    color: "from-rose-500 to-rose-600",
    details: [
      "Production deployment and monitoring",
      "Staff training and onboarding sessions",
      "Complete documentation and user guides",
      "30-day post-launch support included",
    ],
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Development Process
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A proven, transparent process that ensures your healthcare software
            is delivered on time, within budget, and exceeds expectations.
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => toggleStep(index)}
              className="bg-slate-50 rounded-2xl p-6 cursor-pointer hover:bg-white hover:shadow-md transition-all duration-300 border border-slate-100"
            >
              {/* Step Number */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="text-sm text-teal-600 font-medium">
                    {step.duration}
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: activeStep === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-slate-400" size={20} />
                </motion.div>
              </div>

              {/* Icon */}

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {step.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Expandable Details */}
              <AnimatePresence>
                {activeStep === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-200 pt-4"
                  >
                    <h4 className="font-semibold text-slate-800 mb-3 text-sm">
                      What we deliver:
                    </h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: detailIndex * 0.1,
                          }}
                          className="flex items-start space-x-2 text-xs text-slate-600"
                        >
                          <CheckCircle
                            className="text-teal-500 flex-shrink-0 mt-0.5"
                            size={12}
                          />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl md:rounded-3xl p-10 md:p-12 text-white mx-0 sm:mx-6"
        >
          <div className="text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              Complete Project Timeline
            </h3>
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              6-8 Weeks
            </div>
            <p className="text-teal-100 text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-8">
              From initial consultation to final deployment, most healthcare
              software projects are completed within 6-8 weeks with ongoing
              support included.
            </p>
          </div>

          {/* Process Flow - Mobile (horizontal scroll) */}
          <div className="md:hidden mb-6">
            <div className="flex overflow-x-auto ">
              <div className="flex space-x-3">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-shrink-0 w-32 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-2 mx-auto">
                      <step.icon className="text-white" size={16} />
                    </div>
                    <div className="text-xs font-medium text-center mb-1">
                      {step.title}
                    </div>
                    <div className="text-xs text-teal-200 text-center">
                      {step.duration}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Flow - Desktop (grid) */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-2">
                  <step.icon className="text-white" size={20} />
                </div>
                <div className="text-xs font-medium text-center">
                  {step.title}
                </div>
                <div className="text-xs text-teal-200">{step.duration}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="relative bg-gradient-to-r from-teal-600 to-teal-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 shadow-sm hover:shadow-teal-200 text-center"
            >
              <span className="relative z-10">Start Your Project Today</span>
              <span className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
