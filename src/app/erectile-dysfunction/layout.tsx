import type { Metadata } from "next";
import { ReactNode } from "react"; // <--- This import is required!

export const metadata: Metadata = {
  title: {
    template: "%s | St Albans Clinic",
    // Added "Doctor-Led" to establish immediate medical authority
    default: "Doctor-Led Erectile Dysfunction Treatment | St Albans Clinic",
  },
  // Subtly enhanced to include the medical trust signal
  description: "Doctor-led, non-surgical Erectile Dysfunction treatment serving Luton, St Albans & Hertfordshire.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
