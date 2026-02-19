import type { Metadata } from "next";
import PricesClient from "@/components/pages/PricesClient";
import Script from "next/script";

export const metadata: Metadata = {
  // 1. Optimized Title: Clean and ready for the Layout Template
  title: "Treatment Prices & Packages",
  
  description: "Transparent, doctor-led pricing for PRP Hair Restoration, Joint Pain Injections, and Sexual Rejuvenation in St Albans. No hidden costs. Serving Hertfordshire.",
  
  alternates: {
    canonical: "https://www.healing-prp.co.uk/prices",
  },

  // 2. Expanded Local & Pricing Keywords
  keywords: [
    "PRP treatment cost St Albans",
    "Hair restoration prices Hertfordshire",
    "Joint injection cost Harpenden",
    "P-Shot price Watford",
    "O-Shot cost Radlett",
    "Vampire Facial price list St Albans",
    "Private doctor consultation fees",
    "Polynucleotide treatment cost Hemel Hempstead",
    "Affordable PRP therapy North London",
    "Regenerative medicine prices Berkhamsted"
  ],

  openGraph: {
    title: "Healing-PRP Clinics | St Albans Price List",
    description: "View our full price list for regenerative medical treatments. Specialist care by GMC-registered doctors in St Albans and Hertfordshire.",
    url: "https://www.healing-prp.co.uk/prices",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

// 3. The Local SEO Schema (Moved from Client to Server Component)
const priceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Healing-PRP Clinics St Albans",
  "priceRange": "£120 - £1800",
  "image": "https://www.healing-prp.co.uk/Logo2.png",
  "description": "Doctor-led regenerative medicine prices for St Albans and Hertfordshire.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "St Albans",
    "addressRegion": "Hertfordshire",
    "addressCountry": "UK"
  }
};

export default function PricesPage() {
  // We pass isBirmingham={false} to ensure the St Albans specific 
  // pricing or address info is displayed.
  return (
    <>
      <Script
        id="price-schema-stalbans"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }}
      />
      <PricesClient isBirmingham={false} />
    </>
  );
}
