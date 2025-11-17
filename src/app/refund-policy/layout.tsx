import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy - Healing-PRP Clinics",
  description:
    "Read our Refund & Cancellation Policy to understand how Healing-PRP Clinics handles deposits, cancellations, and refunds for consultations and treatments.",
};

export default function RefundPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

