"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaTimes } from "react-icons/fa";

export default function ContactCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const contactMethods = [
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+44 7990 364147",
      href: "https://wa.me/447990364147",
      color: "text-green-600",
      bgColor: "bg-green-50",
      hoverBg: "hover:bg-green-100",
      type: "whatsapp",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "info@healing-prp.co.uk",
      href: "/contact",
      color: "text-[var(--brand-blue)]",
      bgColor: "bg-[var(--brand-blue-50)]",
      hoverBg: "hover:bg-[var(--brand-blue-100)]",
      type: "email",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      value: "@healingprp",
      href: "https://www.instagram.com/Healing_Prp/",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      hoverBg: "hover:bg-pink-100",
    },
  ];

  const features = [
    "Flexible appointments",
    "Private 1:1 consultations",
    "No referral required",
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle diagonal shadow effect */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-black/5 to-transparent transform"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--brand-blue)]/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[var(--brand-blue)]/8 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Main Headline */}
          <motion.h2
            className="md:text-3xl text-2xl font-raleway font-light text-slate-900 leading-tight"
            variants={itemVariants}
          >
            Book a Private Consultation
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="md:text-sm text-xs text-slate-600 max-w-2xl mx-auto mb-5 leading-relaxed"
            variants={itemVariants}
          >
            Take the first step toward natural healing and personal confidence.
          </motion.p>

          {/* Contact Methods */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6"
            variants={containerVariants}
          >
            {contactMethods.map((method, index) => {
              const CardInner = (
                <div className="text-center">
                  <div
                    className={`w-12 h-12 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <method.icon className={`w-6 h-6 ${method.color}`} />
                  </div>
                  <h3 className="font-raleway text-slate-900 font-medium">
                    {method.label}
                  </h3>
                  <p className="text-sm font-inter text-slate-500">
                    {method.value}
                  </p>
                </div>
              );

              // WhatsApp: desktop shows modal, mobile links out
              if (method.type === "whatsapp") {
                return isDesktop ? (
                  <motion.button
                    key={index}
                    onClick={() => setIsModalOpen(true)}
                    className={`group p-6 bg-white rounded-xl border border-slate-200 ${method.hoverBg} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {CardInner}
                  </motion.button>
                ) : (
                  <motion.a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-6 bg-white rounded-xl border border-slate-200 ${method.hoverBg} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {CardInner}
                  </motion.a>
                );
              }

              // Email: lead to contact page
              if (method.type === "email") {
                return (
                  <Link
                    key={index}
                    href={method.href}
                    className={`group p-6 bg-white rounded-xl border border-slate-200 ${method.hoverBg} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                  >
                    {CardInner}
                  </Link>
                );
              }

              // Default: external link
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-6 bg-white rounded-xl border border-slate-200 ${method.hoverBg} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {CardInner}
                </motion.a>
              );
            })}
          </motion.div>

          {/* Features List */}
          <motion.div
            className="md:flex hidden flex-wrap justify-center gap-6 mt-4 mb-6"
            variants={itemVariants}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm font-inter text-slate-600"
              >
                <div className="w-1.5 h-1.5 bg-[var(--brand-blue)] rounded-full"></div>
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          {/* <motion.div variants={itemVariants}>
            <motion.a
              href="https://wa.me/447990364147"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter text-sm transition-all duration-300 hover:shadow-xl"
              whileTap={{ scale: 0.95 }}
            >
              <span>Book Now</span>
              <FaWhatsapp className="w-4 h-4" />
            </motion.a>
          </motion.div> */}
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
    </section>
  );
}
