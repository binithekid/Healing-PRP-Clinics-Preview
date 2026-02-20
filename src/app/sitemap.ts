import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.healing-prp.co.uk";
  
  // Current date for lastModified
  const currentDate = new Date();

  // Define your core routes with their priorities
  const routes = [
    // 1. High Priority: Main Landing Pages
    { url: "", priority: 1.0 },
    { url: "/birmingham", priority: 0.95 }, // <-- ADDED: Birmingham Main Landing Page
    
    { url: "/sexual-rejuvenation", priority: 0.9 },
    
    // ✅ CORE ST ALBANS MEN'S HEALTH (High Priority)
    { url: "/p-shot", priority: 0.95 },
    { url: "/erectile-dysfunction", priority: 0.95 },
    { url: "/peyronies-disease", priority: 0.9 },
    { url: "/premature-ejaculation", priority: 0.9 },
    
    // ✅ CORE ST ALBANS REGENERATIVE & AESTHETICS
    { url: "/hair-restoration", priority: 0.9 },
    { url: "/facial-aesthetics", priority: 0.8 },
    { url: "/polynucleotides", priority: 0.9 }, // <-- ADDED: St Albans Polynucleotides
    { url: "/joint-injections", priority: 0.8 },
    
    // 2. Birmingham Location Pages (Men's Health)
    { url: "/birmingham/sexual-rejuvenation", priority: 0.85 },
    { url: "/birmingham/p-shot", priority: 0.9 },
    { url: "/birmingham/erectile-dysfunction", priority: 0.9 },
    { url: "/birmingham/peyronies-disease", priority: 0.85 },
    { url: "/birmingham/premature-ejaculation", priority: 0.85 },

    // 3. Birmingham Location Pages (Face, Hair, Joints)
    { url: "/birmingham/hair-restoration", priority: 0.85 },
    { url: "/birmingham/facial-aesthetics", priority: 0.85 },
    { url: "/birmingham/polynucleotides", priority: 0.85 }, // <-- ADDED: Birmingham Polynucleotides
    { url: "/birmingham/joint-injections", priority: 0.85 },

    // 4. Information & Support
    { url: "/prices", priority: 0.8 },
    { url: "/birmingham/prices", priority: 0.8 }, // <-- ADDED: Birmingham Prices (Just in case you have it!)
    { url: "/faq", priority: 0.7 },
    { url: "/birmingham/faq", priority: 0.7 }, // <-- ADDED: Birmingham FAQ
    { url: "/blog", priority: 0.7 },
    { url: "/contact", priority: 0.8 },
    { url: "/birmingham/contact", priority: 0.8 }, // <-- ADDED: Birmingham Contact

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
