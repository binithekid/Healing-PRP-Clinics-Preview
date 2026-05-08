"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TrustReviewsProps {
  widgetUrl: string;
}

export default function TrustReviews({ widgetUrl }: TrustReviewsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current || hasLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Defer injection by 200ms so it doesn't block the browser's main painting thread
          setTimeout(() => {
            if (containerRef.current) {
              containerRef.current.innerHTML = ""; 
              const script = document.createElement("script");
              script.src = widgetUrl;
              script.defer = true;
              script.async = true;
              containerRef.current.appendChild(script);
            }
            setHasLoaded(true);
          }, 200);
          
          observer.disconnect();
        }
      },
      // Changed from 300px to 0px. It will now STRICTLY wait until scrolled into view.
      { rootMargin: "0px" } 
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [widgetUrl, hasLoaded]);

  return (
    <section className="py-20 bg-white border-t border-slate-100 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          >
            Verified Patient Reviews
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-raleway font-bold text-slate-900"
          >
            Trusted by patients across the UK
          </motion.h2>
        </div>

        {/* Min-height prevents "Cumulative Layout Shift" (CLS) penalties when the widget finally loads */}
        <div ref={containerRef} className="w-full min-h-[250px] flex items-center justify-center" />
        
      </div>
    </section>
  );
}
