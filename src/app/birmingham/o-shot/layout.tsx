import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Birmingham Clinic",
    default: "Doctor-Led O-Shot® Female Rejuvenation | Birmingham Clinic",
  },
  description: "Doctor-led O-Shot in Birmingham Edgbaston. Doctor-led PRP therapy for female sexual health, sensitivity, and wellness.",
};

export default function BirminghamOShotLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="birmingham-oshot-route-wrapper">
      {children}
    </div>
  );
}
