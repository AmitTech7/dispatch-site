import type { GalleryImage } from "@/content/gallery";
import type { Service } from "@/content/services";
import type { WorkflowStep } from "@/content/workflow";
import { AboutSection } from "./about-section";
import { HeroSection } from "./hero-section";
import { QuoteSection } from "./quote-section";
import { ServicesSection } from "./services-section";
import { WorkflowSection } from "./workflow-section";

type Props = {
  services: Service[];
  workflow: WorkflowStep[];
  galleryPreview: GalleryImage[];
};

export function HomeDetailsContent({ services, workflow, galleryPreview }: Props) {
  return (
    <>
      <HeroSection />
      <ServicesSection services={services} />
      <WorkflowSection steps={workflow} />
      <AboutSection galleryPreview={galleryPreview} />
      <QuoteSection />
    </>
  );
}
