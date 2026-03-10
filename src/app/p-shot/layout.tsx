import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | St Albans Clinic",
    // Added "Doctor-Led" to establish immediate clinical authority
    default: "Doctor-Led P-Shot Male Rejuvenation | St Albans Clinic",
  },
  // Enhanced with the trust signal for Hertfordshire patients
  description: "Doctor-led, P-Shot (Priapus Shot) provider serving Luton, St Albans & Hertfordshire. Expert regenerative care for male performance.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
