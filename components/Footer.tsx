import { Mic, Mail, MapPin, Clock } from "lucide-react";

const productLinks = ["Features", "How It Works", "Pricing", "Download"];
const legalLinks: { label: string; href: string }[] = [
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy",    href: "/refund" },
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
          {/* Brand + About column */}
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
            <p className="text-white/50 text-sm leading-relaxed max-w-[340px] mb-3">
              AI Munim is a voice-powered digital ledger app built for Indian shopkeepers and small business owners.
              It lets you record udhaar, manage customer accounts, and track balances — simply by speaking in Hindi, English, or Hinglish.
            </p>
            <p className="text-white/28 text-xs max-w-[340px] mb-5">
              AI Munim is a software subscription service. It does not provide any financial, lending, or investment services.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-white/38"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              🇮🇳 Made in India &nbsp;·&nbsp; Operated by Anup Pathak
            </div>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-sm font-semibold text-white mb-5">Contact</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#00FFA3] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-white/35 mb-0.5">Email Support</p>
                  <a href="mailto:anup.kr.2908@gmail.com" className="text-sm text-white/65 hover:text-white transition-colors break-all">
                    anup.kr.2908@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-white/35 mb-0.5">Support Hours</p>
                  <p className="text-sm text-white/65">Mon–Sat, 10 AM – 7 PM IST</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9B5DE5] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-white/35 mb-0.5">Location</p>
                  <p className="text-sm text-white/65">Buxar, Bihar, India</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Product + Legal links */}
          <div>
            <p className="text-sm font-semibold text-white mb-5">Product</p>
            <ul className="space-y-3 mb-7">
              {productLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/38 hover:text-white/80 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
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
            Operated by: <span className="text-white/40">Anup Pathak (Individual Proprietor)</span>
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
