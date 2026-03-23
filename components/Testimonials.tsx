"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "राजेश गुप्ता",
    role: "Kirana Shop, Lucknow",
    initials: "R",
    color: "#00FFA3",
    stars: 5,
    text: "Pehle khata likhne mein bahut time lagta tha. Ab bass bolte hain aur entry ho jaati hai. Kya app hai yaar! Bilkul best.",
  },
  {
    name: "Sunita Devi",
    role: "Medical Store, Patna",
    initials: "S",
    color: "#00D4FF",
    stars: 5,
    text: "My shop has 200+ customers. AI Munim ne sab ka hisaab ekdum accurate rakha. Ab koi argument nahi customer ke saath!",
  },
  {
    name: "मोहन लाल",
    role: "Grocery Shop, Jaipur",
    initials: "M",
    color: "#9B5DE5",
    stars: 5,
    text: "Offline bhi kaam karta hai — yahi mujhe sabse zyaada pasand hai. Village mein internet nahi toh bhi sab entry hoti rehti hai.",
  },
  {
    name: "Priya Kumari",
    role: "Cloth Shop, Varanasi",
    initials: "P",
    color: "#FF6B9D",
    stars: 5,
    text: "Hindi mein bolti hoon, English mein bolti hoon — dono samajhta hai. Bilkul magic jaisa lagta hai yaar!",
  },
  {
    name: "अनुज शर्मा",
    role: "Hardware Store, Agra",
    initials: "A",
    color: "#FFB347",
    stars: 5,
    text: "3 dukaan manage karta hoon. AI Munim se sab ek jagah hai. Bahut achha product hai. Poore area mein recommend kar raha hoon.",
  },
  {
    name: "Kavita Singh",
    role: "Vegetable Shop, Kanpur",
    initials: "K",
    color: "#7FFFD4",
    stars: 5,
    text: "Customer ne kitna dena hai, kitna de diya — sab ek second mein pata chal jaata hai. Udhaar mein koi bhi cheating nahi hoti ab!",
  },
];

function Card({ t }: { t: typeof testimonials[number] }) {
  return (
    <div
      className="flex-shrink-0 w-72 p-5 rounded-2xl glass border border-white/[0.07] select-none"
      style={{ background: `linear-gradient(145deg, ${t.color}07, transparent)` }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[...Array(t.stars)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5" fill="#FFB347" style={{ color: "#FFB347" }} />
        ))}
      </div>

      {/* Quote */}
      <p className="text-white/65 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-[#04050A] flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}80)` }}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-white font-semibold text-sm leading-none">{t.name}</p>
          <p className="text-white/38 text-xs mt-1">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[#FFB347]/20 text-sm text-white/55 mb-5">
            ❤️ Loved by Shopkeepers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            दुकानदारों की{" "}
            <span className="text-gradient">राय</span>
          </h2>
          <p className="text-white/50 text-lg">
            Join 10,000+ happy shopkeepers across India
          </p>
        </motion.div>
      </div>

      {/* Scrolling ticker — no JS required, pure CSS animation */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 inset-y-0 w-28 pointer-events-none z-10"
          style={{ background: "linear-gradient(90deg, #04050A, transparent)" }} />
        <div className="absolute right-0 inset-y-0 w-28 pointer-events-none z-10"
          style={{ background: "linear-gradient(-90deg, #04050A, transparent)" }} />

        <motion.div
          className="flex gap-4 w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Second row (reversed direction) */}
      <div className="relative mt-4">
        <div className="absolute left-0 inset-y-0 w-28 pointer-events-none z-10"
          style={{ background: "linear-gradient(90deg, #04050A, transparent)" }} />
        <div className="absolute right-0 inset-y-0 w-28 pointer-events-none z-10"
          style={{ background: "linear-gradient(-90deg, #04050A, transparent)" }} />

        <motion.div
          className="flex gap-4 w-max px-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        >
          {doubled
            .slice()
            .reverse()
            .map((t, i) => (
              <Card key={i} t={t} />
            ))}
        </motion.div>
      </div>
    </section>
  );
}
