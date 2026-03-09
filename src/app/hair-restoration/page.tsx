import type { Metadata } from "next";
import HairRestorationClient from "@/components/pages/HairRestorationClient";
import Script from "next/script";

export const metadata: Metadata = {
  // 1. Optimized Title: Added "Doctor-Led" to establish immediate medical authority
  title: "Doctor-Led PRP Hair Loss Treatment | St Albans Clinic", 
  
  description:
    "Doctor-led PRP and Exosome hair restoration in St Albans. Non-surgical treatment for hair thinning and regrowth. Serving Harpenden, Radlett, and Hertfordshire.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/hair-restoration",
  },
  
  // 2. Expanded Local & Clinical Keywords (Preserved exactly as you wrote them)
  keywords: [
    "PRP hair treatment St Albans",
    "Hair loss treatment Hertfordshire",
    "Hair restoration Harpenden",
    "Exosome hair therapy Radlett",
    "Male pattern baldness St Albans",
    "Female hair thinning treatment Watford",
    "PRP hair clinic Hemel Hempstead",
    "Non-surgical hair transplant alternative",
    "Thinning hair specialist Berkhamsted",
    "PRP scalp treatment North London"
  ],
  
  openGraph: {
    title: "Doctor-Led PRP Hair Loss Treatment | St Albans Clinic",
    description:
      "Effective, non-surgical hair regrowth treatments using PRP and Exosomes. Doctor-led clinic in St Albans.",
    url: "https://www.healing-prp.co.uk/hair-restoration",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- E-E-A-T SCHEMA UPGRADE: Medical Clinic & Therapy ---
const hairSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "name": "Healing-PRP Clinics St Albans",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "St Albans",
        "addressRegion": "Hertfordshire",
        "addressCountry": "UK"
      },
      // The "Power Move" for Local SEO:
      "areaServed": {
        "@type": "City",
        "name": "St Albans"
      },
      "medicalDirector": {
        "@type": "Physician",
        "name": "Dr Syed Abdi",
        "url": "https://www.healing-prp.co.uk/our-doctor"
      }
    },
    {
      "@type": "MedicalTherapy",
      "name": "PRP & Exosome Hair Restoration",
      "alternateName": ["Platelet-Rich Plasma Hair Treatment", "Non-Surgical Hair Regrowth"],
      "description": "Advanced non-surgical medical hair restoration using autologous Platelet-Rich Plasma (PRP) and Exosomes to stimulate dormant hair follicles, increase hair density, and treat thinning hair.",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "Dermatology"
      }
    }
  ]
};

export default function HairRestorationPage() {
  return (
    <>
      <Script
        id="hair-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hairSchema) }}
      />
      <HairRestorationClient locationName="St Albans" />
    </>
  );
}
