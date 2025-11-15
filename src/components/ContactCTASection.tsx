"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function ContactCTASection() {
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
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "info@healing-prp.co.uk",
      href: "mailto:info@healing-prp.co.uk",
      color: "text-[var(--brand-blue)]",
      bgColor: "bg-[var(--brand-blue-50)]",
      hoverBg: "hover:bg-[var(--brand-blue-100)]",
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
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 bg-white rounded-xl border border-slate-200 ${method.hoverBg} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
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
              </motion.a>
            ))}
          </motion.div>

          {/* Features List */}
          <motion.div
            className="md:flex hidden flex-wrap justify-center gap-6 mb-6"
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
          <motion.div variants={itemVariants}>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
