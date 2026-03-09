import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // Fallback branding for the main contact page
    default: "Contact & Appointments | Healing-PRP Clinics",
    
    // Result example: "Book Online | St Albans Clinic"
    template: "%s | St Albans Clinic",
  },
  description:
    "Contact our St Albans clinic for private PRP treatments. Specialist care for Erectile Dysfunction (ED) and Hair Loss serving St Albans, Luton, and Hertfordshire.",
  /* Canonical removed from layout to prevent conflicts with potential child routes */
};

export default function StAlbansContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="stalbans-contact-wrapper">
      {/* This wrapper isolates contact-specific styles without changing the design */}
      {children}
    </div>
  );
}
