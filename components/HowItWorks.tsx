"use client";

import { motion } from "framer-motion";
import { Mic, Cpu, BookOpen } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Mic,
    hindi: "बोलो",
    english: "Just Speak",
    desc: 'Say it in Hindi, English, or mix — "Ramesh ne 500 ka udhaar liya" or "Suresh paid 200". Anything works.',
    color: "#00FFA3",
    chip: '"Ramesh ne 500 liya"',
    chipIcon: "🎙️",
  },
  {
    num: "02",
    icon: Cpu,
    hindi: "AI समझता है",
    english: "AI Understands",
    desc: "GPT-4 instantly extracts the customer name, amount, and whether it's udhaar or payment — no typing needed.",
    color: "#00D4FF",
    chip: "Ramesh · ₹500 · Udhaar",
    chipIcon: "🤖",
  },
  {
    num: "03",
    icon: BookOpen,
    hindi: "हिसाब तैयार",
    english: "Ledger Updated",
    desc: "Entry saved to ledger, customer balance updated, and cloud backup triggered — all in under 2 seconds.",
    color: "#9B5DE5",
    chip: "✓ Saved & Synced",
    chipIcon: "📒",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden">
      {/* Grid bg accent */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Subtle top gradient line */}
      <div className="absolute top-0 inset-x-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,163,0.3), rgba(0,212,255,0.3), transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(155,93,229,0.2), rgba(0,212,255,0.2), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[#00D4FF]/20 text-sm text-white/55 mb-5">
            🚀 How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            3 कदम में{" "}
            <span className="text-gradient">हिसाब</span>
          </h2>
          <p className="text-white/50 text-lg max-w-md mx-auto">
            From speaking to a saved ledger entry in under 3 seconds. Zero typing.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting dashed line on desktop */}
          <div className="absolute top-[64px] left-[calc(16.66%+40px)] right-[calc(16.66%+40px)] h-[2px] hidden lg:block"
            style={{
              background: "linear-gradient(90deg, #00FFA330, #00D4FF30, #9B5DE530)",
              backgroundSize: "12px 2px",
            }}
          />

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Circle stack */}
                <div className="relative mb-7">
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute -inset-4 rounded-full"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }}
                    style={{
                      background: `radial-gradient(circle, ${s.color}20 0%, transparent 70%)`,
                    }}
                  />
                  {/* Outer ring border */}
                  <div
                    className="w-[110px] h-[110px] rounded-full flex items-center justify-center"
                    style={{ border: `1px solid ${s.color}22` }}
                  >
                    {/* Inner filled circle */}
                    <div
                      className="w-[80px] h-[80px] rounded-full flex items-center justify-center shadow-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${s.color}22, ${s.color}08)`,
                        border: `1px solid ${s.color}40`,
                        boxShadow: `0 0 30px ${s.color}25`,
                      }}
                    >
                      <s.icon className="w-[30px] h-[30px]" style={{ color: s.color }} />
                    </div>
                  </div>

                  {/* Step number badge */}
                  <div
                    className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-[#04050A]"
                    style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)` }}
                  >
                    {s.num}
                  </div>
                </div>

                {/* Demo chip */}
                <motion.div
                  className="mb-5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold"
                  style={{
                    background: `${s.color}12`,
                    color: s.color,
                    border: `1px solid ${s.color}28`,
                  }}
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8 }}
                >
                  {s.chipIcon} {s.chip}
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-1">{s.hindi}</h3>
                <p className="text-sm font-medium mb-3 opacity-75" style={{ color: s.color }}>
                  {s.english}
                </p>
                <p className="text-white/45 text-sm leading-relaxed max-w-[260px]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
