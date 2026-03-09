import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // Fallback title for the Joint section
    default: "Doctor-Led PRP & Steroid Joint Injections",
    
    // This appends the location branding to the page title
    // Result: "Knee Pain Treatments | St Albans Clinic"
    template: "%s | St Albans Clinic",
  },
  description:
    "Doctor-led joint injections in St Albans. Specialist PRP therapy and steroid injections for arthritis, sports injuries, and chronic joint pain.",
  /* Canonical removed from layout to prevent SEO conflicts with future child routes */
};

export default function JointInjectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="stalbans-joints-wrapper">
      {/* Structural wrapper for St Albans joint pages */}
      {children}
    </div>
  );
}
