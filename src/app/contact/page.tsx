"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import { BookOpen } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    consultation: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: "error",
        message: "Name, email, and message are required.",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please provide a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    // Get EmailJS configuration from environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Debug: Log the IDs (remove after debugging)
    console.log("EmailJS Config:", {
      serviceId,
      templateId,
      publicKey: publicKey ? "***" : undefined,
    });

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({
        type: "error",
        message:
          "Email service is not configured. Please contact the administrator.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS
      emailjs.init(publicKey);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        treatment: formData.treatment || "Not specified",
        consultation: formData.consultation || "Not specified",
        message: formData.message,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams);

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        treatment: "",
        consultation: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="w-full max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 flex items-center">
            <div className="text-white text-center w-full">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.div
                  className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium mb-4"
                  variants={itemVariants}
                >
                  Contact Us{" "}
                </motion.div>

                <motion.h1
                  className="text-3xl lg:text-5xl font-raleway text-gray-800 font-light leading-tight mb-2"
                  variants={itemVariants}
                >
                  Get in Touch
                </motion.h1>

                <motion.p
                  className="md:text-base text-xs font-inter font-inter text-gray-500 leading-relaxed max-w-3xl mx-auto opacity-90"
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
                  {isDesktop ? (
                    <button
                      onClick={handleWhatsAppClick}
                      className="px-6 py-3 text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 flex items-center gap-2"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Book on WhatsApp
                    </button>
                  ) : (
                    <a
                      href="https://wa.me/447990364147"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 flex items-center gap-2"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Book on WhatsApp
                    </a>
                  )}
                  <button
                    onClick={() => {
                      const formSection =
                        document.getElementById("contact-form");
                      if (formSection) {
                        formSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="px-6 py-3 hidden md:inline-flex gap-2 items-center cursor-pointer text-sm border-2 text-[var(--brand-blue)] backdrop-blur-md bg-white/30 shadow-sm rounded-lg text-[var(--brand-blue)] font-semibold transition-all duration-300 hover:opacity-50"
                  >
                    <BookOpen className="w-5 h-5 text-[var(--brand-blue)]" />
                    Book Consultation
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch and Map Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto lg:px-8 px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Get In Touch Component */}
            <motion.div
              className="flex flex-col justify-center h-full"
              variants={itemVariants}
            >
              <motion.div
                className="text-xs uppercase font-inter font-medium text-[var(--brand-blue)] mb-4"
                variants={itemVariants}
              >
                GET IN TOUCH
              </motion.div>

              <motion.h1
                className="text-2xl lg:text-4xl font-raleway text-slate-900 mb-6"
                variants={itemVariants}
              >
                We&apos;re committed to providing you with care and support.
              </motion.h1>

              <motion.p
                className="text-sm font-inter text-slate-600 mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Whether you have questions about our PRP treatments, need to
                schedule an appointment, or want to learn more about improving
                your health and confidence, we&apos;re just a message or call
                away. Our team is available Monday through Friday, 9:00 AM to
                6:00 PM, to answer your calls and help you book your next visit.
              </motion.p>

              <motion.div
                className="border-t border-slate-200 pt-6"
                variants={itemVariants}
              >
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="md:w-6 w-4 md:h-6 h-4 md:mt-0 mt-[0.2rem] text-[var(--brand-blue)]">
                      <FaMapMarkerAlt className="w-full h-full" />
                    </div>
                    <div>
                      <p className="md:text-base text-sm font-inter text-slate-700">
                        21 Victoria Street, St Albans, AL1 3JJ
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="md:w-6 w-4 md:h-6 h-4 md:mt-0 mt-[0.2rem] text-[var(--brand-blue)]">
                      <FaPhone className="w-full h-full" />
                    </div>
                    <div>
                      <p className="md:text-base text-sm font-inter text-slate-700">
                        +44 7990 364147
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="md:w-6 w-4 md:h-6 h-4 md:mt-0 mt-[0.2rem] text-[var(--brand-blue)]">
                      <FaEnvelope className="w-full h-full" />
                    </div>
                    <div>
                      <p className="md:text-base text-sm font-inter text-slate-700">
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
      <section id="contact-form" className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl lg:text-3xl font-raleway text-slate-900 mb-2 text-center"
              variants={itemVariants}
            >
              Send us a Message
            </motion.h2>

            <motion.p
              className="md:text-base text-xs font-inter text-slate-600 mb-12 text-center max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Ready to start your journey? Contact us for a confidential
              consultation with our GMC-registered doctor.
            </motion.p>

            <motion.div
              className="bg-slate-50 rounded-2xl p-4 lg:p-12"
              variants={itemVariants}
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
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
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full md:text-base text-xs md:px-4 px-2 md:py-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent font-inter bg-white"
                      placeholder="Your Name"
                      required
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
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full md:text-base text-xs md:px-4 px-2 md:py-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent font-inter bg-white"
                      placeholder="your.email@example.com"
                      required
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
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full md:text-base text-xs md:px-4 px-2 md:py-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent font-inter bg-white"
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
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className="w-full md:text-base text-xs md:px-4 px-2 md:py-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent font-inter bg-white"
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
                      <option value="prp-hair-restoration">
                        PRP Hair Restoration
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
                    htmlFor="consultation"
                    className="block text-sm font-inter font-medium text-slate-700 mb-2"
                  >
                    Consultation
                  </label>
                  <select
                    id="consultation"
                    name="consultation"
                    value={formData.consultation}
                    onChange={handleInputChange}
                    className="w-full md:text-base text-xs md:px-4 px-2 md:py-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent font-inter bg-white"
                  >
                    <option value="">Select Consultation Type</option>
                    <option value="online">Online</option>
                    <option value="face-to-face">Face to Face</option>
                  </select>
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
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="w-full md:text-base text-xs md:px-4 px-2 md:py-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent font-inter resize-none bg-white"
                    placeholder="Tell us about your goals and any questions you have..."
                  />
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    <p className="text-sm font-inter">{submitStatus.message}</p>
                  </div>
                )}

                <div className="text-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="md:px-8 px-4 md:py-4 py-3 text-sm bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] disabled:bg-slate-400 disabled:cursor-not-allowed text-white rounded-lg font-inter font-medium transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaEnvelope className="w-4 h-4" />
                        Send Message
                      </>
                    )}
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
