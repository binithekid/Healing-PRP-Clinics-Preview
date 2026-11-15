"use client";

import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaChevronDown,
  FaInfoCircle,
  FaPaperPlane,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import emailjs from "@emailjs/browser";

interface ContactCTASectionProps {
  defaultTreatment?: string;
}

type Clinic = "st-albans" | "birmingham" | "hampstead";

const GA4_MEASUREMENT_ID = "G-PB0GD280PD";

const TREATMENT_OPTIONS = [
  "Penis Filler / Girth Enhancement",
  "Erectile Dysfunction",
  "Shockwave Therapy for ED",
  "P-Shot / PRP for ED",
  "Peyronie's Disease",
  "O-Shot",
  "Vaginal Dryness Treatment",
  "Hair Restoration",
  "Joint Pain Relief",
  "Facial Aesthetics",
  "Other",
];

function normalisePath(pathname: string): string {
  const clean = pathname.toLowerCase().replace(/\/+$/, "") || "/";
  // St Albans uses /, not a /st-albans prefix.
  return clean.replace(/^\/uk(?=\/|$)/, "") || "/";
}

function clinicFromPath(path: string): Clinic {
  if (path === "/birmingham" || path.startsWith("/birmingham/")) {
    return "birmingham";
  }
  if (path === "/hampstead" || path.startsWith("/hampstead/")) {
    return "hampstead";
  }
  return "st-albans";
}

function clinicLabel(clinic: Clinic): string {
  if (clinic === "birmingham") return "Birmingham (Edgbaston)";
  if (clinic === "hampstead") return "Hampstead (London)";
  return "St Albans";
}

function treatmentFromPage(path: string): string | null {
  // Specific treatments come before broader erectile-dysfunction matching.
  if (/\/(?:o-shot|oshot)(?:\/|$|-)/.test(path)) return "O-Shot";
  if (/\/(?:p-shot|pshot)(?:\/|$|-)/.test(path)) return "P-Shot / PRP for ED";
  if (path.includes("peyronie")) return "Peyronie's Disease";
  if (
    path.includes("penis-enlargement") ||
    path.includes("penile-enlargement") ||
    path.includes("penis-filler") ||
    path.includes("penile-filler") ||
    path.includes("girth-enhancement")
  ) {
    return "Penis Filler / Girth Enhancement";
  }
  if (path.includes("shockwave")) return "Shockwave Therapy for ED";
  if (
    path.includes("erectile-dysfunction") ||
    path.includes("impotence") ||
    path.includes("ed-treatment")
  ) {
    return "Erectile Dysfunction";
  }
  if (path.includes("vaginal-dryness")) return "Vaginal Dryness Treatment";
  if (path.includes("hair-restoration") || path.includes("hair-loss")) {
    return "Hair Restoration";
  }
  if (path.includes("joint-pain") || path.includes("joint-injection")) {
    return "Joint Pain Relief";
  }
  if (path.includes("facial-aesthetic")) return "Facial Aesthetics";
  return null;
}

function isGeneralPage(path: string): boolean {
  return (
    path === "/" ||
    path === "/birmingham" ||
    path === "/hampstead" ||
    /\/(?:contact|prices|pricing|blog|about)(?:\/|$)/.test(path)
  );
}

