import type { Metadata } from "next";
import ErectileDysfunctionTreatmentClient from "@/components/pages/ErectileDysfunctionTreatmentClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Erectile Dysfunction & Impotence Clinic Hampstead, London",
  },
  description:
    "Private doctor-led erectile dysfunction and impotence clinic in Hampstead, London. Discreet assessment for ED, reduced firmness and erection difficulties. Fees apply.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction-treatment",
  },
  openGraph: {
    title: "Erectile Dysfunction & Impotence Clinic Hampstead, London",
    description:
      "Private doctor-led erectile dysfunction and impotence assessment in Hampstead, London, with discreet ED treatment options discussed where suitable.",
    url: "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction-treatment",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/ed-doctor-consultation.webp",
        width: 1200,
        height: 630,
        alt: "Private erectile dysfunction and impotence consultation in Hampstead, London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erectile Dysfunction & Impotence Clinic Hampstead, London",
    description:
      "Private doctor-led assessment for erectile dysfunction, impotence and erection difficulties in Hampstead, London. Fees apply.",
    images: ["/ed-doctor-consultation.webp"],
  },
};

// --- COMPLIANT SEO RICH FAQS ---
const faqs = [
  {
    question: "Do I need a GP referral?",
    answer:
      "No, a GP referral is not required. You can book a direct, private consultation at our Hampstead clinic in London.",
  },
  {
    question: "What happens during the initial consultation?",
    answer:
      "Your doctor will discuss your symptoms, medical history, current medication and any previous treatment response. The aim is to understand the likely cause and discuss suitable options.",
  },
  {
    question: "Is this an impotence clinic?",
    answer:
      "Yes. Healing PRP Clinics provides private, doctor-led assessment for men experiencing erectile dysfunction, impotence, reduced firmness or erection difficulties. Impotence is another term often used for erectile dysfunction. Treatment options are discussed after consultation and may include shockwave therapy, PRP-based treatment, blood tests, hormone review or medication review where suitable.",
  },
  {
    question: "Do you offer impotence treatment in Hampstead, London?",
    answer:
      "Yes. Our Hampstead clinic offers private doctor-led assessment for erectile dysfunction, impotence, reduced firmness and erection difficulties. Treatment options are discussed after consultation and depend on your symptoms, medical history and suitability.",
  },
  {
    question: "Are the treatments surgical?",
    answer:
      "No. We focus on non-surgical options such as shockwave therapy, vascular assessment, hormone review and wider health assessment where appropriate.",
  },
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "There is no one-size-fits-all approach. Suitability is assessed during consultation based on your symptoms, medical history and treatment goals.",
  },
  {
    question: "Is the consultation confidential?",
    answer:
      "Yes. Consultations at our Hampstead clinic are private, discreet and handled sensitively by a GMC-registered doctor.",
  },
];

// --- UPGRADED JSON-LD SCHEMA (Google Ads Safe & Hampstead Targeted) ---
const edSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction-treatment#clinic",
      "name": "Healing-PRP Clinics Hampstead",
      "description": "Doctor-led erectile dysfunction and impotence clinic in Hampstead, London offering discreet assessment, shockwave therapy options and personalised medical review.",
      "telephone": "+44 7990 364147",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hampstead",
        "addressRegion": "London",
        "addressCountry": "GB"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Hampstead"
        },
        {
          "@type": "City",
          "name": "London"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Greater London"
        }
      ],
      "medicalSpecialty": "Urologic",
      "availableService": [
        {
          "@id": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction-treatment#therapy"
        }
      ],
      "employee": [
        {
          "@id": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction-treatment#dr"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction-treatment#dr",
      "name": "Dr Syed Abdi",
      "jobTitle": "Medical Director",
      "telephone": "+44 7990 364147",
      "url": "https://www.healing-prp.co.uk/our-doctor",
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "GMC Reference Number",
        "value": "6083294"
      },
      "sameAs": [
        "https://www.gmc-uk.org/registrants/6083294"
      ],
      "worksFor": {
        "@id": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction-treatment#clinic"
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction-treatment#therapy",
      "name": "Erectile Dysfunction and Impotence Treatment",
      "url": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction-treatment",
      "relevantSpecialty": "Urologic"
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction-treatment#condition",
      "name": "Erectile Dysfunction",
      "alternateName": ["ED", "Impotence", "Erection Difficulties", "Reduced Firmness"],
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Penis"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalTherapy",
          "name": "Low-Intensity Extracorporeal Shockwave Therapy (Li-ESWT)",
          "description": "Non-surgical acoustic wave therapy to support blood flow and vascular health.",
          "relevantSpecialty": "Urologic"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Health and Medication Review",
          "description": "Review of current medication, cardiovascular risk, metabolic health and previous treatment response where clinically appropriate.",
          "relevantSpecialty": "Urologic"
        }
      ]
    }
  ]
};

// --- BREADCRUMB SCHEMA (Updated for Hampstead Path) ---
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.healing-prp.co.uk/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Hampstead",
      "item": "https://www.healing-prp.co.uk/hampstead"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Erectile Dysfunction and Impotence Treatment",
      "item": "https://www.healing-prp.co.uk/hampstead/erectile-dysfunction-treatment"
    }
  ]
};

export default function ErectileDysfunctionTreatmentHampsteadPage() {
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
      {/* 1. Inject Medical Entity Schema safely via plain script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(edSchema) }}
      />

      {/* 2. Inject Breadcrumb Schema safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />

      {/* 3. Inject FAQ Schema safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />
      
      {/* 4. Render Client Component with Hampstead Props */}
      <ErectileDysfunctionTreatmentClient 
        locationName="Hampstead"
        servingAreas="Hampstead • Highgate • Belsize Park • Camden • Central London"
        whyChooseText="Patients choose our Hampstead clinic for a structured, doctor-led approach to erectile dysfunction assessment and treatment. We welcome men from across Hampstead, Highgate, Camden, and Central London seeking discreet, confidential care."
        faqs={faqs}
      />
    </main>
  );
}
