"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mic, ArrowRight, Play, Check } from "lucide-react";
import { useRef, useState, useEffect } from "react";

/* ─── Animated voice bars ─────────────────────────────────── */
function VoiceBars() {
  const heights = [3, 7, 11, 8, 14, 9, 6, 12, 7, 4, 10, 6];
  return (
    <div className="flex items-center gap-[3px] h-6">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-[#00FFA3] to-[#00D4FF]"
          animate={{ height: [h, h * 2.2, h] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            delay: i * 0.07,
            ease: "easeInOut",
          }}
          style={{ height: h }}
        />
      ))}
    </div>
  );
}

/* ─── Simulated phone mockup ──────────────────────────────── */
function PhoneMockup() {
  const entries = [
    { name: "Ramesh Ji", amount: "+₹500", color: "#FF6B6B", initials: "R" },
    { name: "Sunita Devi", amount: "-₹200", color: "#00FFA3", initials: "S" },
    { name: "Mohan Das", amount: "+₹1,200", color: "#FF6B6B", initials: "M" },
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % entries.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-[270px] mx-auto select-none">
      {/* Outer glow ring */}
      <div className="absolute -inset-4 rounded-[52px] opacity-30"
        style={{ background: "radial-gradient(circle, rgba(0,255,163,0.4) 0%, transparent 70%)" }} />

      {/* Phone shell */}
      <div className="relative bg-gradient-to-b from-[#18192B] to-[#0C0D1A] rounded-[44px] p-[10px] shadow-2xl border border-white/10">
        {/* Screen */}
        <div className="bg-[#07091A] rounded-[36px] overflow-hidden min-h-[520px] flex flex-col">

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1">
            <span className="text-white/35 text-[10px] font-medium">9:41</span>
            <div className="w-[80px] h-4 bg-[#111220] rounded-full" />
            <div className="flex gap-0.5 items-end">
              {[2, 4, 6, 5].map((h, i) => (
                <div key={i} className="w-1 bg-white/40 rounded-sm" style={{ height: h * 1.5 }} />
              ))}
            </div>
          </div>

          {/* App header */}
          <div className="px-5 py-3 border-b border-white/[0.05]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/35 text-[10px]">नमस्ते 🙏</p>
                <p className="text-white text-sm font-bold">AI Munim</p>
              </div>
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00FFA3] to-[#00D4FF] flex items-center justify-center shadow-md shadow-[#00FFA3]/25">
                <Mic className="w-4 h-4 text-[#04050A]" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Balance card */}
          <div className="mx-3 mt-3 rounded-2xl border border-[#00FFA3]/15 p-4"
            style={{ background: "linear-gradient(135deg, rgba(0,255,163,0.07), rgba(0,212,255,0.07))" }}>
            <p className="text-white/40 text-[10px] mb-0.5">कुल बाकी उधार</p>
            <p className="text-2xl font-bold text-gradient-green">₹12,450</p>
            <div className="flex gap-5 mt-2.5">
              <div>
                <p className="text-[9px] text-white/35">To Receive</p>
                <p className="text-xs font-semibold text-[#FF6B6B]">₹8,200</p>
              </div>
              <div>
                <p className="text-[9px] text-white/35">To Pay</p>
                <p className="text-xs font-semibold text-[#00FFA3]">₹4,250</p>
              </div>
            </div>
          </div>

          {/* Entries list */}
          <div className="px-3 mt-3 flex-1">
            <p className="text-white/25 text-[9px] mb-2 px-1 font-medium uppercase tracking-wider">Recent</p>
            {entries.map((e, i) => (
              <motion.div
                key={i}
                animate={{ opacity: i === active ? 1 : 0.28, scale: i === active ? 1 : 0.97 }}
                transition={{ duration: 0.35 }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl mb-1.5 ${
                  i === active ? "border border-white/[0.08]" : ""
                }`}
                style={i === active ? { background: "rgba(255,255,255,0.04)" } : {}}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold text-[#04050A]"
                    style={{ background: `linear-gradient(135deg, ${e.color}90, ${e.color}50)` }}
                  >
                    {e.initials}
                  </div>
                  <p className="text-white text-xs font-medium">{e.name}</p>
                </div>
                <span className="text-xs font-bold" style={{ color: e.color }}>{e.amount}</span>
              </motion.div>
            ))}
          </div>

          {/* Voice button */}
          <div className="flex justify-center py-5">
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-[#00FFA3]/20"
                animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-[#00FFA3]/10"
                animate={{ scale: [1, 2.2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#00FFA3] to-[#00D4FF] flex items-center justify-center shadow-xl shadow-[#00FFA3]/40">
                <Mic className="w-6 h-6 text-[#04050A]" strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification — recognised speech */}
      <motion.div
        className="absolute -right-14 top-[18%] glass rounded-2xl px-3 py-2 w-[148px] shadow-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-white/40 text-[9px] mb-0.5">🎙️ Recognized</p>
        <p className="text-white text-[11px] font-semibold">"Ram ne 500 liya"</p>
      </motion.div>

      {/* Floating notification — saved */}
      <motion.div
        className="absolute -left-14 bottom-[22%] glass rounded-2xl px-3 py-2 w-[148px] shadow-xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="flex items-center gap-1.5 mb-0.5">
          <div className="w-3 h-3 rounded-full bg-[#00FFA3] flex items-center justify-center">
            <Check className="w-2 h-2 text-[#04050A]" strokeWidth={3} />
          </div>
          <p className="text-[#00FFA3] text-[9px] font-bold">Entry Saved!</p>
        </div>
        <p className="text-white/50 text-[10px]">₹500 added to Ram</p>
      </motion.div>
    </div>
  );
}

/* ─── Stat item ───────────────────────────────────────────── */
function Stat({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
    >
      <p className="text-3xl md:text-4xl font-bold text-gradient">{value}</p>
      <p className="text-white/45 text-sm mt-1">{label}</p>
    </motion.div>
  );
}

/* ─── Hero ────────────────────────────────────────────────── */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y       = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen grid-bg flex items-center pt-24 pb-20 overflow-hidden"
    >
      {/* ── Background orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(0,255,163,0.5) 0%, transparent 65%)" }} />
        <div className="blob blob-delay-4 absolute top-1/3 -right-60 w-[600px] h-[600px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.5) 0%, transparent 65%)" }} />
        <div className="blob blob-delay-2 absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full opacity-12"
          style={{ background: "radial-gradient(circle, rgba(155,93,229,0.5) 0%, transparent 65%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">

          {/* ── Left: copy ── */}
          <motion.div style={{ y, opacity }}>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[#00FFA3]/20 text-sm mb-7"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#00FFA3] animate-pulse" />
              <span className="text-white/65">AI-Powered Voice Ledger for India</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-[70px] font-bold leading-[1.08] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block text-white">बोलो,</span>
              <span className="block text-gradient">हिसाब करो</span>
              <span className="block text-3xl md:text-[38px] text-white/55 font-medium mt-3 leading-snug">
                Speak. Track. Done.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-white/55 text-lg leading-relaxed mb-8 max-w-[440px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
            >
              India's smartest ledger app for shopkeepers. Just say{" "}
              <span className="text-[#00FFA3] font-semibold italic">
                "Ram ne 500 ka udhaar liya"
              </span>{" "}
              — AI Munim handles the rest in seconds.
            </motion.p>

            {/* Voice demo strip */}
            <motion.div
              className="flex items-center gap-3 mb-8 px-4 py-3 glass rounded-2xl border border-white/[0.06] w-fit"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00FFA3] to-[#00D4FF] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#00FFA3]/25">
                <Mic className="w-4 h-4 text-[#04050A]" strokeWidth={2.5} />
              </div>
              <VoiceBars />
              <span className="text-white/40 text-sm ml-1">"Suresh ne 1200 diye"</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <a
                href="#download"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-[#00FFA3] to-[#00D4FF] text-[#04050A] font-bold text-base hover:shadow-2xl hover:shadow-[#00FFA3]/35 hover:scale-[1.04] transition-all duration-300"
              >
                Request Early Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:anup.kr.2908@gmail.com?subject=AI Munim - Demo Request"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl glass border border-white/10 text-white/75 hover:text-white hover:border-white/20 transition-all duration-300 font-semibold"
              >
                <div className="w-6 h-6 rounded-full border border-[#00D4FF]/50 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 text-[#00D4FF] ml-0.5" fill="#00D4FF" />
                </div>
                Contact for Demo
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-7 text-sm text-white/38"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.82 }}
            >
              {["14-day free trial", "No credit card", "Works offline"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#00FFA3]" />
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: phone mockup ── */}
          <motion.div
            className="relative flex justify-center lg:justify-end pt-8 lg:pt-0"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, type: "spring", stiffness: 80, damping: 20 }}
          >
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup />
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats ── */}
        <motion.div
          className="mt-20 pt-10 border-t border-white/[0.07]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto lg:max-w-none lg:grid-cols-3">
            <Stat value="🇮🇳" label="Made in India" delay={0} />
            <Stat value="Hindi" label="Voice Support" delay={0.12} />
            <Stat value="14 Days" label="Free Trial" delay={0.24} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
