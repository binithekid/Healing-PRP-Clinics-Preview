import type { Metadata } from "next";
import JointInjectionsClient from "@/components/pages/JointInjectionsClient";
import Script from "next/script";

export const metadata: Metadata = {
  // 1. Optimized Title: Added "Doctor-Led" for medical authority. The layout appends "| St Albans Clinic"
  title: "Doctor-Led PRP & Steroid Joint Injections",
  
  description:
    "Doctor-led joint injections in St Albans. Specialist PRP therapy and Corticosteroid injections for arthritis, sports injuries, and joint pain. Serving Harpenden, Radlett & Watford.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/joint-injections",
  },

  // 2. Expanded Local & Condition-Specific Keywords
  keywords: [
    "Joint injections St Albans",
    "PRP knee injection Hertfordshire",
    "Private steroid injection St Albans",
    "Arthritis pain relief Harpenden",
    "Sports injury clinic Radlett",
    "Frozen shoulder injection Watford",
    "Tennis elbow treatment Hemel Hempstead",
    "Hip pain injections Berkhamsted",
    "Knee osteoarthritis treatment North London",
    "Private orthopedic doctor Hertfordshire",
    "Corticosteroid injection St Albans"
  ],
  
  openGraph: {
    title: "Doctor-Led PRP & Steroid Joint Injections",
    description:
      "Doctor-led PRP and Steroid injections for arthritis and pain relief. Serving patients in St Albans, Harpenden, and across Hertfordshire.",
    url: "https://www.healing-prp.co.uk/joint-injections",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- E-E-A-T SCHEMA UPGRADE: Medical Clinic & Therapy ---
const jointSchema = {
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
      "name": "PRP & Steroid Joint Injections",
      "alternateName": ["Corticosteroid Injections", "Platelet-Rich Plasma Joint Therapy"],
      "description": "Doctor-led joint injections utilizing Corticosteroids and Platelet-Rich Plasma (PRP) to treat arthritis, sports injuries, and chronic joint pain.",
      "relevantSpecialty": [
        {
          "@type": "MedicalSpecialty",
          "name": "Rheumatology"
        },
        {
          "@type": "MedicalSpecialty",
          "name": "Orthopedics"
        }
      ]
    }
  ]
};

export default function JointInjectionsPage() {
  return (
    <>
      <Script
        id="joint-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jointSchema) }}
      />
      <JointInjectionsClient locationName="St Albans" />
    </>
  );
}
