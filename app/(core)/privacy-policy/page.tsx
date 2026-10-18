import { PrivacyPolicyDetailsBoundary } from "@/features/privacy-policy/privacy-policy-details/components/privacy-policy-details-boundary";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Sohi Packaging Solutions Inc. collects, uses and protects the personal information you share with us.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyDetailsBoundary />;
}
