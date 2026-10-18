import { Suspense } from "react";
import { services, type Service } from "@/content/services";
import { ServiceDetailsContent } from "./service-details-content";

export function ServiceDetailsBoundary({ service }: { service: Service }) {
  const otherServices = services.filter((s) => s.slug !== service.slug);
  return (
    <Suspense>
      <ServiceDetailsContent service={service} otherServices={otherServices} />
    </Suspense>
  );
}
