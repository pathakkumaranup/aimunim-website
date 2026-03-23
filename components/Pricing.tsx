"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Crown, Building2 } from "lucide-react";

const monthlyFeatures = [
  "Unlimited voice entries",
  "AI-powered Hinglish recognition",
  "Offline mode with auto-sync",
  "Full customer management",
  "Cloud backup & restore",
  "Manage up to 3 shops",
];

const yearlyFeatures = [
  "Everything in Monthly",
  "Priority AI processing speed",
  "Advanced analytics dashboard",
  "Unlimited shops",
  "Export ledger to Excel/PDF",
  "Priority customer support",
];

const trialFeatures = [
  "Full premium access",
  "14 days completely free",
  "No credit card required",
  "Cancel anytime",
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle, #9B5DE5 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #00D4FF 0%, transparent 65%)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[#9B5DE5]/25 text-sm text-white/55 mb-5">
            💎 Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            सादा, किफायती{" "}
            <span className="text-gradient">कीमत</span>
          </h2>
          <p className="text-white/50 text-lg">
            Start free for 14 days. No credit card. No surprises.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-9">
            <span className={`text-sm font-medium transition-colors ${!yearly ? "text-white" : "text-white/38"}`}>
              Monthly
            </span>
            <button
              onClick={() => setYearly((v) => !v)}
              className="relative w-14 h-7 rounded-full transition-colors duration-300"
              style={{ background: yearly ? "linear-gradient(135deg, #00FFA3, #00D4FF)" : "rgba(255,255,255,0.12)" }}
              aria-label="Toggle billing period"
            >
              <motion.div
                className="absolute top-[4px] w-5 h-5 rounded-full bg-white shadow-md"
                animate={{ left: yearly ? "calc(100% - 24px)" : "4px" }}
                transition={{ type: "spring", stiffness: 500, damping: 32 }}
              />
            </button>
            <span className={`text-sm font-medium transition-colors flex items-center gap-2 ${yearly ? "text-white" : "text-white/38"}`}>
              Yearly
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#00FFA3]/18 text-[#00FFA3] font-semibold">
                Save 16%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Free Trial */}
          <motion.div
            className="glass rounded-3xl p-7 border border-white/[0.08] flex flex-col"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            whileHover={{ y: -6 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Zap className="w-5 h-5 text-[#FFB347]" />
              <span className="text-sm font-semibold text-[#FFB347]">Free Trial</span>
            </div>
            <div className="mb-7">
              <span className="text-6xl font-bold text-white">₹0</span>
              <p className="text-white/38 text-sm mt-1">for 14 days</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {trialFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/65">
                  <Check className="w-4 h-4 text-[#00FFA3] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="block text-center py-3.5 rounded-xl text-sm font-semibold text-white/70 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}
            >
              Start Free →
            </a>
          </motion.div>

          {/* Main plan (monthly / yearly) */}
          <motion.div
            className="relative rounded-3xl p-7 flex flex-col"
            style={{
              background: "linear-gradient(155deg, rgba(0,255,163,0.09) 0%, rgba(0,212,255,0.07) 100%)",
              border: "1px solid rgba(0,255,163,0.28)",
              boxShadow: "0 0 60px rgba(0,255,163,0.1), 0 0 120px rgba(0,212,255,0.06)",
            }}
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            whileHover={{ y: -6 }}
          >
            {/* Popular badge */}
            <div className="absolute -top-4 inset-x-0 flex justify-center">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold text-[#04050A]"
                style={{ background: "linear-gradient(135deg, #00FFA3, #00D4FF)" }}>
                ⭐ Most Popular
              </span>
            </div>

            <div className="flex items-center gap-2 mb-5 mt-3">
              <Crown className="w-5 h-5 text-[#00FFA3]" />
              <span className="text-sm font-semibold text-[#00FFA3]">
                {yearly ? "Yearly Plan" : "Monthly Plan"}
              </span>
              {yearly && (
                <span className="ml-auto text-[11px] px-2 py-0.5 rounded-full bg-[#00FFA3]/15 text-[#00FFA3] font-semibold">
                  Save ₹589!
                </span>
              )}
            </div>

            <div className="mb-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={String(yearly)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.22 }}
                >
                  <span className="text-6xl font-bold text-white">
                    {yearly ? "₹2,999" : "₹299"}
                  </span>
                  <p className="text-white/38 text-sm mt-1">
                    {yearly ? "per year" : "per month"}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {(yearly ? yearlyFeatures : monthlyFeatures).map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#00FFA3] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="block text-center py-3.5 rounded-xl text-sm font-bold text-[#04050A] hover:shadow-2xl hover:shadow-[#00FFA3]/30 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #00FFA3, #00D4FF)" }}
            >
              Get Started
            </a>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            className="glass rounded-3xl p-7 border border-white/[0.06] flex flex-col opacity-60"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.28 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Building2 className="w-5 h-5 text-white/40" />
              <span className="text-sm font-semibold text-white/45">Enterprise</span>
              <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full text-white/30"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                Coming Soon
              </span>
            </div>
            <div className="mb-7">
              <span className="text-5xl font-bold text-white/40">Custom</span>
              <p className="text-white/25 text-sm mt-1">pricing</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Everything in Yearly",
                "Dedicated account manager",
                "Custom API integrations",
                "Team & staff accounts",
                "Advanced reporting",
                "SLA guarantee",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/32">
                  <Check className="w-4 h-4 text-white/20 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              disabled
              className="block w-full text-center py-3.5 rounded-xl text-sm font-semibold text-white/25 cursor-not-allowed"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              Contact Us
            </button>
          </motion.div>
        </div>

        {/* Refund note */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-6 text-sm text-white/32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span>✓ 14-day free trial — no credit card required</span>
          <span>✓ Cancel anytime during trial, no charges</span>
          <span>✓ Refunds available as per our <a href="/refund" className="text-[#00FFA3] hover:underline">Refund Policy</a></span>
        </motion.div>

        {/* Payment clarification */}
        <motion.div
          className="max-w-2xl mx-auto mt-10 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-5 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-white/55 text-sm leading-relaxed">
            <span className="font-semibold text-white/75">AI Munim is a software-as-a-service (SaaS) subscription.</span>{" "}
            Payments are for access to the app only. AI Munim does not provide any financial services, lending, credit, or investment products.
            All transactions are processed securely via Razorpay.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
