import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Healing-PRP Clinics",
  description:
    "Read our Privacy Policy to understand how Healing-PRP Clinics collects, uses, and protects your personal data in compliance with UK GDPR regulations.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

