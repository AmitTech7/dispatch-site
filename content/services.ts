import { galleryImage, type GalleryImage } from "./gallery";

export type Service = {
  slug: string;
  name: string;
  /** Short line for cards. */
  summary: string;
  /** H1 on the service page. */
  heading: string;
  seoTitle: string;
  seoDescription: string;
  intro: string[];
  included: string[];
  idealFor: string[];
  image: GalleryImage;
};

export const services: Service[] = [
  {
    slug: "filling",
    name: "Filling",
    summary: "Accurate filling of pouches, jars, bottles and containers to your spec.",
    heading: "Product Filling Services in Brampton, ON",
    seoTitle: "Product Filling Services in Brampton, ON",
    seoDescription:
      "Contract filling of pouches, jars, bottles and containers in Brampton, Ontario. Count and weight checks, sealing and labelling by Sohi Packaging Solutions.",
    intro: [
      "Sohi Packaging fills your product into the containers you choose — pouches, jars, bottles, tubs or bags — following the quantities and tolerances agreed during planning.",
      "Every batch is checked for fill accuracy and seal quality before it moves on to labelling, so you receive consistent, retail-ready units.",
    ],
    included: [
      "Filling by count or weight",
      "Pouches, jars, bottles, tubs and bags",
      "Sealing and capping",
      "Batch and lot tracking on request",
      "Fill-level and seal checks during QC",
    ],
    idealFor: ["Dry goods and snacks", "Health and personal care products", "Samples and trial sizes"],
    image: galleryImage("kraft-paper-pouches-with-blank-labels"),
  },
  {
    slug: "assembly",
    name: "Assembly & Kitting",
    summary: "Kits, gift sets and multi-item packs assembled by hand, ready to ship.",
    heading: "Kitting & Product Assembly Services in Brampton, ON",
    seoTitle: "Kitting & Product Assembly Services in Brampton, ON",
    seoDescription:
      "Hand assembly of kits, subscription boxes, gift sets and promotional packs in Brampton, Ontario. Sohi Packaging Solutions handles kitting from components to finished carton.",
    intro: [
      "We assemble multi-component products into finished kits — subscription boxes, gift sets, sample kits, promotional packs and retail displays.",
      "Our team follows your pack-out instructions and photos so every kit looks the same, with inserts, protective fill and outer cartons included.",
    ],
    included: [
      "Kit and gift-set assembly",
      "Subscription and sample boxes",
      "Inserts, leaflets and promotional material",
      "Protective wrapping and void fill",
      "Display and shelf-ready packaging",
    ],
    idealFor: ["E-commerce brands", "Seasonal and promotional campaigns", "Retail launches"],
    image: galleryImage("packing-product-jars-into-shipping-carton"),
  },
  {
    slug: "labelling",
    name: "Labelling",
    summary: "Product, compliance and shipping labels applied neatly and consistently.",
    heading: "Labelling Services in Brampton, ON",
    seoTitle: "Product Labelling Services in Brampton, ON",
    seoDescription:
      "Product, barcode, compliance and shipping label application in Brampton, Ontario. Sohi Packaging Solutions labels, re-labels and stickers products for retail and Amazon FBA.",
    intro: [
      "From front-of-pack labels to barcodes, best-before stickers and shipping labels, we apply labels straight, consistent and in the right place.",
      "Need to update packaging for a new retailer or market? We also re-label and over-sticker existing stock so it can be sold without reprinting.",
    ],
    included: [
      "Product and brand labels",
      "UPC / barcode and FNSKU stickers",
      "Best-before and lot-code labels",
      "Re-labelling and over-stickering",
      "Carton and shipping labels",
    ],
    idealFor: ["Retail and marketplace sellers", "Importers needing local labels", "Packaging updates"],
    image: galleryImage("label-roll-and-kraft-shipping-boxes"),
  },
  {
    slug: "bundling",
    name: "Bundling",
    summary: "Multipacks, value bundles and gift packs that are shelf- and ship-ready.",
    heading: "Bundling & Multipack Services in Brampton, ON",
    seoTitle: "Bundling & Multipack Services in Brampton, ON",
    seoDescription:
      "Product bundling, multipacks, banded packs and gift bundles in Brampton, Ontario. Sohi Packaging Solutions creates retail- and e-commerce-ready bundles.",
    intro: [
      "We combine products into multipacks, value bundles, buy-one-get-one packs and gift sets — banded, shrink-wrapped, boxed or tied, depending on the look you want.",
      "Bundles are labelled and packed into outer cartons so they're ready for retail shelves, warehouses or direct-to-customer orders.",
    ],
    included: [
      "Multipacks and value packs",
      "Banding, tying and sleeving",
      "Gift and holiday bundles",
      "Bundle labels and barcodes",
      "Outer cartons and case packing",
    ],
    idealFor: ["Promotions and retail deals", "Holiday gift sets", "Marketplace bundles"],
    image: galleryImage("kraft-gift-boxes-tied-with-twine"),
  },
  {
    slug: "repacking",
    name: "Repacking",
    summary: "Repack, rework or re-box stock into new formats with proper protection.",
    heading: "Repacking & Rework Services in Brampton, ON",
    seoTitle: "Repacking & Rework Services in Brampton, ON",
    seoDescription:
      "Repacking, re-boxing and packaging rework in Brampton, Ontario. Sohi Packaging Solutions breaks bulk, re-packs and protects products for retail or shipping.",
    intro: [
      "Whether you're breaking down bulk shipments, moving to new packaging or fixing damaged outer cartons, we repack your stock carefully and to spec.",
      "Products are protected with the right materials — bubble wrap, paper wrap or loose fill — and repacked into clean, labelled cartons.",
    ],
    included: [
      "Breaking bulk into retail units",
      "Re-boxing into new packaging",
      "Rework of damaged or non-compliant packs",
      "Protective wrapping and void fill",
      "Inspection and counting during repack",
    ],
    idealFor: ["Importers receiving bulk", "Packaging changeovers", "Returns and rework"],
    image: galleryImage("placing-bubble-wrapped-item-in-box"),
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
