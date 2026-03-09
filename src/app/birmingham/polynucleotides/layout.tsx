import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Birmingham Clinic",
    default: "Doctor-Led Polynucleotides Treatment | Birmingham Clinic",
  },
  description: "Doctor-led Polynucleotides skin rejuvenation in Birmingham Edgbaston. Advanced regenerative aesthetics for face, under-eyes, and neck in the West Midlands.",
};

export default function BirminghamPolynucleotidesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
