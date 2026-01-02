"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:shivambatham2610@gmail.com",
      label: "Email",
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-white dark:bg-[#000] border-t border-neutral-100 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Social Links */}
          {/* <motion.div variants={itemVariants} className="mb-6">
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -1 }}
                  className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div> */}

          {/* Copyright */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col items-center gap-2 text-neutral-500 dark:text-neutral-400">
              <p className="font-Manrope text-sm">
                © {currentYear} Shivam Batham
              </p>
              <div className="flex items-center gap-1">
                <span className="font-Manrope text-xs">Built with</span>
                <Heart className="h-3 w-3 text-red-500" fill="currentColor" />
                <span className="font-Manrope text-xs">and modern tech</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
