import type { Metadata } from "next";
import ErectileDysfunctionClient from "@/components/pages/ErectileDysfunctionClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    // FIX: Focused on Birmingham & Midlands for browser tab
    absolute: "Erectile Dysfunction Treatment Birmingham | Healing-PRP",
  },

  description:
    "Specialist erectile dysfunction clinic in Birmingham. GMC-registered doctor offering non-surgical Shockwave Therapy & P-Shot (PRP). Confidential ED treatment in Edgbaston.",

  alternates: {
    // NOTE: Ensures Google knows this is the Birmingham specific page
    canonical: "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction",
  },

  keywords: [
    // --- CORE BIRMINGHAM KEYWORDS ---
    "Erectile dysfunction treatment Birmingham",
    "ED clinic Birmingham",
    "P-Shot Birmingham",
    "Shockwave therapy Birmingham",
    
    // --- HIDDEN REACH KEYWORDS (Manchester / Midlands) ---
    "Mens health clinic Manchester",
    "ED treatment Manchester",
    "Erectile dysfunction clinic Midlands",
    "Shockwave therapy West Midlands",
    
    // --- HYPER-LOCAL KEYWORDS ---
    "Private ED clinic Edgbaston",
    "Erectile dysfunction clinic Solihull",
    "ED treatment Sutton Coldfield",
    
    // --- INTENT & COST KEYWORDS ---
    "Non-surgical impotence treatment",
    "GMC registered male health doctor",
    "Male performance clinic Birmingham",
    "Private impotence doctor West Midlands",
    "ED treatment cost Birmingham",
    "Erectile dysfunction clinic consultation West Midlands"
  ],

  openGraph: {
    title: "Erectile Dysfunction Treatment | Birmingham & Midlands",
    description:
      "Confidential, doctor-led ED treatments in Birmingham. Shockwave & PRP therapy. Conveniently serving Edgbaston, Solihull & Sutton Coldfield.",
    url: "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/ed-doctor-consultation.webp",
        width: 1200,
        height: 630,
        alt: "Private ED Consultation Birmingham",
      },
    ],
  },
};

// --- JSON-LD SCHEMA: Medical Clinic & Medical Therapy (Birmingham) ---
const edSchemaBirmingham = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics Birmingham",
    "description": "Specialist erectile dysfunction clinic in Birmingham offering Shockwave Therapy and PRP.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Birmingham",
      "addressRegion": "West Midlands",
      "addressCountry": "UK"
    },
    "medicalSpecialty": "Urology"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Erectile Dysfunction Treatment",
    "alternateName": ["Shockwave Therapy for ED", "P-Shot®", "PRP for ED"],
    "description": "Non-surgical, restorative treatments for erectile dysfunction including Low-Intensity Extracorporeal Shockwave Therapy (Li-ESWT) and Platelet-Rich Plasma (P-Shot) in Birmingham.",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Urology"
    }
  }
];

export default function BirminghamEDPage() {
  return (
    <>
      <Script
        id="ed-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(edSchemaBirmingham) }}
      />
      <ErectileDysfunctionClient 
        // 1. HEADLINE: "Healing-PRP Clinics, Birmingham"
        locationName="Birmingham"
        
        // 2. BADGE: Local catchment areas
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        
        // 3. LINK: Points to your BIRMINGHAM P-Shot page (crucial for navigation)
        pShotLink="/birmingham/p-shot"
      />
    </>
  );
}
