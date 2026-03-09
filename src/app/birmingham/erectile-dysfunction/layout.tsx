import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Birmingham Clinic",
    default: "Doctor Led Erectile Dysfunction Treatment | Birmingham Clinic",
  },
  description: "Non-surgical Erectile Dysfunction treatment serving Edgbaston, Solihull & the West Midlands.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
