import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // A more authoritative fallback title
    default: "PRP & Regenerative Treatment FAQs | Expert Medical Advice",
    
    // Result: "Sexual Rejuvenation FAQs | St Albans Clinic"
    template: "%s | St Albans Clinic",
  },
  description:
    "Common questions about PRP Hair Restoration, Joint Injections, and Sexual Rejuvenation. Expert answers on safety, recovery, and results from our GMC-registered doctors.",
  /* Removing canonical from layout to prevent it from overwriting 
     specific FAQ sub-categories if you add them later. 
  */
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="faq-section-wrapper">
      {/* This layout acts as a clean container for the FAQ module.
          Ensures a consistent structure for search engine crawlers.
      */}
      {children}
    </div>
  );
}
