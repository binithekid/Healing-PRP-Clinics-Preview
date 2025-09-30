"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaWhatsapp,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";

export default function SexualRejuvenationPage() {
  const [expandedTreatment, setExpandedTreatment] = useState<string | null>(
    null
  );
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
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
    hidden: { opacity: 0, y: 60 },
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
      name: "P‑Shot®",
      price: "£600",
      description:
        "Standard PRP treatment for mild to moderate erectile dysfunction",
      benefits: [
        "Improve erection firmness and duration",
        "Enhance sensitivity and confidence",
        "Support blood flow and repair",
      ],
      duration: "30–45 minutes",
      course: "Up to 3 injections",
      expandedContent: {
        howItWorks:
          "A small blood sample of around 40ml is taken from your arm, just like a routine blood test. The blood is then placed in a medical centrifuge to create high‑quality PRP (Platelet‑Rich Plasma). Before treatment, a numbing cream is applied to ensure comfort. The PRP is then carefully injected into precise areas of the penis to stimulate repair and regeneration. You may feel very mild discomfort during the injection, which usually settles within 5–30 minutes. You can return to work straight away. The whole procedure typically takes 30–45 minutes. Depending on your medical history and individual response, you may require a course of up to three injections, which will be discussed in detail during your online consultation. After treatment, you will receive personalised aftercare instructions.",
        whoIsItFor: [
          "Men with mild to moderate erectile dysfunction",
          "Those wanting to improve erection firmness and duration",
          "Reduced penile sensitivity or performance anxiety",
          "Restoring sexual confidence after conditions such as diabetes or circulatory problems",
          "Peyronie&apos;s disease (penile curvature due to scar tissue)",
        ],
        commonQuestions: [
          {
            question: "Is the P‑Shot painful?",
            answer:
              "Only mild discomfort, numbing cream is applied before injection.",
          },
          {
            question: "How soon will I see results?",
            answer:
              "Many men notice improvements within weeks, with further gains over 2–3 months. Results may vary from patient to patient.",
          },
          {
            question: "Is it safe?",
            answer:
              "Yes. We use your own PRP prepared with CE‑marked, medical‑grade equipment.",
          },
        ],
      },
    },
    {
      name: "Exomine® P‑Shot",
      price: "£1,000",
      description:
        "Advanced PRP treatment with stronger, longer-lasting results",
      benefits: [
        "Improve erection strength and firmness",
        "Increase sensitivity and responsiveness",
        "Boost vascular regeneration",
      ],
      duration: "~60 minutes",
      course: "Up to 3 injections",
      expandedContent: {
        howItWorks:
          "A small blood sample of around 40ml is taken from your arm. The blood is processed using the Exomine kit, producing PRP with growth factors already released and active. After numbing cream is applied, the enriched PRP is carefully injected into precise areas of the penis to stimulate repair and regeneration. Mild discomfort usually settles within 5–30 minutes, and you can return to work straight away. The procedure is very similar to the standard P‑Shot® but typically takes around 1 hour. Depending on your history and response, you may require a course of up to three injections for optimal results.",
        whoIsItFor: [
          "Moderate to severe erectile dysfunction",
          "Patients wanting stronger, longer‑lasting results than the standard P‑Shot®",
          "Poor response to other therapies",
          "Diabetes or poor circulation",
          "Peyronie&apos;s disease (penile curvature caused by scar tissue)",
        ],
        commonQuestions: [
          {
            question: "How is it different from the standard P‑Shot?",
            answer:
              "Standard PRP contains platelets that release growth factors gradually. Exomine PRP has growth factors already released into the plasma, so they are ready to work immediately.",
          },
          {
            question: "Is it longer lasting?",
            answer:
              "Often yes, due to deeper tissue repair and stronger regenerative signalling. Results may vary from patient to patient.",
          },
          {
            question: "Who is it best for?",
            answer:
              "Men with longstanding ED, diabetes, poor response to standard therapies, or Peyronie's disease.",
          },
        ],
      },
    },
    {
      name: "O‑Shot®",
      price: "£600",
      description:
        "Female rejuvenation for improved sensitivity and vaginal health",
      benefits: [
        "Enhances sensation & supports vaginal rejuvenation",
        "Minimal discomfort, no downtime",
        "Uses your own PRP",
      ],
      duration: "30–45 minutes",
      course: "Up to 3 injections",
      expandedContent: {
        howItWorks:
          "A small blood sample is processed into high‑quality PRP (Platelet‑Rich Plasma). After numbing cream is applied, the PRP is carefully injected into precise areas of the vagina to stimulate regeneration and improved sensitivity. Most women experience only mild, brief discomfort. You can return to work straight away.",
        whoIsItFor: [
          "Vaginal dryness or discomfort during intimacy",
          "Reduced sensitivity or difficulty achieving orgasm",
          "Stress urinary incontinence (leakage when coughing, sneezing, or exercising)",
          "Post‑menopausal vaginal rejuvenation",
          "Enhancing sexual confidence and overall intimate health",
        ],
        commonQuestions: [
          {
            question: "Will it help with vaginal dryness?",
            answer:
              "Yes, many women (especially post‑menopausal) experience improved natural lubrication.",
          },
          {
            question: "Is recovery quick?",
            answer:
              "Absolutely. You can return to daily activities straight away.",
          },
          {
            question: "How soon will I see results?",
            answer:
              "Improvements are often noticed within weeks and continue over time. Results may vary from patient to patient.",
          },
          {
            question: "Is it safe?",
            answer:
              "Yes, the O‑Shot uses your body's own plasma, prepared with CE‑certified equipment.",
          },
        ],
      },
    },
    {
      name: "Exomine® O‑Shot",
      price: "£1,000",
      description: "Advanced female rejuvenation with enhanced results",
      benefits: [
        "Improves natural lubrication & sensitivity",
        "Supports collagen and blood vessel repair",
        "Stronger, longer-lasting results",
      ],
      duration: "~60 minutes",
      course: "Up to 3 injections",
      expandedContent: {
        howItWorks:
          "A small blood sample is processed into Exomine PRP (Platelet‑Rich Plasma) using the Exomine kit. After numbing cream is applied, the PRP is injected into targeted vaginal areas for maximum regenerative benefit. Any mild discomfort resolves quickly. You can return to work straight away. The whole procedure usually takes around 1 hour, and in some cases a course of up to three injections may be recommended.",
        whoIsItFor: [
          "Want stronger, longer‑lasting results than the standard O‑Shot®",
          "Vaginal laxity or dryness, especially after menopause",
          "Stress urinary incontinence that affects quality of life",
          "Reduced sensitivity or difficulty achieving orgasm",
          "Restore vaginal health and confidence after hormonal changes",
        ],
        commonQuestions: [
          {
            question: "How is this different from the standard O‑Shot?",
            answer:
              "Standard PRP releases growth factors gradually. Exomine PRP already has growth factors in the plasma, so they are ready to act immediately after injection.",
          },
          {
            question: "Will it help with incontinence?",
            answer:
              "Yes, it can reduce stress urinary incontinence in many women.",
          },
          {
            question: "Is it suitable post‑menopause?",
            answer:
              "Absolutely. Many post‑menopausal women benefit from improved sensitivity, lubrication, and vaginal health.",
          },
          {
            question: "How soon will I see results?",
            answer:
              "Many women notice benefits within weeks, with continued improvement over time. Results may vary from patient to patient.",
          },
          {
            question: "How long do results last?",
            answer:
              "Most patients notice benefits for 12 months or more. Results may vary from patient to patient.",
          },
        ],
      },
    },
  ];

  const faqs = [
    {
      question: "How soon will I see results?",
      answer:
        "Within weeks, with continued improvement over time. Results may vary from patient to patient.",
    },
    {
      question: "Is this a natural erectile dysfunction treatment?",
      answer:
        "Yes — PRP uses your own blood; Exomine PRP provides extra benefit because growth factors are already released and ready to work immediately. Results may vary from patient to patient.",
    },
    {
      question: "Are your products safe?",
      answer:
        "Absolutely — we only use CE‑marked devices and medical‑grade kits for PRP preparation.",
    },
    {
      question: "Is there downtime after O‑Shot?",
      answer: "Minimal. Most resume daily activity the same day.",
    },
    {
      question: "Do you offer this near London?",
      answer:
        "Yes — our clinic in St Albans is around 20 minutes from central London by train.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img
            src="/hero_img.png"
            alt="Projects background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative w-full z-20 flex h-full">
          <div className="w-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="text-white">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.div
                  className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium mb-4"
                  variants={itemVariants}
                >
                  GMC‑registered | CE‑marked equipment | Confidential
                </motion.div>

                <motion.h1
                  className="text-3xl lg:text-4xl text-gray-700 font-raleway leading-tight mb-2"
                  variants={itemVariants}
                >
                  Sexual Rejuvenation Treatments in St Albans & Hertfordshire
                </motion.h1>

                <motion.p
                  className="text-base font-inter text-gray-500 leading-relaxed max-w-3xl"
                  variants={itemVariants}
                >
                  Confidential, non‑surgical solutions to restore confidence,
                  sensitivity and intimacy — delivered by a fully insured,
                  GMC‑registered doctor.
                </motion.p>
                <motion.div
                  variants={itemVariants}
                  className={`flex flex-col mt-3 sm:flex-row gap-4`}
                >
                  <button className="px-6 py-3 text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 flex items-center gap-2">
                    <FaWhatsapp className="w-5 h-5" />
                    Book on WhatsApp
                  </button>
                  <button className="px-6 py-3 cursor-pointer text-sm border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] rounded-lg font-inter bg-white font-medium transition-all duration-300 hover:bg-[var(--brand-blue-50)]">
                    Explore Treatments
                  </button>
                </motion.div>
              </motion.div>
            </div>
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
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {treatments.map((treatment, index) => (
              <motion.a
                key={index}
                href={`#${treatment.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]/g, "-")}`}
                className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
                variants={itemVariants}
              >
                {treatment.name}
              </motion.a>
            ))}
            <motion.a
              href="#comparison"
              className="px-4 py-2 text-sm bg-white text-[var(--brand-blue)] border border-gray-100 shadow-xs rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              Comparison
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-32 relative">
        {/* Background Elements */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl font-raleway text-slate-900 mb-3"
              variants={itemVariants}
            >
              A Personal, Medical Approach to Sexual Wellness
            </motion.h2>

            <motion.div
              className="prose prose-lg max-w-none text-slate-600 font-inter leading-relaxed space-y-6"
              variants={itemVariants}
            >
              <p>
                Sexual health is deeply personal — and it deserves thoughtful,
                evidence‑based care. At Healing‑PRP Clinics in St Albans,
                Hertfordshire, we specialise in advanced regenerative treatments
                for conditions such as erectile dysfunction and reduced
                sensitivity. Our goal is to naturally support tissue repair,
                improve blood flow, and enhance intimate confidence — all in a
                confidential, professional clinical setting.
              </p>
              <p>
                We only use CE‑marked, medical‑grade products and prepare
                high‑quality PRP (Platelet‑Rich Plasma) with the latest
                technology, ensuring maximum safety and effectiveness.
              </p>
              <p>
                Serving Harpenden, Watford, Welwyn Garden City, Hitchin, Luton,
                Hertford, and London.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRP Explanation Section */}
      <section id="what-is-prp" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl font-raleway text-slate-900 mb-3"
              variants={itemVariants}
            >
              What is PRP (Platelet‑Rich Plasma)?
            </motion.h2>

            <motion.div
              className="prose prose-lg max-w-none text-slate-600 font-inter leading-relaxed mb-8"
              variants={itemVariants}
            >
              <p>
                PRP (Platelet‑Rich Plasma) is derived from a small sample of
                your own blood and processed in a medical centrifuge to
                concentrate the platelets. These platelets are rich in growth
                factors that stimulate natural healing, repair, and
                regeneration.
              </p>
              <p>When injected into targeted areas, PRP can:</p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={itemVariants}
            >
              {[
                "Improve blood flow and sensitivity",
                "Stimulate collagen production and new tissue growth",
                "Support repair of nerves, blood vessels, and muscles",
                "Enhance natural function and overall rejuvenation",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg"
                  variants={itemVariants}
                >
                  <FaCheck className="w-4 h-4 text-[var(--brand-blue)] flex-shrink-0" />
                  <span className="font-inter text-slate-700">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="mt-8 text-slate-600 text-center font-inter leading-relaxed"
              variants={itemVariants}
            >
              Because PRP comes from your own body, it is a safe, natural, and
              non‑surgical treatment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl font-raleway text-slate-900 mb-8"
              variants={itemVariants}
            >
              Treatments Offered at Healing‑PRP Clinics
            </motion.h2>

            <div className="space-y-16">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  id={treatment.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                  className="bg-slate-50 rounded-2xl p-8 lg:p-12"
                  variants={itemVariants}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-2xl font-raleway text-slate-900">
                          {treatment.name} -
                        </h3>
                        <span className="text-xl font-inter font-semibold text-[var(--brand-blue)]">
                          {treatment.price}
                        </span>
                      </div>
                      <p className="text-sm font-inter text-slate-600 mb-6">
                        {treatment.description}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {treatment.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="flex items-start gap-3"
                          >
                            <FaCheck className="w-3 h-3 mt-[0.3rem] text-[var(--brand-blue)] flex-shrink-0 mt-0.5" />
                            <span className="font-inter text-sm text-slate-700">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-6">
                      <h4 className="text-lg font-raleway font-semibold text-slate-900 mb-4">
                        Treatment Details
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <span className="font-inter font-medium text-slate-700">
                            Duration:
                          </span>
                          <span className="font-inter text-slate-600 ml-2">
                            {treatment.duration}
                          </span>
                        </div>
                        <div>
                          <span className="font-inter font-medium text-slate-700">
                            Course:
                          </span>
                          <span className="font-inter text-slate-600 ml-2">
                            {treatment.course}
                          </span>
                        </div>
                      </div>
                      <motion.a
                        href="https://wa.me/447990364147"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm gap-2 mt-6 px-6 py-3 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300"
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        Enquire Now About {treatment.name}
                      </motion.a>
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="">
                    <motion.button
                      onClick={() =>
                        setExpandedTreatment(
                          expandedTreatment === treatment.name
                            ? null
                            : treatment.name
                        )
                      }
                      className="inline-flex items-center gap-2 py-3 text-[var(--brand-blue)] rounded-lg font-inter text-sm transition-all duration-300 hover:opacity-50 cursor-pointer"
                      whileTap={{ scale: 0.95 }}
                    >
                      {expandedTreatment === treatment.name ? (
                        <>
                          Show Less
                          <FaChevronUp className="w-3 h-3" />
                        </>
                      ) : (
                        <>
                          Learn More
                          <FaChevronDown className="w-3 h-3 mt-[0.1rem]" />
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedTreatment === treatment.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden mt-6"
                      >
                        <div className="bg-white rounded-xl p-6 border-t border-slate-200">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* How It Works */}
                            <div>
                              <h4 className="text-lg font-raleway font-semibold text-slate-900 mb-4">
                                How It Works
                              </h4>
                              <p className="text-sm font-inter text-slate-600 leading-relaxed">
                                {treatment.expandedContent.howItWorks}
                              </p>
                            </div>

                            {/* Who Is It For */}
                            <div>
                              <h4 className="text-lg font-raleway font-semibold text-slate-900 mb-4">
                                Who Is It For?
                              </h4>
                              <ul className="space-y-2">
                                {treatment.expandedContent.whoIsItFor.map(
                                  (item, itemIndex) => (
                                    <li
                                      key={itemIndex}
                                      className="flex items-start gap-3"
                                    >
                                      <FaCheck className="w-3 h-3 mt-[0.3rem] text-[var(--brand-blue)] flex-shrink-0" />
                                      <span className="text-sm font-inter text-slate-700">
                                        {item}
                                      </span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>

                          {/* Common Questions */}
                          <div className="mt-8">
                            <h4 className="text-lg font-raleway font-semibold text-slate-900 mb-4">
                              Common Questions
                            </h4>
                            <div className="space-y-4">
                              {treatment.expandedContent.commonQuestions.map(
                                (qa, qaIndex) => (
                                  <div
                                    key={qaIndex}
                                    className="bg-slate-50 rounded-lg p-4"
                                  >
                                    <h5 className="font-inter font-semibold text-slate-900 mb-2">
                                      {qa.question}
                                    </h5>
                                    <p className="text-sm font-inter text-slate-600">
                                      {qa.answer}
                                    </p>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl font-raleway text-slate-900 mb-6"
              variants={itemVariants}
            >
              P-Shot® vs Exomine® P-Shot – Comparison
            </motion.h2>

            <motion.div
              className="bg-white rounded-sm shadow-lg border border-slate-200 overflow-hidden"
              variants={itemVariants}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-raleway font-semibold text-slate-900">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-left font-raleway font-semibold text-slate-900">
                        P-Shot® (Priapus Shot®)
                      </th>
                      <th className="px-6 py-4 text-left font-raleway font-semibold text-slate-900">
                        Exomine® P-Shot (Priapus Shot®)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 font-inter font-medium text-slate-700">
                        Type of PRP
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        Standard PRP (Platelet-Rich Plasma)
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        Exomine PRP – platelets stressed so growth factors are
                        released outside the platelets
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-inter font-medium text-slate-700">
                        Growth Factor Release
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        Gradual release over time as platelets break down
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        Growth factors are already active and ready to work
                        immediately
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-inter font-medium text-slate-700">
                        Procedure Time
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        ~30-45 minutes
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        ~60 minutes (extra preparation steps)
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-inter font-medium text-slate-700">
                        Course of Treatment
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        May require up to 3 injections depending on history
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        May require up to 3 injections depending on history
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-inter font-medium text-slate-700">
                        Best For
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        Mild-moderate ED, sensitivity loss, confidence issues,
                        Peyronie&apos;s disease (early cases)
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        Longstanding or severe ED, diabetes-related ED, poor
                        response to standard PRP, Peyronie&apos;s disease (more
                        advanced cases)
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-inter font-medium text-slate-700">
                        Cost
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        £600 (London clinics typically £1,300–£1,500)
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        £1,000 (London clinics typically £1,500–£1,700)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Shockwave Therapy Section */}
      <section className="py-20 lg:py-32 bg-slate-50 relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/Pic3.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white/95 backdrop-blur-sm rounded-lg p-8 lg:p-12 text-center shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl font-raleway text-slate-900 mb-6"
              variants={itemVariants}
            >
              Shockwave Therapy in St Albans, Hertfordshire
              <br /> Erectile Dysfunction Treatment
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              variants={itemVariants}
            >
              {[
                "Stimulates new blood vessel growth",
                "Improves penile blood flow",
                "Boosts responsiveness to PRP treatments",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg"
                  variants={itemVariants}
                >
                  <FaCheck className="w-3 mt-[0.1rem] h-3 text-[var(--brand-blue)] flex-shrink-0" />
                  <span className="font-inter text-sm text-slate-700">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="https://wa.me/447990364147"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm items-center gap-2 px-8 py-4 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium"
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="w-5 h-5" />
              Enquire Now About Shockwave Therapy
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
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
              className="text-3xl text-text tracking-tight font-raleway text-navy-600 dark:text-white leading-tight text-center"
              variants={itemVariants}
            >
              Common Questions About PRP Treatments
            </motion.h2>

            <motion.p
              className="text-sm font-inter text-slate-600 dark:text-slate-300 mx-auto leading-relaxed text-center"
              variants={itemVariants}
            >
              Find answers to the most frequently asked questions about our PRP
              treatments and services in St Albans.
            </motion.p>
            <motion.div
              className="space-y-4 mt-4"
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
                  >
                    <h3 className="font-raleway text-slate-900 pr-4 leading-relaxed">
                      {faq.question}
                    </h3>
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 bg-[var(--brand-blue)]/10 rounded-full flex items-center justify-center"
                      animate={{ rotate: openFAQIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <motion.div
                        animate={{
                          opacity: openFAQIndex === index ? 0 : 1,
                          scale: openFAQIndex === index ? 0 : 1,
                        }}
                        transition={{ duration: 0.2 }}
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

      {/* Contact Section */}
      <ContactCTASection />

      <Footer />
    </>
  );
}
