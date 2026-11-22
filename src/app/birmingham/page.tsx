
import type { Metadata } from "next";
import BirminghamHomeClient from "@/components/pages/BirminghamHomeClient";

// Escape HTML-significant characters when outputting JSON-LD.
const safeJsonLd = (obj: unknown) =>
  JSON.stringify(obj).replace(/</g, "\\u003c");

// Birmingham homepage FAQs.
const birminghamFaqs = [
  {
    question: "Do I need a GP referral to visit your Birmingham clinic?",
    answer:
      "No. You can contact Healing PRP Clinics directly to arrange a private consultation in Edgbaston, Birmingham. A medical assessment is carried out before any treatment is recommended.",
  },
  {
    question: "Who carries out consultations and treatments at the Birmingham clinic?",
    answer:
      "Consultations and treatments are led by Dr Syed Abdi, a UK-trained, GMC-registered GP and Medical Director of Healing PRP Clinics (GMC number 6083294). Your medical history, concerns, treatment options and suitability are reviewed individually.",
  },
  {
    question: "Do you offer penis filler treatment in Birmingham?",
    answer:
      "Yes. We offer doctor-led hyaluronic acid (HA) penis filler, also called penile filler, for selected adults seeking non-surgical penile girth enhancement. The aim is to increase girth rather than length. Dr Syed Abdi discusses suitability, realistic expectations, risks, aftercare and costs before treatment.",
  },
  {
    question: "Can I have a private assessment for erectile dysfunction in Birmingham?",
    answer:
      "Yes. Dr Syed Abdi provides private erectile dysfunction (ED) assessments, including review of symptoms, medical history, medications and possible contributing health factors. Suitable treatment options are discussed after assessment; no particular treatment or outcome is guaranteed.",
  },
  {
    question: "Do you assess Peyronie's disease at your Birmingham clinic?",
    answer:
      "Yes. Consultations can assess concerns such as penile curvature, plaque, discomfort and erectile difficulties. Dr Syed Abdi discusses appropriate management options, their potential risks and the limitations of the available evidence, including for emerging injection treatments.",
  },
  {
    question: "Are P-Shot and shockwave therapy available in Birmingham?",
    answer:
      "Yes. P-Shot (platelet-rich plasma) and shockwave therapy are offered at our Birmingham clinic following individual assessment. They are not suitable for everyone, and evidence for PRP injections for erectile dysfunction remains limited. Any potential benefits, uncertainties, alternatives and costs are explained before treatment.",
  },
  {
    question: "Do you provide women's intimate health consultations in Birmingham?",
    answer:
      "Yes. We provide confidential assessments for selected women's intimate health concerns, including vaginal dryness and discomfort. Treatment options, including whether PRP-based or hyaluronic acid procedures are appropriate, are discussed with attention to the available evidence, risks and individual suitability.",
  },
  {
    question: "Where is your Birmingham clinic, and is free parking available?",
    answer:
      "Healing PRP Clinics is located at 38 Harborne Road, Edgbaston, Birmingham, B15 3EB, in the Edgbaston Medical Quarter. A large, free on-site car park is available for patients travelling from Birmingham, Solihull, Coventry, Wolverhampton and elsewhere in the West Midlands.",
  },
];

// --- BIRMINGHAM HOMEPAGE METADATA ---
export const metadata: Metadata = {
  title: {
    absolute: "Intimate Health Clinic Birmingham | ED & Penis Filler",
  },

  description:
    "Doctor-led intimate health in Birmingham. Private ED, penis filler, Peyronie's and women's intimate health consultations in Edgbaston, West Midlands.",

  alternates: {
    canonical: "https://www.healing-prp.co.uk/birmingham",
  },

  openGraph: {
    title: "Intimate Health Clinic Birmingham | ED & Penis Filler",
    description:
      "Doctor-led intimate health in Birmingham. Private ED, penis filler, Peyronie's and women's intimate health consultations in Edgbaston, West Midlands.",
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
    title: "Intimate Health Clinic Birmingham | ED & Penis Filler",
    description:
      "Doctor-led intimate health in Birmingham. Private ED, penis filler, Peyronie's and women's intimate health consultations in Edgbaston, West Midlands.",
    images: ["/hero_img.png"],
  },
};

