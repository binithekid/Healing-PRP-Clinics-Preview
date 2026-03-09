import type { Metadata } from "next";
import FacialAestheticsClient from "@/components/pages/FacialAestheticsClient";
import Script from "next/script";

export const metadata: Metadata = {
  // NEW TITLE STRATEGY: Focus on the "Doctor-Led" authority and "Skin Rejuvenation" intent.
  // This addresses the 'YMYL' (Your Money Your Life) requirements Google has for medical sites.
  title: "Doctor-Led Polynucleotides & Skin Rejuvenation St Albans", 
  
  description:
    "Advanced Polynucleotides & PRP Vampire Facials in St Albans by GMC-registered Dr Syed Abdi. Targeted skin boosters for under-eyes, neck & face. Book a medical consultation.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/facial-aesthetics",
  },
  
  keywords: [
    // HIGH-INTENT BREAD-AND-BUTTER KEYWORDS
    "Polynucleotides St Albans",
    "Skin boosters St Albans",
    "PRP Vampire Facial Hertfordshire",
    "Under eye rejuvenation St Albans",
    "Nucleofill treatment Hertfordshire",
    "Regenerative aesthetics St Albans",
    "Doctor led aesthetics Harpenden",
    "Skin clinic Radlett",
    "Natural skin rejuvenation Watford",
    "Polynucleotides for dark circles UK"
  ],
  
  openGraph: {
    title: "Doctor-Led Skin Rejuvenation & Polynucleotides | St Albans",
    description: "Restore skin quality with regenerative medical treatments. Specialist Polynucleotides & PRP care lead by Dr Syed Abdi in St Albans.",
    url: "https://www.healing-prp.co.uk/facial-aesthetics",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- E-E-A-T SCHEMA UPGRADE: Proving Medical Authority ---
const aestheticsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "name": "Healing-PRP Clinics St Albans",
      "alternateName": "Healing-PRP Aesthetics",
      "url": "https://www.healing-prp.co.uk/facial-aesthetics",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "St Albans",
        "addressRegion": "Hertfordshire",
        "addressCountry": "UK"
      },
      "medicalDirector": {
        "@type": "Physician",
        "name": "Dr Syed Abdi",
        "url": "https://www.healing-prp.co.uk/our-doctor"
      }
    },
    {
      "@type": "MedicalSpecialty",
      "name": "Aesthetic Medicine"
    }
  ]
};

export default function StAlbansFacialPage() {
  return (
    <>
      <Script
        id="aesthetics-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aestheticsSchema) }}
      />
      <FacialAestheticsClient locationName="St Albans" />
    </>
  );
}
