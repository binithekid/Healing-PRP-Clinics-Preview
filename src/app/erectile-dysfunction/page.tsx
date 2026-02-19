import type { Metadata } from "next";
import ErectileDysfunctionClient from "@/components/pages/ErectileDysfunctionClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    // FIX: Use 'absolute' to prevent layout conflicts and ensure exact SEO title
    absolute: "Erectile Dysfunction Treatment St Albans | Healing-PRP",
  },

  description:
    "Doctor-led Erectile Dysfunction (ED) clinic serving Luton & St Albans. We restore natural function using Shockwave Therapy and PRP (P-Shot®). Private, non-pharmaceutical ED solutions.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/erectile-dysfunction",
  },

  keywords: [
    // --- HIGH PRIORITY LOCAL TERMS (Luton Focus) ---
    "Erectile dysfunction treatment Luton",
    "Private ED clinic Luton",
    "Men's health clinic near Luton",
    "Impotence treatment Bedfordshire",
    
    // --- CORE CLINICAL TERMS (St Albans/Herts Focus) ---
    "Erectile dysfunction treatment St Albans",
    "Shockwave therapy Hertfordshire",
    "Vascular ED treatment St Albans",
    "Non-surgical impotence cure",
    
    // --- SPECIFIC TREATMENTS & COMPARISONS ---
    "P-Shot for erectile dysfunction",
    "Viagra alternative Luton",
    "Low intensity shockwave therapy London",
    "Restorative sexual medicine",
    
    // --- HIGH-INTENT / COST QUERIES ---
    "Private ED doctor Harpenden",
    "Male performance clinic Watford",
    "Erectile dysfunction clinic consultation cost"
  ],

  openGraph: {
    title: "Erectile Dysfunction Treatment | Luton & St Albans",
    description:
      "Restore spontaneity and confidence. Doctor-led Shockwave & PRP therapy for ED. Conveniently serving Luton, St Albans, and Hertfordshire.",
    url: "https://www.healing-prp.co.uk/erectile-dysfunction",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- JSON-LD SCHEMA: Medical Clinic & Medical Therapy ---
const edSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics St Albans & Luton",
    "description": "Doctor-led Erectile Dysfunction (ED) clinic offering Shockwave Therapy and PRP.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "St Albans",
      "addressRegion": "Hertfordshire",
      "addressCountry": "UK"
    },
    "medicalSpecialty": "Urology"
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Erectile Dysfunction Treatment",
    "alternateName": ["Shockwave Therapy for ED", "P-Shot®", "PRP for ED"],
    "description": "Non-surgical, restorative treatments for erectile dysfunction including Low-Intensity Extracorporeal Shockwave Therapy (Li-ESWT) and Platelet-Rich Plasma (P-Shot).",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Urology"
    }
  }
];

export default function Page() {
  return (
    <>
      <Script
        id="ed-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(edSchema) }}
      />
      <ErectileDysfunctionClient 
        // 1. HEADLINE: "Healing-PRP Clinics, St Albans & Luton"
        locationName="St Albans"
        
        // 2. BADGE: Local catchment areas
        servingAreas="St Albans • Luton • Harpenden • Hertfordshire"
        
        // 3. LINK: Points to your main P-Shot page (src/app/p-shot/page.tsx)
        pShotLink="/p-shot"
      />
    </>
  );
}
