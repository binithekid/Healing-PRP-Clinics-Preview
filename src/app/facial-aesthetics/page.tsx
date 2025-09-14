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

export default function FacialAestheticsPage() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const treatments = [
    {
      name: "Polynucleotide Treatments",
      price: "From £150",
      description:
        "Advanced skin boosters that repair, hydrate, and rejuvenate at a cellular level",
      benefits: [
        "Stimulate collagen and elastin production",
        "Improve skin elasticity and firmness",
        "Reduce inflammation and oxidative stress",
        "Deeply hydrate and restore skin quality",
        "Smooth fine lines and brighten dull, tired skin",
      ],
      duration: "30–45 minutes",
      course: "Up to 3 sessions",
      expandedContent: {
        howItWorks:
          "Polynucleotides are derived from purified fragments of fish DNA, which are biocompatible and safe for human use. After applying a numbing cream, polynucleotides are injected just under the skin in tiny amounts, creating small 'blips' on the surface that settle within hours. Mild redness or small injection marks may be visible but usually resolve within 1–2 days.",
        whoIsItFor: [
          "Those wanting to improve skin texture and quality",
          "People with fine lines and dull skin",
          "Anyone seeking natural-looking rejuvenation",
          "Those wanting to enhance skin hydration",
          "People looking for long-lasting results",
        ],
        commonQuestions: [
          {
            question: "How long do polynucleotide results last?",
            answer:
              "Improvements are usually visible within 2–3 weeks, with results typically lasting 6–9 months depending on skin type and lifestyle factors.",
          },
          {
            question: "What areas can be treated?",
            answer:
              "Polynucleotides can be used on the eyes (£175), face & eyes (£250), and neck (£150) areas.",
          },
          {
            question: "Can polynucleotides be combined with other treatments?",
            answer:
              "Yes, they work excellently with HA skin boosters for enhanced hydration and PRP microneedling for further collagen stimulation.",
          },
        ],
      },
    },
    {
      name: "Non‑Crosslinked Hyaluronic Acid (HA) Skin Boosters",
      price: "From £100",
      description:
        "Light, hydrating injections designed to deeply rehydrate and plump the skin",
      benefits: [
        "Bind and attract water for intense, long‑lasting hydration",
        "Improve elasticity and skin firmness",
        "Soften fine lines and crepey texture",
        "Support a healthier skin barrier and glow",
      ],
      duration: "30–45 minutes",
      course: "Up to 3 sessions",
      expandedContent: {
        howItWorks:
          "After numbing cream, tiny amounts of HA are injected just under the skin, creating small surface 'blips' that settle within hours. Mild redness or small injection marks can occur and typically resolve within 1–2 days (occasional light bruising is possible).",
        whoIsItFor: [
          "Those with dehydrated or dull skin",
          "People wanting to improve skin plumpness",
          "Anyone seeking enhanced skin glow",
          "Those with fine lines and crepey texture",
          "People wanting natural-looking hydration",
        ],
        commonQuestions: [
          {
            question: "How quickly will I see results from HA skin boosters?",
            answer:
              "Hydration improvement is often noticeable within 1–2 weeks, with results generally lasting 6–9 months or more depending on individual skin type and water intake.",
          },
          {
            question: "What areas can be treated with HA boosters?",
            answer:
              "HA skin boosters can be used on the face (£200), neck (£100), and hands (£150).",
          },
          {
            question: "Are HA skin boosters safe?",
            answer:
              "Yes, hyaluronic acid is naturally found in the body and these treatments are very safe when performed by a qualified practitioner.",
          },
        ],
      },
    },
    {
      name: "Platelet‑Rich Plasma (PRP) Microneedling",
      price: "From £120",
      description:
        "Natural rejuvenation using your body's own PRP combined with microneedling",
      benefits: [
        "Improves acne scars and post‑acne marks",
        "Promotes skin tightening and firmness",
        "Stimulates collagen and elastin production",
        "Reduces fine lines and wrinkles",
        "Enhances skin tone, texture, and glow",
        "Minimises the appearance of large pores",
      ],
      duration: "45–60 minutes",
      course: "2–3 sessions recommended",
      expandedContent: {
        howItWorks:
          "A small amount of blood is taken and processed into concentrated PRP. This is applied to the skin while microneedling creates controlled micro‑channels, allowing the PRP to penetrate deeply for maximum regeneration. The treatment has minimal downtime with most clients returning to normal activities the same day.",
        whoIsItFor: [
          "Those with acne scars or post-acne marks",
          "People wanting to improve skin texture",
          "Anyone seeking natural collagen stimulation",
          "Those with fine lines and wrinkles",
          "People wanting to minimize pore appearance",
        ],
        commonQuestions: [
          {
            question: "How long do PRP microneedling results last?",
            answer:
              "Initial glow appears within 1–2 weeks, with collagen stimulation continuing over 4–6 weeks. Effects typically last 6–12 months depending on skin quality and lifestyle.",
          },
          {
            question: "What is the downtime for PRP microneedling?",
            answer:
              "Minimal — most clients return to normal activities the same day with just mild redness that subsides within 24-48 hours.",
          },
          {
            question: "How many sessions are recommended?",
            answer:
              "Best results are achieved with 2–3 sessions, with initial improvements visible within 1–2 weeks.",
          },
        ],
      },
    },
    {
      name: "Collagen Stimulating Threads",
      price: "From £200",
      description:
        "Non‑surgical treatment using biodegradable threads to lift and tighten while stimulating collagen",
      benefits: [
        "Lift and tighten sagging areas (jawline, cheeks, neck)",
        "Stimulate natural collagen production",
        "Improve firmness and skin texture over time",
        "Quick procedure with minimal downtime",
      ],
      duration: "10–15 minutes",
      course: "Single treatment",
      expandedContent: {
        howItWorks:
          "Threads are very quick to insert — the procedure usually takes 10–15 minutes. With numbing, the treatment is essentially pain‑free. Ideal for the neck, jawline, and cheeks. Mild swelling or bruising may occur and typically settles within a few days. There's essentially no downtime.",
        whoIsItFor: [
          "Those with mild to moderate sagging",
          "People wanting non-surgical lifting",
          "Anyone seeking natural collagen stimulation",
          "Those wanting to improve jawline definition",
          "People looking for subtle, natural results",
        ],
        commonQuestions: [
          {
            question: "Are collagen stimulating threads painful?",
            answer:
              "No — threads are quick to insert (around 10–15 minutes) and essentially pain‑free with numbing, with no downtime.",
          },
          {
            question: "How long do thread results last?",
            answer:
              "Results develop gradually over 6–12 weeks, with improvements lasting 12–18 months depending on age, skin quality, and lifestyle.",
          },
          {
            question: "Can threads be combined with other treatments?",
            answer:
              "Yes, threads can be combined with PRP Microneedling, HA boosters, or Polynucleotides to further enhance results.",
          },
        ],
      },
    },
    {
      name: "Botox Anti‑Wrinkle Injections",
      price: "3 Areas £200",
      description:
        "Targeted muscle relaxation to smooth lines and prevent new wrinkles",
      benefits: [
        "Smooth existing expression lines",
        "Prevent formation of new wrinkles",
        "Quick treatment with minimal discomfort",
        "Natural-looking results",
      ],
      duration: "15–20 minutes",
      course: "Single treatment",
      expandedContent: {
        howItWorks:
          "Tiny injections are placed into specific facial muscles to relax them and prevent wrinkle formation. The treatment is quick with minimal discomfort and no downtime. Common areas treated include forehead, frown lines, and crow's feet.",
        whoIsItFor: [
          "Those with expression lines",
          "People wanting to prevent new wrinkles",
          "Anyone seeking quick, effective treatment",
          "Those wanting natural-looking results",
          "People with dynamic wrinkles",
        ],
        commonQuestions: [
          {
            question: "How much does Botox cost in Hertfordshire?",
            answer:
              "Our anti‑wrinkle Botox injections are £200 for 3 areas at Healing‑PRP Clinics in St Albans.",
          },
          {
            question: "How long do Botox results last?",
            answer:
              "Effects begin within 3–5 days, with full results seen at around 2 weeks. The smoother appearance lasts for 3–4 months.",
          },
          {
            question: "What areas can be treated with Botox?",
            answer:
              "Common areas include forehead, frown lines, and crow's feet. We can discuss other areas during your consultation.",
          },
        ],
      },
    },
  ];

  const faqs = [
    {
      question:
        "Where can I get polynucleotide skin booster treatments in St Albans, Hertfordshire?",
      answer:
        "At Healing‑PRP Clinics in St Albans, we offer advanced polynucleotide skin booster injections. Many of our patients travel from Harpenden, Watford, Luton, Welwyn, and Hertford.",
    },
    {
      question: "How long do results from PRP microneedling last?",
      answer:
        "PRP microneedling typically delivers results that last 6–12 months, depending on skin quality, lifestyle, and aftercare. Most patients see visible improvements within 2–3 weeks, with continued collagen stimulation over several months. For best outcomes, a course of up to 3 sessions may be recommended.",
    },
    {
      question: "Are collagen stimulating threads painful?",
      answer:
        "No — threads are quick to insert (around 10–15 minutes) and essentially pain‑free with numbing, with no downtime.",
    },
    {
      question: "How much does Botox cost in Hertfordshire?",
      answer:
        "Our anti‑wrinkle Botox injections are £200 for 3 areas at Healing‑PRP Clinics in St Albans.",
    },
    {
      question: "Is there any downtime with your facial aesthetics treatments?",
      answer:
        "Most treatments, such as PRP microneedling and collagen stimulating threads, involve minimal to no downtime.",
    },
    {
      question: "Do you offer consultations before treatment?",
      answer:
        "Yes — every client receives a personal consultation with our GMC‑registered doctor to tailor a safe, effective plan for skin boosters, PRP, threads, or Botox.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/Pic1.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex h-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="text-white">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
              >
                <motion.div
                  className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium mb-4"
                  variants={itemVariants}
                >
                  GMC‑registered | CE‑marked | Natural Results
                </motion.div>

                <motion.h1
                  className="text-4xl lg:text-5xl font-raleway font-light leading-tight mb-2"
                  variants={itemVariants}
                >
                  Facial Aesthetics Treatments in St Albans, Hertfordshire
                </motion.h1>

                <motion.p
                  className="text-base font-inter leading-relaxed max-w-3xl"
                  variants={itemVariants}
                >
                  Safe, natural, and effective treatments to restore youthful
                  skin, reduce fine lines, and improve overall skin health. All
                  procedures are carried out by a GMC‑registered doctor.
                </motion.p>
                <motion.div
                  variants={itemVariants}
                  className={`flex flex-col mt-3 sm:flex-row gap-4`}
                >
                  <button className="px-6 py-3 text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 flex items-center gap-2">
                    <FaWhatsapp className="w-5 h-5" />
                    Message on WhatsApp
                  </button>
                  <button className="px-6 py-3 cursor-pointer text-sm border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] rounded-lg font-inter bg-white font-medium transition-all duration-300 hover:bg-[var(--brand-blue-50)]">
                    Browse treatments
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-slate-300 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#f6f7ff] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.a
              href="#treatments"
              className="px-4 py-2 bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              Treatments
            </motion.a>
            <motion.a
              href="#prp-vampire"
              className="px-4 py-2 bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              PRP Vampire Facial
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-14 lg:py-32 bg-white relative">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#f6f7ff] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.p
              className="text-base font-inter text-slate-600 mb-8 max-w-4xl"
              variants={itemVariants}
            >
              At Healing‑PRP Clinics, we provide safe, natural, and effective
              treatments to restore youthful skin, reduce fine lines, and
              improve overall skin health. All procedures are carried out by a
              GMC‑registered doctor with plenty of experience for expert,
              medical‑led care.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
              variants={itemVariants}
            >
              {[
                "We only use high‑quality, CE‑marked products approved for safety and effectiveness",
                "Treatments are tailored to your skin's individual needs",
                "Performed under strict medical hygiene and sterility protocols",
                "Confidential, professional clinic environment with natural‑looking results",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg"
                  variants={itemVariants}
                >
                  <FaCheck className="w-4 h-4 mt-[0.2rem] text-[var(--brand-blue)] flex-shrink-0" />
                  <span className="font-inter text-sm text-slate-700">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-sm font-inter text-slate-600"
              variants={itemVariants}
            >
              Serving St Albans and nearby: Harpenden, Luton, Watford, Welwyn,
              Hertford, and London.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-raleway text-slate-900 mb-8 text-center"
              variants={itemVariants}
            >
              Our Facial Aesthetics Treatments
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
                          {treatment.name} -{" "}
                          <span className="text-xl font-inter font-semibold text-[var(--brand-blue)]">
                            {treatment.price}
                          </span>
                        </h3>
                        {/* <span className="text-xl font-inter font-semibold text-[var(--brand-blue)]">
                          {treatment.price}
                        </span> */}
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
                        Enquire Now
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

      {/* PRP Vampire Facial Section */}
      <section id="prp-vampire" className="py-20 lg:py-32 bg-white relative">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#f6f7ff] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              className="bg-white rounded-lg p-8 lg:p-12 shadow"
              variants={itemVariants}
            >
              <motion.h2
                className="text-3xl lg:text-4xl font-raleway text-slate-900 mb-6"
                variants={itemVariants}
              >
                Platelet‑Rich Plasma (PRP) Vampire Facial in St Albans,
                Hertfordshire
              </motion.h2>

              <motion.p
                className="text-base font-inter text-slate-600 mb-6"
                variants={itemVariants}
              >
                A regenerative skin treatment using your own PRP to stimulate
                collagen, brighten dull skin, and improve tone and texture.
              </motion.p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-raleway font-semibold text-slate-900 mb-4">
                    How it works
                  </h3>
                  <p className="text-sm font-inter text-slate-600 leading-relaxed">
                    A small blood sample is processed into high‑quality PRP,
                    which is applied with microneedling to penetrate deeply for
                    natural repair.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-raleway font-semibold text-slate-900 mb-4">
                    Results
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <FaCheck className="w-3 h-3 mt-[0.3rem] text-[var(--brand-blue)] flex-shrink-0" />
                      <span className="text-sm font-inter text-slate-700">
                        Skin appears fresher and brighter within a few weeks
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="w-3 h-3 mt-[0.3rem] text-[var(--brand-blue)] flex-shrink-0" />
                      <span className="text-sm font-inter text-slate-700">
                        Best outcomes are usually seen after 2–3 sessions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="w-3 h-3 mt-[0.3rem] text-[var(--brand-blue)] flex-shrink-0" />
                      <span className="text-sm font-inter text-slate-700">
                        Results last around 6–12 months depending on skin
                        condition
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-inter font-semibold text-slate-900">
                      Price: £300
                    </span>
                    <p className="text-sm font-inter text-slate-600">
                      (or 2 sessions for £500)
                    </p>
                  </div>
                  {/* <motion.a
                    href="https://wa.me/447990364147"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300"
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    Enquire Now
                  </motion.a> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 lg:py-32 bg-slate-50">
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
              className="text-3xl lg:text-4xl text-text tracking-tight font-raleway text-navy-600 dark:text-white leading-tight text-center"
              variants={itemVariants}
            >
              Common Questions About Facial Aesthetics
            </motion.h2>

            <motion.p
              className="text-sm font-inter text-slate-600 dark:text-slate-300 mx-auto leading-relaxed text-center"
              variants={itemVariants}
            >
              Find answers to the most frequently asked questions about our
              facial aesthetics treatments and services in St Albans.
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
                    whileTap={{ scale: 0.99 }}
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

      <ContactCTASection />

      <Footer />
    </>
  );
}
