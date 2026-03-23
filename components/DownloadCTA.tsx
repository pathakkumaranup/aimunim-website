"use client";

import { motion } from "framer-motion";
import { Mic, ArrowRight, Mail, Shield, Zap, Clock, Smartphone } from "lucide-react";

const perks = [
  { icon: Zap,       label: "14-day free trial, no credit card" },
  { icon: Shield,    label: "Cancel anytime during trial" },
  { icon: Clock,     label: "Response within 24 hours" },
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

          {/* Early access badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: "rgba(155,93,229,0.15)", border: "1px solid rgba(155,93,229,0.3)", color: "#C77DFF" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C77DFF] animate-pulse" />
            Early Access — Android App Launching Soon
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
            Early Access{" "}
            <span className="text-gradient">शुरू हो गया</span>
          </h2>
          <p className="text-white/55 text-xl mb-4 max-w-xl mx-auto leading-relaxed">
            AI Munim is currently in early access. Request access and we'll send you the app directly — with a full 14-day free trial, no credit card required.
          </p>
          <p className="text-white/32 text-sm mb-10 max-w-lg mx-auto">
            Play Store listing coming soon. Early users get priority onboarding and extended trial support.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <motion.a
              href="mailto:anup.kr.2908@gmail.com?subject=Early Access Request - AI Munim&body=Hi, I would like to request early access to AI Munim. My shop type is: "
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg text-[#04050A] transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #00FFA3, #00D4FF)" }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0,255,163,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail className="w-5 h-5" />
              Request Early Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="mailto:anup.kr.2908@gmail.com?subject=AI Munim - General Enquiry"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg text-white hover:text-white transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Smartphone className="w-5 h-5 text-[#00D4FF]" />
              Contact for Demo
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
