import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // Broad category name with fallback branding
    default: "Sexual Rejuvenation & Wellness | Birmingham Clinic",
    
    // Result example: "P-Shot Treatment | Birmingham Clinic"
    template: "%s | Birmingham Clinic",
  },
  description:
    "Doctor-led sexual rejuvenation in Birmingham. Specialist P-Shot, O-Shot, and personalised ED medication in Edgbaston for men's and women's sexual wellness.",
};

export default function BirminghamSexualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
