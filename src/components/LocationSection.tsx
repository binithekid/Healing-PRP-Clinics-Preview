"use client";

import { motion } from "framer-motion";

export default function LocationSection() {
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
      },
    },
  };

  const nearbyAreas = [
    "Watford",
    "Harpenden",
    "Luton",
    "Hertford",
    "Welwyn Garden City",
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Seamless Gradient Background - continues from previous component */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#f6f7ff] to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block mb-2 font-inter md:px-4 px-3 md:py-2 py-1 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs"
            variants={itemVariants}
          >
            Where to Find us
          </motion.div>

          <motion.h2
            className="md:text-3xl text-2xl font-raleway text-slate-900 leading-tight"
            variants={itemVariants}
          >
            Visit Us in St Albans
          </motion.h2>
          <motion.p
            className="text-sm text-slate-600 dark:text-slate-300 md:max-w-2xl max-w-xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Ready to start your PRP journey? Contact us today to book your
            consultation.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 -mt-6 md:mt-0 lg:grid-cols-2 gap-12 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left Side - Combined Info */}
          <motion.div variants={itemVariants}>
            <div className="p-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50 h-full flex flex-col">
              {/* Address Section */}
              <div className="mb-8">
                <h3 className="text-xl font-raleway text-navy-600 dark:text-white mb-2">
                  Our Location
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  21 Victoria Street, St Albans, AL1 3JJ
                </p>
              </div>

              {/* Subtle Separator */}
              <div className="border-t border-slate-200/50 dark:border-slate-700/50 mb-8"></div>

              {/* Nearby Areas Section */}
              <div className="mb-8">
                <h3 className="text-xl font-raleway text-navy-600 dark:text-white mb-3">
                  Conveniently Located
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                  Close to:
                </p>
                <div className="flex flex-wrap gap-2">
                  {nearbyAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle Separator */}
              <div className="border-t border-slate-200/50 dark:border-slate-700/50 mb-8"></div>

              {/* Transport Info Section */}
              <div className="flex-1">
                <h3 className="text-xl font-raleway text-navy-600 dark:text-white mb-3">
                  Easy Access
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Short walk from St Albans City station (fast trains to
                  London).
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Map */}
          <motion.div className="relative h-full" variants={itemVariants}>
            <div className="relative rounded-xl overflow-hidden shadow-xl h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39523.58522865622!2d-0.314299!3d51.747226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487638a0e793c909%3A0x71ec848046a64059!2sSt%20Albans%2C%20UK!5e0!3m2!1sen!2sus!4v1757801875339!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        {/* <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-4 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaMapMarkerAlt className="w-5 h-5" />
              Get Directions
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] bg-white/80 hover:bg-[var(--brand-blue-50)] rounded-lg font-inter font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}
