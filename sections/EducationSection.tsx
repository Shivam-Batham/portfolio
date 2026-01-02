"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Maharana Pratap Engineering College(MPEC)",
      period: "2021 - 2024",
      location: "Kanpur, India",
    },
    {
      degree: "Polytechnic Diploma in Computer Science",
      institution: "Govt. Polytechnic Unnao",
      period: "2018 - 2021",
      location: "Unnao, Uttar Pradesh",
    },
  ];

  return (
    <div
      id="education"
      className="min-h-[824px] bg-white dark:bg-[#000] transition-colors duration-300 flex items-center justify-center px-4 py-8"
    >
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="font-Cal text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Education
          </h2>
          <h3 className="font-Cal text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300">
            Academic Journey
          </h3>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              variants={itemVariants}
              className="group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors duration-300">
                  <GraduationCap className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
                </div>

                <div className="flex-1">
                  <h4 className="font-Cal text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="font-Cal text-lg text-neutral-700 dark:text-neutral-300 mb-3">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-3">
                    <span className="font-Manrope text-sm text-neutral-600 dark:text-neutral-400">
                      {edu.period}
                    </span>
                    <span className="font-Manrope text-sm text-neutral-600 dark:text-neutral-400">
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>

              {index < education.length - 1 && (
                <div className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-700 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <p className="font-Manrope text-xs text-neutral-400 dark:text-neutral-500">
            Continuous learning through online courses and professional
            development
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default EducationSection;
