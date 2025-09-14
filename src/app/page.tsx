"use client";

import Hero from "@/components/Hero";
import TreatmentsSection from "@/components/TreatmentsSection";
import AestheticSection from "@/components/AestheticSection";
import JointInjectionsSection from "@/components/JointInjectionsSection";
import PRPExplanationSection from "@/components/PRPExplanationSection";
import CTASection from "@/components/CTASection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TreatmentsSection />
        <AestheticSection />
        <JointInjectionsSection />
        <PRPExplanationSection />
        <CTASection />
        <LocationSection />
        <FAQSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
