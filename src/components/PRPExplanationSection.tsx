"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import { FaSyringe, FaSync, FaGem, FaStar, FaArrowRight } from "react-icons/fa";

export default function PRPExplanationSection() {
  const [activeStep, setActiveStep] = useState(0);

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

  const stepVariants = {
    inactive: { scale: 1, opacity: 0.6 },
    active: { scale: 1.05, opacity: 1 },
  };

  const steps = [
    {
      number: 1,
      icon: FaSyringe,
      title: "Blood Collection",
      description: "A small amount of blood is taken from your arm.",
      color: "text-slate-600",
      bgColor: "bg-slate-100",
    },
    {
      number: 2,
      icon: FaSync,
      title: "Centrifuge Process",
      description: "It's spun in a centrifuge to isolate the PRP layer.",
      color: "text-slate-600",
      bgColor: "bg-slate-100",
    },
    {
      number: 3,
      icon: FaGem,
      title: "PRP Concentration",
      description: "Concentrated PRP — rich in growth factors — is collected.",
      color: "text-[var(--brand-blue)]",
      bgColor: "bg-[var(--brand-blue-100)]",
    },
    {
      number: 4,
      icon: FaStar,
      title: "Injection & Healing",
      description: "PRP is injected to stimulate healing and regeneration.",
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
  ];

  const benefits = [
    "Stimulates natural healing and regeneration",
    "Improves blood circulation",
    "Reduces inflammation and pain",
    "Promotes new tissue growth",
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
          className="text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium"
            variants={itemVariants}
          >
            Understanding PRP
          </motion.div>

          <motion.h2
            className="text-3xl mt-3 lg:text-4xl tracking-tight font-raleway text-navy-600 dark:text-white leading-tight mb-2"
            variants={itemVariants}
          >
            What is Platelet-Rich Plasma - PRP?
          </motion.h2>

          <motion.p
            className="text-sm font-inter text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            At Healing-PRP Clinics in St Albans, Hertfordshire, we use
            Platelet-Rich Plasma (PRP) — a natural treatment derived from your
            own blood.
          </motion.p>
        </motion.div>

        {/* Interactive PRP Process Trail */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="max-w-5xl mx-auto">
            {/* Step Trail */}
            <div className="relative mb-8">
              {/* Connection Line */}
              {/* <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-200 via-[var(--brand-blue-200)] to-amber-200 hidden lg:block"></div> */}
              <motion.div
                className="text-center mb-8"
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-blue)]/10 rounded-full">
                  <div className="w-2 h-2 bg-[var(--brand-blue)] rounded-full"></div>
                  <span className="text-sm font-inter font-medium text-[var(--brand-blue)]">
                    Step {steps[activeStep].number}: {steps[activeStep].title}
                  </span>
                </div>
              </motion.div>
              {/* Steps Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  const isActive = activeStep === index;

                  return (
                    <motion.div
                      key={index}
                      className="relative cursor-pointer"
                      onClick={() => setActiveStep(index)}
                      variants={stepVariants}
                      animate={isActive ? "active" : "inactive"}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className={`p-6 rounded-xl border-2 transition-all duration-300 flex flex-col h-full ${
                          isActive
                            ? "border-[var(--brand-blue)] bg-white shadow-lg shadow-[var(--brand-blue)]/10"
                            : "border-slate-200 bg-white/80 hover:border-[var(--brand-blue)]/50"
                        }`}
                      >
                        {/* Step Number */}
                        {/* <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4 ${
                            isActive
                              ? "bg-[var(--brand-blue)] text-white"
                              : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {step.number}
                        </div> */}

                        {/* Icon */}
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${step.bgColor}`}
                        >
                          <IconComponent className={`w-6 h-6 ${step.color}`} />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1">
                          <h3 className="font-inter font-semibold text-navy-600 dark:text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm font-inter text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Active Step Highlight */}
          </div>
        </motion.div>

        {/* Why PRP Works Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h3
            className="text-2xl lg:text-3xl font-raleway text-navy-600 dark:text-white mb-8"
            variants={itemVariants}
          >
            Why PRP Works?
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12"
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start shadow-sm gap-3 p-4 bg-white/80 rounded-lg border border-slate-200/50"
                variants={itemVariants}
              >
                <div className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 flex-shrink-0"></div>
                <span className="font-inter text-slate-600 dark:text-slate-300 text-left">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Link */}
          <motion.div
            className="inline-flex items-center gap-2 text-[var(--brand-blue)] font-inter text-sm cursor-pointer hover:text-[var(--brand-blue-dark)] transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ x: 4 }}
          >
            <span>Learn more on our Sexual Rejuvenation page</span>
            <MoveRight className="w-4 h-4 mt-[0.1rem] transition-transform duration-300 group-hover:translate-x-1" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
