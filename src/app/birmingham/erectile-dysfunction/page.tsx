import type { Metadata } from "next";
import ErectileDysfunctionClient from "@/components/pages/ErectileDysfunctionClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Erectile Dysfunction Treatment Birmingham | Private ED Clinic",
  },

 description:
  "Private erectile dysfunction treatment in Birmingham. Doctor-led ED and impotence assessment for weak erections, reduced firmness, difficulty maintaining erections and blood-flow related ED. Fees apply.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction",
  },

  openGraph: {
    title: "Erectile Dysfunction Treatment Birmingham | Private ED Clinic",
    description:
      "Private doctor-led ED and impotence assessment in Birmingham for weak erections, reduced firmness and difficulty maintaining erections. Serving Edgbaston, Solihull, Sutton Coldfield and the West Midlands.",
    url: "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/ed-doctor-consultation.webp",
        width: 1200,
        height: 630,
        alt: "Private ED Consultation Birmingham",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Erectile Dysfunction Treatment Birmingham | Private ED Clinic",
    description:
      "Private ED and impotence assessment in Birmingham for weak erections, reduced firmness and difficulty maintaining erections. Doctor-led care. Fees apply.",
    images: ["/ed-doctor-consultation.webp"],
  },
};

// --- SEO RICH FAQS (Birmingham & Midlands Focus) ---
const faqs = [
  {
  question: "Can you help with weak erections or reduced firmness?",
  answer: "Yes. Men often seek help for weak erections, reduced firmness, trouble maintaining an erection, losing an erection during intimacy, or erections that feel less reliable than before. These symptoms can be linked to blood flow, hormones, medication, stress, lifestyle factors or other medical conditions. At our Birmingham clinic, suitability for treatment is assessed before any plan is recommended.",
  },
  {
    question: "What is the difference between erectile dysfunction and impotence?",
    answer: "Impotence is an older term often used to describe erectile dysfunction. Both usually refer to difficulty getting or maintaining an erection firm enough for satisfactory sexual activity. At Healing PRP Clinics Birmingham, we provide a doctor-led assessment to understand possible causes and discuss suitable private treatment options.",
  },
  {
    question: "Do you offer ED treatment near me in Birmingham?",
    answer: "Healing PRP Clinics offers private doctor-led ED assessment in Edgbaston, Birmingham, serving men from Birmingham, Solihull, Harborne, Sutton Coldfield, Smethwick, Wolverhampton and the wider West Midlands. No GP referral is needed. Treatment options are discussed after consultation and suitability assessment.",
  },
  {
    question: "Is erectile dysfunction linked to high blood pressure or circulation problems?",
    answer: "Yes. Erectile dysfunction can sometimes be linked to blood-flow problems, high blood pressure, diabetes, cholesterol, smoking or wider cardiovascular risk factors. A private ED consultation can help identify possible contributing factors and whether options such as shockwave therapy, blood tests, medication review or other treatments may be suitable.",
  },
  {
    question: "Why am I losing my erection during intimacy?",
    answer: "Losing an erection during intimacy can happen for several reasons, including blood-flow changes, stress, anxiety, tiredness, alcohol, medication side effects, hormone imbalance or underlying health conditions. A doctor-led ED assessment can help explore possible causes and suitable next steps.",
  },
  {
    question: "Can psychological ED be treated?",
    answer: "Psychological factors such as stress, anxiety, low confidence or relationship pressure can contribute to erectile dysfunction. In some men, physical and psychological factors overlap. During consultation, Dr Syed Abdi will assess your symptoms, medical history and likely contributing factors before discussing suitable options or onward referral where appropriate.",
  },
  {
    question: "Can ED treatment help if tablets are no longer working well?",
    answer: "Some men seek help because tablets such as sildenafil or tadalafil are no longer working as well as before, or because they experience side effects. At our Birmingham clinic, your response to previous treatments can be reviewed alongside possible causes such as blood flow, hormones, diabetes, blood pressure, medication and lifestyle factors.",
  }
];

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic, Condition & Interconnected Therapies ---
const edSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction#clinic",
      "name": "Healing-PRP Clinics Birmingham",
      "description": "Specialist erectile dysfunction clinic in Birmingham offering Shockwave Therapy, PRP, and personalised medication for ED treatment.",
      "telephone": "+44 7990 364147",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "38 Harborne Rd",
        "addressLocality": "Birmingham",
        "addressRegion": "West Midlands",
        "postalCode": "B15 3EB",
        "addressCountry": "GB"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Birmingham"
        },
        {
          "@type": "City",
          "name": "Edgbaston"
        },
        {
          "@type": "AdministrativeArea",
          "name": "West Midlands"
        }
      ],
      "medicalSpecialty": "Urologic",
      "availableService": [
        {
          "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction#therapy"
        }
      ],
      "employee": [
        {
          "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction#dr"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction#dr",
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
        "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction#clinic"
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction#therapy",
      "name": "Erectile Dysfunction Treatment",
      "url": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction",
      "relevantSpecialty": "Urologic"
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction#condition",
      "name": "Erectile Dysfunction",
      "alternateName": ["ED", "Impotence"],
      "url": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction",
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": "Penis"
      },
      "possibleTreatment": [
        {
          "@type": "MedicalTherapy",
          "name": "Low-Intensity Extracorporeal Shockwave Therapy (Li-ESWT)",
          "url": "https://www.healing-prp.co.uk/birmingham/shockwave-therapy-erectile-dysfunction",
          "description": "Non-surgical acoustic wave therapy to improve blood flow and vascular health.",
          "relevantSpecialty": "Urologic"
        },
        {
          "@type": "MedicalTherapy",
          "name": "P-Shot (Priapus Shot)",
          "alternateName": "Platelet-Rich Plasma (PRP) for ED",
          "url": "https://www.healing-prp.co.uk/birmingham/p-shot",
          "description": "Regenerative injection therapy using the patient's own platelet-rich plasma to stimulate tissue repair.",
          "relevantSpecialty": "Urologic"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Personalised ED Medication",
          "url": "https://www.healing-prp.co.uk/birmingham/personalised-ed-medication",
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
      "name": "Birmingham Clinic",
      "item": "https://www.healing-prp.co.uk/birmingham"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Erectile Dysfunction Treatment",
      "item": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction"
    }
  ]
};

export default function BirminghamEDPage() {
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
      {/* 1. Inject Clinic & Therapy Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(edSchemaBirmingham) }}
      />
      
      {/* 2. Inject Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />

      {/* 3. Inject FAQ Schema (Safe due to unique local content) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />

      <ErectileDysfunctionClient 
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        pShotLink="/birmingham/p-shot"
        faqs={faqs}
      />
    </main>
  );
}
