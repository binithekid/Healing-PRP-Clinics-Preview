"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { FaCheck } from "react-icons/fa";

export default function CTASection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const benefits = [
    "GMC‑registered GP‑led clinic",
    "Discreet St Albans location",
    "Natural, drug‑free options (PRP)",
    "Private 1:1 appointments",
    "Easy from London & Herts",
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Pic1.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block px-4 mb-2 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium"
            variants={itemVariants}
          >
            About Healing‑PRP
          </motion.div>
          <motion.h2
            className="text-3xl lg:text-4xl tracking-tight font-raleway text-white leading-tight"
            variants={itemVariants}
          >
            Why Choose Healing‑PRP Clinics?
          </motion.h2>

          <motion.p
            className="text-sm font-inter text-white/90 max-w-2xl mx-auto leading-relaxed mb-3"
            variants={itemVariants}
          >
            Experience the difference of personalized, evidence-based care
            delivered by a GMC-registered doctor in a discreet, professional
            setting.
          </motion.p>

          {/* Benefits List */}
          <motion.div
            className="max-w-2xl mx-auto mb-12"
            variants={containerVariants}
          >
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                  variants={itemVariants}
                >
                  <div className="w-6 h-6 bg-[var(--brand-blue)] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheck className="w-2 h-2 text-white" />
                  </div>
                  <span className="font-inter text-sm text-white text-left">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="inline-flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.button className="px-6 py-3 text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 flex items-center gap-2">
              Book Your Consultation
              <MoveRight className="w-4 h-4 mt-[0.1rem] transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
            <motion.button className="px-6 py-3 cursor-pointer text-sm border-2 border-white text-[var(--brand-blue)] rounded-lg font-inter bg-transparent text-white font-medium transition-all duration-300 hover:opacity-40">
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
