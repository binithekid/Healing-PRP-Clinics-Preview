import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Birmingham Clinic",
    default: "Peyronie's Disease Treatment | Birmingham Clinic",
  },
  description: "Specialist, non-surgical Peyronie's Disease treatments in Birmingham. Doctor-led PRP and Shockwave therapies for penile curvature and pain in Edgbaston.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
