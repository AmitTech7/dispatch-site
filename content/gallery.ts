export type GalleryTag = "filling" | "assembly" | "labelling" | "bundling" | "repacking" | "shipping" | "storage";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  tags: GalleryTag[];
};

const dir = "/images/gallery";

export const gallery: GalleryImage[] = [
  {
    src: `${dir}/kitting-jars-and-boxes-in-bubble-wrap.jpeg`,
    alt: "Hands kitting white product jars and small kraft boxes into a bubble-wrap-lined shipping carton",
    caption: "Kitting jars and boxed products into a protected shipper",
    tags: ["assembly", "repacking"],
  },
  {
    src: `${dir}/packing-product-jars-into-shipping-carton.jpeg`,
    alt: "Overhead view of hands packing product jars and kraft boxes into a carton lined with bubble wrap",
    caption: "Product assembly and kitting",
    tags: ["assembly"],
  },
  {
    src: `${dir}/kraft-paper-pouches-with-blank-labels.jpeg`,
    alt: "Row of six filled kraft paper pouches, each with a blank white product label",
    caption: "Filled and labelled kraft pouches",
    tags: ["filling", "labelling"],
  },
  {
    src: `${dir}/label-roll-and-kraft-shipping-boxes.jpeg`,
    alt: "Large roll of white product labels next to taped kraft shipping boxes",
    caption: "Label rolls ready for application",
    tags: ["labelling"],
  },
  {
    src: `${dir}/kraft-gift-boxes-tied-with-twine.jpeg`,
    alt: "Five small kraft gift boxes with round white stickers, tied with jute twine bows",
    caption: "Gift-ready bundles tied with twine",
    tags: ["bundling", "labelling"],
  },
  {
    src: `${dir}/placing-bubble-wrapped-item-in-box.jpeg`,
    alt: "Hand placing a bubble-wrapped product into an open kraft mailer box",
    caption: "Protective repacking with bubble wrap",
    tags: ["repacking"],
  },
  {
    src: `${dir}/applying-shipping-label-to-carton.jpeg`,
    alt: "Hands applying a white shipping label to a taped kraft carton",
    caption: "Applying shipping labels",
    tags: ["labelling", "shipping"],
  },
  {
    src: `${dir}/taping-carton-closed-for-shipping.jpeg`,
    alt: "Person sealing a kraft carton with a clear tape dispenser beside a stack of finished boxes",
    caption: "Sealing finished cartons for dispatch",
    tags: ["shipping"],
  },
  {
    src: `${dir}/stacked-labelled-shipping-cartons.jpeg`,
    alt: "Three stacked kraft shipping cartons with blank labels, bubble wrap and tape in the background",
    caption: "Finished goods, labelled and stacked",
    tags: ["storage", "shipping"],
  },
  {
    src: `${dir}/packaging-storage-shelves-and-packing-table.jpeg`,
    alt: "Wooden shelving stocked with kraft boxes behind a packing table with mailers and tape",
    caption: "Organised storage for finished products",
    tags: ["storage"],
  },
  {
    src: `${dir}/kraft-boxes-with-blank-shipping-labels.jpeg`,
    alt: "Assorted kraft boxes in different sizes, each with a blank white label",
    caption: "Labelled boxes in multiple sizes",
    tags: ["labelling"],
  },
  {
    src: `${dir}/label-printer-and-blank-label-sheets.jpeg`,
    alt: "White label printer printing labels, with label sheets, label rolls and scissors",
    caption: "In-house label printing",
    tags: ["labelling"],
  },
  {
    src: `${dir}/stacked-kraft-cartons-stretch-wrap-tape.jpeg`,
    alt: "Stack of kraft cartons with a roll of stretch wrap and clear packing tape",
    caption: "Cartons, stretch wrap and tape",
    tags: ["shipping"],
  },
  {
    src: `${dir}/sealing-carton-with-tape-dispenser.jpeg`,
    alt: "Hands sealing a corrugated carton with a handheld tape gun",
    caption: "Carton sealing",
    tags: ["shipping"],
  },
  {
    src: `${dir}/labelled-kraft-boxes-with-tape-dispenser.jpeg`,
    alt: "Stacked kraft boxes with white labels next to a clear tape dispenser and scissors",
    caption: "Labelled boxes ready to ship",
    tags: ["labelling", "shipping"],
  },
  {
    src: `${dir}/kraft-boxes-sealed-with-round-stickers.jpeg`,
    alt: "Three folded kraft boxes sealed with round white stickers",
    caption: "Retail boxes sealed with stickers",
    tags: ["labelling", "bundling"],
  },
  {
    src: `${dir}/packing-bottle-in-loose-fill-peanuts.jpeg`,
    alt: "Hands placing a white bottle into a carton filled with loose-fill packing peanuts",
    caption: "Protecting bottles with loose fill",
    tags: ["repacking", "filling"],
  },
  {
    src: `${dir}/honeycomb-kraft-paper-protective-wrap.jpeg`,
    alt: "Hands stretching honeycomb kraft paper wrap above an open box",
    caption: "Paper-based protective wrapping",
    tags: ["repacking"],
  },
  {
    src: `${dir}/kraft-mailers-and-boxes-packing-station.jpeg`,
    alt: "Kraft paper mailers, small boxes, tape and bubble wrap on a packing table",
    caption: "Mailers and boxes at the packing station",
    tags: ["assembly", "shipping"],
  },
  {
    src: `${dir}/kraft-boxes-tape-twine-packing-supplies.jpeg`,
    alt: "Flat lay of kraft boxes, paper tape, jute twine, crinkled kraft paper and a cotton pouch",
    caption: "Packaging materials received and inspected",
    tags: ["bundling"],
  },
];

export function galleryImage(fileName: string): GalleryImage {
  const image = gallery.find((g) => g.src.endsWith(`/${fileName}.jpeg`));
  if (!image) throw new Error(`Gallery image not found: ${fileName}`);
  return image;
}
