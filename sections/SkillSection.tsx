"use client";
import { motion } from "framer-motion";
import { Code, Database, Palette, Cloud } from "lucide-react";

const SkillSection = () => {
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

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "Material UI",
        "Shadcn Ui",
      ],
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Vercel", "CI/CD"],
    },
    {
      icon: Palette,
      title: "Design & Tools",
      skills: ["Figma", "Git", "Postman"],
    },
  ];

  return (
    <div
      id="skills"
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
          <h2 className="font-Cal text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Skills
          </h2>
          <h3 className="font-Cal text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300">
            Technologies I Work With
          </h3>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group"
            >
              <div className="border-b border-neutral-200 dark:border-neutral-700 pb-8 last:border-b-0 last:pb-0">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-neutral-100 dark:bg-neutral-800 rounded flex items-center justify-center">
                    <category.icon className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                  </div>
                  <h4 className="font-Cal text-lg font-bold text-neutral-900 dark:text-white">
                    {category.title}
                  </h4>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 rounded font-Manrope text-sm text-neutral-600 dark:text-neutral-400 transition-colors duration-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <p className="font-Manrope text-sm text-neutral-500 dark:text-neutral-400">
            Always exploring new tools and frameworks
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default SkillSection;
