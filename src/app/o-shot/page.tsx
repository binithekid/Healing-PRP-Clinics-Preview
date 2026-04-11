import type { Metadata } from "next";
import OShotClient from "@/components/pages/OShotClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  // Absolute ignores parent layout templates to ensure precise local matching
  title: {
    absolute: "O-Shot St Albans | Doctor-Led Orgasm Shot Clinic Hertfordshire",
  },

  description:
    "Doctor-led O-Shot treatment Luton, St Albans & Hertfordshire. Advanced PRP therapy to enhance sensitivity, natural lubrication, and intimate wellness. Book your private consultation.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/o-shot",
  },

  openGraph: {
    title: "O-Shot Treatment St Albans | Orgasm Shot Clinic Hertfordshire",
    description: "Enhance intimate wellness, sensitivity, and comfort with the O-Shot. Doctor-led PRP therapy serving patients from Luton and St Albans.",
    url: "https://www.healing-prp.co.uk/o-shot",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/o-shot-consultation.webp",
        width: 1200,
        height: 630,
        alt: "O-Shot Treatment Consultation St Albans",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "O-Shot Treatment St Albans | Orgasm Shot Clinic Hertfordshire",
    description: "Private, doctor-led consultation for PRP-based O-Shot therapies in St Albans and Hertfordshire.",
    images: ["/o-shot-consultation.webp"],
  },
};

// --- SEO RICH FAQS (St Albans & Hertfordshire Focus) ---
const faqs = [
  {
    question: "What is the O-Shot (Orgasm Shot) and how does it work?",
    answer: "The O-Shot, available at our St Albans clinic, is a doctor-led regenerative treatment for women. It uses your body's own Platelet-Rich Plasma (PRP) to stimulate tissue repair, increase blood flow, and support enhanced sensitivity and natural lubrication in the vaginal and clitoral areas.",
  },
  {
    question: "Is the O-Shot painful?",
    answer: "We prioritise patient comfort at our Hertfordshire clinic. A highly effective local anaesthetic cream is applied to the intimate area before the procedure, meaning most women find the O-Shot virtually painless and very tolerable.",
  },
  {
    question: "How long does the O-Shot procedure take?",
    answer: "The entire appointment takes approximately 45 to 60 minutes. This includes a private medical consultation, blood draw, PRP preparation, and the treatment itself. You can return to your normal daily activities in Harpenden, Luton, or Watford immediately.",
  },
  {
    question: "When will I notice the effects of the O-Shot?",
    answer: "Because the O-Shot relies on natural tissue regeneration, results develop gradually. Some women report initial improvements in sensitivity and natural moisture within a few weeks, with optimal benefits typically appearing 8 to 12 weeks after treatment.",
  },
  {
    question: "Can the O-Shot help with urinary incontinence?",
    answer: "Yes, the regenerative properties of PRP can provide structural support to the anterior vaginal wall, which frequently helps alleviate symptoms of mild stress urinary incontinence. Our GMC-registered doctors provide comprehensive assessments in St Albans to determine if the O-Shot is right for you.",
  },
  {
    question: "How long do O-Shot results last?",
    answer: "Results vary from person to person depending on age, hormonal health, baseline symptoms, and lifestyle factors. Many women experience improvements in sensitivity, sexual wellness, or urinary symptoms for around 12 to 18 months. At our Birmingham clinic, we can also discuss maintenance treatment where appropriate to help support longevity."
  },
  {
    question: "Is a consultation required before getting the O-Shot?",
    answer: "Yes. We require a thorough, discreet medical consultation at our St Albans clinic to review your medical history, discuss your specific wellness goals, and ensure the O-Shot is a safe and suitable therapy for you.",
  },
];

// --- UPGRADED JSON-LD SCHEMA: Compliant & Corrected ---
const oShotSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/o-shot#clinic",
      "name": "Healing-PRP Clinics St Albans",
      "url": "https://www.healing-prp.co.uk/o-shot",
      "description": "Doctor-led private clinic in St Albans providing the official O-Shot® (Orgasm Shot) and female intimate wellness therapies.",
      "telephone": "+447990364147",
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
      "medicalSpecialty": ["Gynecologic"],
      "availableService": [
        {
          "@id": "https://www.healing-prp.co.uk/o-shot#therapy"
        }
      ],
      "employee": [
        { 
          "@id": "https://www.healing-prp.co.uk/o-shot#dr" 
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/o-shot#dr",
      "name": "Dr Syed Abdi",
      "jobTitle": "Medical Director",
      "telephone": "+447990364147",
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
        "@id": "https://www.healing-prp.co.uk/o-shot#clinic" 
      }
    },
    {
      "@type": ["MedicalTherapy", "MedicalProcedure"],
      "@id": "https://www.healing-prp.co.uk/o-shot#therapy",
      "name": "O-Shot (Orgasm Shot)",
      "alternateName": ["Orgasm Shot", "O-Shot®", "Vaginal PRP Injection", "Platelet-Rich Plasma Female Rejuvenation"],
      "url": "https://www.healing-prp.co.uk/o-shot",
      "description": "Doctor-led consultation and PRP-based O-Shot procedure option in St Albans to support female intimate health, natural lubrication, urinary control, and sexual sensitivity.",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "Gynecologic"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "price": "995",
        "url": "https://www.healing-prp.co.uk/prices",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/stress-urinary-incontinence#condition",
      "name": "Stress Urinary Incontinence",
      "alternateName": ["SUI", "Bladder Leakage"],
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/o-shot#therapy" 
        }
      ]
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/female-sexual-dysfunction#condition",
      "name": "Female Sexual Dysfunction",
      "alternateName": ["Vaginal Dryness", "Decreased Libido", "Dyspareunia"],
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/o-shot#therapy" 
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
      "name": "O-Shot Treatment",
      "item": "https://www.healing-prp.co.uk/o-shot"
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
      {/* 1. Inject Medical Entity Schema safely via plain script per Next.js best practices */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(oShotSchema) }}
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

      {/* 4. Render Client Component */}
      <OShotClient 
        locationName="St Albans"
        servingAreas="Harpenden • Luton • Watford • Hertfordshire"
        faqs={faqs} 
      />
    </main>
  );
}
