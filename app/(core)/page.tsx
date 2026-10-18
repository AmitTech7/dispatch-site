import { HomeDetailsBoundary } from "@/features/home/home-details/components/home-details-boundary";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: { absolute: `Co-Packing & Contract Packaging Services in Brampton, ON | ${site.name}` },
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return <HomeDetailsBoundary />;
}
