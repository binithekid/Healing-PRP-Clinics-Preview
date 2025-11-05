import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Healing-PRP Clinics | St Albans",
  description:
    "Get in touch with Healing-PRP Clinics in St Albans. Book a confidential consultation with our GMC-registered doctor for PRP treatments. Contact us via phone, email, or WhatsApp.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
