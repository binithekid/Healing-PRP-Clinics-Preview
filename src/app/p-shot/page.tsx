import type { Metadata } from "next";
import PShotClient from "@/components/pages/PShotClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    absolute: "Doctor-Led P-Shot Male Rejuvenation | St Albans Clinic",
  },

  description:
    "Doctor-Led P-Shot provider serving Luton, St Albans & Hertfordshire. Advanced PRP therapy to enhance sensitivity, erection quality, and performance. Book your private consultation.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/p-shot",
  },

  keywords: [
    // High-Priority Location Terms (Luton Focus)
    "P-Shot treatment Luton",
    "Male sexual rejuvenation Luton",
    "PRP injection for penis Luton",
    "Male enhancement clinic Luton",
    "Priapus Shot Bedfordshire",

    // Core Clinical Terms (St Albans/Herts Base)
    "P-Shot treatment St Albans",
    "Priapus Shot Hertfordshire",
    "Penile sensitivity treatment",
    "Male enhancement St Albans",
    "Sexual performance therapy Watford",
    
    // Specific Conditions & Cost
    "P-Shot cost UK",
    "P-Shot consultation Hertfordshire", 
    "Lichen Sclerosus male treatment",
    "Natural male enhancement Harpenden",
    "Sexual wellness clinic North London", 
    "St Albans aesthetic medicine"
  ],

  openGraph: {
    title: "Doctor-Led P-Shot Male Rejuvenation | St Albans Clinic",
    description:
      "Enhance sensitivity and performance with the P-Shot. Doctor-led PRP therapy serving patients from Luton and St Albans.",
    url: "https://www.healing-prp.co.uk/p-shot",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- SEO RICH FAQS (St Albans & Hertfordshire Focus) ---
const faqs = [
  {
    question: "What is the P-Shot (Priapus Shot) and how does it work?",
    answer: "The P-Shot, available at our St Albans clinic, is a doctor-led regenerative treatment. It uses your body's own Platelet-Rich Plasma (PRP) to stimulate tissue repair, increase blood flow, and support enhanced sensitivity and erectile function.",
  },
  {
    question: "Is the P-Shot painful?",
    answer: "We prioritise patient comfort at our Hertfordshire clinic. A potent local anaesthetic cream is applied before the procedure, meaning most men find the P-Shot virtually painless and highly tolerable.",
  },
  {
    question: "How long does the P-Shot procedure take?",
    answer: "The entire appointment takes approximately 45 to 60 minutes. This includes a private medical consultation, blood draw, PRP preparation, and the treatment itself. You can return to your normal daily activities in Harpenden, Luton, or Watford immediately.",
  },
  {
    question: "When will I notice the effects of the P-Shot?",
    answer: "Because the P-Shot relies on natural tissue regeneration, results develop gradually. Some men report initial improvements within a few weeks, with optimal benefits in erectile quality and sensitivity typically appearing 8 to 12 weeks after treatment.",
  },
  {
    question: "Can the P-Shot help with Peyronie’s disease?",
    answer: "Yes, the regenerative properties of PRP can support tissue quality in certain cases of Peyronie’s disease. Our GMC-registered doctors provide comprehensive assessments in St Albans to determine if the P-Shot is the right approach for your specific symptoms.",
  },
  {
    question: "How long do the results of the P-Shot last?",
    answer: "Results vary depending on your age, baseline vascular health, and lifestyle. Many men experience sustained improvements for up to 12 to 18 months. We often discuss maintenance protocols and personalised medication for ED treatment alongside the P-Shot to maximise longevity.",
  },
  {
    question: "Is a consultation required before getting the P-Shot?",
    answer: "Yes. We require a thorough, discreet medical consultation at our St Albans clinic to review your medical history, discuss your goals, and ensure the P-Shot or other regenerative therapies are perfectly suited to your needs.",
  },
];

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic & Medical Therapy using @graph ---
const pShotSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/#clinic",
      "name": "Healing-PRP Clinics",
      "description": "Doctor-led clinic providing the official P-Shot (Priapus Shot) and male rejuvenation therapies.",
      "telephone": "+44 7990 364147",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "21 Victoria St",
        "addressLocality": "St Albans",
        "addressRegion": "Hertfordshire",
        "postalCode": "AL1 3JJ",
        "addressCountry": "UK"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "St Albans"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Hertfordshire"
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
          "@id": "https://www.healing-prp.co.uk/p-shot/#therapy"
        }
      ]
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/p-shot/#therapy",
      "name": "P-Shot (Priapus Shot)",
      "alternateName": ["Platelet-Rich Plasma (PRP) Male Rejuvenation", "PRP Penile Injection"],
      "description": "An autologous Platelet-Rich Plasma (PRP) injection therapy designed to improve penile health, tissue regeneration, blood flow, and sensitivity.",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "Urology"
      },
      "indication": [
        {
          "@type": "MedicalCondition",
          "name": "Erectile Dysfunction",
          "url": "https://www.healing-prp.co.uk/erectile-dysfunction"
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

export default function Page() {
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
        id="pshot-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pShotSchema) }}
      />

      {/* 2. Inject FAQ Schema */}
      <Script
        id="pshot-faq-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* 3. Render Client Component */}
      <PShotClient 
        locationName="St Albans"
        servingAreas="Harpenden • Luton • Watford • Hertfordshire"
        faqs={faqs}
      />
    </main>
  );
}
