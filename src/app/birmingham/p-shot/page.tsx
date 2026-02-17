import type { Metadata } from "next";
import PShotClient from "@/components/pages/PShotClient";

export const metadata: Metadata = {
  title: {
    // Strong, location-first title for Google ranking
    absolute: "P-Shot Birmingham | Doctor-Led PRP (Priapus Shot®) | Healing-PRP Clinics",
  },
  description:
    "Official P-Shot® (Priapus Shot) clinic in Birmingham. GMC-registered doctor offering PRP & Exo-P therapy for erectile rejuvenation. Private clinic in Edgbaston.",
  keywords: [
    // Core Service Keywords
    "P-Shot Birmingham",
    "Priapus Shot Birmingham",
    "PRP injection for ED Birmingham",
    "Male enhancement Birmingham",
    
    // Advanced/New Options (Matches your new Exo-P section)
    "Exo-P Shot Birmingham",
    "Exosome therapy for ED West Midlands",

    // Specific Conditions
    "Peyronies disease treatment Birmingham",
    "Penile rejuvenation Birmingham",

    // Hyper-Local & Regional Locations
    "P-Shot clinic Edgbaston",
    "Private PRP clinic Solihull",
    "Mens health Sutton Coldfield",
    "Priapus Shot West Midlands",
    "P-Shot Wolverhampton",

    // User Intent (Cost/Doctor)
    "P-Shot cost Birmingham",
    "GMC registered P-Shot doctor",
    "Non-surgical erectile treatment"
  ],
  alternates: {
    // NOTE: Ensure this matches your actual live domain
    canonical: "https://www.healing-prp.co.uk/birmingham/p-shot",
  },
  openGraph: {
    title: "P-Shot Treatment (Priapus Shot) | Birmingham",
    description: "Doctor-led P-Shot & Exo-P clinic in Birmingham. Advanced PRP therapy for performance and rejuvenation.",
    url: "https://www.healing-prp.co.uk/birmingham/p-shot",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/p-shot-consultation.webp",
        width: 1200,
        height: 630,
        alt: "P-Shot Treatment Consultation Birmingham",
      },
    ],
  },
};

export default function BirminghamPShotPage() {
  return (
    <PShotClient
      // Passes "Birmingham" so the text changes from "St Albans"
      locationName="Birmingham"
      servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
    />
  );
}
