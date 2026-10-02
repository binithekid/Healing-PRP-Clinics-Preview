import type { Metadata } from "next";
import PenisEnlargementClient from "@/components/pages/PenisEnlargementClient";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Penile Filler Birmingham | HA Penis Filler Treatment",
  },

  description:
    "Private doctor-led penile filler in Birmingham using premium hyaluronic acid filler for non-surgical girth enhancement. Discreet consultation, pricing from £1149.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham/penis-enlargement",
  },

  openGraph: {
    title: "Penile Filler Birmingham | HA Penis Filler Treatment",
    description:
      "Private doctor-led penile filler in Birmingham using premium hyaluronic acid filler for non-surgical girth enhancement. Discreet consultation, pricing from £1149.",
    url: "https://www.healing-prp.co.uk/birmingham/penis-enlargement",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Penile filler and non-surgical girth enhancement in Birmingham",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Penile Filler Birmingham | HA Penis Filler Treatment",
    description:
      "Private doctor-led penile filler in Birmingham using premium hyaluronic acid filler for non-surgical girth enhancement. Discreet consultation, pricing from £1149.",
    images: ["/hero_img.png"],
  },
};

// --- SEO RICH FAQS (Birmingham & West Midlands Focus) ---
const birminghamFaqs = [
  {
  question: "What is penis filler treatment in Birmingham?",
  answer: "Penis filler treatment in Birmingham is a non-surgical procedure using hyaluronic acid (HA) dermal filler to add volume and support penile girth enhancement. At our Healing PRP Edgbaston clinic, treatment is doctor-led, discreet, and planned around your anatomy, goals, medical history and suitability.",
  },
  {
    question: "Is penis filler the same as penile filler or non-surgical penis enlargement?",
    answer: "Yes. Penis filler may also be called penile filler, penile dermal filler, HA penile filler or non-surgical penis enlargement. It does not involve implants, fat transfer or surgery. Instead, hyaluronic acid filler is carefully placed beneath the skin of the penile shaft to support proportionate girth enhancement where suitable.",
  },
  {
    question: "Do you offer penis filler for men across the West Midlands?",
    answer: "Yes. Our Edgbaston clinic is convenient for men from Birmingham and the wider West Midlands, including Solihull, Sutton Coldfield, Wolverhampton, Coventry, Walsall and surrounding areas. Appointments are handled discreetly and confidentially.",
  },
  {
    question: "Is the Birmingham clinic easily accessible?",
    answer: "Yes. The clinic is located in Edgbaston, Birmingham, and is accessible by road and rail for patients travelling from across the Midlands and beyond. Many men choose our clinic because it offers a discreet medical setting away from busy high-street environments.",
  },
  {
    question: "Who is suitable for penile filler at the Birmingham clinic?",
    answer: "Penile filler may be suitable for selected men looking for discreet, non-surgical girth enhancement. Suitability depends on your medical history, anatomy, expectations, examination findings and the volume of filler being considered. Dr Syed Abdi will assess this carefully during your private consultation before advising whether treatment is appropriate.",
  },
  {
    question: "Is the penis filler procedure painful?",
    answer: "Most patients tolerate penis filler treatment well. A numbing approach is used to make the procedure as comfortable as possible, and the hyaluronic acid filler used may also contain local anaesthetic. You may feel pressure, movement or brief discomfort during treatment, but your comfort will be monitored throughout.",
  },
  {
    question: "How long does penis filler treatment take in Birmingham?",
    answer: "The appointment usually takes around 45 to 60 minutes, including consultation, preparation, treatment and aftercare advice. Penis filler is a non-surgical treatment, and most patients are able to leave the clinic shortly afterwards with clear aftercare instructions.",
  },
  {
    question: "How long do HA penis filler results last?",
    answer: "HA penis filler results commonly last around 12 to 18 months, although this varies between patients. Longevity can depend on your natural metabolism, lifestyle, starting anatomy, the volume of filler used and your individual response. Maintenance or top-up treatment can be discussed if suitable.",
  },
  {
    question: "Can penis filler be adjusted or dissolved?",
    answer: "A clinical advantage of hyaluronic acid filler is that it can usually be adjusted or dissolved in appropriate circumstances using hyaluronidase, a medical enzyme. This is assessed on a case-by-case basis and depends on the concern, timing, anatomy and clinical findings.",
  },
  {
    question: "How does HA penile filler compare with surgical penis enlargement?",
    answer: "HA penile filler is a non-surgical option for selected men seeking girth enhancement. It avoids general anaesthetic, implants and surgical incisions. Surgical options such as fat transfer or implants involve different risks, recovery times and suitability considerations. Dr Syed Abdi will discuss realistic expectations and whether non-surgical treatment is appropriate for you.",
  },
  {
    question: "What aftercare is needed after penile filler?",
    answer: "Aftercare is important after penile filler treatment. You will usually be advised to avoid sexual activity, masturbation, heavy exercise, hot baths, saunas and alcohol for a temporary period. You will also be shown how to perform gentle massage if this is appropriate for your treatment plan. Your exact aftercare instructions will be explained before you leave the clinic.",
  },
  {
    question: "How much does penis filler cost in Birmingham?",
    answer: "Penis filler cost in Birmingham depends on the volume of hyaluronic acid filler used and the treatment plan agreed during consultation. At Healing PRP Birmingham, pricing starts from £995, and all costs are discussed clearly before any treatment takes place.",
  },
  {
    question: "Do you offer penile filler before and after examples?",
    answer: "Before and after expectations can be discussed during consultation. Results vary between patients depending on starting anatomy, filler volume, swelling, aftercare and how the filler settles. Dr Syed Abdi will explain realistic outcomes before treatment so that you can make an informed decision.",
  },
  {
    question: "Is hyaluronic acid penile filler permanent?",
    answer: "No. Hyaluronic acid penile filler is not permanent. It gradually breaks down over time, and results typically reduce gradually. This is one reason why some patients consider maintenance or top-up treatment after a period of time, depending on their goals and suitability.",
  },
];

