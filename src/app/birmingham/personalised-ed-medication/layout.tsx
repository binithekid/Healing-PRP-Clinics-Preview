import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Birmingham Clinic",
    default: "Doctor-Led Personalised ED Medication | Birmingham Clinic",
  },
  description: "Doctor-prescribed, personalised Erectile Dysfunction medication in Birmingham Edgbaston. Tailored treatment plans for men in the West Midlands.",
};

export default function BirminghamEDMedicationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="birmingham-ed-route-wrapper">
      {children}
    </div>
  );
}
