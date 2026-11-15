"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

type EDFeatureVariant =
  | "ed"
  | "penis-filler"
  | "intimate-health"
  | "peyronies"
  | "hair-restoration";

interface EDFeatureBlockProps {
  variant?: EDFeatureVariant;
}

const featureContent: Record<
  EDFeatureVariant,
  {
    heading: string;
    description: string;
  }
> = {
  ed: {
    heading: "Treatment With Dr Syed Abdi",
    description:
      "Your consultation and treatment are carried out by Dr Syed Abdi, GMC No. 6083294, a UK-trained and GMC-registered doctor with experience in regenerative medicine and non-surgical intimate health procedures. Your appointment is discreet, private and focused on understanding possible contributing factors, reviewing your medical history and discussing appropriate erectile dysfunction treatment options based on your individual needs and clinical suitability.",
  },

  "penis-filler": {
    heading: "Doctor-Led Penile Filler Treatment",
    description:
      "Penile girth enhancement at Healing PRP Clinics is carried out by Dr Syed Abdi, GMC No. 6083294, a UK-trained and GMC-registered doctor experienced in non-surgical intimate health procedures. Your private consultation includes a review of your medical history, anatomy, expectations and treatment goals. Where suitable, hyaluronic acid filler is carefully administered using a planned approach to support proportionate girth enhancement. Treatment includes discussion of potential risks, realistic outcomes and personalised aftercare to support safe recovery and appropriate follow-up.",
  },

  "intimate-health": {
    heading: "Doctor-Led Intimate Health Care",
    description:
      "Your consultation and treatment are carried out by Dr Syed Abdi, GMC No. 6083294, a UK-trained and GMC-registered doctor with experience in non-surgical intimate health procedures. We provide discreet, individualised assessment for women's intimate health concerns, including vaginal dryness and changes affecting comfort or wellbeing. Your medical history, symptoms and treatment goals are reviewed before suitable options are discussed. Recommendations are based on clinical assessment, informed consent and realistic expectations.",
  },

  "peyronies": {
  heading: "Doctor-Led Peyronie's Disease Treatment",
  description:
    "Your Peyronie's disease consultation is carried out by Dr Syed Abdi, GMC No. 6083294, a UK-trained and GMC-registered doctor with experience in non-surgical intimate health procedures. Your assessment considers penile curvature, plaque formation, discomfort and erectile function. Depending on the stage of the condition and clinical suitability, options discussed may include hyaluronic acid (HA) plaque injections, platelet-rich plasma (PRP/P-Shot) and shockwave therapy. Evidence for HA and PRP treatments remains limited, while shockwave therapy may help pain but has not been shown to correct curvature. Treatment planning is individualised, with realistic expectations and informed consent.",
  },

  "hair-restoration": {
    heading: "Doctor-Led Hair Restoration Treatments",
    description:
      "Hair restoration consultations at Healing PRP Clinics are carried out by Dr Syed Abdi, GMC No. 6083294, a UK-trained and GMC-registered doctor with experience in non-surgical hair and scalp procedures. Each patient receives an individual assessment of their hair loss pattern, scalp health, medical history and treatment goals. Depending on clinical suitability, options may include personalised scalp injection treatments and discussion of emerging exosome-based hair treatments. The evidence for exosome-based hair restoration remains preliminary, and any treatment must meet applicable regulatory requirements. We explain potential benefits, limitations, risks and realistic expectations before proceeding.",
  },
};

export default function EDFeatureBlock({
  variant = "ed",
}: EDFeatureBlockProps) {
  const content = featureContent[variant];

  return (
    <section className="py-24 bg-white font-inter border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          {/* Doctor photograph */}
          <div className="shrink-0 relative">
            <Image
              src="/dr-syed-abdi.webp"
              alt="Dr Syed Abdi, GMC-registered doctor at Healing PRP Clinics"
              width={192}
              height={192}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-md mx-auto md:mx-0 border-4 border-white"
              loading="lazy"
              quality={85}
            />
          </div>

          {/* Treatment-specific content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900 mb-4">
              {content.heading}
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
              {content.description}
            </p>

            {/* Existing doctor profile links */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
              <Link
                href="/our-doctor"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#4041d1] hover:text-[#2a2bb8] transition-colors font-inter group"
              >
                Meet Dr Syed Abdi
                <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="https://www.linkedin.com/in/syed-abdi-056b28b9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0A66C2] hover:text-[#004182] transition-colors font-inter"
              >
                <FaLinkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
