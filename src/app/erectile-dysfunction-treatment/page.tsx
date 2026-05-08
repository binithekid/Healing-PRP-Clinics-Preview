import type { Metadata } from "next";
import ErectileDysfunctionTreatmentClient from "@/components/pages/ErectileDysfunctionTreatmentClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Private Erectile Dysfunction Treatment St Albans",
  },

  description:
    "Face-to-face ED assessments with a GMC-registered doctor in St Albans. Discreet private clinic care beyond online pills. Treatment fees apply.",


  // --- CANONICAL URL DEFINED HERE ---
  alternates: {
    canonical: "https://www.healing-prp.co.uk/erectile-dysfunction-treatment",
  },

  openGraph: {
    title: "Consult A Private ED Doctor St Albans | Healing-PRP Clinics",
    description:
      "Doctor-led non-surgical therapy for ED. Face-to-face private assessments. Conveniently serving Luton, St Albans, and Hertfordshire. Private fees apply.",
    url: "https://www.healing-prp.co.uk/erectile-dysfunction-treatment",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/ed-doctor-consultation.webp",
        width: 1200,
        height: 630,
        alt: "Private ED Consultation St Albans",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Private ED Doctor St Albans",
    description: "Face-to-face erectile dysfunction assessments with a private GMC doctor. No GP referral needed.",
    images: ["/ed-doctor-consultation.webp"],
  },
};

// --- COMPLIANT SEO RICH FAQS (Upgraded with Financial Filters & Anti-Telehealth) ---
const faqs = [
  {
    question: "Is this service available on the NHS?",
    answer: "No, Healing-PRP is a private medical clinic. All consultations, diagnostics, and treatments are subject to private clinic fees. This allows us to offer immediate, face-to-face appointments with a specialist doctor without the NHS wait times."
  },
  {
    question: "Do I need a GP referral to book a consultation?",
    answer: "No, a GP referral is not required. You can book a direct, private consultation with our GMC-registered doctors for a full assessment of your symptoms."
  },
  {
    question: "How is this different from online pill subscriptions?",
    answer: "Unlike automated online services, we provide face-to-face medical care. Your doctor will discuss your medical history, current symptoms, and physically assess you. We focus on identifying the root cause rather than just providing a generic, temporary tablet."
  },
  {
    question: "Are your treatments surgical?",
    answer: "No. Our clinics focus entirely on non-surgical, minimally invasive physical treatments such as advanced shockwave therapy and personalised medical management."
  },
  {
    question: "How do I know which treatment is right for me?",
    answer: "There is no 'one-size-fits-all' approach. Suitability for specific therapies is determined during your clinical assessment, ensuring the proposed plan aligns with your medical history and goals."
  }
];

// --- UPGRADED JSON-LD SCHEMA (Google Ads Safe & St Albans Targeted) ---
const edSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/erectile-dysfunction-treatment#clinic",
      "name": "Healing-PRP Clinics St Albans",
      "description": "Private, Doctor-led Erectile Dysfunction (ED) clinic offering face-to-face assessments and advanced physical therapies.",
      "telephone": "+44 7990 364147",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "21 Victoria St",
        "addressLocality": "St Albans",
        "addressRegion": "Hertfordshire",
        "postalCode": "AL1 3JJ",
        "addressCountry": "GB"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "St Albans"
        },
        {
          "@type": "City",
          "name": "Luton"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Hertfordshire"
        }
      ],
      "medicalSpecialty": "Urologic",
      "availableService": [
        {
          "@id": "https://www.healing-prp.co.uk/erectile-dysfunction-treatment#therapy"
        }
      ],
      "employee": [
        {
          "@id": "https://www.healing-prp.co.uk/erectile-dysfunction-treatment#dr"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/erectile-dysfunction-treatment#dr",
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
        "@id": "https://www.healing-prp.co.uk/erectile-dysfunction-treatment#clinic"
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/erectile-dysfunction-treatment#therapy",
      "name": "Erectile Dysfunction Treatment",
      "url": "https://www.healing-prp.co.uk/erectile-dysfunction-treatment",
      "relevantSpecialty": "Urologic"
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/erectile-dysfunction-treatment#condition",
      "name": "Erectile Dysfunction",
      "alternateName": ["ED", "Erection Difficulties"],
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
          "name": "Personalised Medical Management",
          "description": "Bespoke pharmacological treatment plans tailored to the patient's specific cardiovascular and metabolic profile.",
          "relevantSpecialty": "Urologic"
        }
      ]
    }
  ]
};

// --- BREADCRUMB SCHEMA ---
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
      "name": "Erectile Dysfunction Treatment",
      "item": "https://www.healing-prp.co.uk/erectile-dysfunction-treatment"
    }
  ]
};

export default function ErectileDysfunctionTreatmentPage() {
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
      
     {/* 4. Render Client Component with St Albans Props */}
      <ErectileDysfunctionTreatmentClient 
        locationName="St Albans"
        servingAreas="St Albans • Luton • Harpenden • Hertfordshire"
        whyChooseText="Patients choose our St Albans clinic to move beyond automated online pill subscriptions. We provide face-to-face, doctor-led care and a structured approach to identifying the root cause of erectile dysfunction. Private clinic fees apply."
        faqs={faqs}
      />
    </main>
  );
}
