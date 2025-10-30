"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleLearnAboutPRP = () => {
    router.push("/sexual-rejuvenation");
    // Scroll to PRP section after navigation
    setTimeout(() => {
      const element = document.getElementById("what-is-prp");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="relative md:h-[calc(100vh-4rem)] pb-5 md:pb-0 lg:h-[calc(100vh-5rem)] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Mobile: single static background (no carousel) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
          style={{ backgroundImage: "url('/Pic3.jpg')" }}
        ></div>
        {/* Desktop+: animated carousel */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block animate-image1-fade"
          style={{ backgroundImage: "url('/Pic1.jpg')" }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block animate-image2-fade"
          style={{ backgroundImage: "url('/Pic2.jpg')" }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block animate-image3-fade"
          style={{ backgroundImage: "url('/Pic3.jpg')" }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block animate-image4-fade"
          style={{ backgroundImage: "url('/Pic4.jpg')" }}
        ></div>
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/15"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex md:mt-30 md:mt-8 mt-20 h-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Content */}
            <div className="">
              {/* Location Tag */}
              <div
                className={`inline-block md:px-4 px-2 md:py-2 py-1 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs mb-2 font-medium transition-opacity transition-transform duration-1000 delay-200 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                St Albans • Hertfordshire • London
              </div>

              {/* Main Heading */}
              <h1
                className={`md:text-3xl font-medium text-2xl font-raleway text-white leading-tight transition-opacity transition-transform duration-1000 delay-300 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Natural Regeneration &{" "}
                <Link
                  href="/sexual-rejuvenation"
                  className="underline decoration-transparent hover:decoration-white"
                >
                  Erectile Dysfunction
                </Link>{" "}
                Treatment with PRP (
                <a
                  href="#prp-explanation"
                  className="underline decoration-transparent hover:decoration-white cursor-pointer"
                >
                  Platelet‑Rich Plasma
                </a>
                )
              </h1>

              {/* Description */}
              <p
                className={`mt-1 text-sm md:text-base text-white leading-relaxed transition-opacity transition-transform duration-1000 delay-500 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Evidence-based, non-surgical treatments for sexual wellness,
                facial aesthetics & hair, and joint pain in the heart of St
                Albans, minutes from London.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col mt-3 sm:flex-row gap-4 transition-opacity transition-transform duration-1000 delay-800 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <a
                  href="https://wa.me/447990364147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Book on WhatsApp
                </a>
                <button
                  onClick={handleLearnAboutPRP}
                  className="px-6 py-3 hidden md:block cursor-pointer text-sm border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] rounded-lg bg-white font-medium transition-all duration-300 hover:bg-[var(--brand-blue-50)]"
                >
                  Learn About PRP
                </button>
              </div>

              {/* Feature Banner - Removed from here, moved to bottom */}
            </div>

            {/* Right Side - Signature Treatments */}
            <div
              className={`transition-opacity transition-transform duration-1000 delay-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="p-8 bg-white/90 -mt-6 md:mt-0 rounded-lg border border-slate-200">
                <h2 className="md:text-2xl text-lg font-raleway text-slate-900 mb-6 transition-colors">
                  Our Signature Treatments
                </h2>
                <ul className="space-y-3 text-slate-600 text-sm ">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      P-Shot® (Priapus Shot) for erectile dysfunction &
                      Peyronie&apos;s
                    </span>
                  </li>
                  <div className="h-px bg-slate-200"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Exomine® P-Shot — premium, exosome-enhanced PRP</span>
                  </li>
                  <div className="h-px bg-slate-200"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>O-Shot® for female sexual wellness</span>
                  </li>
                  <div className="h-px bg-slate-200"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Shockwave Therapy for ED & Peyronie&apos;s</span>
                  </li>
                  <div className="h-px bg-slate-200"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>PRP Hair Restoration for thinning hair</span>
                  </li>
                  <div className="h-px bg-slate-200"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Polynucleotides & Botox aesthetics</span>
                  </li>
                  <div className="h-px bg-slate-200"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Joint Injections — PRP & Steroid</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Banner at Bottom */}
      <div
        className={`md:block absolute hidden bottom-0 left-0 right-0 bg-[var(--brand-blue)] transition-opacity transition-transform duration-1000 delay-1100 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center border-r border-[var(--brand-blue-100)]">
                <div className="text-white font-semibold text-sm">
                  GMC-registered doctor
                </div>
                <div className="text-blue-100 text-sm">
                  Over 10 years NHS experience
                </div>
              </div>
              <div className="text-center border-r border-[var(--brand-blue-100)]">
                <div className="text-white font-semibold text-sm">
                  Drug-free options
                </div>
                <div className="text-blue-100 text-sm">
                  Your own PRP — no hormones
                </div>
              </div>
              <div className="text-center border-r border-[var(--brand-blue-100)]">
                <div className="text-white font-semibold text-sm">
                  Discreet location
                </div>
                <div className="text-blue-100 text-sm">
                  21 Victoria Street, St Albans
                </div>
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-sm">
                  Flexible appointments
                </div>
                <div className="text-blue-100 text-sm">
                  Private 1:1 consultations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
