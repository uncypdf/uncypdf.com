"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProductGalleryProps = {
  title: string;
  images: string[];
};

export default function ProductGallery({
  title,
  images,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage]);

  return (
    <>
      <div className="grid gap-4">
        <button
          type="button"
          onClick={() => setSelectedImage(images[0])}
          className="block text-left"
        >
          <div className="relative overflow-hidden rounded-md bg-neutral-300">
            <Image
              src={images[0]}
              alt={title}
              width={1200}
              height={1600}
              priority
              className="h-auto w-full transition-opacity hover:opacity-95"
            />
          </div>
        </button>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.slice(1).map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="block text-left"
            >
              <div className="overflow-hidden rounded-md bg-neutral-300">
                <Image
                  src={image}
                  alt={`${title} detail ${index + 1}`}
                  width={800}
                  height={1067}
                  className="h-auto w-full transition-opacity hover:opacity-95"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-[101] rounded-md border border-white/20 px-3 py-2 text-sm text-white transition hover:bg-white hover:text-black"
          >
            Close
          </button>

          <div className="flex h-full items-center justify-center">
            <div
              className="max-h-full max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt={title}
                width={1600}
                height={2200}
                className="h-auto max-h-[88vh] w-auto rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}