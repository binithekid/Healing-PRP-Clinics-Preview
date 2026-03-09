import type { Metadata } from "next";
import HairRestorationClient from "@/components/pages/HairRestorationClient";
import Script from "next/script";

export const metadata: Metadata = {
  // 1. Optimized Title: The layout template will append "| Birmingham Clinic" automatically
  title: "Doctor-Led PRP Hair Loss Treatment", 
  
  description:
    "Doctor-led PRP and Exosome hair restoration in Birmingham. Advanced non-surgical treatments for hair thinning. Serving Solihull, Sutton Coldfield, and the West Midlands.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/hair-restoration",
  },
  
  // 2. Expanded Regional & Treatment Keywords
  keywords: [
    "PRP hair treatment Birmingham",
    "Hair loss treatment Solihull",
    "Hair restoration Sutton Coldfield",
    "Exosome hair therapy West Midlands",
    "Male pattern baldness Wolverhampton",
    "Female hair thinning treatment Dudley",
    "PRP hair clinic Edgbaston",
    "Non-surgical hair transplant alternative Birmingham",
    "Thinning hair specialist Stourbridge",
    "Scalp PRP treatment Halesowen"
  ],
  
  openGraph: {
    title: "Doctor-Led PRP Hair Restoration Clinic | Birmingham",
    description:
      "Effective, non-surgical hair regrowth treatments using PRP and Exosomes. Doctor-led clinic in Birmingham Edgbaston.",
    url: "https://www.healing-prp.co.uk/birmingham/hair-restoration",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic & Medical Therapy (Birmingham) ---
const hairSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "name": "Healing-PRP Clinics Birmingham",
      "description": "Doctor-led hair restoration clinic in Edgbaston offering PRP and Exosome therapies for hair loss.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Birmingham",
        "addressRegion": "West Midlands",
        "addressCountry": "UK"
      },
      "areaServed": {
        "@type": "City",
        "name": "Birmingham"
      },
      "medicalSpecialty": ["Dermatology", "Aesthetic Medicine"],
      // --- E-E-A-T UPGRADE: Connecting You to the Hair Clinic ---
      "medicalDirector": {
        "@type": "Physician",
        "name": "Dr Syed Abdi",
        "url": "https://www.healing-prp.co.uk/our-doctor"
      }
    },
    {
      "@type": "MedicalTherapy",
      "name": "Hair Restoration & Regrowth",
      "alternateName": ["PRP Hair Treatment", "Exosome Hair Therapy", "Non-Surgical Hair Restoration"],
      "description": "Advanced regenerative treatments using autologous Platelet-Rich Plasma (PRP) and Exosomes to stimulate hair follicles, reduce thinning, and promote hair regrowth in Birmingham.",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "Dermatology"
      }
    }
  ]
};

export default function BirminghamHairRestorationPage() {
  return (
    <main>
      {/* Inject Medical Entity Schema */}
      <Script
        id="hair-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hairSchemaBirmingham) }}
      />
      
      <HairRestorationClient locationName="Birmingham" />
    </main>
  );
}
