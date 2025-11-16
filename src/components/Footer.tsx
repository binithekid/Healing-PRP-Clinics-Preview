"use client";

import { motion } from "framer-motion";
import { Flower } from "lucide-react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const contactMethods = [
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+44 7990 364147",
      href: "https://wa.me/447990364147",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "info@healing-prp.co.uk",
      href: "mailto:info@healing-prp.co.uk",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      value: "@healing_prp",
      href: "https://www.instagram.com/Healing_Prp",
    },
  ];

  const treatments = [
    { name: "Sexual Rejuvenation", href: "/sexual-rejuvenation" },
    { name: "Joint Injections", href: "/joint-injections" },
    { name: "Facial Aesthetics", href: "/facial-aesthetics" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="flex items-center mb-4 gap-2">
                <Flower className="w-5 h-5 text-blue-400" />
                <h3 className="font-raleway text-lg font-medium">
                  Healing-PRP Clinics
                </h3>
              </div>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Evidence‑based treatments using your own Platelet‑Rich Plasma
                (PRP) and adjunct therapies in a discreet, professional setting
                in St Albans.
              </p>
              {/* Contact Methods */}
              <div className="space-y-3">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300"
                  >
                    <method.icon className="w-4 h-4" />
                    <span className="text-sm">
                      {method.label}: {method.value}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Treatments */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-raleway font-semibold mb-4">
                Our Treatments
              </h4>
              <ul className="space-y-2">
                {treatments.map((treatment, index) => (
                  <li key={index}>
                    <a
                      href={treatment.href}
                      className="text-sm text-slate-300 hover:text-white transition-colors duration-300"
                    >
                      {treatment.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-raleway font-semibold mb-4">
                Visit Us
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="w-4 h-4 mt-1 text-slate-300" />
                  <div>
                    <p className="text-sm text-slate-300">
                      St Albans &
                      <br />
                      Birmingham{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="w-4 h-4 text-slate-300" />
                  <a
                    href="tel:07990364147"
                    className="text-sm text-slate-300 hover:text-white transition-colors duration-300"
                  >
                    + 44 7990 364147
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-700 py-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-sm text-slate-400"
              variants={itemVariants}
            >
              © 2025 Healing-PRP Clinics. All rights reserved.
            </motion.p>

            <motion.div
              className="flex items-center gap-6"
              variants={itemVariants}
            >
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
