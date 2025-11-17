import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Healing-PRP Clinics",
  description:
    "Read the Terms of Service for Healing-PRP Clinics. Understand the terms and conditions for using our website and booking treatments.",
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

