import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import EDFeatureBlock from "@/components/EDFeatureBlock";
import ServiceOverview from "@/components/ServiceOverview";
import PRPExplanationSection from "@/components/PRPExplanationSection";
import DynamicFAQ from "@/components/DynamicFAQ";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import TrustReviews from "@/components/TrustReviews";

// Helper recommended pattern: sanitize JSON-LD to mitigate XSS vectors.
// Next.js recommends replacing "<" with "\u003c".
const safeJsonLd = (obj: unknown) => JSON.stringify(obj).replace(/</g, "\\u003c");

// --- SEO OPTIMISATION ---
export const metadata: Metadata = {
  title: {
    absolute: "Doctor-Led Men’s & Women’s Intimate Health Clinic in St Albans",
  },
  description:
    "Doctor-led private clinic in St Albans offering men’s and women’s intimate health treatments, including erectile dysfunction care, P-Shot, O-Shot, shockwave therapy, and personalised non-surgical treatment options.",
  openGraph: {
    title: "Doctor-Led Men’s & Women’s Intimate Health Clinic in St Albans",
    description:
      "Private doctor-led intimate health clinic in St Albans for men’s and women’s sexual wellness, including ED treatment, P-Shot, O-Shot, and non-surgical regenerative care.",
    url: "https://www.healing-prp.co.uk",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Healing-PRP Clinics intimate health clinic in St Albans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doctor-Led Men’s & Women’s Intimate Health Clinic in St Albans",
    description:
      "Private doctor-led intimate health clinic in St Albans for men’s and women’s sexual wellness, including ED treatment, P-Shot, O-Shot, and non-surgical regenerative care.",
    images: ["/hero_img.png"],
  },
  alternates: {
    canonical: "https://www.healing-prp.co.uk",
  },
};

