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
    { url: "/hampstead", priority: 0.95 }, // ✅ Added Hampstead Main Page
    
    // ✅ CORE UK-WIDE TELEHEALTH (High Priority)
    { url: "/personalised-ed-medication", priority: 0.95 },
    
    // ✅ CORE ST ALBANS MEN'S & WOMEN'S HEALTH (High Priority)
    { url: "/sexual-rejuvenation", priority: 0.9 },
    { url: "/p-shot", priority: 0.95 },
    { url: "/o-shot", priority: 0.95 }, 
    { url: "/vaginal-dryness", priority: 0.95 }, // ✅ Added Vaginal Dryness
    { url: "/penis-enlargement", priority: 0.95 },
    { url: "/erectile-dysfunction", priority: 0.95 },
    { url: "/erectile-dysfunction-treatment", priority: 0.95 },
    { url: "/shockwave-therapy-erectile-dysfunction", priority: 0.9 },
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
    { url: "/birmingham/o-shot", priority: 0.9 }, 
    { url: "/birmingham/vaginal-dryness", priority: 0.9 }, // ✅ Added Vaginal Dryness
    { url: "/birmingham/penis-enlargement", priority: 0.9 },
    { url: "/birmingham/erectile-dysfunction", priority: 0.9 },
    { url: "/birmingham/erectile-dysfunction-treatment", priority: 0.9 },
    { url: "/birmingham/shockwave-therapy-erectile-dysfunction", priority: 0.85 },
    { url: "/birmingham/peyronies-disease", priority: 0.85 },
    { url: "/birmingham/premature-ejaculation", priority: 0.85 },

    // 3. Birmingham Location Pages (Face, Hair, Joints)
    { url: "/birmingham/hair-restoration", priority: 0.85 },
    { url: "/birmingham/facial-aesthetics", priority: 0.85 },
    { url: "/birmingham/polynucleotides", priority: 0.85 }, 
    { url: "/birmingham/joint-injections", priority: 0.85 },

    // ✅ 4. NEW: Hampstead Location Pages (Men's & Women's Intimate Health Only)
    { url: "/hampstead/sexual-rejuvenation", priority: 0.85 },
    { url: "/hampstead/p-shot", priority: 0.9 },
    { url: "/hampstead/o-shot", priority: 0.9 }, 
    { url: "/hampstead/vaginal-dryness", priority: 0.9 },
    { url: "/hampstead/penis-enlargement", priority: 0.9 },
    { url: "/hampstead/penis-filler", priority: 0.85 }, // Included based on your recent folder structure
    { url: "/hampstead/erectile-dysfunction", priority: 0.9 }, 
    { url: "/hampstead/peyronies-disease", priority: 0.85 },
    { url: "/hampstead/premature-ejaculation", priority: 0.85 },

    // 5. Information, Clinic & Support
    { url: "/our-doctor", priority: 0.8 }, 
    { url: "/prices", priority: 0.8 },
    { url: "/birmingham/prices", priority: 0.8 }, 
    { url: "/hampstead/prices", priority: 0.8 }, // ✅ Added Hampstead Prices
    { url: "/faq", priority: 0.7 },
    { url: "/birmingham/faq", priority: 0.7 }, 
    { url: "/hampstead/faq", priority: 0.7 }, // ✅ Added Hampstead FAQ
    { url: "/blog", priority: 0.7 },
    { url: "/contact", priority: 0.8 },
    { url: "/birmingham/contact", priority: 0.8 }, 
    { url: "/hampstead/contact", priority: 0.8 }, // ✅ Added Hampstead Contact

    // 6. Legal Policies (Lower priority)
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
