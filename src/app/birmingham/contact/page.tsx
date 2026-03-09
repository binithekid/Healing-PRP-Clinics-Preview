import type { Metadata } from "next";
import ContactClient from "@/components/pages/ContactClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Erectile Dysfunction & P-Shot Clinic Birmingham | Contact Us",
  description: "Discreet medical treatment for Erectile Dysfunction (ED) in Birmingham. Book a private consultation for P-Shot® and regenerative wellness in Edgbaston.",
  keywords: [
    "Erectile Dysfunction treatment Birmingham",
    "ED clinic West Midlands",
    "P-Shot Birmingham",
    "Priapus Shot Edgbaston",
    "Men's sexual health Birmingham",
    "Shockwave therapy ED Birmingham",
    "Regenerative medicine for ED",
    "Private urology consultation Birmingham"
  ],
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/contact", 
  },
};

// --- CONTACT PAGE SCHEMA: Medical Clinic & Contact Point ---
const contactSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "name": "Healing-PRP Clinics Birmingham",
      "url": "https://www.healing-prp.co.uk/birmingham/contact",
      "image": "https://www.healing-prp.co.uk/Logo2.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Birmingham",
        "addressRegion": "West Midlands",
        "addressCountry": "UK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "52.4716", // Approximate for Edgbaston/Birmingham
        "longitude": "-1.9130"
      },
      "medicalDirector": {
        "@type": "Physician",
        "name": "Dr Syed Abdi",
        "url": "https://www.healing-prp.co.uk/our-doctor"
      }
    }
  ]
};

export default function BirminghamContactPage() {
  return (
    <>
      <Script
        id="contact-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchemaBirmingham) }}
      />
      <ContactClient />
    </>
  );
}
