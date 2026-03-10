import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | St Albans & Birmingham",
    // Fits perfectly at 54 characters
    default: "Doctor-Led Personalised ED Medication | Healing-PRP",
  },
  description: "Bespoke, doctor-prescribed ED medication protocols. Private consultations and personalized treatment plans in St Albans and Birmingham.",
};

export default function PersonalisedEDMedicationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="ed-medication-route-wrapper">
      {children}
    </div>
  );
}
