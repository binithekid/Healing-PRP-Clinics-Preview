import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Healing-PRP Clinics",
    default: "Ozone Therapy Hampstead, London | Healing-PRP Clinics",
  },
  description:
    "Doctor-led medical ozone therapy in Hampstead, London, including ozone blood therapy, rectal, vaginal and sinus ozone treatments following clinical assessment.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
