"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Flower } from "lucide-react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTimes,
} from "react-icons/fa";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
    };
  }, [isModalOpen]);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (isDesktop) {
      e.preventDefault();
      setIsModalOpen(true);
    }
    // On mobile, let the default link behavior work
  };
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
                in St Albans and Birmingham
              </p>
              {/* Contact Methods */}
              <div className="space-y-3">
                {contactMethods.map((method, index) => {
                  if (method.label === "WhatsApp") {
                    return isDesktop ? (
                      <button
                        key={index}
                        onClick={handleWhatsAppClick}
                        className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 w-full text-left"
                      >
                        <method.icon className="w-4 h-4" />
                        <span className="text-sm">
                          {method.label}: {method.value}
                        </span>
                      </button>
                    ) : (
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
                    );
                  }
                  return (
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
                  );
                })}
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
              <Link
                href="/privacy-policy"
                className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </Link>
              <Link
                href="/refund-policy"
                className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
              >
                Refund Policy
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* WhatsApp QR Code Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes className="w-5 h-5 text-slate-600" />
                </button>

                {/* Modal Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-raleway font-semibold text-slate-900 mb-2">
                    Scan to Chat on WhatsApp
                  </h3>
                  <p className="text-sm text-slate-600 mb-6">
                    Use your phone camera to scan the QR code
                  </p>

                  {/* QR Code */}
                  <div className="bg-white p-6 rounded-xl border-2 border-slate-200 inline-block mb-6">
                    <img
                      src="/qrcode.png"
                      alt="WhatsApp QR Code"
                      className="w-64 h-64"
                    />
                  </div>

                  {/* WhatsApp Web Button */}
                  <a
                    href="https://web.whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg font-medium transition-all duration-300"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Open WhatsApp Web
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </footer>
  );
}
