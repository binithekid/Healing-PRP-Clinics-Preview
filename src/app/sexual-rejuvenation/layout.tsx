import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // Lead with "Doctor-Led" for maximum trust
    default: "Doctor-Led Sexual Rejuvenation & ED Treatment | St Albans Clinic",
    
    // Automatically appends the location branding to child pages
    // Result: "[Child Title] | St Albans Clinic"
    template: "%s | St Albans Clinic",
  },
  description:
    "Confidential sexual rejuvenation treatments with PRP (P-Shot & O-Shot) by a GMC-registered doctor in St Albans. Serving Harpenden, Radlett, and Hertfordshire.",
  // Canonical REMOVED so child pages can define their own!
  openGraph: {
    siteName: "Healing-PRP Clinics",
    locale: "en_GB",
    type: "website",
  },
};

export default function SexualRejuvenationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="stalbans-sexual-wellness-wrapper">
      {/* Structural wrapper for St Albans sexual wellness pages */}
      {children}
    </div>
  );
}
