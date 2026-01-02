"use client";
import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Twitter,
  X,
} from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    {
      name: "Github",
      icon: Github,
      href: "https://github.com/Shivam-Batham",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/shivam-batham/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/ShivamBathamm",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:shivambatham2610@gmail.com",
    },
  ];

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

  // const spotifySrc = `https://open.spotify.com/embed/track/3hB9lDLyAClYVZivMMl20N?utm_source=generator&theme=${
  //   isDark ? 0 : 1
  // }`;

  return (
    <div
      id="home"
      className="min-h-[824px] bg-white dark:bg-[#000] transition-colors duration-300 flex items-center justify-center px-4 py-8"
    >
      {/* Minimal Dark Mode Toggle */}
      {/* <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-8 right-8 z-50 bg-white dark:bg-neutral-800 rounded-full p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100 dark:border-neutral-700"
      >
        {darkMode ? (
          <Sun className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
        ) : (
          <Moon className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
        )}
      </motion.button> */}

      {/* Main Content */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto text-center"
      >
        {/* Minimal Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-Cal text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight text-neutral-900 dark:text-white"
        >
          Shivam Batham
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-Manrope text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed"
        >
          Full Stack Developer
        </motion.p>

        {/* Tech Stack - Minimal */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {[
            "TypeScript",
            "Next.js",
            "React",
            "Node.js",
            "MongoDB",
            "Postgres",
          ].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-neutral-50 shadow-[inset_1px_-1px_1px_rgba(0,0,0,0.08),inset_-1px_1px_0.5px_rgba(0,0,0,0.05),8px_24px_32px_rgba(255,255,255,0.6)] dark:shadow-[inset_1px_-1px_1px_rgba(255,255,255,0.1),inset_1px_1px_0.5px_rgba(255,255,255,0.2),8px_24px_32px_rgba(0,0,0,0.12)] dark:bg-neutral-800 px-4 py-2 rounded-lg font-Manrope text-sm text-neutral-700 dark:text-neutral-300 transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="font-Manrope text-base text-neutral-500 dark:text-neutral-400 mb-12 leading-relaxed max-w-md mx-auto"
        >
          Building interactive web experiences with focus on clean design and
          modern technologies.
        </motion.p>

        {/* Minimal CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <motion.a
            href="https://wa.me/916390590908?text=Hi%20Shivam%2C%20I%20came%20from%20your%20portfolio%20and%20would%20like%20to%20connect."
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#000] dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-lg font-Manrope text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-300"
          >
            Hire Me
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-lg font-Manrope text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300"
          >
            Contact
          </motion.a>
        </motion.div>

        {/* Minimal Status */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="font-Manrope text-xs text-neutral-500 dark:text-neutral-400">
              Available
            </span>
          </div>
        </motion.div>

        {/* Minimal Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-16"
        >
          {socialLinks.map(({ name, icon: Icon, href }, idx) => (
            <motion.a
              key={href + idx}
              href={href}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-300"
              aria-label={name}
            >
              <Icon className="h-5 w-5" />

              {/* Tooltip */}
              {name && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="bg-[#000] dark:bg-white text-white dark:text-neutral-900 px-2 py-1 rounded text-xs font-Manrope whitespace-nowrap">
                    {name}
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#000] dark:bg-white rotate-45" />
                </div>
              )}
            </motion.a>
          ))}
        </motion.div>

        {/* <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: 12 }}
          src={spotifySrc}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe> */}
        {/* Simplified Animated Line */}
        {/* <motion.div variants={itemVariants} className="relative">
          <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-600 to-transparent"></div>
          <motion.div
            className="absolute top-0 left-0 w-20 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400"
            animate={{
              x: ["0%", "500%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div> */}
      </motion.section>
    </div>
  );
};

export default HeroSection;
