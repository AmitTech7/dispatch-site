import { GalleryDetailsBoundary } from "@/features/gallery/gallery-details/components/gallery-details-boundary";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Packaging Gallery — Co-Packing Work in Brampton, ON",
  description:
    "Photos of co-packing work by Sohi Packaging Solutions in Brampton, Ontario: kitting, filling, labelling, bundling, repacking and shipping-ready cartons.",
  path: "/gallery",
  image: "/images/gallery/kitting-jars-and-boxes-in-bubble-wrap.jpeg",
});

export default function GalleryPage() {
  return <GalleryDetailsBoundary />;
}
