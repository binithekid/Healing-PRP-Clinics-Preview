import type { Metadata } from "next";
import BirminghamHomeClient from "@/components/pages/BirminghamHomeClient";
import Script from "next/script";

export const metadata: Metadata = {
  // REDUCED TITLE: The layout will now add " | Birmingham Clinic" automatically
  title: "Healing-PRP Clinics", 
  
  description:
    "Leading private clinic in Birmingham for PRP Hair Restoration, Joint Injections & Sexual Rejuvenation. Specialist Erectile Dysfunction (ED) solutions and P-Shot® therapy. Doctor-led care serving Birmingham, Solihull & Sutton Coldfield.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham",
  },
  
  keywords: [
    // --- CORE CLINIC KEYWORDS ---
    "PRP Clinic Birmingham",
    "Private Doctor Birmingham",
    "Regenerative Medicine Birmingham",
    "Private medical clinic Edgbaston",
    
    // --- MEN'S HEALTH & ED ---
    "Erectile Dysfunction treatment Birmingham", 
    "ED clinic West Midlands",                    
    "P-Shot Birmingham",
    "Mens health clinic Solihull",
    
    // --- WOMEN'S HEALTH ---
    "O-Shot Birmingham",
    "Womens sexual wellness clinic West Midlands",
    
    // --- HAIR RESTORATION ---
    "Hair Loss Treatment Birmingham",
    "Hair restoration Wolverhampton",            
    "PRP hair therapy Sutton Coldfield",
    
    // --- JOINT PAIN ---
    "Joint Pain Clinic Birmingham",
    "Joint injections Sutton Coldfield",        
    "PRP for joint pain West Midlands",
    
    // --- SKIN & AESTHETICS ---
    "Vampire Facial Dudley",                    
    "Polynucleotides Birmingham",
    "Exosome therapy West Midlands"
  ],
  
  openGraph: {
    title: "Healing-PRP Clinics | Birmingham Location",
    description:
      "Doctor-led regenerative treatments and Erectile Dysfunction (ED) solutions in Birmingham. Serving Solihull, Sutton Coldfield & West Midlands.",
    url: "https://www.healing-prp.co.uk/birmingham",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- JSON-LD SCHEMA: Master Medical Clinic (Birmingham) ---
const birminghamHomeSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Healing-PRP Clinics Birmingham",
  "description": "Leading private doctor-led clinic in Birmingham specialising in regenerative medicine, PRP, Erectile Dysfunction, Joint Injections, and Hair Restoration.",
  "url": "https://www.healing-prp.co.uk/birmingham",
  "logo": "https://www.healing-prp.co.uk/Logo2.png",
  "image": "https://www.healing-prp.co.uk/Logo2.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Birmingham",
    "addressRegion": "West Midlands",
    "addressCountry": "UK"
  },
  // Broad medical specialties to capture wide local search intent
  "medicalSpecialty": [
    "Urology", 
    "Men's Health", 
    "Women's Health", 
    "Dermatology", 
    "Rheumatology"
  ]
};

export default function BirminghamPage() {
  return (
    <>
      <Script
        id="home-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(birminghamHomeSchema) }}
      />
      <BirminghamHomeClient />
    </>
  );
}
