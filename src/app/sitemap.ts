import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.healing-prp.co.uk";
  
  // Current date for lastModified
  const currentDate = new Date();

  // Define your core routes with their priorities
  const routes = [
    // 1. High Priority: Main Landing Pages
    { url: "", priority: 1.0 },
    { url: "/birmingham", priority: 0.95 },
    
    // ✅ CORE UK-WIDE TELEHEALTH (High Priority)
    { url: "/personalised-ed-medication", priority: 0.95 },
    
    // ✅ CORE ST ALBANS MEN'S & WOMEN'S HEALTH (High Priority)
    { url: "/sexual-rejuvenation", priority: 0.9 },
    { url: "/p-shot", priority: 0.95 },
    { url: "/o-shot", priority: 0.95 }, // <-- ADDED: O-Shot
    { url: "/erectile-dysfunction", priority: 0.95 },
    { url: "/peyronies-disease", priority: 0.9 },
    { url: "/premature-ejaculation", priority: 0.9 },
    
    // ✅ CORE ST ALBANS REGENERATIVE & AESTHETICS
    { url: "/hair-restoration", priority: 0.9 },
    { url: "/facial-aesthetics", priority: 0.8 },
    { url: "/polynucleotides", priority: 0.9 }, 
    { url: "/joint-injections", priority: 0.8 },
    
    // 2. Birmingham Location Pages (Men's & Women's Health)
    { url: "/birmingham/sexual-rejuvenation", priority: 0.85 },
    { url: "/birmingham/p-shot", priority: 0.9 },
    { url: "/birmingham/o-shot", priority: 0.9 }, // <-- ADDED: Birmingham O-Shot
    { url: "/birmingham/erectile-dysfunction", priority: 0.9 },
    { url: "/birmingham/peyronies-disease", priority: 0.85 },
    { url: "/birmingham/premature-ejaculation", priority: 0.85 },

    // 3. Birmingham Location Pages (Face, Hair, Joints)
    { url: "/birmingham/hair-restoration", priority: 0.85 },
    { url: "/birmingham/facial-aesthetics", priority: 0.85 },
    { url: "/birmingham/polynucleotides", priority: 0.85 }, 
    { url: "/birmingham/joint-injections", priority: 0.85 },

    // 4. Information, Clinic & Support
    { url: "/our-doctor", priority: 0.8 }, // <-- ADDED: Doctor Profile
    { url: "/prices", priority: 0.8 },
    { url: "/birmingham/prices", priority: 0.8 }, 
    { url: "/faq", priority: 0.7 },
    { url: "/birmingham/faq", priority: 0.7 }, 
    { url: "/blog", priority: 0.7 },
    { url: "/contact", priority: 0.8 },
    { url: "/birmingham/contact", priority: 0.8 }, 

    // 5. Legal Policies (Lower priority)
    { url: "/privacy-policy", priority: 0.5 },
    { url: "/terms-of-service", priority: 0.5 },
    { url: "/cookie-policy", priority: 0.5 },
    { url: "/refund-policy", priority: 0.5 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