// --- BIRMINGHAM MEDICAL CLINIC STRUCTURED DATA ---
const birminghamHomeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.healing-prp.co.uk/birmingham#clinic",
      name: "Healing-PRP Clinics Birmingham",
      alternateName: "Healing-PRP Birmingham",
      description:
        "Private doctor-led clinic in Edgbaston, Birmingham, providing men's and women's intimate health consultations, penile filler, erectile dysfunction assessment and selected non-surgical treatments.",
      url: "https://www.healing-prp.co.uk/birmingham",
      logo: "https://www.healing-prp.co.uk/Logo2.png",
      image: "https://www.healing-prp.co.uk/hero_img.png",
      telephone: "+447990364147",

      address: {
        "@type": "PostalAddress",
        streetAddress: "38 Harborne Road",
        addressLocality: "Birmingham",
        addressRegion: "West Midlands",
        postalCode: "B15 3EB",
        addressCountry: "GB",
      },

      areaServed: [
        { "@type": "City", name: "Birmingham" },
        { "@type": "AdministrativeArea", name: "West Midlands" },
        { "@type": "Place", name: "Edgbaston" },
      ],

      employee: [
        {
          "@id": "https://www.healing-prp.co.uk/birmingham#dr",
        },
      ],

      availableService: [
        {
          "@type": "MedicalTherapy",
          name: "Penis Filler (Hyaluronic Acid Penile Filler)",
          url: "https://www.healing-prp.co.uk/birmingham/penis-enlargement",
          description:
            "Doctor-led consultation and HA filler treatment for selected adults considering non-surgical penile girth enhancement.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Erectile Dysfunction Assessment and Treatment",
          url: "https://www.healing-prp.co.uk/birmingham/erectile-dysfunction",
          description:
            "Private, doctor-led assessment of erectile dysfunction and discussion of suitable management options.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Peyronie's Disease Assessment",
          url: "https://www.healing-prp.co.uk/birmingham/peyronies-disease",
          description:
            "Assessment and discussion of treatment options for penile curvature, plaque and related symptoms.",
        },
        {
          "@type": "MedicalTherapy",
          name: "P-Shot (Platelet-Rich Plasma)",
          url: "https://www.healing-prp.co.uk/birmingham/p-shot",
          description:
            "PRP-based procedure discussed following suitability assessment, with explanation of limited evidence for erectile dysfunction.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Shockwave Therapy for Erectile Dysfunction",
          url: "https://www.healing-prp.co.uk/birmingham/shockwave-therapy-erectile-dysfunction",
          description:
            "Low-intensity shockwave therapy considered for selected patients after doctor-led assessment.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Women's Intimate Health Consultations",
          url: "https://www.healing-prp.co.uk/birmingham/o-shot",
          description:
            "Confidential assessment and discussion of selected women's intimate health concerns and treatment options.",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.healing-prp.co.uk/birmingham#dr",
      name: "Dr Syed Abdi",
      jobTitle: "GP and Medical Director",
      telephone: "+447990364147",

      identifier: {
        "@type": "PropertyValue",
        propertyID: "GMC Reference Number",
        value: "6083294",
      },

      url: "https://www.healing-prp.co.uk/our-doctor",

      sameAs: [
        "https://www.gmc-uk.org/registrants/6083294",
      ],

      worksFor: {
        "@id": "https://www.healing-prp.co.uk/birmingham#clinic",
      },
    },
  ],
};

// --- BREADCRUMB SCHEMA ---
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.healing-prp.co.uk/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Birmingham Clinic",
      item: "https://www.healing-prp.co.uk/birmingham",
    },
  ],
};

// --- BIRMINGHAM HOMEPAGE ---
export default function BirminghamPage() {
  return (
    <>
      {/* Medical clinic and doctor structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(birminghamHomeSchema),
        }}
      />

      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(breadcrumbSchema),
        }}
      />

      {/* Existing homepage with updated FAQs */}
      <BirminghamHomeClient faqs={birminghamFaqs} />
    </>
  );
}
