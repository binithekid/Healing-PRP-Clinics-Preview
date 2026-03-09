import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Birmingham Clinic",
    default: "O-Shot® Female Rejuvenation | Birmingham Clinic",
  },
  description: "Official O-Shot® (Orgasm Shot) provider in Birmingham Edgbaston. Doctor-led PRP therapy for female sexual health, sensitivity, and wellness.",
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
