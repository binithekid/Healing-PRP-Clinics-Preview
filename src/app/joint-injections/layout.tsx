import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRP Joint Injections - Healing-PRP Clinics | St Albans",
  description:
    "PRP and steroid joint injections in St Albans by a GMC-registered doctor. Natural treatment for joint pain, arthritis, and sports injuries. Evidence-based regenerative medicine for knees, shoulders, and more.",
};

export default function JointInjectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
