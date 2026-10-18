"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { GalleryImage } from "@/content/gallery";

export function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const current = images[index];

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = (delta: number) => setIndex((i) => (i + delta + images.length) % images.length);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {images.map((img, i) => (
          <li key={img.src}>
            <figure>
              <button
                type="button"
                onClick={() => open(i)}
                className="block w-full overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                aria-label={`View larger: ${img.caption}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1920}
                  height={1280}
                  sizes="(min-width: 1024px) 270px, (min-width: 640px) 33vw, 50vw"
                  className="aspect-square w-full object-cover transition duration-300 hover:scale-105"
                />
              </button>
              <figcaption className="mt-2 text-sm font-semibold text-navy-800">{img.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={current.caption}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onClick={(e) => {
          // Clicking the backdrop (the dialog element itself) closes it.
          if (e.target === e.currentTarget) close();
        }}
        className="m-auto w-[min(64rem,calc(100vw-2rem))] max-w-none rounded-2xl bg-transparent p-0 backdrop:bg-black/80"
      >
        <div className="relative">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            width={1920}
            height={1280}
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="max-h-[80vh] w-full rounded-2xl object-contain"
          />
          <p className="mt-3 text-center font-semibold text-white">
            {current.caption} <span className="text-white/60">({index + 1} / {images.length})</span>
          </p>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-2 right-2 flex size-11 items-center justify-center rounded-full bg-black/60 text-2xl text-white hover:bg-black/80"
          >
            ×
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous photo"
            className="absolute top-1/2 left-2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white hover:bg-black/80"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next photo"
            className="absolute top-1/2 right-2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white hover:bg-black/80"
          >
            ›
          </button>
        </div>
      </dialog>
    </>
  );
}
