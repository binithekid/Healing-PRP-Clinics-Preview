import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Healing-PRP Clinics",
  description:
    "Learn about how Healing-PRP Clinics uses cookies and similar technologies on our website, and how you can manage your cookie preferences.",
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