// --- SEO RICH FAQS (St Albans Focus: Men’s & Women’s Intimate Health) ---
const faqs = [
  {
    question: "Do I need a GP referral before booking at your St Albans clinic?",
    answer: "No. You can book a private, confidential consultation directly with Healing-PRP Clinics in St Albans without a GP referral. We provide doctor-led assessment for men’s and women’s intimate health concerns, with treatment options discussed according to individual suitability.",
  },
  {
    question: "Who carries out the consultation and treatment at Healing-PRP Clinics?",
    answer: "All consultations and treatments are carried out by Dr Syed Abdi, GMC-registered doctor and Medical Director of Healing-PRP Clinics, providing discreet and personalised care in St Albans.",
  },
  {
    question: "Do you offer men’s intimate health treatment in St Albans?",
    answer: "Yes. We provide doctor-led assessment and treatment for men’s intimate health concerns in St Albans, including erectile dysfunction, premature ejaculation, Peyronie’s disease, and other related concerns, depending on individual suitability.",
  },
  {
    question: "Do you offer women’s intimate health treatment in St Albans?",
    answer: "Yes. We offer doctor-led women’s intimate health consultations in St Albans for concerns such as vaginal dryness, reduced sensitivity, sexual wellness concerns, and other intimate health issues. Suitable non-surgical treatment options are discussed during consultation.",
  },
  {
    question: "What happens during the first intimate health consultation?",
    answer: "Your first consultation includes a private discussion about your symptoms, medical history, goals, and possible contributing factors. Where appropriate, suitable treatment options such as shockwave therapy, PRP-based treatments, personalised medication, or other doctor-led non-surgical care will be explained.",
  },
  {
    question: "Is treatment at Healing-PRP Clinics confidential?",
    answer: "Yes. Healing-PRP Clinics provides discreet, private, and confidential doctor-led care for sensitive men’s and women’s intimate health concerns in a professional and respectful clinical setting.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Healing-PRP Clinics",
    "alternateName": "Healing-PRP St Albans",
    "image": "https://www.healing-prp.co.uk/hero_img.png",
    "url": "https://www.healing-prp.co.uk",
    "telephone": "+44 7990 364147",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "21 Victoria St",
      "addressLocality": "St Albans",
      "addressRegion": "Hertfordshire",
      "postalCode": "AL1 3JJ", 
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.7527, 
      "longitude": -0.3394
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "St Albans"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Hertfordshire"
      }
    ],
    "medicalSpecialty": ["RegenerativeMedicine", "Urologic", "Orthopedic", "Dermatologic"],
    "medicalDirector": {
      "@type": "Physician",
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
      ]
    },
    
    // --- THE NEW MASTER HUB SERVICES ARRAY ---
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "Erectile Dysfunction Treatment",
        "alternateName": "P-Shot & Shockwave Therapy",
        "url": "https://www.healing-prp.co.uk/erectile-dysfunction",
        "description": "Doctor-led restorative treatments for ED including Li-ESWT and PRP (P-Shot).",
        "relevantSpecialty": "Urologic"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Shockwave Therapy for ED",
        "alternateName": "Low-Intensity Extracorporeal Shockwave Therapy (Li-ESWT)",
        "url": "https://www.healing-prp.co.uk/shockwave-therapy-erectile-dysfunction",
        "description": "Non-surgical acoustic wave therapy to improve blood flow, vascular health, and natural erectile function.",
        "relevantSpecialty": "Urologic"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Women's Sexual Wellness",
        "alternateName": "O-Shot",
        "url": "https://www.healing-prp.co.uk/o-shot",
        "description": "Regenerative PRP treatments for female sexual health and rejuvenation.",
        "relevantSpecialty": "Urologic"
      },
      {
        "@type": "MedicalTherapy",
        "name": "PRP & HA Joint Injections",
        "alternateName": "Hyaluronic Acid & Ostenil Injections",
        "url": "https://www.healing-prp.co.uk/joint-injections",
        "description": "Non-surgical PRP, Hyaluronic Acid (HA), and steroid injections for arthritis and sports injuries.",
        "relevantSpecialty": "Orthopedic"
      },
      {
        "@type": "MedicalTherapy",
        "name": "PRP Hair Restoration",
        "url": "https://www.healing-prp.co.uk/hair-restoration",
        "description": "Advanced PRP and Exosome therapy to stimulate natural hair regrowth.",
        "relevantSpecialty": "Dermatologic"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Facial Aesthetics",
        "alternateName": "Vampire Facial & Polynucleotides",
        "url": "https://www.healing-prp.co.uk/facial-aesthetics",
        "description": "Natural skin rejuvenation using Platelet-Rich Plasma, Polynucleotides, and Botox.",
        "relevantSpecialty": "Dermatologic"
      }
    ],
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ]
  };

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
    <>
      {/* 1. Inject Medical Entity Schema safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />

      {/* 2. Inject FAQ Schema safely */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />

      <main className="flex flex-col w-full">
        <Hero />
        
        {/* --- INJECTED ED FEATURE BLOCK --- */}
        <EDFeatureBlock />

        {/* Adding an ID here so the button below can anchor to it smoothly */}
        <div id="treatments">
          <ServiceOverview />
        </div>
        
        <PRPExplanationSection />

        <section className="py-12 bg-white border-t border-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-4">
            
            {/* Swapped "Meet Your Doctor" for "Explore All Treatments" */}
            <Link
              href="#treatments"
              className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm bg-[#0A1128] hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 gap-2"
            >
              Explore All Treatments
            </Link>

            <Link
              href="/prices"
              className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 gap-2"
            >
              View Treatment Prices
            </Link>
            
            <Link
              href="/faq"
              className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-white rounded-xl font-bold transition-all active:scale-95 gap-2"
            >
              View Clinic FAQs
            </Link>
          </div>
        </section>

        <DynamicFAQ faqs={faqs} locationName="St Albans" />
        
        {/* --- GOOGLE REVIEWS SECTION ADDED HERE --- */}
        <div id="reviews-section" className="bg-white">
          <TrustReviews widgetUrl="https://cdn.trustindex.io/loader.js?eb147a565c3c36945f26281e586" />
        </div>

        <ContactCTASection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
