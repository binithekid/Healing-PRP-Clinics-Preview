import type { Metadata } from "next";
import BirminghamHomeClient from "@/components/pages/BirminghamHomeClient";
import Script from "next/script";

// --- SEO RICH FAQS (Birmingham Focus) ---
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
    question: "Is the P-Shot® available at the Birmingham location?",
    answer: "Yes, Dr Abdi is an officially licensed and CMA-certified provider of the P-Shot® and O-Shot®, and regularly performs these regenerative procedures at our Birmingham clinic."
  },
  {
    question: "How long does a PRP procedure take?",
    answer: "Most PRP treatments, including the P-Shot and joint injections, take between 45 to 60 minutes. This includes a thorough medical review, blood draw, premium double-spin centrifugation, and the treatment itself."
  },
  {
    question: "What areas does the Birmingham clinic serve?",
    answer: "Our Birmingham clinic is conveniently located to serve patients across the West Midlands, including Solihull, Sutton Coldfield, Wolverhampton, and Dudley."
  }
];

export const metadata: Metadata = {
  // FIXED TITLE: Using absolute ensures the layout doesn't override it.
  title: {
   absolute: "Doctor-Led PRP & ED Clinic Birmingham | Healing-PRP Clinics",
  },
  
  description:
    "Private, doctor-led clinic in Birmingham for sexual rejuvenation and P-Shot® (PRP), plus PRP hair restoration and PRP joint injections. Discreet consultations in Edgbaston.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham",
  },
  
  keywords: [
    "PRP Clinic Birmingham",
    "Private Doctor Birmingham",
    "Regenerative Medicine Birmingham",
    "Private medical clinic Edgbaston",
    "Erectile Dysfunction treatment Birmingham", 
    "ED clinic West Midlands",                    
    "P-Shot Birmingham",
    "O-Shot Birmingham",
    "Hair Loss Treatment Birmingham",
    "Joint Pain Clinic Birmingham",
    "Polynucleotides Birmingham",
    "Edgbaston Medical Quarter clinic"
  ],
  
  openGraph: {
    title: "Healing-PRP Clinics | Birmingham Location",
    description:
      "Doctor-led regenerative treatments and Erectile Dysfunction (ED) solutions in Birmingham. Serving Solihull, Sutton Coldfield & West Midlands.",
    url: "https://www.healing-prp.co.uk/birmingham",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// --- UPGRADED JSON-LD SCHEMA: Master Medical Clinic (Birmingham) ---
const birminghamHomeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "name": "Healing-PRP Clinics Birmingham",
      "description": "Leading private doctor-led clinic in Birmingham specialising in regenerative medicine, PRP, Erectile Dysfunction, Joint Injections, and Hair Restoration.",
      "url": "https://www.healing-prp.co.uk/birmingham",
      "logo": "https://www.healing-prp.co.uk/Logo2.png",
      "image": "https://www.healing-prp.co.uk/Logo2.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Birmingham",
        "addressRegion": "West Midlands",
        "addressCountry": "UK"
      },
      "areaServed": [
        { "@type": "City", "name": "Birmingham" },
        { "@type": "AdministrativeArea", "name": "West Midlands" },
        { "@type": "Neighborhood", "name": "Edgbaston" }
      ],
      "medicalSpecialty": [
        "Urology", 
        "Men's Health", 
        "Women's Health", 
        "Dermatology", 
        "Rheumatology"
      ],
      "medicalDirector": {
        "@type": "Physician",
        "name": "Dr Syed Abdi",
        "url": "https://www.healing-prp.co.uk/our-doctor"
      }
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
      <Script
        id="home-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(birminghamHomeSchema) }}
      />
      <Script
        id="faq-schema-birmingham"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <BirminghamHomeClient faqs={birminghamFaqs} />
    </>
  );
}