// --- UPGRADED JSON-LD SCHEMA ---
const enlargementSchemaBirmingham = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/birmingham/penis-enlargement#clinic",
      "name": "Healing-PRP Clinics Birmingham",
      "url": "https://www.healing-prp.co.uk/birmingham/penis-enlargement",
      "description": "Doctor-led private clinic in Edgbaston, Birmingham offering penile filler and non-surgical girth enhancement using hyaluronic acid (HA) dermal filler for suitable patients.",
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
        { "@type": "City", "name": "Birmingham" },
        { "@type": "City", "name": "Edgbaston" },
        { "@type": "City", "name": "Solihull" },
        { "@type": "City", "name": "Wolverhampton" },
        { "@type": "City", "name": "Coventry" },
        { "@type": "AdministrativeArea", "name": "West Midlands" }
      ],
      "medicalSpecialty": "Urologic",
      "availableService": [
        { "@id": "https://www.healing-prp.co.uk/birmingham/penis-enlargement#therapy" }
      ],
      "employee": [
        { "@id": "https://www.healing-prp.co.uk/birmingham/penis-enlargement#dr" }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/birmingham/penis-enlargement#dr",
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
        "@id": "https://www.healing-prp.co.uk/birmingham/penis-enlargement#clinic" 
      }
    },
    {
      "@type": "MedicalTherapy",
      "@id": "https://www.healing-prp.co.uk/birmingham/penis-enlargement#therapy",
      "name": "Penis Filler Birmingham",
      "alternateName": [
        "Penis Filler Birmingham",
        "HA Penis Filler",
        "HA Penile Filler",
        "Hyaluronic Acid Penile Filler",
        "Penile Dermal Filler",
        "Penile Girth Enhancement",
        "Non-Surgical Girth Enhancement",
        "Non-Surgical Penis Enlargement",
        "Penile Enlargement With Fillers",
        "Penile Enhancement Birmingham",
        "Penis Fillers Birmingham"
      ],
      "url": "https://www.healing-prp.co.uk/birmingham/penis-enlargement",
      "description": "Doctor-led penile filler treatment in Edgbaston, Birmingham using hyaluronic acid dermal filler for selected men seeking discreet, non-surgical girth enhancement. Suitability, risks, aftercare and fees are discussed before treatment.",
      "bodyLocation": "Penis",
      "procedureType": "Non-surgical",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "price": "1149",
        "url": "https://www.healing-prp.co.uk/birmingham/prices",
        "availability": "https://schema.org/InStock"
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
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Non-Surgical Penis Enlargement",
      "item": "https://www.healing-prp.co.uk/birmingham/penis-enlargement"
    }
  ]
};

export default function BirminghamPenisEnlargementPage() {
  // --- GENERATE JSON-LD SCHEMA FOR FAQS ---
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(enlargementSchemaBirmingham) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />
      
      <PenisEnlargementClient 
        locationName="Birmingham"
        servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
        faqs={birminghamFaqs}
      />
    </main>
  );
}
