import type { Metadata } from "next";
import ErectileDysfunctionTreatmentClient from "@/components/pages/ErectileDysfunctionTreatmentClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Erectile Dysfunction & Impotence Clinic Birmingham | Healing-PRP Clinics",
  },
  description:
    "Private doctor-led erectile dysfunction and impotence clinic in Birmingham. Discreet assessment for ED, reduced firmness and erection difficulties. Fees apply.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction-treatment",
  },
  openGraph: {
    title: "Erectile Dysfunction & Impotence Clinic Birmingham | Healing-PRP Clinics",
    description:
      "Private doctor-led erectile dysfunction and impotence assessment in Birmingham, with discreet ED treatment options discussed where suitable.",
    url: "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction-treatment",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/ed-doctor-consultation.webp",
        width: 1200,
        height: 630,
        alt: "Private erectile dysfunction and impotence consultation in Birmingham",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erectile Dysfunction & Impotence Clinic Birmingham",
    description:
      "Private doctor-led assessment for erectile dysfunction, impotence and erection difficulties in Birmingham. Fees apply.",
    images: ["/ed-doctor-consultation.webp"],
  },
};

// --- COMPLIANT SEO RICH FAQS ---
const faqs = [
  {
    question: "Do I need a GP referral?",
    answer:
      "No, a GP referral is not required. You can book a direct, private consultation at our Birmingham clinic.",
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
    question: "Do you offer impotence treatment in Birmingham?",
    answer:
      "Yes. Our Birmingham clinic offers private doctor-led assessment for erectile dysfunction, impotence, reduced firmness and erection difficulties. Treatment options are discussed after consultation and depend on your symptoms, medical history and suitability.",
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
      "Yes. Consultations at our Birmingham clinic are private, discreet and handled sensitively by a GMC-registered doctor.",
  },
];
// --- UPGRADED JSON-LD SCHEMA (Google Ads Safe & Birmingham Targeted) ---
const edSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction-treatment#clinic",
      "name": "Healing-PRP Clinics Birmingham",
      "description": "Doctor-led erectile dysfunction and impotence clinic in Birmingham offering discreet assessment, shockwave therapy options and personalised medical review.",
      "telephone": "+44 7990 364147",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Birmingham",
        "addressRegion": "West Midlands",
        "addressCountry": "GB"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Birmingham"
        },
        {
          "@type": "City",
          "name": "Solihull"
        },
        {
          "@type": "AdministrativeArea",
          "name": "West Midlands"
        }
      ],
      "medicalSpecialty": "Urologic",
      "availableService": [
        {
          "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction-treatment#therapy"
        }
      ],
      "employee": [
        {
          "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction-treatment#dr"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction-treatment#dr",
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
        "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction-treatment#clinic"
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction-treatment#therapy",
      "name": "Erectile Dysfunction Treatment",
      "url": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction-treatment",
      "relevantSpecialty": "Urologic"
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction-treatment#condition",
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

// --- BREADCRUMB SCHEMA (Updated for Birmingham Path) ---
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
      "name": "Birmingham",
      "item": "https://www.healing-prp.co.uk/birmingham"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Erectile Dysfunction Treatment",
      "item": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction-treatment"
    }
  ]
};

export default function ErectileDysfunctionTreatmentBirminghamPage() {
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
      
     {/* 4. Render Client Component with Birmingham Props */}
      <ErectileDysfunctionTreatmentClient 
        locationName="Birmingham"
        servingAreas="Birmingham • Solihull • Sutton Coldfield • West Midlands"
        whyChooseText="Patients choose our Birmingham clinic for a structured, doctor-led approach to erectile dysfunction assessment and treatment. We welcome men from across Birmingham, Edgbaston, Solihull, Sutton Coldfield and the wider West Midlands seeking discreet, confidential care."
        faqs={faqs}
      />
    </main>
  );
}
