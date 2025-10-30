"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const faqs = [
    {
      question:
        "What is the P‑Shot and how does it help erectile dysfunction at our St Albans clinic in Hertfordshire?",
      answer:
        "The P‑Shot (Priapus Shot) is a natural, non‑surgical treatment that uses your own platelet‑rich plasma (PRP) to stimulate blood flow, enhance sensitivity, and improve erectile function. This is a brief overview — further details can be found on our Sexual Rejuvenation page.",
    },
    {
      question:
        "Can the P‑Shot and Shockwave Therapy treat Peyronie's disease at our St Albans clinic in Hertfordshire?",
      answer:
        "Yes. Both the P‑Shot (Priapus Shot) and Shockwave Therapy are effective non‑surgical options for managing Peyronie's disease. These treatments can help reduce penile curvature, soften scar tissue, and improve erectile function. Read more on our Sexual Rejuvenation page.",
    },
    {
      question:
        "What is Platelet‑Rich Plasma (PRP) at Healing‑PRP Clinics in St Albans, Hertfordshire?",
      answer:
        "PRP is derived from your own blood and contains growth factors and proteins that support natural healing, regeneration, and improved circulation. More detail is available on our Sexual Rejuvenation page.",
    },
    {
      question:
        "What is PRP hair restoration at your St Albans clinic in Hertfordshire?",
      answer:
        "PRP Hair Restoration treats thinning hair and early hair loss by stimulating follicles to improve thickness and promote natural regrowth. Learn more on our Aesthetic Treatments page.",
    },
    {
      question:
        "What's the difference between PRP joint injections and steroid joint injections at your St Albans clinic in Hertfordshire?",
      answer:
        "PRP injections use your body's own healing cells for long‑term regeneration. Steroid injections provide rapid relief from inflammation and pain. Both options are available at our St Albans clinic depending on your condition. Read more on our Joint Injections section.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Seamless Gradient Background - continues from previous component */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#f6f7ff] to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block md:px-4 px-3 md:py-2 py-1 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter mb-2"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.div>

          <motion.h2
            className="text-2xl lg:text-3xl tracking-tight font-raleway text-navy-600 leading-tight"
            variants={itemVariants}
          >
            Common Questions About PRP Treatments
          </motion.h2>

          <motion.p
            className="text-sm text-slate-600 mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Find answers to the most frequently asked questions about our PRP
            treatments and services in St Albans.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl border border-slate-200/50 overflow-hidden"
              variants={itemVariants}
            >
              {/* Question */}
              <motion.button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="font-raleway md:text-base text-sm text-navy-600 pr-4 leading-relaxed">
                  {faq.question}
                </h3>
                <motion.div
                  className="flex-shrink-0 w-8 h-8 bg-[var(--brand-blue)]/10 rounded-full flex items-center justify-center"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.div
                    animate={{
                      opacity: openIndex === index ? 0 : 1,
                      scale: openIndex === index ? 0 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaPlus className="w-3 h-3 text-[var(--brand-blue)]" />
                  </motion.div>
                  <motion.div
                    className="absolute"
                    animate={{
                      opacity: openIndex === index ? 1 : 0,
                      scale: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaMinus className="w-3 h-3 text-[var(--brand-blue)]" />
                  </motion.div>
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-slate-200/50 pt-4">
                        <p className="font-inter md:text-sm text-xs text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
