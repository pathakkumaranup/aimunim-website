import PolicyLayout from "@/components/PolicyLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy – AI Munim",
  description: "AI Munim's refund and cancellation policy for subscription plans.",
};

export default function RefundPage() {
  return (
    <PolicyLayout
      title="Refund & Cancellation Policy"
      subtitle="Clear and fair policies for subscriptions, cancellations, and refunds."
      lastUpdated="March 23, 2026"
      badge="Refunds"
      badgeColor="from-[#FF6B9D] to-[#9B5DE5]"
      sections={[
        {
          heading: "Free Trial",
          content: (
            <p>
              All new users receive a <strong className="text-white/70">14-day free trial</strong> with full access to all features. No credit card is required to start your trial. At the end of the trial period, you will need to subscribe to continue using the Service. We will send you a reminder 3 days before your trial expires.
            </p>
          ),
        },
        {
          heading: "Cancellation Policy",
          content: (
            <>
              <p>You may cancel your subscription at any time. Here's what happens when you cancel:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Your access continues until the end of your current billing period.</li>
                <li>You will not be charged for the next billing cycle.</li>
                <li>Your data is retained for 30 days after expiry, giving you time to export your records.</li>
                <li>You can reactivate your subscription at any time to regain full access.</li>
              </ul>
              <p className="mt-2">To cancel, go to <strong className="text-white/70">Profile → Subscription → Cancel Plan</strong> in the app, or email <a href="mailto:anup.kr.2908@gmail.com" className="text-[#FF6B9D] hover:underline">anup.kr.2908@gmail.com</a>.</p>
            </>
          ),
        },
        {
          heading: "Refund Policy – Monthly Plan",
          content: (
            <>
              <p>For monthly subscriptions (₹299/month):</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-white/70">Within 24 hours of payment:</strong> Full refund available if you have made fewer than 5 voice entries — no questions asked.</li>
                <li><strong className="text-white/70">After 24 hours:</strong> No refund is issued for the current billing month as the service has already been rendered.</li>
              </ul>
              <p className="mt-2">Cancelling a monthly plan stops future billing but does not generate a refund for the current month already paid.</p>
            </>
          ),
        },
        {
          heading: "Refund Policy – Yearly Plan",
          content: (
            <>
              <p>For yearly subscriptions (₹2,999/year):</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-white/70">Within 7 days of payment:</strong> Full refund available if you have made fewer than 20 voice entries during that period.</li>
                <li><strong className="text-white/70">After 7 days:</strong> No refund is issued. You will retain access until the end of the 12-month period.</li>
              </ul>
              <p className="mt-2">We offer this 7-day window specifically for annual plans because of the higher upfront payment involved.</p>
            </>
          ),
        },
        {
          heading: "Non-Refundable Circumstances",
          content: (
            <>
              <p>Refunds will <strong className="text-white/70">not</strong> be issued in the following cases:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Account suspension or termination due to violation of our Terms of Service.</li>
                <li>Requests made after the refund window has passed.</li>
                <li>Downtime or service unavailability covered by our standard SLA.</li>
                <li>Dissatisfaction with AI accuracy — we are continuously improving and encourage you to use the free trial to evaluate the product.</li>
                <li>Duplicate payments — these will be refunded in full within 5–7 business days, automatically.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "How to Request a Refund",
          content: (
            <>
              <p>To request a refund within the eligible window:</p>
              <ol className="list-decimal pl-5 space-y-1 mt-2">
                <li>Email <a href="mailto:anup.kr.2908@gmail.com" className="text-[#FF6B9D] hover:underline">anup.kr.2908@gmail.com</a> with subject line: <strong className="text-white/70">"Refund Request – [Your registered mobile number]"</strong></li>
                <li>Include your Razorpay payment ID (found in your payment confirmation email).</li>
                <li>Briefly state the reason for your refund request.</li>
              </ol>
              <p className="mt-2">We will process eligible refunds within <strong className="text-white/70">5–7 business days</strong>. Refunds are credited to the original payment method.</p>
            </>
          ),
        },
        {
          heading: "Failed or Disputed Payments",
          content: (
            <p>
              If a payment fails, no amount will be charged and your subscription will not be activated. If you notice an unrecognised charge on your statement, contact us immediately at <a href="mailto:anup.kr.2908@gmail.com" className="text-[#FF6B9D] hover:underline">anup.kr.2908@gmail.com</a> before raising a chargeback with your bank. We resolve most payment disputes within 48 hours.
            </p>
          ),
        },
        {
          heading: "Contact Us",
          content: (
            <p>
              For any refund or cancellation queries, reach us at:{" "}
              <a href="mailto:anup.kr.2908@gmail.com" className="text-[#FF6B9D] hover:underline">anup.kr.2908@gmail.com</a>. We typically respond within 1 business day (Monday–Saturday, 10 AM – 6 PM IST).
            </p>
          ),
        },
      ]}
    />
  );
}
