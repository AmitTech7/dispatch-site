import { galleryImage, type GalleryImage } from "./gallery";

export type WorkflowStep = {
  number: number;
  title: string;
  description: string;
  tone: "planning" | "receiving" | "operations";
  image: GalleryImage;
};

// The client's 7-step co-packing workflow.
export const workflow: WorkflowStep[] = [
  {
    number: 1,
    title: "Customer / Brand Owner",
    description: "You share your product and packaging requirements with us.",
    tone: "planning",
    image: galleryImage("kraft-boxes-with-blank-shipping-labels"),
  },
  {
    number: 2,
    title: "Project Planning",
    description: "We plan product quantity, materials, labels, packaging design and cost.",
    tone: "planning",
    image: galleryImage("label-printer-and-blank-label-sheets"),
  },
  {
    number: 3,
    title: "Receive Materials and Products",
    description: "We inspect incoming goods, packaging materials and labels.",
    tone: "receiving",
    image: galleryImage("kraft-boxes-tape-twine-packing-supplies"),
  },
  {
    number: 4,
    title: "Co-Packing Operations",
    description: "Filling • Assembly • Labelling • Bundling • Repacking",
    tone: "operations",
    image: galleryImage("packing-product-jars-into-shipping-carton"),
  },
  {
    number: 5,
    title: "Quality Control",
    description: "We check quantity, packaging, labels and product quality.",
    tone: "operations",
    image: galleryImage("stacked-labelled-shipping-cartons"),
  },
  {
    number: 6,
    title: "Finished Goods and Storage",
    description: "We pack cartons, apply shipping labels and store finished products.",
    tone: "planning",
    image: galleryImage("packaging-storage-shelves-and-packing-table"),
  },
  {
    number: 7,
    title: "Shipping and Delivery",
    description: "We ship finished goods to retailers, warehouses or customers.",
    tone: "planning",
    image: galleryImage("taping-carton-closed-for-shipping"),
  },
];
