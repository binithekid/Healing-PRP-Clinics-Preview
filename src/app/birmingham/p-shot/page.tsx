import type { Metadata } from "next";
import PShotClient from "@/components/pages/PShotClient";
import Script from "next/script";

export const metadata: Metadata = {
  // FIX: Perfectly compatible with your layout.tsx template!
  // Next.js will output: "P-Shot (Priapus Shot) Treatment | Birmingham Clinic"
  title: {
    absolute: "P-Shot Birmingham | Doctor-Led Priapus Shot Treatment",
  },
  
  description:
    "Private doctor-led P-Shot (Priapus Shot) treatment in Birmingham. PRP-based erectile dysfunction and penile rejuvenation care at our Edgbaston clinic.",
  keywords: [
    // Core Service Keywords
    "P-Shot Birmingham",
    "Priapus Shot Birmingham",
    "P-Shot Edgbaston",
    "PRP for erectile dysfunction Birmingham",
    "Penile rejuvenation Birmingham",
    "P-Shot cost Birmingham",
    
    // User Intent (Cost/Doctor)
    "P-Shot cost Birmingham",
    "GMC registered P-Shot doctor",
    "Non-surgical erectile treatment"
  ],
  alternates: {
    // NOTE: Ensure this matches your actual live domain
    canonical: "https://www.healing-prp.co.uk/birmingham/p-shot",
  },
  openGraph: {
    title: "Doctor-Led P-Shot Treatment (Priapus Shot) | Birmingham",
    description: "Doctor-led P-Shot & Exo-P clinic in Birmingham. Advanced PRP therapy for performance and rejuvenation.",
    url: "https://www.healing-prp.co.uk/birmingham/p-shot",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/p-shot-consultation.webp",
        width: 1200,
        height: 630,
        alt: "P-Shot Treatment Consultation Birmingham",
      },
    ],
  },
};

// --- SEO RICH FAQS (Birmingham & West Midlands Focus) ---
const faqs = [
  {
    question: "What is the P-Shot and is it available in Birmingham?",
    answer: "Yes, the P-Shot (Priapus Shot) is available at our private Birmingham clinic. It is a doctor-led treatment using platelet-rich plasma (PRP), discussed during consultation for suitable men seeking support for erectile dysfunction, reduced firmness, or penile rejuvenation.",
  },
  {
    question: "Where can I get the P-Shot in Birmingham?",
    answer: "We offer private doctor-led P-Shot treatment in Birmingham, with consultation and treatment carried out in a discreet clinical setting. Our clinic welcomes patients from Edgbaston, Solihull, Sutton Coldfield, and the wider West Midlands.",
  },
  {
    question: "Is the P-Shot painful?",
    answer: "A local anaesthetic cream is applied before treatment to improve comfort. Most patients find the P-Shot well tolerated, although individual experience can vary.",
  },
  {
    question: "How long does the P-Shot appointment take?",
    answer: "A P-Shot appointment usually takes around 45 to 60 minutes. This includes the consultation, blood draw, PRP preparation, and treatment.",
  },
  {
    question: "Is there any downtime after the P-Shot?",
    answer: "Most men can return to normal daily activities shortly after their P-Shot appointment. You will be given personalised aftercare advice based on your treatment plan.",
  },
  {
    question: "Can the P-Shot be used for erectile dysfunction?",
    answer: "The P-Shot may be considered for some men with erectile dysfunction, depending on the underlying cause, severity of symptoms, and overall health. A private consultation is important to assess suitability and discuss whether PRP treatment is appropriate for you.",
  },
  {
    question: "Can the P-Shot help with Peyronie’s disease?",
    answer: "Some men ask about the P-Shot as part of treatment planning for Peyronie’s disease. Suitability depends on your symptoms, examination findings, and overall goals, so this is assessed individually during consultation.",
  },
  {
    question: "How long do P-Shot results last?",
    answer: "Results vary from person to person. Duration can depend on baseline vascular health, underlying medical conditions, lifestyle factors, and whether additional treatment sessions are recommended.",
  },
  {
    question: "Do I need a consultation before getting the P-Shot in Birmingham?",
    answer: "Yes. A private doctor-led consultation is required before P-Shot treatment in Birmingham to review your medical history, symptoms, and goals, and to assess whether the treatment is suitable for you.",
  },
];

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic & Medical Therapy (Birmingham) ---
const pShotSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/birmingham/#clinic",
      "name": "Healing-PRP Clinics",
      "description": "Doctor-led clinic in Edgbaston, Birmingham providing the official P-Shot (Priapus Shot) and advanced Exo-P male rejuvenation therapies.",
      "telephone": "+44 7990 364147",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "38 Harborne Rd",
        "addressLocality": "Birmingham",
        "addressRegion": "West Midlands",
        "postalCode": "B15 3EB",
        "addressCountry": "UK"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Birmingham"
        },
        {
          "@type": "AdministrativeArea",
          "name": "West Midlands"
        }
      ],
      "medicalSpecialty": ["Urology", "RegenerativeMedicine"],
      "medicalDirector": {
        "@type": "Physician",
        "name": "Dr Syed Abdi",
        "jobTitle": "Medical Director",
        "telephone": "+44 7990 364147",
        "identifier": {
          "@type": "PropertyValue",
          "propertyID": "GMC Reference Number",
          "value": "6083294"
        },
        "url": "https://www.healing-prp.co.uk/our-doctor",
        "sameAs": [
          "https://www.gmc-uk.org/registrants/6083294"
        ]
      },
      "availableService": [
        {
          "@id": "https://www.healing-prp.co.uk/birmingham/p-shot/#therapy"
        }
      ]
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/birmingham/p-shot/#therapy",
      "name": "P-Shot (Priapus Shot)",
      "alternateName": ["Priapus Shot", "P-Shot", "Platelet-Rich Plasma P-Shot"],
      "description": "Private doctor-led P-Shot treatment in Birmingham using platelet-rich plasma (PRP). Consultation includes assessment of suitability for concerns such as erectile dysfunction, reduced firmness, or penile tissue support.",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "Urology"
      },
      "indication": [
        {
          "@type": "MedicalCondition",
          "name": "Erectile Dysfunction",
          "url": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction"
        },
        {
          "@type": "MedicalCondition",
          "name": "Peyronie's Disease",
          "url": "https://www.healing-prp.co.uk/peyronies-disease"
        }
      ]
    }
  ]
};

export default function BirminghamPShotPage() {
  // --- GENERATE JSON-LD SCHEMA FOR FAQS ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <main>
      {/* 1. Inject Medical Entity Schema */}
      <Script
        id="pshot-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pShotSchemaBirmingham) }}
      />
      
      {/* 2. Inject FAQ Schema */}
      <Script
        id="pshot-faq-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 3. Render Client Component */}
      <PShotClient
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        faqs={faqs}
      />
    </main>
  );
}
