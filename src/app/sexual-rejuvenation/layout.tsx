import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sexual Rejuvenation & PRP Treatment - Healing-PRP Clinics | St Albans",
  description:
    "Confidential sexual rejuvenation treatments with PRP (P-Shot & O-Shot) by a GMC-registered doctor in St Albans. Natural, non-surgical solutions for erectile dysfunction, enhanced performance, and improved sexual wellness.",
};

export default function SexualRejuvenationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
