"use client";

import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ED_ADS_LANDING_PATH = "/birmingham/erectile-dysfunction-treatment";
const ED_WHATSAPP_CONVERSION = "AW-18130686557/XHpOCNj-1KQdEN2kscVD";

export default function GlobalStickyCTAs() {
  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();

    // Try to open the global drawer (if it exists).
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));

    // Scroll to the form, or use the contact page as a fallback.
    requestAnimationFrame(() => {
      const section = document.getElementById("contact-form-section");
      if (section) {
        const headerOffset = -40;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else {
        window.location.href = "/contact";
      }
    });
  };

  const trackWhatsAppClick = (buttonLocation: string) => {
    const w = window as Window & { gtag?: (...args: unknown[]) => void };

    // Measure clicks on the normal website as an anonymous GA4 event.
    w.gtag?.("event", "whatsapp_click", { button_location: buttonLocation });

    // Google Ads conversion is restricted to the Birmingham ED Ads landing page.
    // A click is not proof of a WhatsApp conversation.
    const pathname = window.location.pathname.replace(/\/+$/, "");
    if (pathname === ED_ADS_LANDING_PATH) {
      w.gtag?.("event", "conversion", { send_to: ED_WHATSAPP_CONVERSION });
    }
    // No preventDefault: allow the usual WhatsApp link to open immediately.
  };

  return (
    <>
      {/* --- DESKTOP FLOATING BUTTONS (Hidden on Mobile) --- */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-50 flex-col gap-4">
        <button
          onClick={handleAction}
          className="w-14 h-14 bg-[#4041d1] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
          aria-label="Contact Us"
        >
          <FaEnvelope className="text-2xl group-hover:scale-110 transition-transform" />
        </button>
        <a
          href="https://wa.me/447990364147"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("desktop_floating")}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-3xl group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* --- MOBILE STICKY BOTTOM BAR (Hidden on Desktop) --- */}
      <div className="fixed bottom-0 left-0 w-full z-[99999] bg-white border-t border-slate-200 p-3 lg:hidden flex gap-3 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.15)] pb-[max(12px,env(safe-area-inset-bottom))]">
        <button
          onClick={handleAction}
          style={{ backgroundColor: '#4041d1', color: '#ffffff' }}
          className="flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md active:scale-95 flex items-center justify-center gap-2 font-inter border-none cursor-pointer"
        >
          Book Consult
        </button>
        <a
          href="https://wa.me/447990364147"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("mobile_sticky")}
          style={{ backgroundColor: '#25D366', color: '#ffffff' }}
          className="flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md active:scale-95 flex items-center justify-center gap-2 font-inter no-underline border-none cursor-pointer"
        >
          <FaWhatsapp style={{ fontSize: '1.25rem', color: '#ffffff' }} />
          <span style={{ color: '#ffffff' }}>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
