"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaCheck,
  FaChevronDown,
  FaPlus,
  FaMinus,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Link from "next/link";

export default function PrematureEjaculationPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

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

  const benefits = [
    "Regain control & confidence",
    "Custom creams stable in vaginal pH",
    "Personalised behavioural & medication plan",
  ];

  const treatmentComponents = [
    {
      title: "Behavioural Coaching",
      description:
        "Guided practice of stop‑start / squeeze methods and arousal pacing, with a take‑home plan tailored to you.",
    },
    {
      title: "Pelvic Floor Programme",
      description:
        "Targeted exercises and biofeedback‑style cues to build strength and control in the pelvic floor.",
    },
    {
      title: "Custom Numbing Creams",
      description:
        "Formulations designed for fast onset, consistent effect, and stability in the vaginal environment.",
    },
    {
      title: "Medication Options",
      description:
        "Personalised prescribing where appropriate (e.g., on‑demand or daily regimens) with safety monitoring.",
    },
  ];

  const whoIsItFor = [
    "Men seeking a non‑surgical, structured plan for PE",
    "Those wanting customised creams and medication options",
    "Men with PE co‑existing with ED or anxiety",
    "Couples looking to improve intimacy and confidence",
  ];

  const faqs = [
    {
      question: "How quickly will I see results?",
      answer:
        "Many men notice improvement within weeks when behavioural plans and topical therapy are followed consistently.",
    },
    {
      question: "Are there side effects?",
      answer:
        "Topical creams may cause temporary local numbness or sensitivity changes; medications can have specific side effects which we discuss during consultation.",
    },
    {
      question: "Do you use PRP for PE?",
      answer:
        "No — PE is best addressed with behavioural strategies and medical therapy. We do not use PRP for premature ejaculation.",
    },
    {
      question: "Can my partner be involved?",
      answer:
        "Yes. Partner‑inclusive guidance often improves outcomes and confidence.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_img.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex h-full">
          <div className="w-full max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium mb-4"
                variants={itemVariants}
              >
                Male Sexual Health
              </motion.div>

              <motion.h1
                className="text-3xl lg:text-5xl font-raleway text-slate-900 font-light leading-tight mb-4"
                variants={itemVariants}
              >
                Premature Ejaculation (PE) Treatment
              </motion.h1>

              <motion.p
                className="text-sm font-inter text-gray-500 leading-relaxed max-w-3xl mx-auto mb-6"
                variants={itemVariants}
              >
                Advanced male sexual health care using behavioural and medical
                therapies — no surgery, private and GP‑led.
              </motion.p>

              <motion.div
                className="flex flex-row justify-center gap-4 mb-8"
                variants={itemVariants}
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm"
                  >
                    {/* <FaCheck className="w-4 h-4 text-[var(--brand-blue)] flex-shrink-0" /> */}
                    <span className="text-sm font-inter text-slate-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className={`flex flex-col items-center justify-center mt-3 sm:flex-row gap-4`}
              >
                {isDesktop ? (
                  <button
                    onClick={handleWhatsAppClick}
                    className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Book on WhatsApp
                  </button>
                ) : (
                  <a
                    href="https://wa.me/447990364147"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Book on WhatsApp
                  </a>
                )}
                <button className="px-6 w-full md:w-max inline-flex items-center justify-center md:text-sm text-xs items-center gap-2 py-3 cursor-pointer border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] rounded-lg font-inter bg-white font-medium transition-all duration-300 hover:bg-[var(--brand-blue-50)]">
                  <Link className="flex items-center gap-2" href="/contact">
                    <FaEnvelope className="w-5 h-5" />
                    Contact Us
                  </Link>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 border-b border-t shadow-xs border-gray-100 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-white to-gray-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.a
              href="#understanding"
              className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              Understanding PE
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              How It Works
            </motion.a>
            <motion.a
              href="#who-is-it-for"
              className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              Who Is It For
            </motion.a>
            <motion.a
              href="#treatment-components"
              className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              Treatment Components
            </motion.a>
            <motion.a
              href="#faqs"
              className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              FAQs
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Understanding Premature Ejaculation Section */}
      <section id="understanding" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl lg:text-3xl font-raleway text-slate-900 mb-6"
              variants={itemVariants}
            >
              Understanding Premature Ejaculation
            </motion.h2>

            <motion.p
              className="text-sm font-inter text-slate-600 max-w-4xl leading-relaxed"
              variants={itemVariants}
            >
              Premature ejaculation is reaching climax sooner than desired,
              often within a minute of penetration. Causes are multifactorial —
              including heightened sensitivity, anxiety, and neurochemical or
              hormonal factors — and it frequently co‑exists with performance
              anxiety.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl lg:text-3xl font-raleway text-slate-900 mb-6"
              variants={itemVariants}
            >
              How It Works
            </motion.h2>

            <motion.p
              className="text-sm font-inter text-slate-600 mb-8 max-w-4xl leading-relaxed"
              variants={itemVariants}
            >
              At Healing‑PRP we use a stepwise, evidence‑informed plan — not PRP
              — combining:
            </motion.p>

            <motion.div className="space-y-4 mb-8" variants={containerVariants}>
              {[
                "Behavioural techniques (stop‑start, squeeze method) to improve ejaculatory control",
                "Pelvic floor training to strengthen the bulbocavernosus & pelvic musculature",
                "Custom topical numbing creams designed to remain effective in vaginal pH for better consistency",
                "Tailored medication regimens where appropriate to delay climax and reduce hypersensitivity",
                "Lifestyle optimisation (sleep, stress, alcohol/smoking) and partner‑inclusive guidance if desired",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <FaCheck className="w-4 h-4 mt-[0.2rem] text-[var(--brand-blue)] flex-shrink-0" />
                  <span className="text-sm font-inter text-slate-700 leading-relaxed">
                    {point}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-sm font-inter text-slate-600 max-w-4xl leading-relaxed"
              variants={itemVariants}
            >
              Sessions are discreet, and most patients resume normal activities
              immediately after consultation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section id="who-is-it-for" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl lg:text-3xl font-raleway text-slate-900 mb-6"
              variants={itemVariants}
            >
              Who Is It For?
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {whoIsItFor.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg"
                  variants={itemVariants}
                >
                  <FaCheck className="w-4 h-4 mt-[0.2rem] text-[var(--brand-blue)] flex-shrink-0" />
                  <span className="text-sm font-inter text-slate-700 leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Treatment Components Section */}
      <section id="treatment-components" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl lg:text-3xl font-raleway text-slate-900 mb-12 text-center"
              variants={itemVariants}
            >
              Treatment Components
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              {treatmentComponents.map((component, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-raleway text-slate-900 mb-3">
                    {component.title}
                  </h3>
                  <p className="text-sm font-inter text-slate-600 leading-relaxed">
                    {component.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="flex justify-center mb-2"
              variants={itemVariants}
            >
              <div className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium">
                Frequently Asked Questions
              </div>
            </motion.div>
            <motion.h2
              className="text-2xl lg:text-4xl font-raleway text-slate-700 leading-tight text-center mb-4"
              variants={itemVariants}
            >
              Common Questions
            </motion.h2>

            <motion.div
              className="space-y-4 mt-8"
              initial="hidden"
              animate="visible"
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
                  >
                    <h3 className="font-raleway text-slate-900 pr-4 leading-relaxed text-sm md:text-base">
                      {faq.question}
                    </h3>
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 bg-[var(--brand-blue)]/10 rounded-full flex items-center justify-center relative"
                      animate={{ rotate: openFAQIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <motion.div
                        animate={{
                          opacity: openFAQIndex === index ? 0 : 1,
                          scale: openFAQIndex === index ? 0 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                      >
                        <FaPlus className="w-3 h-3 text-[var(--brand-blue)]" />
                      </motion.div>
                      <motion.div
                        className="absolute"
                        animate={{
                          opacity: openFAQIndex === index ? 1 : 0,
                          scale: openFAQIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaMinus className="w-3 h-3 text-[var(--brand-blue)]" />
                      </motion.div>
                    </motion.div>
                  </motion.button>

                  {/* Answer */}
                  <AnimatePresence>
                    {openFAQIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-slate-200/50 pt-4">
                            <p className="font-inter text-sm text-slate-600 leading-relaxed">
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
          </motion.div>
        </div>
      </section>

      <ContactCTASection />

      <Footer />

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
    </>
  );
}
