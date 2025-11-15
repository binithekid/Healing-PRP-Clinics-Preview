import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peyronie's Disease Treatment - Healing-PRP Clinics | St Albans",
  description:
    "Advanced Peyronie's Disease treatment combining PRP P-Shot with Low Intensity Shockwave Therapy. Non-surgical, GP-led care for plaque remodelling and vascular regeneration in St Albans.",
};

export default function PeyroniesDiseaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

