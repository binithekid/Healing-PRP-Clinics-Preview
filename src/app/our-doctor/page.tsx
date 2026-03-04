import type { Metadata } from "next";
import Link from "next/link";
import { FaUserMd, FaArrowLeft, FaEnvelope } from "react-icons/fa";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meet Your Doctor | Healing-PRP Clinics",
  description: "Dr Syed Abdi is the Medical Director of Healing-PRP Clinics. Full clinical profile coming soon.",
  robots: {
    index: false, // Tells Google not to heavily index this temporary page yet
    follow: true,
  }
};

export default function OurDoctorComingSoon() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A1128]">
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="max-w-3xl w-full text-center space-y-8">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-blue-400/30 rounded-full bg-blue-900/20 backdrop-blur-sm">
            <FaUserMd className="text-blue-300" />
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase font-inter">
              Medical Director
            </span>
          </div>

          {/* Main Headings */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-raleway font-bold text-white tracking-tight">
            Dr Syed Abdi
          </h1>
          
          <div className="w-16 h-1 bg-[#4041d1] mx-auto rounded-full"></div>

          <h2 className="text-xl md:text-2xl font-inter font-medium text-slate-300">
            Clinical Profile Currently Being Updated
          </h2>

          {/* Explanation Text */}
          <p className="text-base md:text-lg text-slate-400 font-inter leading-relaxed max-w-2xl mx-auto">
            We are currently integrating our new private practice platform. Dr Abdi is a GMC-registered doctor with over 10 years of clinical experience, serving as our Medical Director across all locations. 
            <br className="hidden md:block" />
            His full clinical profile, NHS background, and regenerative medicine credentials will be available here shortly.
          </p>

          {/* Action Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3.5 w-full sm:w-auto flex items-center justify-center text-sm border border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl font-bold transition-all active:scale-95 gap-2 font-inter"
            >
              <FaArrowLeft className="w-3.5 h-3.5" /> Return to Home
            </Link>
            
            <Link
              href="/#contact-form-section"
              className="px-8 py-3.5 w-full sm:w-auto flex items-center justify-center text-sm bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 gap-2 font-inter"
            >
              <FaEnvelope className="w-3.5 h-3.5" /> Book a Consultation
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
