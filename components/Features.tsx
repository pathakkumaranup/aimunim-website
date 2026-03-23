"use client";

import { motion } from "framer-motion";
import {
  Mic, Brain, WifiOff, Users, Cloud, Store,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    titleHindi: "आवाज़ से एंट्री",
    title: "Voice Entry",
    desc: "बस बोलो — Hindi, English, या Hinglish में। AI Munim समझेगा और सेकंडों में entry कर देगा।",
    color: "#00FFA3",
    bg: "rgba(0,255,163,0.07)",
    border: "rgba(0,255,163,0.18)",
  },
  {
    icon: Brain,
    titleHindi: "AI का जादू",
    title: "AI-Powered",
    desc: "GPT-4 powered engine understands Hinglish names, amounts, and context — even in noisy shop environments.",
    color: "#00D4FF",
    bg: "rgba(0,212,255,0.07)",
    border: "rgba(0,212,255,0.18)",
  },
  {
    icon: WifiOff,
    titleHindi: "बिना इंटरनेट के",
    title: "Works Offline",
    desc: "No internet? No problem. AI Munim records everything locally and auto-syncs to cloud when you're back online.",
    color: "#9B5DE5",
    bg: "rgba(155,93,229,0.07)",
    border: "rgba(155,93,229,0.18)",
  },
  {
    icon: Users,
    titleHindi: "ग्राहक का हिसाब",
    title: "Customer Tracking",
    desc: "Full transaction history, current balance, and payment status for every customer — at a glance.",
    color: "#FF6B9D",
    bg: "rgba(255,107,157,0.07)",
    border: "rgba(255,107,157,0.18)",
  },
  {
    icon: Cloud,
    titleHindi: "क्लाउड बैकअप",
    title: "Auto Cloud Sync",
    desc: "All your ledger data is safely encrypted and backed up. Switch phones anytime — your data is always there.",
    color: "#FFB347",
    bg: "rgba(255,179,71,0.07)",
    border: "rgba(255,179,71,0.18)",
  },
  {
    icon: Store,
    titleHindi: "एक से ज़्यादा दुकान",
    title: "Multi-Shop",
    desc: "Running 2 or 3 shops? Manage all of them from a single AI Munim account with separate ledgers.",
    color: "#7FFFD4",
    bg: "rgba(127,255,212,0.07)",
    border: "rgba(127,255,212,0.18)",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      {/* Centre glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #00FFA3 0%, transparent 65%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[#00FFA3]/20 text-sm text-white/55 mb-5">
            ✨ Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            सब कुछ एक जगह{" "}
            <span className="text-gradient">मिलेगा</span>
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">
            Everything a shopkeeper needs — designed for the way India actually works.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative p-6 rounded-2xl overflow-hidden cursor-default transition-shadow duration-300"
              style={{
                background: f.bg,
                border: `1px solid ${f.border}`,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at 50% 110%, ${f.color}18, transparent 70%)`,
                  boxShadow: `0 0 40px ${f.color}15`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${f.color}18`, border: `1px solid ${f.color}30` }}
                >
                  <f.icon className="w-[22px] h-[22px]" style={{ color: f.color }} />
                </div>

                <p className="text-xs font-semibold mb-1 opacity-65" style={{ color: f.color }}>
                  {f.titleHindi}
                </p>
                <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-white/48 text-[15px] leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
