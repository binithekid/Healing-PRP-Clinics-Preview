"use client";

import { usePathname } from "next/navigation";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ED_ADS_LANDING_PATH =
  "/birmingham/erectile-dysfunction-treatment";

const ED_WHATSAPP_CONVERSION =
  "AW-18130686557/XHpOCNj-1KQdEN2kscVD";

const WHATSAPP_NUMBER = "447990364147";

const WHATSAPP_MESSAGE =
  "Hello, I would like to enquire about Erectile Dysfunction in Birmingham.";

function normalisePath(pathname: string): string {
  const cleanPath =
    pathname.toLowerCase().replace(/\/+$/, "") || "/";

  return cleanPath.replace(/^\/uk(?=\/|$)/, "") || "/";
}

export default function EDLandingStickyCTAs() {
  const pathname = usePathname() ?? "/";

  const isEdAdsPage =
    normalisePath(pathname) === ED_ADS_LANDING_PATH;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  const handleBookConsult = () => {
    const w = window as Window & {
      gtag?: (...args: unknown[]) => void;
    };

    // Record a CTA click, NOT a confirmed patient lead.
    w.gtag?.("event", "cta_click", {
      button_location: "ed_ads_sticky",
      cta_type: "book_consult",
    });

    // Scroll directly to the existing ED Google Ads form.
    const section = document.getElementById(
      "contact-form-section"
    );

    if (section) {
      const elementPosition =
        section.getBoundingClientRect().top;

      const scrollPosition =
        elementPosition + window.scrollY - 24;

      window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: "smooth",
      });
    } else {
      // Safe fallback when the form is not found.
      document
        .getElementById("google-lead-form")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }
  };

  const trackWhatsAppClick = (buttonLocation: string) => {
    const w = window as Window & {
      gtag?: (...args: unknown[]) => void;
    };

    // GA4 anonymous WhatsApp click event.
    w.gtag?.("event", "whatsapp_click", {
      button_location: buttonLocation,
    });

    // Dedicated ED Ads WhatsApp conversion.
    // Only one direct conversion call per click.
    w.gtag?.("event", "conversion", {
      send_to: ED_WHATSAPP_CONVERSION,
    });
  };

  // Never display on organic ED pages or Hampstead pages.
  if (!isEdAdsPage) {
    return null;
  }

  return (
    <>
      {/* DESKTOP FLOATING BUTTONS */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-50 flex-col gap-4">
        <button
          type="button"
          onClick={handleBookConsult}
          className="w-14 h-14 bg-[#4041d1] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
          aria-label="Request private ED callback"
          title="Request private callback"
        >
          <FaEnvelope className="text-2xl group-hover:scale-110 transition-transform" />
        </button>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackWhatsAppClick("ed_ads_desktop_floating")
          }
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
          aria-label="WhatsApp about ED treatment"
          title="Chat about ED treatment"
        >
          <FaWhatsapp className="text-3xl group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 w-full z-[99999] bg-white border-t border-slate-200 p-3 lg:hidden flex gap-3 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.15)] pb-[max(12px,env(safe-area-inset-bottom))]">
        <button
          type="button"
          onClick={handleBookConsult}
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
            trackWhatsAppClick("ed_ads_mobile_sticky")
          }
          style={{
            backgroundColor: "#25D366",
            color: "#ffffff",
          }}
          className="flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md active:scale-95 flex items-center justify-center gap-2 font-inter no-underline border-none cursor-pointer"
          aria-label="WhatsApp about ED treatment"
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
