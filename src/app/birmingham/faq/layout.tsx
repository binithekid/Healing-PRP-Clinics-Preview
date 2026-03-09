import type { Metadata } from "next";
import React from "react";

/**
 * Layout for the Birmingham FAQ section.
 * Using a Metadata Template to ensure consistent Birmingham branding.
 */
export const metadata: Metadata = {
  title: {
    // Fallback if the page title is missing
    default: "Doctor-Led Treatment & Clinic FAQs | Birmingham Clinic",
    
    // Automatically appends location to child page titles
    // Result: "PRP Treatment FAQs | Birmingham Clinic"
    template: "%s | Birmingham Clinic",
  },
  description:
    "Doctor-led common questions about PRP Hair Restoration, Joint Injections, and Sexual Rejuvenation at our Birmingham clinic in Edgbaston. Information on parking and doctor-led care.",
};

export default function BirminghamFaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="birmingham-faq-container">
      {/* This wrapper allows for Birmingham-specific styling 
          or local trust badges relevant to the West Midlands. */}
      {children}
    </div>
  );
}
