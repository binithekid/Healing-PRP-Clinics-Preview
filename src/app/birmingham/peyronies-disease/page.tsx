import type { Metadata } from "next";
import PeyroniesClient from "@/components/pages/PeyroniesClient";
import Script from "next/script";

export const metadata: Metadata = {
  // 1. Optimized Title: The layout adds " | Birmingham Clinic"
  // Final Result: "Peyronie's Disease Treatment & Correction | Birmingham Clinic"
  title: "Peyronie's Disease Treatment & Correction",

  description:
    "Expert Peyronie's disease treatment in Birmingham (Edgbaston). Non-surgical P-Shot® and Shockwave therapy to improve curvature, pain, and function. Private doctor-led care.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/peyronies-disease",
  },

  // 2. Expanded Local & Clinical Keywords (West Midlands)
  keywords: [
    // Core Clinical Terms
    "Peyronies disease treatment Birmingham",
    "Peyronies correction Edgbaston",
    "P-Shot for Peyronies West Midlands",
    "Shockwave therapy for Peyronies Birmingham",
    "Penile curvature clinic Solihull",
    "Bent penis treatment Sutton Coldfield",
    "Peyronies specialist Walsall",
    "Non-surgical Peyronies help",
    "Peyronies plaque reduction Birmingham",
    "Male sexual health clinic Edgbaston",
    
    // Broader Midlands Reach
    "Peyronies doctor Wolverhampton",
    "Private Peyronies clinic Midlands",
    "Erectile curvature treatment Birmingham"
  ],

  openGraph: {
    title: "Peyronie's Disease Treatment | Birmingham (Edgbaston)",
    description:
      "Specialist non-surgical care for Peyronie's disease. PRP and Shockwave therapy at our private Birmingham clinic.",
    url: "https://www.healing-prp.co.uk/birmingham/peyronies-disease",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic & Medical Therapy (Birmingham) ---
const peyroniesSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "name": "Healing-PRP Clinics Birmingham",
      "description": "Doctor-led clinic in Edgbaston, Birmingham providing specialist non-surgical treatments for Peyronie's disease, including Shockwave Therapy and PRP.",
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
      "medicalSpecialty": ["Urology", "Men's Health"],
      // --- E-E-A-T UPGRADE: Connecting You to the Clinic ---
      "medicalDirector": {
        "@type": "Physician",
        "name": "Dr Syed Abdi",
        "url": "https://www.healing-prp.co.uk/our-doctor"
      }
    },
    {
      "@type": "MedicalTherapy",
      "name": "Peyronie's Disease Treatment (Non-Surgical)",
      "alternateName": ["Shockwave Therapy for Peyronie's", "P-Shot for Peyronie's", "Penile Curvature Treatment"],
      "description": "Advanced non-surgical therapies, including autologous PRP and low-intensity extracorporeal shockwave therapy (Li-ESWT), designed to break down plaque, reduce curvature, and relieve pain associated with Peyronie's disease.",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "Urology"
      }
    }
  ]
};

import type { Metadata } from "next";
import PeyroniesClient from "@/components/pages/PeyroniesClient";
import Script from "next/script";

export const metadata: Metadata = {
  // 1. Optimized Title: The layout adds " | Birmingham Clinic"
  // Final Result: "Peyronie's Disease Treatment & Correction | Birmingham Clinic"
  title: "Peyronie's Disease Treatment & Correction",

  description:
    "Expert Peyronie's disease treatment in Birmingham (Edgbaston). Non-surgical P-Shot® and Shockwave therapy to improve curvature, pain, and function. Private doctor-led care.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/peyronies-disease",
  },

  // 2. Expanded Local & Clinical Keywords (West Midlands)
  keywords: [
    // Core Clinical Terms
    "Peyronies disease treatment Birmingham",
    "Peyronies correction Edgbaston",
    "P-Shot for Peyronies West Midlands",
    "Shockwave therapy for Peyronies Birmingham",
    "Penile curvature clinic Solihull",
    "Bent penis treatment Sutton Coldfield",
    "Peyronies specialist Walsall",
    "Non-surgical Peyronies help",
    "Peyronies plaque reduction Birmingham",
    "Male sexual health clinic Edgbaston",
    
    // Broader Midlands Reach
    "Peyronies doctor Wolverhampton",
    "Private Peyronies clinic Midlands",
    "Erectile curvature treatment Birmingham"
  ],

  openGraph: {
    title: "Peyronie's Disease Treatment | Birmingham (Edgbaston)",
    description:
      "Specialist non-surgical care for Peyronie's disease. PRP and Shockwave therapy at our private Birmingham clinic.",
    url: "https://www.healing-prp.co.uk/birmingham/peyronies-disease",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic & Medical Therapy (Birmingham) ---
const peyroniesSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "name": "Healing-PRP Clinics Birmingham",
      "description": "Doctor-led clinic in Edgbaston, Birmingham providing specialist non-surgical treatments for Peyronie's disease, including Shockwave Therapy and PRP.",
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
      "medicalSpecialty": ["Urology", "Men's Health"],
      // --- E-E-A-T UPGRADE: Connecting You to the Clinic ---
      "medicalDirector": {
        "@type": "Physician",
        "name": "Dr Syed Abdi",
        "url": "https://www.healing-prp.co.uk/our-doctor"
      }
    },
    {
      "@type": "MedicalTherapy",
      "name": "Peyronie's Disease Treatment (Non-Surgical)",
      "alternateName": ["Shockwave Therapy for Peyronie's", "P-Shot for Peyronie's", "Penile Curvature Treatment"],
      "description": "Advanced non-surgical therapies, including autologous PRP and low-intensity extracorporeal shockwave therapy (Li-ESWT), designed to break down plaque, reduce curvature, and relieve pain associated with Peyronie's disease.",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "Urology"
      }
    }
  ]
};

export default function Page() {
  return (
    <main>
      {/* Inject Medical Entity Schema */}
      <Script
        id="peyronies-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(peyroniesSchemaBirmingham) }}
      />
      
      {/* Removed the locationName prop so TypeScript stays happy! */}
      <PeyroniesClient />
    </main>
  );
}
