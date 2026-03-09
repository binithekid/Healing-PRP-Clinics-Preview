import type { Metadata } from "next";
import SexualRejuvenationClient from "@/components/pages/SexualRejuvenationClient";
import Script from "next/script";

export const metadata: Metadata = {
  // 1. Short Clean Title: Template will add "| Birmingham Clinic"
  title: "Erectile Dysfunction, P-Shot & O-Shot Birmingham",
  
  description:
    "Confidential, doctor-led sexual rejuvenation & ED treatments in Birmingham. Specialist P-Shot® & O-Shot® PRP therapy serving Solihull & West Midlands.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/sexual-rejuvenation",
  },

  // 2. High-Density ED & Local West Midlands Keywords
  keywords: [
    "Erectile Dysfunction treatment Birmingham",
    "ED clinic Birmingham",
    "P-Shot Birmingham",
    "O-Shot West Midlands",
    "Private ED doctor Edgbaston",
    "Help for erectile dysfunction Solihull",
    "PRP for ED Birmingham",
    "Priapus Shot Sutton Coldfield",
    "Male enhancement clinic Harborne",
    "Sexual wellness clinic Wolverhampton",
    "ED specialist Halesowen",
    "Confidential ED help Dudley",
    "Shockwave therapy alternative West Midlands",
    "P-Shot cost Stourbridge",
    "Vaginal rejuvenation Birmingham"
  ],

  openGraph: {
    title: "Erectile Dysfunction & P-Shot Clinic | Birmingham",
    description:
      "Confidential, doctor-led PRP treatments for ED and sexual wellness. Serving patients in Birmingham, Solihull, and the West Midlands.",
    url: "https://www.healing-prp.co.uk/birmingham/sexual-rejuvenation",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- SEO RICH FAQS ---
const faqs = [
  {
    question: "Are PRP and regenerative sexual treatments safe?",
    answer: "Yes. PRP, shockwave therapy, the P-Shot and O-Shot are considered safe. PRP uses your own blood, reducing allergy risk, and all procedures are performed by trained clinicians."
  },
  {
    question: "Will my consultation be strictly confidential?",
    answer: "Yes. All consultations are private, one-to-one, and conducted discreetly by a doctor. No information is ever shared without your consent."
  },
  {
    question: "How long do regenerative sexual treatments take to work?",
    answer: "Some patients notice early changes within weeks, but optimal results develop over 8–12 weeks as blood flow, nerves and tissue naturally regenerate."
  },
  {
    question: "Do I need a GP referral?",
    answer: "No. You may book directly for assessment and treatment of ED, premature ejaculation, Peyronie’s disease or vaginal rejuvenation without needing a referral."
  },
  {
    question: "Who can benefit from PRP treatment?",
    answer: "Men and women with reduced sensitivity, erectile issues, vaginal dryness, pelvic trauma or age-related tissue decline may benefit, as PRP supports natural healing and function."
  },
  {
    question: "What is PRP sexual rejuvenation?",
    answer: "PRP sexual rejuvenation uses concentrated growth factors from your own blood to improve blood flow, sensitivity, lubrication and natural sexual performance."
  },
  {
    question: "Is PRP safe for sexual rejuvenation?",
    answer: "Yes. PRP is very safe because it is autologous, meaning it comes from your own blood. Side effects are mild and short-lived."
  },
  {
    question: "What are the benefits of the P-Shot?",
    answer: "The P-Shot may enhance erection strength, sensitivity and circulation by delivering PRP into penile tissue to support natural erectile function."
  },
  {
    question: "Are there any P-Shot side effects?",
    answer: "Side effects are mild, such as temporary swelling or tenderness. Allergic reactions are extremely rare because PRP comes from your own blood."
  },
  {
    question: "How long does the O-Shot last?",
    answer: "Many women notice benefits for 12–18 months, including improved lubrication, sensitivity and sexual comfort. Duration varies between individuals."
  },
  {
    question: "What is vaginal rejuvenation without surgery?",
    answer: "Non-surgical vaginal rejuvenation uses PRP or energy-based treatments to improve lubrication, sensitivity, tissue health and comfort without downtime or invasive procedures."
  },
  {
    question: "What is a natural treatment for erectile dysfunction?",
    answer: "PRP and shockwave therapy are natural ED treatments that stimulate blood-flow regeneration and tissue repair, addressing the root causes rather than relying on tablets."
  },
  {
    question: "Is shockwave therapy effective for erectile dysfunction?",
    answer: "Shockwave therapy promotes new blood vessel growth in erectile tissue and can improve circulation. Many patients see benefits after a structured treatment course."
  },
  {
    question: "What are natural alternatives to Viagra or Cialis?",
    answer: "PRP and shockwave therapy offer non-medication alternatives by improving vascular health and supporting spontaneous erections without reliance on tablets."
  },
  {
    question: "Can premature ejaculation be treated naturally?",
    answer: "Yes. Techniques, topical therapies and PRP to support nerve balance can help improve timing, sensitivity control and confidence."
  },
  {
    question: "What is a non-surgical treatment for Peyronie’s disease?",
    answer: "PRP and shockwave therapy may help soften plaque, reduce discomfort and support curvature improvement without requiring invasive surgery."
  },
  {
    question: "Is this a private sexual health clinic?",
    answer: "Yes. We operate as a discreet, doctor-led private clinic offering confidential assessments and personalised regenerative treatment plans."
  }
];

// --- UPGRADED JSON-LD SCHEMA: Medical Clinic & Medical Therapy (Birmingham) ---
const srSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "name": "Healing-PRP Clinics Birmingham",
      "description": "Doctor-led sexual rejuvenation clinic in Birmingham offering P-Shot, O-Shot, and ED treatments.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Birmingham",
        "addressRegion": "West Midlands",
        "addressCountry": "UK"
      },
      "areaServed": {
        "@type": "City",
        "name": "Birmingham"
      },
      "medicalSpecialty": ["Urology", "Men's Health", "Women's Health"],
      // --- E-E-A-T UPGRADE ---
      "medicalDirector": {
        "@type": "Physician",
        "name": "Dr Syed Abdi",
        "url": "https://www.healing-prp.co.uk/our-doctor"
      }
    },
    {
      "@type": "MedicalTherapy",
      "name": "Sexual Rejuvenation & ED Treatment",
      "alternateName": ["P-Shot®", "O-Shot®", "Shockwave Therapy", "PRP Sexual Wellness"],
      "description": "Advanced autologous Platelet-Rich Plasma (PRP) and shockwave therapies designed to improve sexual wellness, tissue regeneration, blood flow, and treat ED and Peyronie's disease in Birmingham.",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "Urology"
      }
    }
  ]
};

export default function BirminghamSexualRejuvenationPage() {
  // --- GENERATE JSON-LD SCHEMA FOR FAQS ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main>
      {/* 1. Inject Medical Entity Schema */}
      <Script
        id="sr-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(srSchemaBirmingham) }}
      />
      
      {/* 2. Inject FAQ Schema */}
      <Script
        id="sr-faq-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* 3. Pass the faqs array as a prop to the client component */}
      <SexualRejuvenationClient locationName="Birmingham" faqs={faqs} />
    </main>
  );
}
