"use client";

import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const WHATSAPP_NUMBER = "447990364147";

const ED_ADS_LANDING_PATH =
  "/birmingham/erectile-dysfunction-treatment";

// Normalise URLs, including optional /uk/ prefix.
function normalisePath(pathname: string): string {
  const cleanPath =
    pathname.toLowerCase().replace(/\/+$/, "") || "/";

  return cleanPath.replace(/^\/uk(?=\/|$)/, "") || "/";
}

// Returns true ONLY for the Birmingham ED Ads page.
function isEdAdsLandingPage(pathname: string): boolean {
  return normalisePath(pathname) === ED_ADS_LANDING_PATH;
}

// Treatment-specific WhatsApp messages for organic pages.
function getWhatsAppMessage(pathname: string): string {
  const path = normalisePath(pathname);

  if (path === "/birmingham/penis-enlargement") {
    return "Hello, I would like to enquire about penis filler treatment in Birmingham.";
  }

  if (path === "/penis-enlargement") {
    return "Hello, I would like to enquire about penis filler treatment in St Albans.";
  }

  if (path === "/hampstead/penis-filler") {
    return "Hello, I would like to enquire about penis filler treatment in Hampstead.";
  }

  if (path.includes("peyronie")) {
    return "Hello, I would like to enquire about Peyronie's disease treatment.";
  }

  if (path.includes("p-shot")) {
    return "Hello, I would like to enquire about P-Shot treatment.";
  }

  if (
    path.includes("o-shot")) {
    return "Hello, I would like to enquire about O-Shot treatment.";
  }

  if (
    path.includes("erectile-dysfunction")) {
    const location = path.includes("hampstead")
      ? "Hampstead"
      : path.includes("st-albans")
        ? "St Albans"
        : "Birmingham";

    return `Hello, I would like to enquire about erectile dysfunction treatment in ${location}.`;
  }

  return "Hello, I would like to enquire about a treatment at Healing PRP Clinics.";
}

export default function GlobalStickyCTAs() {
  const pathname = usePathname() ?? "/";

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    getWhatsAppMessage(pathname)
  )}`;

  // Existing global contact behaviour.
  const handleAction = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    window.dispatchEvent(
      new CustomEvent("open-contact-drawer")
    );

    requestAnimationFrame(() => {
      const section = document.getElementById(
        "contact-form-section"
      );

      if (section) {
        const headerOffset = -40;

        const elementPosition =
          section.getBoundingClientRect().top;

        const offsetPosition =
          elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        window.location.href = "/contact";
      }
    });
  };

  const trackWhatsAppClick = (buttonLocation: string) => {
    const w = window as Window & {
      gtag?: (...args: unknown[]) => void;
    };

    // Anonymous GA4 click measurement only.
    // A WhatsApp click does not confirm an enquiry.
    w.gtag?.("event", "whatsapp_click", {
      button_location: buttonLocation,
    });

    // No Google Ads conversion is sent here.
    // The Ads landing page uses its own component.
  };

  // IMPORTANT:
  // Hide the global buttons on the ED Ads landing page.
  // Handles both /uk/ and non-/uk/ paths.
  if (isEdAdsLandingPage(pathname)) {
    return null;
  }

  return (
    <>
      {/* DESKTOP FLOATING BUTTONS */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-50 flex-col gap-4">
        <button
          type="button"
          onClick={handleAction}
          className="w-14 h-14 bg-[#4041d1] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
          aria-label="Contact Us"
        >
          <FaEnvelope className="text-2xl group-hover:scale-110 transition-transform" />
        </button>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackWhatsAppClick("desktop_floating")
          }
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-3xl group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 w-full z-[99999] bg-white border-t border-slate-200 p-3 lg:hidden flex gap-3 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.15)] pb-[max(12px,env(safe-area-inset-bottom))]">
        <button
          type="button"
          onClick={handleAction}
          style={{
            backgroundColor: "#4041d1",
            color: "#ffffff",
          }}
          className="flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md active:scale-95 flex items-center justify-center gap-2 font-inter border-none cursor-pointer"
        >
          Book Consult
        </button>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackWhatsAppClick("mobile_sticky")
          }
          style={{
            backgroundColor: "#25D366",
            color: "#ffffff",
          }}
          className="flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md active:scale-95 flex items-center justify-center gap-2 font-inter no-underline border-none cursor-pointer"
        >
          <FaWhatsapp
            style={{
              fontSize: "1.25rem",
              color: "#ffffff",
            }}
          />
          <span style={{ color: "#ffffff" }}>
            WhatsApp
          </span>
        </a>
      </div>
    </>
  );
}
