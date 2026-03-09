import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // Fallback branding if the child page doesn't provide a title
    default: "Contact & Appointments | Birmingham Clinic",
    
    // Result example: "Book Online | Birmingham Clinic"
    template: "%s | Birmingham Clinic",
  },
  description:
    "Book your private consultation at our Edgbaston clinic. Specialist medical protocols for Erectile Dysfunction (ED), P-Shot, and Hair Restoration in Birmingham.",
  /* Canonical removed from layout to prevent SEO conflicts with child routes */
};

export default function BirminghamContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="birmingham-contact-wrapper">
      {children}
    </div>
  );
}
