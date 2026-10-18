import { Suspense } from "react";
import { gallery } from "@/content/gallery";
import { GalleryDetailsContent } from "./gallery-details-content";

export function GalleryDetailsBoundary() {
  return (
    <Suspense>
      <GalleryDetailsContent images={gallery} />
    </Suspense>
  );
}
