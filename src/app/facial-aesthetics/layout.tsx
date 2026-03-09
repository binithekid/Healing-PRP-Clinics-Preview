import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // Fallback title for the main aesthetics hub
    default: "Facial Aesthetics & Skin Rejuvenation | St Albans",
    // Template for child pages: e.g., "Polynucleotides | St Albans Clinic"
    template: "%s | St Albans Clinic",
  },
  description:
    "Professional facial aesthetics treatments in St Albans including polynucleotides and HA skin boosters. Safe, natural, and effective treatments by a GMC-registered doctor.",
  /* Canonical removed from layout to prevent conflicts; define it in the page.tsx level */
};

export default function FacialAestheticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="stalbans-aesthetics-wrapper">
      {/* This wrapper remains exactly as you had it, 
          ensuring zero change to your visual styling.
      */}
      {children}
    </div>
  );
}
