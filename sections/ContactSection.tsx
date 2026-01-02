"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Calendar } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch(
      "https://portfolio-2-0-1-oecb.onrender.com/api/contact",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      },
    );

    const data = await res.json();

    if (data.success) {
      alert("Message sent!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert(data.error || "Something went wrong.");
    }
  };

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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shivambatham2610@gmail.com",
      href: "mailto:shivambatham2610@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6390590908",
      href: "tel:+917309940974",
    },
    // {
    //   icon: Calendar,
    //   label: "Calendly",
    //   value: "Schedule a call",
    //   href: "https://calendly.com"
    // }
  ];

  return (
    <div
      id="contact"
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
            Get In Touch
          </h2>
          <h3 className="font-Cal text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300">
            Let's work together
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h4 className="font-Cal text-lg font-bold text-neutral-900 dark:text-white mb-6">
                Contact Information
              </h4>
              <p className="font-Manrope text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative
                projects, or potential collaborations. Feel free to reach out
                through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors duration-300">
                    <item.icon className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                  </div>
                  <div>
                    <p className="font-Manrope text-sm text-neutral-500 dark:text-neutral-400">
                      {item.label}
                    </p>
                    {item.href ? (
                      <motion.a
                        href={item.href}
                        whileHover={{ scale: 1.02 }}
                        className="font-Manrope text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-300"
                      >
                        {item.value}
                      </motion.a>
                    ) : (
                      <p className="font-Manrope text-neutral-900 dark:text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-neutral-200 dark:border-neutral-700"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <div>
                  <p className="font-Manrope text-sm text-neutral-900 dark:text-white">
                    Currently available for freelance work
                  </p>
                  <p className="font-Manrope text-xs text-neutral-500 dark:text-neutral-400">
                    Response time: within 6 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="font-Manrope text-sm text-neutral-700 dark:text-neutral-300 mb-2 block"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg font-Manrope text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-Manrope text-sm text-neutral-700 dark:text-neutral-300 mb-2 block"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg font-Manrope text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="font-Manrope text-sm text-neutral-700 dark:text-neutral-300 mb-2 block"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg font-Manrope text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-Manrope text-sm text-neutral-700 dark:text-neutral-300 mb-2 block"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg font-Manrope text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#000] dark:bg-white text-white dark:text-neutral-900 px-6 py-3 rounded-lg font-Manrope font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <p className="font-Manrope text-sm text-neutral-500 dark:text-neutral-400">
            I'll get back to you as soon as possible
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ContactSection;
