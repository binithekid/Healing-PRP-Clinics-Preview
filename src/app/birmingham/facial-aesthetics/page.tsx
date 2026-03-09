import type { Metadata } from "next";
import FacialAestheticsClient from "@/components/pages/FacialAestheticsClient";
import Script from "next/script";

export const metadata: Metadata = {
  // 1. Upgraded Title: Captures the broad category AND the specific high-ticket treatments.
  title: {
    absolute: "Facial Aesthetics Birmingham | PRP & Polynucleotides | Healing-PRP",
  },
  
  description:
    "Doctor-led facial aesthetics in Birmingham Edgbaston. Specialist treatments including Vampire Facials, Polynucleotides, and HA Skin Boosters. Serving Solihull, Sutton Coldfield & Harborne.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/facial-aesthetics",
  },
  
  keywords: [
    "Facial Aesthetics Birmingham",
    "Vampire Facial Birmingham",
    "Polynucleotides Solihull",
    "Skin Boosters Sutton Coldfield",
    "PRP Facial West Midlands",
    "Profhilo Birmingham",
    "Seventy Hyal Harborne",
    "Aesthetics clinic Wolverhampton",
    "Exosomes treatment Dudley",
    "Skin rejuvenation Walsall",
    "Microneedling with PRP Birmingham",
    "Anti-ageing injections Halesowen",
    "Doctor led skin clinic Birmingham"
  ],
  
  openGraph: {
    title: "Facial Aesthetics & Skin Rejuvenation | Birmingham",
    description:
      "Restore youthful skin with doctor-led aesthetics in Birmingham. Specialist in Polynucleotides and PRP. Serving Solihull & Sutton Coldfield.",
    url: "https://www.healing-prp.co.uk/birmingham/facial-aesthetics",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic & Medical Therapy (Birmingham) ---
const aestheticsSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "name": "Healing-PRP Clinics Birmingham",
      "description": "Doctor-led facial aesthetics clinic in Edgbaston offering Polynucleotides, PRP Facials, and Skin Boosters.",
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
      // --- E-E-A-T UPGRADE: Connecting You to the Aesthetics Clinic ---
      "medicalDirector": {
        "@type": "Physician",
        "name": "Dr Syed Abdi",
        "url": "https://www.healing-prp.co.uk/our-doctor"
      }
    },
    {
      "@type": "MedicalTherapy",
      "name": "Facial Aesthetics & Skin Rejuvenation",
      "alternateName": ["Vampire Facial", "Polynucleotides", "PRP Skin Rejuvenation", "HA Skin Boosters"],
      "description": "Advanced regenerative facial treatments using autologous Platelet-Rich Plasma (PRP) and Polynucleotides to stimulate collagen, improve skin texture, and reduce signs of aging.",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "Aesthetic Medicine"
      }
    }
  ]
};

export default function BirminghamFacialPage() {
  return (
    <main>
      {/* Inject Medical Entity Schema */}
      <Script
        id="aesthetics-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aestheticsSchemaBirmingham) }}
      />
      
      <FacialAestheticsClient locationName="Birmingham" />
    </main>
  );
}
