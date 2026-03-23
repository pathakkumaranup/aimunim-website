import { Mic } from "lucide-react";

const productLinks = ["Features", "How It Works", "Pricing", "Download", "Changelog"];
const legalLinks: { label: string; href: string }[] = [
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy",    href: "/refund" },
  { label: "Contact Us",       href: "mailto:anup.kr.2908@gmail.com" },
  { label: "Support",          href: "mailto:anup.kr.2908@gmail.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-10 overflow-hidden">
      {/* Faint gradient accent */}
      <div
        className="absolute bottom-0 inset-x-0 h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 100% at 50% 120%, rgba(0,255,163,0.04), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="md:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00FFA3] to-[#00D4FF] flex items-center justify-center shadow-lg shadow-[#00FFA3]/20">
                <Mic className="w-[18px] h-[18px] text-[#04050A]" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold">
                <span className="text-gradient-green">AI </span>
                <span className="text-white">Munim</span>
              </span>
            </a>
            <p className="text-white/38 text-sm leading-relaxed max-w-[280px] mb-6">
              Voice-powered ledger for Indian shopkeepers. Track udhaar, manage customers, and grow your business — just by speaking.
            </p>

            {/* Social icons (placeholder) */}
            <div className="flex gap-2.5">
              {[
                { label: "Twitter",   emoji: "𝕏" },
                { label: "Facebook",  emoji: "f" },
                { label: "Instagram", emoji: "⬡" },
                { label: "YouTube",   emoji: "▶" },
              ].map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl glass border border-white/[0.07] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all text-sm font-bold"
                >
                  {s.emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <p className="text-sm font-semibold text-white mb-5">Product</p>
            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/38 hover:text-white/80 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <p className="text-sm font-semibold text-white mb-5">Legal</p>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-white/38 hover:text-white/80 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-white/28 text-sm">
            © {year} AI Munim. All rights reserved.
          </p>
          <p className="text-white/28 text-sm">
            Made with ❤️ in 🇮🇳 India
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00FFA3] animate-pulse" />
            <span className="text-white/28 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
