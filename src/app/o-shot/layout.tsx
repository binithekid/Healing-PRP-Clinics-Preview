import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | St Albans Clinic",
    default: "Doctor-Led O-Shot Female Rejuvenation | St Albans Clinic",
  },
  description: "Doctor-led O-Shot in St Albans and Hertfordshire. Doctor-led PRP therapy for female sexual health, sensitivity, and wellness.",
};

export default function OShotLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="oshot-route-wrapper">
      {children}
    </div>
  );
}
