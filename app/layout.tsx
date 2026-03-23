import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Munim – बोलो, हिसाब करो | Voice Ledger for Shopkeepers",
  description:
    "India's smartest voice-powered udhaar ledger. Just speak in Hindi or English — AI Munim tracks your customers, balances, and transactions automatically.",
  keywords: [
    "udhaar app",
    "ledger app",
    "shop management",
    "voice ledger",
    "hindi app",
    "shopkeeper app",
    "kiryana app",
    "हिसाब app",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-[#04050A] text-white antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
