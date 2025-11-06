"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export default function LocationsCTASection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const locations = [
    "London",
    "St Albans",
    "Luton",
    "Hertfordshire",
    "Birmingham",
    "Midlands",
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Pic2.jpg')" }}
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
          {/* Heading */}
          <motion.div
            className="inline-block px-4 py-2 bg-[var(--brand-blue-100)]/20 backdrop-blur-md text-white rounded-full text-xs font-inter font-medium mb-3 border border-white/30"
            variants={itemVariants}
          >
            Our Service Areas
          </motion.div>

          <motion.h2
            className="text-3xl lg:text-4xl font-raleway font-semibold tracking-tight text-white leading-tight mb-2"
            variants={itemVariants}
          >
            Serving Patients Across the UK
          </motion.h2>

          <motion.p
            className="text-sm font-inter font-light text-white/90 mb-12 leading-relaxed"
            variants={itemVariants}
          >
            We provide confidential, professional PRP treatments to patients
            throughout the UK. Book your consultation today.
          </motion.p>

          {/* Locations Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 max-w-5xl mx-auto"
            variants={containerVariants}
          >
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                variants={itemVariants}
              >
                <div className="flex flex-col items-center gap-2">
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-400" />
                  <span className="font-inter text-sm md:text-base font-medium text-white text-center">
                    {location}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          {/* <motion.div variants={itemVariants}>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Book Your Consultation
            </Link>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
