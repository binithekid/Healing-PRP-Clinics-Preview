import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Healing-PRP Clinics",
    default: "Private Erectile Dysfunction Clinic | Doctor-Led Care",
  },
  description:
    "Move beyond automated online pill subscriptions. Book a face-to-face erectile dysfunction assessment with a private GMC doctor. Private clinic fees apply.",
};

export default function ErectileDysfunctionNationalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <section className="w-full">{children}</section>;
}
