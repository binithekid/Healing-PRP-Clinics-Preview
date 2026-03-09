import type { Metadata } from "next";
import ContactClient from "@/components/pages/ContactClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Erectile Dysfunction (ED) & P-Shot Clinic St Albans | Near Luton",
  description: "Private medical treatment for Erectile Dysfunction (ED) and P-Shot® in St Albans. Expert regenerative care serving patients from Luton, Dunstable, and Hertfordshire.",
  keywords: [
    "Erectile Dysfunction treatment Luton",
    "P-Shot clinic Bedfordshire",
    "ED treatment Hertfordshire",
    "Erectile Dysfunction clinic St Albans",
    "Men's sexual health Luton",
    "Priapus Shot St Albans",
    "Private ED clinic Hertfordshire",
    "Regenerative medicine St Albans",
    "GMC registered doctor Luton",
    "P-Shot Luton"
  ],
  alternates: {
    canonical: "https://www.healing-prp.co.uk/contact", 
  },
};

// --- CONTACT PAGE SCHEMA: Medical Clinic & Trust signals for St Albans ---
const contactSchemaStAlbans = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "name": "Healing-PRP Clinics St Albans",
      "url": "https://www.healing-prp.co.uk/contact",
      "image": "https://www.healing-prp.co.uk/Logo2.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "St Albans",
        "addressRegion": "Hertfordshire",
        "addressCountry": "UK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.7527",
        "longitude": "-0.3394"
      },
      "medicalDirector": {
        "@type": "Physician",
        "name": "Dr Syed Abdi",
        "url": "https://www.healing-prp.co.uk/our-doctor"
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="contact-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchemaStAlbans) }}
      />
      <ContactClient />
    </>
  );
}
