"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import GithubContribImage from "../components/GithubContribImage";
import nextleadimg from "@/assests/nextlead.png";
import layers from "@/assests/layers.png";
import shippedTalent from "@/assests/shippedTalent.png";

const ProjectSection = () => {
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

  const projects = [
    {
      title: "NextLead - Job Platform",
      description:
        "Built a multi-role job platform with real-time job posting, walk-in interview management, and application tracking, supported by a modern UI and automated email workflows to enhance efficiency and user experience.",
      image: nextleadimg,
      technologies: [
        "React",
        "Express",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Jwt",
        "OAuth",
        "Nodemailer",
        "Framer-Motion",
      ],
      liveUrl: "https://nextleads.vercel.app",
      githubUrl: "https://github.com/Shivam-Batham/nextLead-backend",
      featured: true,
      inProgress: true,
    },
    {
      title: "Shipped Talent",
      description:
        "Redesigned the ShippedTalent website with a modern, responsive UI, adding smooth micro-interactions, animations, and automated system-level light/dark mode switching for improved engagement and accessibility.",
      image: shippedTalent,
      technologies: ["React", "Tailwind CSS", "Lucide-React", "Framer-Motion"],
      liveUrl: "https://shippedtalent.vercel.app",
      githubUrl: "https://github.com/Shivam-Batham",
      featured: false,
    },
    {
      title: "Layers - Modern Landing Page",
      description:
        "Built a modern, responsive Next.js landing page with smooth Framer Motion animations, optimized performance and accessibility, and improved code reliability using TypeScript.",
      image: layers,
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer-Motion"],
      liveUrl: "https://interactive-landing-page-tawny.vercel.app",
      githubUrl: "https://github.com/Shivam-Batham",
      featured: false,
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-[824px] bg-white dark:bg-[#000] transition-colors duration-300 flex items-center justify-center px-4 py-8"
    >
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="font-Cal text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Projects
          </h2>
          <h3 className="font-Cal text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300">
            Recent Work & Case Studies
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group"
            >
              <div className="">
                <div className="relative ">
                  <div className="rounded-2xl overflow-hidden w-full h-auto md:h-86 lg:h-72 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-600 flex items-center justify-center">
                    <img
                      src={project.image.src}
                      alt={project.title}
                      className="object-cover"
                    />
                  </div>

                  <div className="rounded-2xl absolute inset-0 bg-black/50 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white dark:bg-neutral-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <ExternalLink className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white dark:bg-neutral-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Github className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {/* {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-Manrope font-medium shadow-lg">
                        Featured
                      </span>
                    </div>
                  )} */}
                  {project.inProgress && (
                    <div className="absolute top-4 left-4">
                      <span className="border border-blue-300 text-blue-300 px-3 py-1 rounded-full text-xs font-Manrope font-medium shadow-lg">
                        In Progress
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title and Links */}
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-Cal text-xl font-bold text-neutral-900 dark:text-white group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-300 ml-2"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </motion.a>
                  </div>

                  {/* Description */}
                  <p className="font-Manrope text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white dark:bg-neutral-700 shadow-sm border border-neutral-200 dark:border-neutral-600 px-3 py-1 rounded-lg font-Manrope text-xs text-neutral-600 dark:text-neutral-300 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  {/* <div className="flex gap-3 mt-6">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-[#000] dark:bg-white text-white dark:text-neutral-900 px-4 py-2 rounded-lg font-Manrope text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-300 text-center"
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 px-4 py-2 rounded-lg font-Manrope text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300 text-center flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </motion.a>
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        {/* <motion.div variants={itemVariants} className="text-center mt-12">
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 border-2 border-dashed shadow-inner border-neutral-300 dark:border-neutral-400 text-neutral-700 dark:text-neutral-300 px-6 py-3 rounded-lg font-Manrope text-sm font-medium hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-[#000] transition-all duration-300"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </motion.div> */}

        {/* Bottom spacing */}
        {/* <motion.div variants={itemVariants} className="mt-16 text-center">
          <p className="font-Manrope text-sm text-neutral-500 dark:text-neutral-400">
            More projects coming soon...
          </p>
        </motion.div> */}
        {/* <GithubContribImage></GithubContribImage> */}
      </motion.section>
    </div>
  );
};

export default ProjectSection;

// {/* <div className="  bg-white dark:bg-[#000] transition-colors duration-300 flex items-center justify-center px-4 py-8">
//       <motion.section
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="max-w-4xl mx-auto w-full"
//       >
//         {/* Section Header */}
//         <motion.div variants={itemVariants} className="text-center mb-16">
//           <h2 className="font-Cal text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
//             Projects
//           </h2>
//           <h3 className="font-Cal text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300">
//             Selected Work
//           </h3>
//         </motion.div>

//         {/* Projects List */}
//         <div className="space-y-12">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               variants={itemVariants}
//               className="group"
//             >
//               <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

//                 {/* Content */}
//                 <div className="flex-1">
//                   <div className="flex items-start justify-between mb-3">
//                     <h4 className="font-Cal text-xl font-bold text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-300">
//                       {project.title}
//                     </h4>
//                     <div className="flex gap-2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <motion.a
//                         href={project.liveUrl}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-300"
//                       >
//                         <ExternalLink className="h-4 w-4" />
//                       </motion.a>
//                       <motion.a
//                         href={project.githubUrl}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-300"
//                       >
//                         <Github className="h-4 w-4" />
//                       </motion.a>
//                     </div>
//                   </div>

//                   <p className="font-Manrope text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
//                     {project.description}
//                   </p>

//                   {/* Technologies */}
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="font-Manrope text-xs text-neutral-500 dark:text-neutral-500"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Minimal Action Links */}
//                 <div className="flex lg:flex-col gap-3 lg:min-w-[100px]">
//                   <motion.a
//                     href={project.liveUrl}
//                     whileHover={{ scale: 1.02 }}
//                     className="font-Manrope text-sm text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-300 underline underline-offset-4"
//                   >
//                     Live
//                   </motion.a>
//                   <motion.a
//                     href={project.githubUrl}
//                     whileHover={{ scale: 1.02 }}
//                     className="font-Manrope text-sm text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-300 underline underline-offset-4"
//                   >
//                     Code
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View More - Minimal */}
//         <motion.div variants={itemVariants} className="text-center mt-16">
//           <motion.a
//             href="#"
//             whileHover={{ scale: 1.02 }}
//             className="font-Manrope text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors duration-300 underline underline-offset-4"
//           >
//             View all projects
//           </motion.a>
//         </motion.div>
//       </motion.section>
//     </div> */}
