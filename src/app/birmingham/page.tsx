import type { Metadata } from "next";
import BirminghamHomeClient from "@/components/pages/BirminghamHomeClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

// --- SEO RICH FAQS (Birmingham Focus & Parking) ---
const birminghamFaqs = [
  {
    question: "Do I need a GP referral for treatment at your Birmingham clinic?",
    answer: "No, a GP referral is not required. You can book a private, confidential consultation directly with Dr Syed Abdi at our Birmingham clinic for any of our regenerative treatments."
  },
  {
    question: "Who will perform my consultation and treatment in Birmingham?",
    answer: "All consultations and treatments are performed exclusively by Dr Syed Abdi, our GMC-registered Medical Director who brings over 10 years of NHS and private clinical experience."
  },
  {
    question: "Is the P-Shot available at the Birmingham location?",
    answer: "Yes, the P-Shot and O-Shot are fully available at our Birmingham clinic. These advanced regenerative procedures are performed exclusively by Dr Abdi, our GMC-registered Medical Director, ensuring the highest standards of private clinical care."
  },
  {
    question: "How long does a PRP procedure take?",
    answer: "Most PRP treatments, including the P-Shot and joint injections, take between 45 to 60 minutes. This includes a thorough medical review, blood draw, premium double-spin centrifugation, and the treatment itself."
  },
  {
    question: "Where exactly is your Birmingham clinic located, and is there parking?",
    answer: "Our clinic is located at 38 Harborne Rd in Edgbaston (B15 3EB). We offer a highly discreet, private setting with free patient parking available on-site, ensuring your visit from anywhere in the West Midlands is completely stress-free and confidential."
  }
];

export const metadata: Metadata = {
  title: {
    // 59 Characters: Perfect length, captures intent without keyword stuffing
    absolute: "Doctor-Led ED, PRP & Intimate Health Clinic in Birmingham",
  },
  
  description:
    "Private, doctor-led clinic in Birmingham. Expert treatments for Erectile Dysfunction (ED), P-Shot (PRP), joint injections, and hair restoration in Edgbaston.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham",
  },
  
  openGraph: {
    title: "Doctor-Led ED, PRP & Intimate Health Clinic in Birmingham",
    description:
      "Doctor-led regenerative treatments and Erectile Dysfunction (ED) solutions in Birmingham. Serving Solihull, Sutton Coldfield & West Midlands.",
    url: "https://www.healing-prp.co.uk/birmingham",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Healing-PRP Clinics Birmingham in Edgbaston",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Doctor-Led ED, PRP & Intimate Health Clinic in Birmingham",
    description: "Doctor-led regenerative treatments and Erectile Dysfunction (ED) solutions in Edgbaston, Birmingham.",
    images: ["/hero_img.png"],
  },
};

// --- UPGRADED JSON-LD SCHEMA: Master Medical Clinic (Birmingham) ---
const birminghamHomeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/birmingham#clinic",
      "name": "Healing-PRP Clinics Birmingham",
      "alternateName": "Healing-PRP Birmingham",
      "description": "Leading private doctor-led clinic in Birmingham specialising in regenerative medicine, PRP, Erectile Dysfunction, Joint Injections, and Hair Restoration.",
      "url": "https://www.healing-prp.co.uk/birmingham",
      "logo": "https://www.healing-prp.co.uk/Logo2.png",
      "image": "https://www.healing-prp.co.uk/hero_img.png",
      "telephone": "+44 7990 364147", 
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "38 Harborne Rd",
        "addressLocality": "Birmingham",
        "postalCode": "B15 3EB",
        "addressRegion": "West Midlands",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 52.4674,
        "longitude": -1.9275
      },
      "areaServed": [
        { "@type": "City", "name": "Birmingham" },
        { "@type": "AdministrativeArea", "name": "West Midlands" },
        { "@type": "Neighborhood", "name": "Edgbaston" }
      ],
      "medicalSpecialty": ["Urologic", "Orthopedic", "Dermatologic"],
      "employee": [
        {
          "@id": "https://www.healing-prp.co.uk/birmingham#dr"
        }
      ],
      // Focused core services array for Birmingham hub authority
      "availableService": [
        {
          "@type": "MedicalTherapy",
          "name": "Erectile Dysfunction Treatment",
          "alternateName": "P-Shot & Shockwave Therapy",
          "url": "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction",
          "description": "Doctor-led restorative treatments for ED including Li-ESWT and PRP (P-Shot) in Birmingham.",
          "relevantSpecialty": "Urologic"
        },
        {
          "@type": "MedicalTherapy",
          "name": "P-Shot (Priapus Shot)",
          "url": "https://www.healing-prp.co.uk/birmingham/p-shot",
          "description": "Doctor-led P-Shot (Platelet-Rich Plasma) treatment for erectile dysfunction and male enhancement in Birmingham.",
          "relevantSpecialty": "Urologic"
        },
        {
          "@type": "MedicalTherapy",
          "name": "PRP & HA Joint Injections",
          "url": "https://www.healing-prp.co.uk/birmingham/joint-injections",
          "description": "Non-surgical PRP, Hyaluronic Acid (HA), and steroid injections for arthritis and sports injuries in Birmingham.",
          "relevantSpecialty": "Orthopedic"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/birmingham#dr",
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
      ],
      "worksFor": {
        "@id": "https://www.healing-prp.co.uk/birmingham#clinic"
      }
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
    }
  ]
};

export default function BirminghamPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": birminghamFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      {/* 1. Inject Medical Entity Schema safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(birminghamHomeSchema) }}
      />
      
      {/* 2. Inject FAQ Schema safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />

      {/* 3. Inject Breadcrumb Schema safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      
      <BirminghamHomeClient faqs={birminghamFaqs} />
    </>
  );
}
