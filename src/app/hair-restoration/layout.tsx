import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    // Fallback: More descriptive to capture "Doctor-led" searches
    default: "Doctor-Led PRP Hair Restoration & Regrowth | St Albans",
    
    // Result example: "Hair Loss Treatments | St Albans Clinic"
    template: "%s | St Albans Clinic",
  },
  description: "Advanced non-surgical hair restoration in St Albans using PRP and Exosome therapy. Doctor-led treatments for hair thinning and natural regrowth.",
  /* Canonical removed here to be defined specifically in the page.tsx */
};

export default function HairRestorationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hair-restoration-wrapper">
      {/* This wrapper remains visually identical. 
          Zero impact on your existing CSS or layout.
      */}
      {children}
    </div>
  );
}
