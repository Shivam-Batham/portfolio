"use client";
import { motion } from "framer-motion";

const ExperienceSection = () => {
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

  const experiences = [
    {
      company: "Shashwat Technologies",
      role: "Full-stack Development",
      period: "sep, 2025 – dec, 2025",
      location: "Surat, Gujarat, India - Remote",
      description: [
        "Developed a modern luxury accommodation and property management platform focused on simplifying booking and stay management experiences.",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Redux",
        "Context API",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Axios",
      ],
    },
    {
      company: "Cigi Technologies",
      role: "Full-stack Development",
      period: "Feb, 2025 – Jun, 2025",
      location: "Bengaluru, Karnataka, India - Remote",
      description: [
        "Developed custom software, web applications tailored to client-specific workflows.",
        "Collaborated with global teams to deliver agile, value-driven solutions across multiple industries.",
      ],
      technologies: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Redux",
        "Context API",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Axios",
      ],
    },
    {
      company: "Valetx",
      role: "Software Intern",
      period: "July, 2024 – feb, 2025",
      location: "India",
      description: [
        "Designed and developed ValetX, a smart valet parking solution focused on enhancing customer experience and operational efficiency.",
        "Implemented a seamless 1-second check-in and check-out system using QR-based vehicle tagging for hassle-free valet operations.",
        "Automated valet operations with minimal inputs, enabling smooth coordination between valet staff and management with reduced training overhead.",
        "Enabled 360-degree vehicle condition recording to ensure transparency, accountability, and customer trust.",
        "Optimized system architecture to reduce staff dependency by up to 50% while improving overall service efficiency and customer satisfaction.",
      ],
      technologies: [
        "React.js",
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Context API",
      ],
    },
  ];

  return (
    <div
      id="experience"
      className="min-h-[824px] bg-white dark:bg-[#000] transition-colors duration-300 flex items-center justify-center px-4 py-8"
    >
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto w-full"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h3 className="font-Cal text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300">
            Featured
          </h3>
          <h2 className="font-Cal text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Experience
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className="relative"
            >
              {/* Experience Card */}
              <div className="">
                {/* Company and Role */}
                <div className="mb-6">
                  <div className="flex flex-row items-center justify-between gap-2 ">
                    <h4 className="font-Cal text-xl font-bold text-neutral-900 dark:text-white">
                      {exp.company}
                    </h4>
                    {exp.period && (
                      <span className="font-Manrope w-max text-[10px] sm:text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    )}
                  </div>
                  <p className="font-Manrope text-lg text-neutral-700 dark:text-neutral-300 ">
                    {exp.role}
                  </p>
                  {exp.location && (
                    <p className="font-Manrope text-sm text-neutral-500 dark:text-neutral-400">
                      {exp.location}
                    </p>
                  )}
                </div>

                {/* Technologies & Tools */}
                {exp.technologies.length > 0 && (
                  <div className="mb-6">
                    <h5 className="font-Cal text-lg font-bold text-neutral-900 dark:text-white mb-4">
                      Technologies & Tools
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp?.technologies.map((tool) => (
                        <span
                          key={tool}
                          className="bg-white dark:bg-neutral-700 shadow-[inset_1px_-1px_1px_rgba(0,0,0,0.08),inset_-1px_1px_0.5px_rgba(0,0,0,0.05),8px_24px_32px_rgba(255,255,255,0.6)] dark:shadow-[inset_1px_-1px_1px_rgba(255,255,255,0.1),inset_1px_1px_0.5px_rgba(255,255,255,0.2),8px_24px_32px_rgba(0,0,0,0.12)] px-3 py-1 rounded-lg font-Manrope text-xs text-neutral-600 dark:text-neutral-300 transition-all duration-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                {exp.description.length > 0 && (
                  <div className="space-y-3">
                    {exp.description.map((desc, descIndex) => (
                      <p
                        key={descIndex}
                        className="font-Manrope text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                )}

                {/* Divider */}
                {index < experiences.length - 1 && (
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-neutral-300 dark:from-neutral-600 to-transparent"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <p className="font-Manrope text-sm text-neutral-500 dark:text-neutral-400">
            Continuously building and learning new Tech
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ExperienceSection;