export default function ContactCTASection({
  defaultTreatment,
}: ContactCTASectionProps) {
  const pathname = usePathname() ?? "/";
  const path = normalisePath(pathname);
  const router = useRouter();

  // On recognised treatment pages there is no unnecessary dropdown.
  // General/unrecognised pages require a deliberate treatment selection.
  const identifiedTreatment = isGeneralPage(path)
    ? null
    : treatmentFromPage(path) || defaultTreatment?.trim() || null;

  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [activeClinic, setActiveClinic] = useState<Clinic>(() => clinicFromPath(path));
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const submissionLocked = useRef(false);

  // Keep the suggested clinic aligned with client-side navigation, while
  // still allowing patients to manually choose another clinic.
  useEffect(() => {
    setActiveClinic(clinicFromPath(path));
    setSelectedTreatment("");
  }, [path]);

  useEffect(() => {
    const openDrawer = () => setIsOpen(true);
    window.addEventListener("open-contact-drawer", openDrawer);
    return () => window.removeEventListener("open-contact-drawer", openDrawer);
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError("");
  };

  const handlePhoneClick = () => {
    const w = window as Window & { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", "phone_click", {
      event_category: "contact",
      event_label: "phone_number_clicked",
      page_path: window.location.pathname,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submissionLocked.current) return;

    const treatment = identifiedTreatment || selectedTreatment;
    if (!treatment) {
      setSubmitError("Please select a treatment before submitting.");
      return;
    }

    submissionLocked.current = true;
    setIsSubmitting(true);
    setSubmitError("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError("The email service is unavailable. Please call the clinic.");
      setIsSubmitting(false);
      submissionLocked.current = false;
      return;
    }

    try {
      const sourcePage = `${window.location.origin}${window.location.pathname}`;
      emailjs.init(publicKey);
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        treatment,
        message: `${formData.message}\n\n--- ENQUIRY SOURCE ---\nSource Page: ${sourcePage}`,
        source_page: sourcePage,
        clinic_location: clinicLabel(activeClinic),
      });

      // Successful EmailJS submission only. No personal or clinical data
      // is included in GA4; the form type is an anonymous identifier.
      const w = window as Window & { gtag?: (...args: unknown[]) => void };
      try {
        w.gtag?.("event", "generate_lead", {
          send_to: GA4_MEASUREMENT_ID,
          form_type: "organic_contact",
        });
      } catch (trackingError) {
        console.warn("GA4 contact-form tracking failed:", trackingError);
      }

      // The old shared ED Google Ads conversion is deliberately NOT sent
      // here. The dedicated Ads lead form and ED assessment retain their
      // separate existing tracking in their own components.
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSelectedTreatment("");

      const thankYouUrl =
        activeClinic === "birmingham"
          ? "/birmingham/thank-you"
          : activeClinic === "hampstead"
            ? "/hampstead/thank-you"
            : "/thank-you";

      // Preserve the short delay used by the existing form to allow the
      // GA4 event to dispatch before navigating.
      setTimeout(() => router.push(thankYouUrl), 400);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitError("Failed to send. Please try again or call the clinic.");
      submissionLocked.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-form-section"
      className="relative bg-white py-12 font-inter scroll-mt-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-6 text-center">
          <div className="mb-4 inline-block rounded-full border border-slate-100 bg-[var(--brand-blue-50)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#4041d1]">
            Get In Touch
          </div>
          <h2 className="mb-4 font-raleway text-2xl font-semibold text-slate-900 md:text-3xl">
            Speak with Dr Syed Abdi
          </h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {!isOpen && (
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#4041d1] px-10 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/20 transition-all hover:bg-[#2a2bb8] sm:w-auto"
              >
                <FaPaperPlane className="h-3.5 w-3.5" />
                Book Private Consultation
                <FaChevronDown className="ml-2 opacity-50" />
              </button>
            )}
            <a
              href="tel:07990364147"
              onClick={handlePhoneClick}
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-all hover:bg-slate-50 sm:w-auto"
            >
              <FaPhoneAlt className="h-3.5 w-3.5 text-[#4041d1]" />
              07990 364 147
            </a>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-8 pb-12">
                <div className="relative rounded-[2.5rem] border border-slate-100 bg-slate-50 p-6 shadow-sm md:p-10">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute right-6 top-6 text-slate-400 transition-colors hover:text-slate-600"
                    aria-label="Close contact form"
                  >
                    <FaTimes size={20} />
                  </button>

                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-4 md:grid-cols-2"
                  >
                    <div className="mb-2 md:col-span-2">
                      <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Preferred clinic
                      </div>
                      <div className="flex w-fit flex-wrap gap-1 rounded-2xl bg-slate-200/50 p-1">
                        {(["st-albans", "birmingham", "hampstead"] as const).map(
                          (clinic) => (
                            <button
                              key={clinic}
                              type="button"
                              onClick={() => setActiveClinic(clinic)}
                              aria-pressed={activeClinic === clinic}
                              className={`rounded-xl px-4 py-2 text-[11px] font-bold transition-all sm:px-6 ${
                                activeClinic === clinic
                                  ? "bg-white text-[#4041d1] shadow-sm"
                                  : "text-slate-500 hover:text-slate-700"
                              }`}
                            >
                              {clinic === "st-albans"
                                ? "St Albans"
                                : clinic === "birmingham"
                                  ? "Birmingham"
                                  : "Hampstead"}
                            </button>
                          )
                        )}
                      </div>
                    </div>

                    <div className="space-y-1 md:col-span-2">
                      <label htmlFor="organic-contact-name" className="ml-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Full name
                      </label>
                      <input
                        id="organic-contact-name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full name"
                        className="w-full rounded-2xl border-none bg-white px-5 py-3 text-sm ring-1 ring-slate-200 transition-shadow focus:ring-2 focus:ring-[#4041d1]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="organic-contact-email" className="ml-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Email
                      </label>
                      <input
                        id="organic-contact-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@example.com"
                        className="w-full rounded-2xl border-none bg-white px-5 py-3 text-sm ring-1 ring-slate-200 transition-shadow focus:ring-2 focus:ring-[#4041d1]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="organic-contact-phone" className="ml-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Phone
                      </label>
                      <input
                        id="organic-contact-phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="07xxx xxxxxx"
                        className="w-full rounded-2xl border-none bg-white px-5 py-3 text-sm ring-1 ring-slate-200 transition-shadow focus:ring-2 focus:ring-[#4041d1]"
                      />
                    </div>

                    <div className="space-y-1 md:col-span-2">
                      <div className="ml-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Treatment
                      </div>
                      {identifiedTreatment ? (
                        <div className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                          {identifiedTreatment}
                          <span className="ml-2 text-xs font-normal text-slate-400">
                            (from this page)
                          </span>
                        </div>
                      ) : (
                        <select
                          value={selectedTreatment}
                          onChange={(e) => {
                            setSelectedTreatment(e.target.value);
                            if (submitError) setSubmitError("");
                          }}
                          required
                          aria-label="Select treatment"
                          className="w-full rounded-2xl border-none bg-white px-5 py-3 text-sm text-slate-700 ring-1 ring-slate-200 focus:ring-2 focus:ring-[#4041d1]"
                        >
                          <option value="" disabled>
                            Select a treatment
                          </option>
                          {TREATMENT_OPTIONS.map((treatment) => (
                            <option key={treatment} value={treatment}>
                              {treatment}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>

                    <div className="space-y-1 md:col-span-2">
                      <label htmlFor="organic-contact-message" className="ml-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Message
                      </label>
                      <textarea
                        id="organic-contact-message"
                        name="message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="How can we help?"
                        className="w-full rounded-2xl border-none bg-white px-5 py-3 text-sm ring-1 ring-slate-200 focus:ring-2 focus:ring-[#4041d1]"
                      />
                    </div>

                    {submitError && (
                      <p role="alert" className="text-sm text-rose-600 md:col-span-2">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#4041d1] py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:bg-[#2a2bb8] disabled:bg-slate-300 md:col-span-2"
                    >
                      {isSubmitting ? "Sending..." : "Send My Enquiry"}
                    </button>
                  </form>

                  <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
                    <span>Private, doctor-led care</span>
                    <span>No GP referral needed</span>
                    <Link href="/contact" className="inline-flex items-center gap-1 text-[#4041d1] hover:underline">
                      <FaInfoCircle /> Clinic information
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
