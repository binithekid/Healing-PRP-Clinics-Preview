import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premature Ejaculation Treatment - Healing-PRP Clinics | St Albans",
  description:
    "Advanced premature ejaculation treatment using behavioural and medical therapies. Non-surgical, GP-led care with custom creams and personalised plans in St Albans.",
};

export default function PrematureEjaculationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

