import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Birmingham Clinic",
    default: "P-Shot® Male Rejuvenation | Birmingham Clinic",
  },
  description: "Official P-Shot® (Priapus Shot) provider serving Edgbaston, Solihull & the West Midlands.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
