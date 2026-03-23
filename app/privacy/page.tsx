import PolicyLayout from "@/components/PolicyLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – AI Munim",
  description: "How AI Munim collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="We care about your privacy. Here's exactly how we handle your data."
      lastUpdated="March 23, 2026"
      badge="Privacy"
      badgeColor="from-[#00FFA3] to-[#00D4FF]"
      sections={[
        {
          heading: "Information We Collect",
          content: (
            <>
              <p>When you use AI Munim, we collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-white/70">Account Information:</strong> Name, mobile number, and email address provided during registration.</li>
                <li><strong className="text-white/70">Shop Information:</strong> Shop name, type, and location details you provide.</li>
                <li><strong className="text-white/70">Transaction Data:</strong> Customer names, udhaar amounts, payment records, and ledger entries you create through voice or manual input.</li>
                <li><strong className="text-white/70">Voice Recordings:</strong> Audio recordings processed to extract transaction data. Recordings are sent to our AI service, processed in real time, and are <strong className="text-white/70">not stored permanently</strong>.</li>
                <li><strong className="text-white/70">Device Information:</strong> Device model, operating system version, and app version for support and debugging purposes.</li>
                <li><strong className="text-white/70">Usage Data:</strong> Feature usage patterns to improve the product (anonymised).</li>
              </ul>
            </>
          ),
        },
        {
          heading: "How We Use Your Information",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide and operate the AI Munim service.</li>
              <li>To process voice commands and generate accurate ledger entries.</li>
              <li>To sync your data across devices and provide offline functionality.</li>
              <li>To send important service notifications (e.g., subscription renewals, payment receipts).</li>
              <li>To improve AI accuracy and app performance.</li>
              <li>To comply with legal obligations under Indian law.</li>
            </ul>
          ),
        },
        {
          heading: "Data Sharing & Third Parties",
          content: (
            <>
              <p>We do not sell your personal data. We share data only with the following trusted service providers under strict data processing agreements:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-white/70">Supabase Inc.:</strong> Secure cloud database storage for your ledger data.</li>
                <li><strong className="text-white/70">OpenAI:</strong> Voice command transcription and AI parsing. Audio is processed in transit and not retained by OpenAI beyond the API call as per their data usage policies.</li>
                <li><strong className="text-white/70">Razorpay Software Pvt. Ltd.:</strong> Payment processing for subscription purchases. We share only the minimum information required to process your payment.</li>
              </ul>
              <p className="mt-2">We may disclose information if required by law, court order, or government authority in India.</p>
            </>
          ),
        },
        {
          heading: "Data Storage & Security",
          content: (
            <>
              <p>Your data is stored on Supabase servers with industry-standard encryption (AES-256 at rest, TLS 1.2+ in transit). Access is protected by Row Level Security (RLS) policies ensuring you can only access your own data.</p>
              <p>We implement appropriate technical and organisational measures to protect your information against unauthorised access, alteration, or deletion.</p>
            </>
          ),
        },
        {
          heading: "Data Retention",
          content: (
            <p>
              We retain your account and transaction data for as long as your account is active or as needed to provide the service. If you delete your account, we will delete or anonymise your data within <strong className="text-white/70">30 days</strong>, except where retention is required by applicable law.
            </p>
          ),
        },
        {
          heading: "Your Rights",
          content: (
            <>
              <p>Under applicable Indian data protection laws, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Access the personal data we hold about you.</li>
                <li>Correct inaccurate data.</li>
                <li>Request deletion of your account and data.</li>
                <li>Withdraw consent for any data processing based on consent.</li>
              </ul>
              <p className="mt-2">To exercise these rights, email us at <a href="mailto:anup.kr.2908@gmail.com" className="text-[#00FFA3] hover:underline">anup.kr.2908@gmail.com</a>.</p>
            </>
          ),
        },
        {
          heading: "Children's Privacy",
          content: (
            <p>
              AI Munim is not intended for use by individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe a minor has provided us with their data, please contact us immediately.
            </p>
          ),
        },
        {
          heading: "Changes to This Policy",
          content: (
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes via in-app notification or email. Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>
          ),
        },
      ]}
    />
  );
}
