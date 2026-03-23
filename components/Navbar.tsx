"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mic } from "lucide-react";

const links = [
  { href: "#features",     label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing",      label: "Pricing" },
  { href: "#faq",          label: "FAQ" },
  { href: "#download",     label: "Early Access" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#04050A]/80 backdrop-blur-2xl border-b border-white/[0.06] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00FFA3] to-[#00D4FF] flex items-center justify-center shadow-lg shadow-[#00FFA3]/25">
            <Mic className="w-[18px] h-[18px] text-[#04050A]" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-bold tracking-tight select-none">
            <span className="text-gradient-green">AI </span>
            <span className="text-white">Munim</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-white/55 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:anup.kr.2908@gmail.com?subject=Early Access Request - AI Munim&body=Hi, I would like early access to AI Munim."
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00FFA3] to-[#00D4FF] text-[#04050A] text-sm font-semibold hover:shadow-lg hover:shadow-[#00FFA3]/30 hover:scale-105 transition-all duration-300"
          >
            Get Early Access
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#04050A]/95 backdrop-blur-2xl border-b border-white/[0.06]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-white/65 hover:text-white border-b border-white/[0.05] text-sm transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:anup.kr.2908@gmail.com?subject=Early Access Request - AI Munim"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex justify-center py-3.5 rounded-xl bg-gradient-to-r from-[#00FFA3] to-[#00D4FF] text-[#04050A] font-semibold text-sm"
              >
                Get Early Access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
