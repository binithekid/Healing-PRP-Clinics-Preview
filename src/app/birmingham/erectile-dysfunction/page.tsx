import type { Metadata } from "next";
import ErectileDysfunctionClient from "@/components/pages/ErectileDysfunctionClient";

export const metadata: Metadata = {
  title: {
    // FIX: Focused on Birmingham & Midlands for browser tab
    absolute: "Erectile Dysfunction Treatment Birmingham | Healing-PRP",
  },

  description:
    "Specialist erectile dysfunction clinic in Birmingham. GMC-registered doctor offering non-surgical Shockwave Therapy & P-Shot (PRP). Confidential ED treatment in Edgbaston.",

  alternates: {
    // NOTE: Ensures Google knows this is the Birmingham specific page
    canonical: "https://healing-practice.co.uk/birmingham/erectile-dysfunction",
  },

  keywords: [
    // Core Birmingham Keywords
    "Erectile dysfunction treatment Birmingham",
    "ED clinic Birmingham",
    "P-Shot Birmingham",
    "Shockwave therapy Birmingham",
    
    // Hidden Reach Keywords (Manchester / Midlands)
    "Mens health clinic Manchester",
    "ED treatment Manchester",
    "Erectile dysfunction clinic Midlands",
    "Shockwave therapy West Midlands",
    
    // Hyper-Local Keywords
    "Private ED clinic Edgbaston",
    "Erectile dysfunction clinic Solihull",
    "ED treatment Sutton Coldfield",
    
    // Intent Keywords
    "Non-surgical impotence treatment",
    "GMC registered male health doctor",
    "Male performance clinic Birmingham",
    "Private impotence doctor West Midlands"
  ],

  openGraph: {
    title: "Erectile Dysfunction Treatment | Birmingham & Midlands",
    description:
      "Confidential, doctor-led ED treatments in Birmingham. Shockwave & PRP therapy. Conveniently serving Edgbaston, Solihull & Sutton Coldfield.",
    url: "https://healing-practice.co.uk/birmingham/erectile-dysfunction",
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/ed-doctor-consultation.webp",
        width: 1200,
        height: 630,
        alt: "Private ED Consultation Birmingham",
      },
    ],
  },
};

export default function BirminghamEDPage() {
  return (
    <ErectileDysfunctionClient 
      // 1. HEADLINE: "Healing-PRP Clinics, Birmingham"
      locationName="Birmingham"
      
      // 2. BADGE: Local catchment areas
      servingAreas="Edgbaston • Solihull • Sutton Coldfield • West Midlands"
      
      // 3. LINK: Points to your BIRMINGHAM P-Shot page (crucial for navigation)
      pShotLink="/birmingham/p-shot"
    />
  );
}
