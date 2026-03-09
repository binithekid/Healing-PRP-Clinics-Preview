import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // Fallback title for the main blog index
    default: "Doctor-Led Medical & PRP Blog | Healing-PRP Clinics",
    
    // This allows child blog posts to have their own titles + branding
    // Result: "Everything You Need to Know About PRP | Healing-PRP Blog"
    template: "%s | Healing-PRP Blog",
  },
  description:
    "Expert insights on PRP therapy, sexual rejuvenation, and regenerative medicine. Latest medical articles and health advice from our GMC-registered doctors.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
