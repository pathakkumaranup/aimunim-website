"use client";

import { motion } from "framer-motion";
import { Mic, ArrowRight, Smartphone, Shield, Zap } from "lucide-react";

const perks = [
  { icon: Zap,       label: "14-day free trial" },
  { icon: Shield,    label: "No credit card needed" },
  { icon: Smartphone,label: "Android & iOS" },
];

export default function DownloadCTA() {
  return (
    <section id="download" className="relative py-32 overflow-hidden">
      {/* Large glow behind content */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          className="w-[900px] h-[500px] rounded-full opacity-[0.14]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(0,255,163,0.6) 0%, rgba(0,212,255,0.3) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Horizontal gradient line top */}
      <div
        className="absolute top-0 inset-x-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,255,163,0.35), rgba(0,212,255,0.35), transparent)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* App icon */}
          <motion.div
            className="w-24 h-24 mx-auto mb-8 rounded-[28px] flex items-center justify-center shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #00FFA3, #00D4FF)",
              boxShadow: "0 0 60px rgba(0,255,163,0.4), 0 0 120px rgba(0,212,255,0.2)",
            }}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Mic className="w-12 h-12 text-[#04050A]" strokeWidth={2} />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
            आज ही शुरू करो{" "}
            <span className="text-gradient">Free में</span>
          </h2>
          <p className="text-white/55 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            14-day free trial. No credit card. Just download and start speaking.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <motion.a
              href="#"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg text-[#04050A] transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #00FFA3, #00D4FF)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,255,163,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Smartphone className="w-5 h-5" />
              Download for Android
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg text-white hover:text-white transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Smartphone className="w-5 h-5 text-[#00D4FF]" />
              Download for iOS
            </motion.a>
          </div>

          {/* Perks row */}
          <div className="flex flex-wrap justify-center gap-6">
            {perks.map((p) => (
              <div key={p.label} className="flex items-center gap-2 text-sm text-white/40">
                <p.icon className="w-4 h-4 text-[#00FFA3]" />
                {p.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
