import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | St Albans Clinic",
    // Added "Doctor-Led" to establish immediate trust
    default: "Doctor-Led Premature Ejaculation Treatment | St Albans Clinic",
  },
  // Added a fallback description to prevent search engines from pulling random page text
  description: 
    "Specialist, doctor-led treatment for Premature Ejaculation (PE) in St Albans. Expert medical consultations and effective therapies to improve sexual health and confidence.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
