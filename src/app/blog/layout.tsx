import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Healing-PRP Clinics | St Albans",
  description:
    "Read our latest articles about PRP treatments, sexual rejuvenation, joint injections, facial aesthetics, and regenerative medicine. Expert insights from a GMC-registered doctor in St Albans.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
