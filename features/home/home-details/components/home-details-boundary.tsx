import { Suspense } from "react";
import { gallery } from "@/content/gallery";
import { services } from "@/content/services";
import { workflow } from "@/content/workflow";
import { HomeDetailsContent } from "./home-details-content";

// Server Component: loads the page data and hands it to the presentational content.
export function HomeDetailsBoundary() {
  return (
    <Suspense>
      <HomeDetailsContent services={services} workflow={workflow} galleryPreview={gallery.slice(0, 8)} />
    </Suspense>
  );
}
