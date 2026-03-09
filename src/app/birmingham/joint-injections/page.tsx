import type { Metadata } from "next";
import JointInjectionsClient from "@/components/pages/JointInjectionsClient";
import Script from "next/script";

export const metadata: Metadata = {
  // 1. Optimized Title: Clean and ready for the Layout Template
  // Final Result: "PRP & Steroid Joint Injections | Birmingham Clinic"
  title: "PRP & Steroid Joint Injections",
  
  description:
    "Doctor-led joint injections in Birmingham Edgbaston. Specialist PRP therapy and Corticosteroid injections for arthritis, sports injuries, and joint pain. Serving Solihull & West Midlands.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/joint-injections",
  },

  // 2. Expanded Regional & Condition Keywords
  keywords: [
    "Joint injections Birmingham",
    "PRP knee injection West Midlands",
    "Private steroid injection Birmingham",
    "Arthritis pain relief Solihull",
    "Sports injury clinic Sutton Coldfield",
    "Frozen shoulder injection Halesowen",
    "Tennis elbow treatment Dudley",
    "Hip pain injections Stourbridge",
    "Knee osteoarthritis treatment Wolverhampton",
    "Private orthopedic doctor Edgbaston",
    "Corticosteroid injection Walsall",
    "PRP therapy Bromsgrove"
  ],
  
  openGraph: {
    title: "Joint Pain Relief Clinic | Birmingham",
    description:
      "Doctor-led PRP and Steroid injections for arthritis and sports injuries. Serving patients in Birmingham, Solihull, and across the West Midlands.",
    url: "https://www.healing-prp.co.uk/birmingham/joint-injections",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic & Medical Therapy (Birmingham) ---
const jointSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "name": "Healing-PRP Clinics Birmingham",
      "description": "Doctor-led clinic in Edgbaston offering PRP and Corticosteroid joint injections for pain relief and arthritis.",
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
      "medicalSpecialty": ["Orthopedics", "Sports Medicine", "Rheumatology"],
      // --- E-E-A-T UPGRADE: Connecting You to the Clinic ---
      "medicalDirector": {
        "@type": "Physician",
        "name": "Dr Syed Abdi",
        "url": "https://www.healing-prp.co.uk/our-doctor"
      }
    },
    {
      "@type": "MedicalTherapy",
      "name": "PRP & Steroid Joint Injections",
      "alternateName": ["Platelet-Rich Plasma Joint Therapy", "Corticosteroid Injections", "Orthobiologics"],
      "description": "Targeted joint injections using autologous PRP or Corticosteroids to reduce inflammation, manage osteoarthritis, and accelerate healing of sports injuries in Birmingham.",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "Orthopedics"
      }
    }
  ]
};

export default function BirminghamJointInjectionsPage() {
  return (
    <main>
      {/* Inject Medical Entity Schema */}
      <Script
        id="joint-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jointSchemaBirmingham) }}
      />
      
      <JointInjectionsClient locationName="Birmingham" />
    </main>
  );
}
