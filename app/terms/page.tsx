import PolicyLayout from "@/components/PolicyLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service – AI Munim",
  description: "Terms and conditions governing your use of the AI Munim app and service.",
};

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms of Service"
      subtitle="Please read these terms carefully before using AI Munim."
      lastUpdated="March 23, 2026"
      badge="Terms"
      badgeColor="from-[#9B5DE5] to-[#00D4FF]"
      sections={[
        {
          heading: "Acceptance of Terms",
          content: (
            <p>
              By downloading, installing, or using the AI Munim mobile application or website ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service. These Terms constitute a legally binding agreement between you and AI Munim ("Company", "we", "us", or "our").
            </p>
          ),
        },
        {
          heading: "Description of Service",
          content: (
            <>
              <p>AI Munim is a voice-powered digital ledger application designed for Indian shopkeepers and small business owners. The Service allows users to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Record udhaar (credit) transactions using voice commands in Hindi, English, or Hinglish.</li>
                <li>Manage customer ledgers and payment histories.</li>
                <li>Sync data across devices and maintain offline access.</li>
                <li>Manage multiple shops from a single account.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Account Registration",
          content: (
            <>
              <p>To use AI Munim, you must register an account with a valid Indian mobile number. You agree to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Provide accurate and complete information during registration.</li>
                <li>Keep your account credentials confidential and not share them with others.</li>
                <li>Notify us immediately of any unauthorised use of your account.</li>
                <li>Be responsible for all activity that occurs under your account.</li>
              </ul>
              <p className="mt-2">You must be at least 18 years old and legally capable of entering into contracts under Indian law to create an account.</p>
            </>
          ),
        },
        {
          heading: "Subscription & Pricing",
          content: (
            <>
              <p>AI Munim offers the following subscription plans:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-white/70">Free Trial:</strong> 14 days of full access at no charge. No credit card required to start.</li>
                <li><strong className="text-white/70">Monthly Plan:</strong> ₹299 per month, billed monthly.</li>
                <li><strong className="text-white/70">Yearly Plan:</strong> ₹2,999 per year (save ~16%), billed annually.</li>
              </ul>
              <p className="mt-2">Prices are inclusive of applicable GST. Subscriptions auto-renew unless cancelled before the renewal date. We reserve the right to modify pricing with 30 days' prior notice.</p>
            </>
          ),
        },
        {
          heading: "Payment",
          content: (
            <p>
              Payments are processed securely through Razorpay, a PCI-DSS compliant payment gateway. By making a payment, you authorise us to charge your chosen payment method for the subscription amount. Payment information is handled by Razorpay and is not stored on our servers. In case of payment failure, your access may be restricted until the payment is resolved.
            </p>
          ),
        },
        {
          heading: "Acceptable Use",
          content: (
            <>
              <p>You agree not to use the Service in any way that:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Violates any applicable Indian or international law or regulation.</li>
                <li>Involves fraudulent, deceptive, or misleading transactions.</li>
                <li>Attempts to gain unauthorised access to other users' data or our systems.</li>
                <li>Reverse engineers, decompiles, or disassembles the application.</li>
                <li>Uses the Service for any purpose other than legitimate business record-keeping.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "Data Ownership",
          content: (
            <p>
              You retain full ownership of all transaction data, customer information, and business records you create within AI Munim. We do not claim any ownership rights over your data. By using the Service, you grant us a limited, non-exclusive licence to store and process your data solely for the purpose of providing the Service to you.
            </p>
          ),
        },
        {
          heading: "Service Availability",
          content: (
            <p>
              We strive for 99.5% uptime but do not guarantee uninterrupted service. We may perform scheduled maintenance with prior notice. AI Munim is not liable for any losses arising from temporary unavailability of the Service. The app's offline mode ensures your local data remains accessible even without internet connectivity.
            </p>
          ),
        },
        {
          heading: "Limitation of Liability",
          content: (
            <p>
              To the maximum extent permitted by applicable law, AI Munim and its founders, employees, and partners shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service, including but not limited to loss of business, loss of data, or financial loss. Our total liability in any matter shall not exceed the amount you paid us in the 3 months preceding the claim.
            </p>
          ),
        },
        {
          heading: "Termination",
          content: (
            <p>
              We may suspend or terminate your account if you violate these Terms. You may close your account at any time by contacting us at <a href="mailto:anup.kr.2908@gmail.com" className="text-[#9B5DE5] hover:underline">anup.kr.2908@gmail.com</a>. Upon termination, your right to use the Service ceases immediately. We will retain your data for 30 days post-termination before deletion, allowing you to export your records.
            </p>
          ),
        },
        {
          heading: "Governing Law & Disputes",
          content: (
            <p>
              These Terms are governed by the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in India. We encourage resolution of disputes through friendly negotiation before pursuing legal action.
            </p>
          ),
        },
        {
          heading: "Changes to Terms",
          content: (
            <p>
              We may update these Terms from time to time. Material changes will be communicated via in-app notification at least 15 days before they take effect. Your continued use of the Service after the effective date constitutes acceptance of the revised Terms.
            </p>
          ),
        },
      ]}
    />
  );
}
