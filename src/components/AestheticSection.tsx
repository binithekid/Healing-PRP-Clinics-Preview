"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { FaFlask, FaCut, FaLeaf } from "react-icons/fa";

export default function AestheticSection() {
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const treatments = [
    {
      icon: FaFlask,
      tag: "Skin",
      title: "Polynucleotides",
      description:
        "Biostimulatory injectables to improve texture, hydration, and fine lines.",
      cta: "Ask about Polynucleotides",
    },
    {
      icon: FaCut,
      tag: "Hair",
      title: "PRP Hair Restoration",
      description:
        "PRP stimulates follicles for thicker, stronger hair in early hair loss.",
      cta: "Book Hair PRP",
    },
    {
      icon: FaLeaf,
      tag: "Wrinkles",
      title: "Botox (Anti‑Wrinkle)",
      description:
        "Targeted, natural‑looking softening of expression lines with minimal downtime.",
      cta: "Enquire about Botox",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle diagonal shadow effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#f6f7ff] to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            className="relative h-full lg:order-1 order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
              <img
                src="/Pic2.jpg"
                alt="Aesthetic treatments at Healing-PRP Clinics"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            className="lg:order-2 order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.p
              className="text-xs text-blue-600 font-inter leading-relaxed"
              variants={itemVariants}
            >
              SERVICES
            </motion.p>
            {/* Main Headline */}
            <motion.h2
              className="md:text-3xl text-2xl font-raleway text-slate-900 leading-tight"
              variants={itemVariants}
            >
              Aesthetic & Hair PRP Treatments in St Albans
            </motion.h2>

            {/* Introductory Paragraph */}
            <motion.p
              className="text-base mt-2 text-slate-600 leading-relaxed"
              variants={itemVariants}
            >
              Natural, low‑downtime treatments focused on subtle, confident
              results.
            </motion.p>

            {/* Treatment Cards */}
            <motion.div
              className="space-y-6 mt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              {treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="flex gap-4">
                    {/* <div className="w-12 h-12 bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue-dark)] rounded-xl flex items-center justify-center flex-shrink-0">
                      <treatment.icon className="w-6 h-6 text-white" />
                    </div> */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium text-[var(--brand-blue)] uppercase tracking-wide">
                          {treatment.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-raleway font-medium text-slate-900 mb-2">
                        {treatment.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4">
                        {treatment.description}
                      </p>
                      <Link href="/contact">
                        <button className="flex text-sm cursor-pointer items-center gap-2 text-[var(--brand-blue)] font-medium hover:text-[var(--brand-blue-dark)] transition-colors duration-300 group">
                          <span>{treatment.cta}</span>
                          <MoveRight className="w-4 h-4 mt-[0.1rem] transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
