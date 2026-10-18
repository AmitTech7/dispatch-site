import { Suspense } from "react";
import { serviceOptions } from "../schema";
import { QuoteFormContent } from "./quote-form-content";

export function QuoteFormBoundary({ defaultService }: { defaultService?: string }) {
  return (
    <Suspense>
      <QuoteFormContent serviceOptions={[...serviceOptions]} defaultService={defaultService} />
    </Suspense>
  );
}
