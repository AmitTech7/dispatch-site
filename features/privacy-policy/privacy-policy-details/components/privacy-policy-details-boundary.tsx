import { Suspense } from "react";
import { PrivacyPolicyDetailsContent } from "./privacy-policy-details-content";

export function PrivacyPolicyDetailsBoundary() {
  return (
    <Suspense>
      <PrivacyPolicyDetailsContent />
    </Suspense>
  );
}
