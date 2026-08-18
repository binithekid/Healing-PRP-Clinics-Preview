import type { Metadata } from "next";
import VaginalDrynessClient from "@/components/pages/VaginalDrynessClient";

const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: {
    absolute: "Vaginal Dryness Treatment Hampstead, London | Healing-PRP",
  },
  description:
    "Doctor-led vaginal dryness treatment in Hampstead, London, including menopause-related dryness and GSM. Non-hormonal options include vaginal HA, PN + HA and O-Shot.",
  alternates: {
    canonical: "https://www.healing-prp.co.uk/hampstead/vaginal-dryness",
  },
  openGraph: {
    title: "Vaginal Dryness Treatment Hampstead, London | Healing-PRP",
    description:
      "Private doctor-led care for vaginal dryness, including menopause-related symptoms and genitourinary syndrome of menopause (GSM), with selected non-hormonal treatment options in Hampstead.",
    url: "https://www.healing-prp.co.uk/hampstead/vaginal-dryness",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/vaginal-dryness-treatment.webp",
        width: 1200,
        height: 630,
        alt: "Vaginal Dryness Treatment in Hampstead, London",
      },
    ],
  },
};

const faqs = [
  {
    question: "What is genitourinary syndrome of menopause (GSM)?",
    answer:
      "Genitourinary syndrome of menopause (GSM) describes changes that can affect the vaginal, vulval and urinary tissues as oestrogen levels fall around and after menopause. Symptoms may include vaginal dryness, burning, irritation, reduced lubrication, discomfort during sex and urinary symptoms.",
  },
  {
    question: "Is vaginal dryness a symptom of menopause?",
    answer:
      "Yes. Vaginal dryness is common during perimenopause and after menopause and is often related to falling oestrogen levels. Some women also experience burning, soreness, reduced lubrication or discomfort during intimacy.",
  },
  {
    question: "What are the genitourinary symptoms of menopause?",
    answer:
      "Genitourinary symptoms of menopause may include vaginal or vulval dryness, burning, irritation, reduced lubrication, discomfort during sex and urinary symptoms. These symptoms can vary considerably between women and should be assessed if persistent or troublesome.",
  },
  {
    question: "What is the best treatment for vaginal dryness after menopause?",
    answer:
      "There is no single best treatment for everyone. Treatment depends on the cause, severity of symptoms, medical history and personal preference. Established options include lubricants, vaginal moisturisers and vaginal oestrogen where appropriate. Selected non-hormonal treatments may also be discussed after medical assessment.",
  },
  {
    question: "Can vaginal dryness be treated without hormones?",
    answer:
      "Yes. Lubricants and vaginal moisturisers are established non-hormonal options. For selected patients, we can also discuss non-hormonal treatments such as vaginal hyaluronic acid, combined polynucleotide + hyaluronic acid treatment or PRP/O-Shot. Suitability is assessed individually.",
  },
  {
    question: "What non-hormonal treatments are available for menopausal vaginal dryness?",
    answer:
      "Non-hormonal approaches include lubricants and vaginal moisturisers. At Healing-PRP Clinics, selected patients may also discuss vaginal hyaluronic acid, combined polynucleotide + hyaluronic acid treatment and PRP/O-Shot. These injectable treatments are not considered first-line menopause treatment and are offered only after assessment.",
  },
  {
    question: "Does hyaluronic acid help vaginal dryness after menopause?",
    answer:
      "Hyaluronic acid is used as a non-hormonal approach to support vaginal hydration and comfort. Evidence is stronger for vaginal moisturising products such as gels or suppositories than for injectable protocols, so injectable vaginal HA is considered individually after consultation.",
  },
  {
    question: "Can the O-Shot help with vaginal dryness and reduced sensitivity?",
    answer:
      "The O-Shot uses platelet-rich plasma (PRP) prepared from your own blood. It may be discussed for selected women experiencing vaginal dryness, reduced lubrication, discomfort or reduced sensitivity. PRP is an emerging treatment option and results vary, so no specific outcome can be guaranteed.",
  },
  {
    question: "Can menopause cause pain or discomfort during sex?",
    answer:
      "Yes. Lower oestrogen levels can contribute to vaginal dryness and changes in the vaginal tissues, which may make intercourse uncomfortable or painful. Assessment can help determine whether dryness, tissue change or another cause is contributing.",
  },
  {
    question: "Can menopause cause urinary symptoms as well as vaginal dryness?",
    answer:
      "Yes. Genitourinary changes associated with menopause can affect both vaginal and urinary tissues. Some women experience urinary irritation, discomfort when passing urine or recurrent urinary symptoms alongside vaginal dryness.",
  },
  {
    question: "When should I see a doctor about vaginal dryness?",
    answer:
      "Medical assessment is advisable if vaginal dryness persists, affects daily life or intimacy, or occurs with symptoms such as unusual discharge, pelvic pain or vaginal bleeding. Bleeding after menopause should always be medically assessed before intimate injectable treatment is considered.",
  },
];

