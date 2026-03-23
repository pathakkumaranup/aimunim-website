"use client";
import { Mic, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface Section {
  heading: string;
  content: ReactNode;
}

interface PolicyLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
  badge?: string;
  badgeColor?: string;
}

export default function PolicyLayout({
  title,
  subtitle,
  lastUpdated,
  sections,
  badge = "Legal",
  badgeColor = "from-[#00FFA3] to-[#00D4FF]",
}: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-[#04050A] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 h-16 flex items-center border-b border-white/[0.06] bg-[#04050A]/80 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00FFA3] to-[#00D4FF] flex items-center justify-center shadow-lg shadow-[#00FFA3]/25">
              <Mic className="w-[18px] h-[18px] text-[#04050A]" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-gradient-green">AI </span>
              <span className="text-white">Munim</span>
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(0,255,163,0.07), transparent)",
          }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${badgeColor} text-[#04050A] mb-6`}
          >
            {badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            <span className="text-gradient">{title}</span>
          </h1>
          <p className="text-white/50 text-lg mb-4">{subtitle}</p>
          <p className="text-white/25 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pb-24 space-y-6">
        {sections.map((sec, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm p-7"
          >
            <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-lg bg-gradient-to-br ${badgeColor} flex items-center justify-center text-[#04050A] text-xs font-bold shrink-0`}
              >
                {i + 1}
              </span>
              {sec.heading}
            </h2>
            <div className="text-white/55 text-sm leading-relaxed space-y-3">
              {sec.content}
            </div>
          </div>
        ))}

        {/* Contact card */}
        <div
          className="rounded-2xl p-[1px]"
          style={{
            background: "linear-gradient(135deg, rgba(0,255,163,0.3), rgba(0,212,255,0.1), transparent)",
          }}
        >
          <div className="rounded-2xl bg-[#04050A] p-7">
            <p className="text-white/40 text-sm">
              Questions about this policy?{" "}
              <a
                href="mailto:anup.kr.2908@gmail.com"
                className="text-[#00FFA3] hover:underline"
              >
                anup.kr.2908@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer strip */}
      <div className="border-t border-white/[0.06] py-6 text-center">
        <p className="text-white/20 text-sm">
          © {new Date().getFullYear()} AI Munim. All rights reserved.
        </p>
      </div>
    </div>
  );
}
