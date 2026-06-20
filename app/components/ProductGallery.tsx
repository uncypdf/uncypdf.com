"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type ProductGalleryProps = {
  title: string;
  images: string[];
};

export default function ProductGallery({
  title,
  images,
}: ProductGalleryProps) {
  const gallery = useMemo(() => images.filter(Boolean), [images]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const openImage = (index: number) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const showPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length);
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % gallery.length);
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, gallery.length]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      showNext();
    } else if (distance < -minSwipeDistance) {
      showPrev();
    }
  };

  if (gallery.length === 0) return null;

  return (
    <>
      <div className="grid gap-4">
        <button
          type="button"
          onClick={() => openImage(0)}
          className="block text-left"
        >
          <div className="relative overflow-hidden rounded-md bg-neutral-300">
            <Image
              src={gallery[0]}
              alt={title}
              width={1200}
              height={1600}
              priority
              className="h-auto w-full transition-opacity hover:opacity-95"
            />
          </div>
        </button>

        {gallery.length > 1 && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.slice(1).map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => openImage(index + 1)}
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
        )}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 p-4 md:p-8"
          onClick={closeImage}
        >
          <button
            type="button"
            onClick={closeImage}
            className="absolute right-4 top-4 z-[101] rounded-md border border-white/20 px-3 py-2 text-sm text-white transition hover:bg-white hover:text-black"
          >
            Close
          </button>

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-3 top-1/2 z-[101] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-2xl text-white backdrop-blur transition hover:bg-white hover:text-black md:left-6 md:h-14 md:w-14"
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 top-1/2 z-[101] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-2xl text-white backdrop-blur transition hover:bg-white hover:text-black md:right-6 md:h-14 md:w-14"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}

          <div className="flex h-full items-center justify-center">
            <div
              className="max-h-full max-w-[92vw]"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={gallery[selectedIndex]}
                alt={`${title} enlarged ${selectedIndex + 1}`}
                width={1800}
                height={2400}
                className="h-auto max-h-[88vh] w-auto rounded-md"
              />
            </div>
          </div>

          {gallery.length > 1 && (
            <div className="pointer-events-none absolute bottom-5 left-1/2 z-[101] -translate-x-1/2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs tracking-[0.14em] text-white/80 backdrop-blur">
              {selectedIndex + 1} / {gallery.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}