// --- COMPLETE SCHEMA: CLINIC, DOCTOR, THERAPIES & BREADCRUMBS ---
const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.healing-prp.co.uk/hampstead/vaginal-dryness#breadcrumb",
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
          "name": "Hampstead Clinic",
          "item": "https://www.healing-prp.co.uk/hampstead"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Vaginal Dryness Treatment",
          "item": "https://www.healing-prp.co.uk/hampstead/vaginal-dryness"
        }
      ]
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/hampstead/vaginal-dryness#clinic",
      "name": "Healing-PRP Clinics Hampstead",
      "url": "https://www.healing-prp.co.uk/hampstead/vaginal-dryness",
      "description": "Doctor-led private clinic in Hampstead, London providing advanced treatment for vaginal dryness and female intimate wellness.",
      "telephone": "+447990364147",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2 Hampstead High St",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "postalCode": "NW3 1PR",
        "addressCountry": "GB"
      },
      "areaServed": [
        { "@type": "City", "name": "London" },
        { "@type": "City", "name": "Hampstead" },
        { "@type": "City", "name": "North West London" },
        { "@type": "City", "name": "Belsize Park" }
      ],
      "medicalSpecialty": {
        "@id": "https://schema.org/Gynecologic"
      },
      "employee": [{ "@id": "https://www.healing-prp.co.uk/hampstead/vaginal-dryness#dr" }],
      "availableService": [
        {
          "@type": "MedicalProcedure",
          "name": "Vaginal Hyaluronic Acid Treatment",
          "description": "Non-hormonal injectable hyaluronic acid treatment offered to selected patients to support vaginal hydration and comfort."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Polynucleotide + Hyaluronic Acid Treatment",
          "description": "Combined polynucleotide and hyaluronic acid treatment offered to selected patients for hydration and tissue support."
        },
        {
          "@type": "MedicalProcedure",
          "name": "PRP / O-Shot",
          "description": "Platelet-rich plasma treatment using the patient's own blood, offered to selected women for intimate health concerns after assessment."
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/hampstead/vaginal-dryness#dr",
      "name": "Dr Syed Abdi",
      "jobTitle": "Medical Director",
      "url": "https://www.healing-prp.co.uk/our-doctor",
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "GMC Reference Number",
        "value": "6083294"
      },
      "sameAs": ["https://www.gmc-uk.org/registrants/6083294"],
      "worksFor": { "@id": "https://www.healing-prp.co.uk/hampstead/vaginal-dryness#clinic" }
    }
  ]
};

export default function HampsteadPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(combinedSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      <VaginalDrynessClient 
        locationName="Hampstead" 
        servingAreas="Hampstead • Belsize Park • West Hampstead • North West London" 
        faqs={faqs} 
      />
    </main>
  );
}
