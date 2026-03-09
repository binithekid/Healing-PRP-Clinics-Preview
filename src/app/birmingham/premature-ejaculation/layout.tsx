import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Birmingham Clinic",
    default: "Doctor-Led Premature Ejaculation Treatment | Birmingham",
  },
  description: "Specialist, doctor-led premature ejaculation treatments in Birmingham. Confidential, tailored therapies for male sexual health and performance in Edgbaston.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
