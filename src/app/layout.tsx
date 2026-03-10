import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import GlobalStickyCTAs from "@/components/GlobalStickyCTAs";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

// --- GLOBAL SEO DEFAULTS ---
export const metadata: Metadata = {
  // Required for Next.js to auto-generate correct URLs for all child pages
  metadataBase: new URL("https://www.healing-prp.co.uk"),
  title: {
    // Moved "Doctor-Led" to the front for maximum impact
    // Length: 58 characters (Perfect sweet spot)
    default: "Doctor-Led Regenerative Medicine | Healing-PRP Clinics",
    // General brand template for top-level pages (Home, About, Contact)
    template: "%s | Healing-PRP Clinics", 
  },
  description: "Specialist private clinic in St Albans & Birmingham. PRP Hair Restoration, Joint Injections, P-Shot & O-Shot treatments by GMC-registered doctors.",
  keywords: [
    "PRP Clinic UK",
    "Private Doctor St Albans",
    "Private Doctor Birmingham",
    "Regenerative Medicine",
    "Erectile Dysfunction Treatment",
    "Hair Loss Clinic",
    "Joint Pain Injections"
  ],
  icons: {
    icon: "/Logo2.png", 
    shortcut: "/Logo2.png",
    apple: "/Logo2.png", 
  },
  openGraph: {
    // Universal site-wide tags ONLY. 
    // Title, description, and URL are intentionally left out so child pages can define them!
    type: "website",
    locale: "en_GB",
    siteName: "Healing-PRP Clinics",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${raleway.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        {/* Header appears on ALL pages */}
        <Header /> 
        
        {/* Main Content Area */}
        <main>
          {children}
        </main>
        
        {/* Footer is typically called within page.tsx to allow for 
            location-specific footer details, but can be added here 
            if you want a universal one. */}
            
        {/* The Global Sticky Buttons */}
        <GlobalStickyCTAs />
      </body>
    </html>
  );
}
