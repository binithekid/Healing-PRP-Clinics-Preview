import type { Metadata } from "next";
import ShockwaveClient from "@/components/pages/ShockwaveTherapyClient"; // Ensure this matches your actual client component name

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  // Absolute ignores parent layout templates to ensure precise local matching
  title: {
    absolute: "Shockwave Therapy ED Treatment St Albans | Hertfordshire",
  },
  
  description:
    "Private doctor-led Low-Intensity Shockwave Therapy (LiSWT) for Erectile Dysfunction in St Albans. Non-invasive treatment to improve blood flow and erectile quality.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction",
  },
  
  openGraph: {
    title: "Shockwave Therapy for ED in St Albans | Healing-PRP Clinics",
    description: "Doctor-led consultation for Shockwave Therapy options in St Albans. Non-surgical acoustic wave therapy to support blood flow and erectile function.",
    url: "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png", // Update this if you have a specific shockwave hero image (e.g., /shockwave-hero.webp)
        width: 1200,
        height: 630,
        alt: "Shockwave Therapy Consultation St Albans",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shockwave Therapy for ED in St Albans | Doctor-Led Clinic",
    description: "Doctor-led consultation for Shockwave Therapy (LiSWT) in St Albans. Non-invasive treatment to support Erectile Dysfunction.",
    images: ["/hero_img.png"],
  },
};

// --- UNIQUE SEO RICH FAQS (St Albans & Hertfordshire Focus) ---
const faqs = [
  {
    question: "What is Shockwave Therapy for Erectile Dysfunction?",
    answer: "Low-Intensity Extracorporeal Shockwave Therapy (LiSWT) is a non-invasive, doctor-led treatment available at our St Albans clinic. It uses acoustic waves to stimulate the growth of new blood vessels (angiogenesis), improving penile blood flow and supporting natural erectile function.",
  },
  {
    question: "Does the shockwave treatment hurt?",
    answer: "No. Shockwave therapy is a completely non-invasive and pain-free procedure. Most men simply feel a mild tapping or vibrating sensation during their session at our Hertfordshire clinic.",
  },
  {
    question: "How many shockwave sessions will I need?",
    answer: "A standard treatment protocol typically consists of 6 sessions, usually performed once or twice a week. During your initial consultation in St Albans, Dr Abdi will recommend a tailored plan based on your specific vascular health and symptoms.",
  },
  {
    question: "Is there any downtime after the procedure?",
    answer: "There is zero downtime. Each session takes roughly 20 to 30 minutes, and you can immediately drive home to Harpenden, Luton, or Watford and resume your normal daily activities, including exercise and intimacy.",
  },
  {
    question: "How long do the results of Shockwave Therapy last?",
    answer: "Because LiSWT treats the underlying vascular cause of ED rather than just masking symptoms, results can be long-lasting. Many patients maintain improved erectile function for 1 to 2 years, and maintenance sessions can be arranged to sustain these benefits.",
  },
  {
    question: "Can Shockwave Therapy be combined with the P-Shot?",
    answer: "Yes, frequently. Many patients choose to combine the vascular benefits of Shockwave Therapy with the tissue-regenerating properties of the P-Shot (PRP) for a comprehensive, synergistic approach to ED and Peyronie's disease.",
  }
];

// --- UPGRADED JSON-LD SCHEMA: Compliant & Corrected ---
const shockwaveSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction#clinic",
      "name": "Healing-PRP Clinics St Albans",
      "url": "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction",
      "description": "Doctor-led private clinic in St Albans providing Low-Intensity Shockwave Therapy (LiSWT) for Erectile Dysfunction and Peyronie's Disease.",
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
          "@type": "City",
          "name": "Harpenden"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Hertfordshire"
        }
      ],
      "medicalSpecialty": "Urologic",
      "availableService": [
        {
          "@id": "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction#therapy"
        }
      ],
      "employee": [
        { 
          "@id": "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction#dr" 
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction#dr",
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
        "@id": "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction#clinic" 
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction#therapy",
      "name": "Low-Intensity Shockwave Therapy (LiSWT)",
      "alternateName": ["Shockwave Therapy for ED", "Acoustic Wave Therapy", "Extracorporeal Shockwave Therapy"],
      "url": "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction",
      "description": "A non-invasive procedure using low-intensity acoustic waves to improve penile blood flow and support erectile function.",
      "relevantSpecialty": "Urologic",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "url": "https://www.healing-prp.co.uk/prices",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/erectile-dysfunction#condition",
      "name": "Erectile Dysfunction",
      "url": "https://www.healing-prp.co.uk/erectile-dysfunction",
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction#therapy" 
        }
      ]
    },
    {
      "@type": "MedicalCondition",
      "@id": "https://www.healing-prp.co.uk/peyronies-disease#condition",
      "name": "Peyronie's Disease",
      "url": "https://www.healing-prp.co.uk/peyronies-disease",
      "possibleTreatment": [
        { 
          "@id": "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction#therapy" 
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
      "name": "Shockwave Therapy",
      "item": "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction"
    }
  ]
};

export default function ShockwavePage() {
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
        dangerouslySetInnerHTML={{ __html: safeJsonLd(shockwaveSchema) }}
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
      <ShockwaveClient 
        locationName="St Albans"
        servingAreas="Harpenden • Luton • Watford • Hertfordshire"
        faqs={faqs}
      />
    </main>
  );
}
