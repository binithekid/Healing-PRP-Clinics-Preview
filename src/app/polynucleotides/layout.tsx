import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | St Albans & Birmingham",
    // Hits the sweet spot at 56 characters
    default: "Doctor-Led Polynucleotides DNA Glow | Healing-PRP Clinics",
  },
  description: "Advanced DNA Glow Polynucleotide treatments for skin rejuvenation. Doctor-led regenerative care in St Albans and Birmingham for face, eyes, and hair.",
};

export default function PolynucleotidesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="polynucleotides-layout-wrapper">
      {children}
    </div>
  );
}
