import type { Metadata } from "next";
import PricesClient from "@/components/pages/PricesClient";
import Script from "next/script";

export const metadata: Metadata = {
  // 1. Optimized Title: Result will be "Treatment Prices & Packages | Birmingham Clinic"
  title: "Treatment Prices & Packages", 
  
  description: "View competitive pricing for P-Shot, O-Shot, and PRP therapy in Birmingham. Doctor-led treatments in Edgbaston, Solihull, and the West Midlands.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/prices",
  },

  // 2. Expanded Local & Intent-Based Keywords
  keywords: [
    // --- MEN'S HEALTH & ED ---
    "ED treatment cost Birmingham",
    "Erectile dysfunction clinic prices West Midlands",
    "Personalised ED medication cost",
    "P-Shot price West Midlands",
    
    // --- WOMEN'S HEALTH ---
    "O-Shot cost Solihull",
    
    // --- HAIR RESTORATION ---
    "Affordable PRP hair loss Sutton Coldfield",
    "Hair regrowth course price West Midlands",
    
    // --- JOINT PAIN ---
    "Joint injection prices Wolverhampton",
    "Joint pain therapy cost Dudley",
    
    // --- SKIN & AESTHETICS ---
    "Polynucleotides price Birmingham",
    "Polynucleotide package cost West Midlands", 
    "Vampire Facial cost Harborne",
    
    // --- GENERAL CLINIC INTENT ---
    "Private clinic prices Edgbaston",
    "PRP treatment packages Birmingham"
  ],

  openGraph: {
    title: "Healing-PRP Clinics | Birmingham Price List",
    description: "Transparent pricing for specialist regenerative medicine in Birmingham. Serving Solihull, Sutton Coldfield & Harborne.",
    url: "https://www.healing-prp.co.uk/birmingham/prices",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// 3. The Local SEO Schema for Birmingham
const priceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Healing-PRP Clinics Birmingham",
  "priceRange": "£120 - £1800",
  "image": "https://www.healing-prp.co.uk/Logo2.png",
  "description": "Doctor-led regenerative medicine prices for Birmingham, Edgbaston, and the West Midlands.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Birmingham",
    "addressRegion": "West Midlands",
    "addressCountry": "UK"
  }
};

export default function BirminghamPricesPage() {
  return (
    <>
      <Script
        id="price-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }}
      />
      <PricesClient isBirmingham={true} />
    </>
  );
}
