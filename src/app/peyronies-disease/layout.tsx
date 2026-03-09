import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | St Albans Clinic",
    // Added "Doctor-Led" to establish immediate trust
    default: "Doctor-Led Peyronie's Disease Treatment | St Albans Clinic",
  },
  // Added a fallback description to prevent search engines from pulling random page text
  description: 
    "Specialist, doctor-led treatment for Peyronie's Disease in St Albans. Non-surgical regenerative therapies to reduce plaque, correct curvature, and restore function.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
