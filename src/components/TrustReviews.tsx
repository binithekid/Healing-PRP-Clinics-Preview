"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Add a prop so we can pass different URLs to this component based on the clinic location
interface TrustReviewsProps {
  widgetUrl: string;
}

export default function TrustReviews({ widgetUrl }: TrustReviewsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // If we don't have the ref, or we've already loaded the script, do nothing.
    if (!containerRef.current || hasLoaded) return;

    // Create an observer to watch when the user scrolls near this section
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // The user is near the reviews! Inject the script now.
          if (containerRef.current) {
            containerRef.current.innerHTML = ""; 
            
            const script = document.createElement("script");
            script.src = widgetUrl;
            script.defer = true;
            script.async = true;
            containerRef.current.appendChild(script);
          }
          
          setHasLoaded(true); // Mark as loaded so it doesn't run again
          observer.disconnect(); // Stop observing to save memory
        }
      },
      { rootMargin: "300px" } // Start loading 300px BEFORE it comes into view so it's ready when they scroll
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
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

        {/* The Trustindex widget will securely load inside this exact div */}
        <div ref={containerRef} className="w-full min-h-[250px] flex items-center justify-center" />
        
      </div>
    </section>
  );
}
