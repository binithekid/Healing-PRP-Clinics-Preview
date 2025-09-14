"use client";

import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";

export default function ContactPage() {
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/contactbg.webp')" }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex h-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="text-white text-center w-full">
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
                  Contact Us{" "}
                </motion.div>

                <motion.h1
                  className="text-4xl lg:text-5xl font-raleway text-gray-800 font-light leading-tight mb-2"
                  variants={itemVariants}
                >
                  Get in Touch
                </motion.h1>

                <motion.p
                  className="text-base font-inter font-inter text-gray-500 leading-relaxed max-w-3xl mx-auto opacity-90"
                  variants={itemVariants}
                >
                  Reach out to us for appointments or any medical concerns. Your
                  journey to better health and confidence starts with a simple
                  message.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className={`flex flex-col items-center justify-center mt-4 sm:flex-row gap-4`}
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

      {/* Get In Touch and Map Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Get In Touch Component */}
            <motion.div
              className="flex flex-col justify-center h-full"
              variants={itemVariants}
            >
              <motion.div
                className="text-sm uppercase tracking-widest font-inter font-medium text-[var(--brand-blue)] mb-4"
                variants={itemVariants}
              >
                GET IN TOUCH
              </motion.div>

              <motion.h1
                className="text-3xl lg:text-4xl font-raleway text-slate-900 mb-6"
                variants={itemVariants}
              >
                We're committed to providing you with care and support.
              </motion.h1>

              <motion.p
                className="text-sm font-inter text-slate-600 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Whether you have questions about our PRP treatments, need to
                schedule an appointment, or want to learn more about improving
                your health and confidence, we're just a message or call away.
                Our team is available Monday through Friday, 9:00 AM to 6:00 PM,
                to answer your calls and help you book your next visit.
              </motion.p>

              <motion.div
                className="border-t border-slate-200 pt-6"
                variants={itemVariants}
              >
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 text-[var(--brand-blue)]">
                      <FaMapMarkerAlt className="w-full h-full" />
                    </div>
                    <div>
                      <p className="text-base font-inter text-slate-700">
                        21 Victoria Street, St Albans, AL1 3JJ
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 text-[var(--brand-blue)]">
                      <FaPhone className="w-full h-full" />
                    </div>
                    <div>
                      <p className="text-base font-inter text-slate-700">
                        +44 7990 364147
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 text-[var(--brand-blue)]">
                      <FaEnvelope className="w-full h-full" />
                    </div>
                    <div>
                      <p className="text-base font-inter text-slate-700">
                        info@healing-prp.co.uk
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Map */}
            <motion.div
              className="h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden"
              variants={itemVariants}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39523.58522865622!2d-0.314299!3d51.747226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487638a0e793c909%3A0x71ec848046a64059!2sSt%20Albans%2C%20UK!5e0!3m2!1sen!2sus!4v1757801875339!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Healing-PRP Clinics Location"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-raleway text-slate-900 mb-6 text-center"
              variants={itemVariants}
            >
              Send us a Message
            </motion.h2>

            <motion.p
              className="text-base font-inter text-slate-600 mb-12 text-center max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Ready to start your journey? Contact us for a confidential
              consultation with our GMC-registered doctor.
            </motion.p>

            <motion.div
              className="bg-slate-50 rounded-2xl p-8 lg:p-12"
              variants={itemVariants}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-inter font-medium text-slate-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent font-inter bg-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-inter font-medium text-slate-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent font-inter bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-inter font-medium text-slate-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent font-inter bg-white"
                      placeholder="+44 7xxx xxx xxx"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="treatment"
                      className="block text-sm font-inter font-medium text-slate-700 mb-2"
                    >
                      Treatment of Interest
                    </label>
                    <select
                      id="treatment"
                      name="treatment"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent font-inter bg-white"
                    >
                      <option value="">Select Treatment</option>
                      <option value="sexual-rejuvenation-p">
                        Sexual Rejuvenation (P-Shot)
                      </option>
                      <option value="sexual-rejuvenation-o">
                        Sexual Rejuvenation (O-Shot)
                      </option>
                      <option value="prp-joint-injections">
                        PRP Joint Injections
                      </option>
                      <option value="steroid-joint-injections">
                        Steroid Joint Injections
                      </option>
                      <option value="facial-polynucleotides">
                        Facial Aesthetics (Polynucleotides)
                      </option>
                      <option value="facial-ha-boosters">
                        Facial Aesthetics (HA Skin Boosters)
                      </option>
                      <option value="facial-prp-microneedling">
                        Facial Aesthetics (PRP Microneedling)
                      </option>
                      <option value="facial-collagen-threads">
                        Facial Aesthetics (Collagen Threads)
                      </option>
                      <option value="facial-botox">
                        Facial Aesthetics (Botox)
                      </option>
                      <option value="prp-vampire-facial">
                        PRP Vampire Facial
                      </option>
                      <option value="general-consultation">
                        General Consultation
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-inter font-medium text-slate-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent font-inter resize-none bg-white"
                    placeholder="Tell us about your goals and any questions you have..."
                  />
                </div>

                <div className="text-center">
                  <motion.button
                    type="submit"
                    className="px-8 py-4 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEnvelope className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Links Section */}
      <ContactCTASection />

      <Footer />
    </>
  );
}
