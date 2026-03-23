"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is AI Munim?",
    a: "AI Munim is a voice-powered digital ledger app for Indian shopkeepers. You simply speak in Hindi, English, or Hinglish — e.g., \"Ram ne 500 ka udhaar liya\" — and AI Munim automatically records the transaction, updates the customer's balance, and syncs to the cloud.",
  },
  {
    q: "Is this a financial or lending service?",
    a: "No. AI Munim is purely a software-as-a-service (SaaS) subscription product. It is a record-keeping tool only. We do not handle, lend, transfer, or invest any money. All financial transactions in your shop happen between you and your customers — we only help you track them digitally.",
  },
  {
    q: "How does the 14-day free trial work?",
    a: "After requesting early access, you get full access to all features for 14 days at no cost. No credit card is required. At the end of the trial, you can choose to subscribe (₹299/month or ₹2,999/year) or your account will pause. Your data is retained for 30 days after expiry.",
  },
  {
    q: "What happens if I cancel my subscription?",
    a: "You can cancel anytime. Your access continues until the end of your current billing period — we don't charge you again after that. Your data stays in the app for 30 days so you can export it. There is no cancellation fee.",
  },
  {
    q: "Can I get a refund?",
    a: "Yes. For monthly plans, refunds are available within 24 hours of payment if you've made fewer than 5 entries. For yearly plans, refunds are available within 7 days if you've made fewer than 20 entries. See our full Refund Policy for details.",
  },
  {
    q: "Does the app work without internet?",
    a: "Yes. AI Munim works offline — all entries are saved locally on your phone first. When you reconnect to the internet, the app automatically syncs everything to the cloud. This makes it reliable even in areas with poor connectivity.",
  },
  {
    q: "What languages does the voice recognition support?",
    a: "AI Munim currently supports Hindi, English, and Hinglish (mixed Hindi-English). Regional dialect support is on our roadmap. You can speak naturally — you don't need to follow any specific format.",
  },
  {
    q: "How is my data protected?",
    a: "All your data is encrypted at rest (AES-256) and in transit (TLS 1.2+). We use Supabase with Row Level Security, meaning your data is completely isolated from other users. We do not sell your data to anyone.",
  },
  {
    q: "Can I manage multiple shops?",
    a: "Yes. The Yearly plan supports unlimited shops from a single account, each with its own separate ledger and customer list. The Monthly plan supports up to 3 shops.",
  },
  {
    q: "How do I get the app?",
    a: "AI Munim is currently in early access. Email us at anup.kr.2908@gmail.com or click the \"Request Early Access\" button and we will send you the app directly. The Play Store listing is coming soon.",
  },
];

function FAQItem({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div
      className="rounded-2xl border border-white/[0.07] overflow-hidden cursor-pointer"
      style={{ background: open ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)" }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <span className="text-white/85 font-medium text-sm md:text-base">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#00FFA3]" />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5">
              <div className="h-[1px] bg-white/[0.06] mb-4" />
              <p className="text-white/52 text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(0,212,255,0.05), transparent)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[#00D4FF]/20 text-sm text-white/55 mb-5">
            ❓ FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            अक्सर पूछे जाने वाले{" "}
            <span className="text-gradient">सवाल</span>
          </h2>
          <p className="text-white/50 text-lg">
            Everything you need to know about AI Munim.
          </p>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              open={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-white/35 text-sm">
            Still have questions?{" "}
            <a
              href="mailto:anup.kr.2908@gmail.com"
              className="text-[#00FFA3] hover:underline"
            >
              Email us
            </a>{" "}
            or{" "}
            <a
              href="https://wa.me/919113485275"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00FFA3] hover:underline"
            >
              chat on WhatsApp
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
