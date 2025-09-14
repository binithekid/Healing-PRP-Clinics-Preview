"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image1-fade"
          style={{ backgroundImage: "url('/Pic1.jpg')" }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image2-fade"
          style={{ backgroundImage: "url('/Pic2.jpg')" }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image3-fade"
          style={{ backgroundImage: "url('/Pic3.jpg')" }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image4-fade"
          style={{ backgroundImage: "url('/Pic4.jpg')" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex md:mt-30 mt-8 h-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Content */}
            <div className="">
              {/* Location Tag */}
              <div
                className={`inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs mb-2 font-inter font-medium transition-all duration-1000 delay-200 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                St Albans • Hertfordshire • London
              </div>

              {/* Main Heading */}
              <h1
                className={`text-3xl sm:text-4xl lg:text-5xl font-raleway text-navy-600 dark:text-navy-400 leading-tight transition-all duration-1000 delay-300 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Natural Regeneration with PRP, Confidential Care by a GMC
                Registered GP
              </h1>

              {/* Description */}
              <p
                className={`font-inter mt-1 text-slate-600 dark:text-slate-300 leading-relaxed transition-all duration-1000 delay-500 ${
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
                className={`flex flex-col mt-3 sm:flex-row gap-4 transition-all duration-1000 delay-800 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <button className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 flex items-center gap-2">
                  <FaWhatsapp className="w-5 h-5" />
                  Book on WhatsApp
                </button>
                <button className="px-6 py-3 hidden md:block cursor-pointer text-sm border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] rounded-lg font-inter bg-white font-medium transition-all duration-300 hover:bg-[var(--brand-blue-50)]">
                  Explore Treatments
                </button>
              </div>

              {/* Feature Banner - Removed from here, moved to bottom */}
            </div>

            {/* Right Side - Signature Treatments */}
            <div
              className={`transition-all duration-1000 delay-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="p-8 bg-white/90 dark:bg-slate-800/90 rounded-lg border border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-raleway text-navy-600 dark:text-navy-400 mb-6">
                  Our Signature Treatments
                </h2>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm font-inter">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      P-Shot® (Priapus Shot) for erectile dysfunction &
                      Peyronie&apos;s
                    </span>
                  </li>
                  <div className="h-px bg-slate-200 dark:bg-slate-600"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Exomine® P-Shot — premium, exosome-enhanced PRP</span>
                  </li>
                  <div className="h-px bg-slate-200 dark:bg-slate-600"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>O-Shot® for female sexual wellness</span>
                  </li>
                  <div className="h-px bg-slate-200 dark:bg-slate-600"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Shockwave Therapy for ED & Peyronie&apos;s</span>
                  </li>
                  <div className="h-px bg-slate-200 dark:bg-slate-600"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>PRP Hair Restoration for thinning hair</span>
                  </li>
                  <div className="h-px bg-slate-200 dark:bg-slate-600"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Polynucleotides & Botox aesthetics</span>
                  </li>
                  <div className="h-px bg-slate-200 dark:bg-slate-600"></div>
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
        className={`md:absolute hidden bottom-0 left-0 right-0 bg-[var(--brand-blue)] transition-all duration-1000 delay-1100 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center border-r border-[var(--brand-blue-100)]">
                <div className="text-white font-inter font-semibold text-sm">
                  GMC-registered doctor
                </div>
                <div className="text-blue-100 text-sm font-inter">
                  Over 10 years NHS experience
                </div>
              </div>
              <div className="text-center border-r border-[var(--brand-blue-100)]">
                <div className="text-white font-semibold text-sm">
                  Drug-free options
                </div>
                <div className="text-blue-100 text-sm font-inter">
                  Your own PRP — no hormones
                </div>
              </div>
              <div className="text-center border-r border-[var(--brand-blue-100)]">
                <div className="text-white font-semibold text-sm">
                  Discreet location
                </div>
                <div className="text-blue-100 text-sm font-inter">
                  21 Victoria Street, St Albans
                </div>
              </div>
              <div className="text-center">
                <div className="text-white font-inter font-semibold text-sm">
                  Flexible appointments
                </div>
                <div className="text-blue-100 text-sm font-inter">
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
