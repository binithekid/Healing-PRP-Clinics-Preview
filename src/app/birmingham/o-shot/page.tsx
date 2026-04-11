import type { Metadata } from "next";
import OShotClient from "@/components/pages/OShotClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  // Absolute ignores parent layout templates to ensure precise local matching
  title: {
    absolute: "O-Shot Birmingham | Doctor-Led Orgasm Shot Clinic Edgbaston",
  },
  
  description:
    "Doctor-led O-Shot (Orgasm Shot) clinic in Birmingham. GMC-registered doctor offering O-Shot therapy for female intimate rejuvenation and wellness.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/o-shot",
  },
  
  openGraph: {
    title: "O-Shot Treatment Birmingham | Orgasm Shot Clinic Edgbaston",
    description: "Doctor-led O-Shot clinic in Birmingham. Advanced PRP therapy for female intimate wellness, urinary control, and rejuvenation.",
    url: "https://www.healing-prp.co.uk/birmingham/o-shot",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/o-shot-consultation.webp",
        width: 1200,
        height: 630,
        alt: "O-Shot Treatment Consultation Birmingham",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "O-Shot Treatment Birmingham | Orgasm Shot Clinic Edgbaston",
    description: "Private, doctor-led consultation for PRP-based O-Shot therapy in Edgbaston, Birmingham.",
    images: ["/o-shot-consultation.webp"],
  },
};

// --- UNIQUE SEO RICH FAQS (Birmingham & West Midlands Focus) ---
const faqs = [
  {
    question: "What is the O-Shot and is it available at your Birmingham clinic?",
    answer: "Yes, O-Shot treatment is available at our private Edgbaston clinic. It is a doctor-led regenerative treatment for women that uses your own Platelet-Rich Plasma (PRP) to stimulate tissue repair, increase blood flow, and support enhanced sensitivity and natural lubrication.",
  },
  {
    question: "Is the Orgasm Shot painful?",
    answer: "Patient comfort is a priority at Healing-PRP Clinics. A local anaesthetic cream is applied before treatment, and most women find the procedure very manageable and well tolerated, with only minimal discomfort.",
  },
  {
    question: "How long does the O-Shot procedure take?",
    answer: "The entire appointment takes approximately 45 to 60 minutes. This includes a blood draw, PRP preparation, and the treatment itself. You can return to your normal daily activities in Solihull, Sutton Coldfield, or central Birmingham immediately.",
  },
  {
    question: "What is the Exo-O Shot?",
    answer: "The Exo-O Shot is an advanced option available at our Birmingham clinic. It uses PRP prepared from your own blood, including activated platelets, and is designed to offer a more enhanced regenerative approach to support tissue repair, sensitivity, and intimate wellness."
  },
  {
    question: "Can the O-Shot help with urinary incontinence?",
    answer: "Yes, the regenerative properties of PRP can provide structural support to the anterior vaginal wall, which frequently helps alleviate symptoms of mild stress urinary incontinence. Our GMC-registered doctors provide comprehensive assessments in Edgbaston to determine if the O-Shot is the right approach for you.",
  },
  {
    question: "How long do O-Shot results last?",
    answer: "Results vary from person to person depending on factors such as age, hormonal health, baseline symptoms, and lifestyle. Many women report improvements in sensitivity, sexual function, or urinary symptoms lasting around 12 to 18 months. Some women may benefit from a course of up to three sessions for optimal results. We can also discuss maintenance treatment where appropriate to help support longevity."
  },
  {
    question: "Is a consultation required before getting the O-Shot in Birmingham?",
    answer: "Yes. We require a thorough, strictly 1:1 private medical consultation at our Edgbaston clinic to review your medical history, discuss your specific wellness goals, and ensure the O-Shot or Exo-O Shot is perfectly suited to your needs.",
  },
];

// --- UPGRADED JSON-LD SCHEMA: Compliant & Corrected ---
const oShotSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/birmingham/o-shot#clinic",
      "name": "Healing-PRP Clinics",
      "url": "https://www.healing-prp.co.uk/birmingham/o-shot",
      "description": "Doctor-led private clinic in Edgbaston, Birmingham providing O-Shot treatment.",
      "telephone": "+447990364147",
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
      "medicalSpecialty": ["Women's Health"],
      "availableService": [
        {
          "@id": "https://www.healing-prp.co.uk/birmingham/o-shot#therapy"
        }
      ],
      "employee": [
        { 
          "@id": "https://www.healing-prp.co.uk/birmingham/o-shot#dr" 
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/birmingham/o-shot#dr",
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
        "@id": "https://www.healing-prp.co.uk/birmingham/o-shot#clinic" 
      }
    },
    {
      "@type": ["MedicalTherapy", "MedicalProcedure"],
      "@id": "https://www.healing-prp.co.uk/birmingham/o-shot#therapy",
      "name": "O-Shot (Orgasm Shot)",
      "alternateName": ["Orgasm Shot", "O-Shot®", "Exo-O Shot", "Vaginal PRP Injection", "Platelet-Rich Plasma Female Rejuvenation"],
      "url": "https://www.healing-prp.co.uk/birmingham/o-shot",
      "description": "Doctor-led consultation and PRP-based O-Shot procedure option in Birmingham to support female intimate health, natural lubrication, urinary control, and sexual sensitivity.",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "Women's Health"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "price": "995",
        "url": "https://www.healing-prp.co.uk/birmingham/prices",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/birmingham/stress-urinary-incontinence#condition",
      "name": "Stress Urinary Incontinence",
      "alternateName": ["SUI", "Bladder Leakage"],
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/birmingham/o-shot#therapy" 
        }
      ]
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/birmingham/female-sexual-dysfunction#condition",
      "name": "Female Sexual Dysfunction",
      "alternateName": ["Vaginal Dryness", "Decreased Libido", "Dyspareunia"],
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/birmingham/o-shot#therapy" 
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
      "name": "O-Shot Treatment",
      "item": "https://www.healing-prp.co.uk/birmingham/o-shot"
    }
  ]
};

export default function BirminghamOShotPage() {
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(oShotSchemaBirmingham) }}
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
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        faqs={faqs}
      />
    </main>
  );
}
