"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Flower } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      // Calculate scrollbar width
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      // Apply styles to prevent scroll but maintain scrollbar space
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
    };
  }, [isMenuOpen]);

  const menuItems = [
    // { name: "About", hasDropdown: false, href: "/about" },
    {
      name: "Sexual Rejuvenation",
      hasDropdown: false,
      href: "/sexual-rejuvenation",
    },
    {
      name: "Joint Injections",
      hasDropdown: false,
      href: "/joint-injections",
    },
    {
      name: "Facial Aesthetics",
      hasDropdown: false,
      href: "/facial-aesthetics",
    },
    { name: "Contact", hasDropdown: false, href: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[var(--brand-blue-100)]/90 dark:bg-slate-900/80 dark:border-slate-700/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="text-base inline-flex items-center gap-1 tracking-tight font-medium text-black dark:text-[var(--brand-blue-light)]">
                  <Flower className="w-5 h-5 text-blue-700" /> Healing PRP
                  Clinics
                </div>
              </Link>
            </div>

            {/* Phone number and Menu */}
            <div className="flex items-center space-x-4">
              <span className="hidden md:inline text-sm font-inter font-medium text-slate-500 dark:text-slate-400">
                MENU
              </span>
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-[var(--brand-blue-50)] dark:hover:bg-slate-800 rounded-md transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                ) : (
                  <Menu className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white dark:bg-slate-900 top-16 lg:top-20"
          >
            <div className="flex flex-col justify-center items-start min-h-full py-12">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.nav
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="flex items-center space-x-3"
                    >
                      <Link
                        href={item.href}
                        className="text-2xl lg:text-3xl font-raleway text-slate-900 dark:text-white hover:text-[var(--brand-blue)] dark:hover:text-[var(--brand-blue-light)] transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.hasDropdown && (
                        <ChevronDown className="h-5 w-5 lg:h-6 lg:w-6 text-slate-500 dark:text-slate-400" />
                      )}
                    </motion.div>
                  ))}
                </motion.nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
