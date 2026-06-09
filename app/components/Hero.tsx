"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isPointerActive, setIsPointerActive] = useState(false);
  const studioImages: string[] = [];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 120,
    damping: 20,
  });

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (isPointerActive) return;

      const gamma = event.gamma ?? 0;
      const beta = event.beta ?? 45;

      const x = Math.max(-0.5, Math.min(0.5, gamma / 45));
      const y = Math.max(-0.5, Math.min(0.5, (beta - 45) / 45));

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [isPointerActive, mouseX, mouseY]);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#171716] p-[10px] text-white md:p-3">

      <section
        className="relative h-[800px] w-full overflow-hidden rounded-md bg-[#009B46] md:h-[1000px]"
        onMouseEnter={() => setIsPointerActive(true)}
        onMouseLeave={() => {
          setIsPointerActive(false);
          mouseX.set(0);
          mouseY.set(0);
        }}
        onMouseMove={(e) => {
          setIsPointerActive(true);
          const rect = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;

          mouseX.set(x);
          mouseY.set(y);
        }}
      >
        <nav className="absolute left-1/2 top-8 z-20 flex -translate-x-1/2 gap-2 text-[18px] font-black text-black md:top-3 md:text-lg">
          <Link
            className="bg-[#ff5a00] px-3 py-2 transition-all duration-300 md:translate-y-0 md:scale-100 md:rotate-0 md:shadow-none md:hover:-translate-y-[6px] md:hover:scale-110 md:hover:rotate-[-2deg] md:hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] active:scale-95 md:px-4 md:py-3"
            href="/"
          >
            Home
          </Link>

          <Link
            className="rounded-full bg-[#18bf45] px-3 py-2 transition-all duration-300 md:translate-y-0 md:scale-100 md:rotate-0 md:shadow-none md:hover:-translate-y-[6px] md:hover:scale-110 md:hover:rotate-[-2deg] md:hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] active:scale-95 md:px-4 md:py-3"
            href="/archive"
          >
            Archive
          </Link>

          <Link
            className="rounded-md bg-[#9ec4f6] px-3 py-2 transition-all duration-300 md:translate-y-0 md:scale-100 md:rotate-0 md:shadow-none md:hover:-translate-y-[6px] md:hover:scale-110 md:hover:rotate-[-2deg] md:hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] active:scale-95 md:px-4 md:py-3"
            href="/about"
          >
            About
          </Link>
        </nav>

        <motion.div
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1200,
          }}
          whileTap={{ scale: 0.98 }}
          className="absolute left-1/2 top-[105px] h-[430px] w-[560px] -translate-x-1/2 md:top-[20px] md:h-[720px] md:w-[820px]"
        >
          <Image
            src="/main_mo3.png"
            alt="uncy.pdf"
            fill
            priority
            className="object-contain"
          />
        </motion.div>
      </section>

      {studioImages.length > 0 && (
        <section className="grid gap-3 py-3 md:grid-cols-2">
          {studioImages.map((src, index) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-md bg-neutral-900"
            >
              <Image
                src={src}
                alt={`uncy.pdf studio product ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </section>
      )}

      <footer className="relative h-[360px] bg-[#171716] md:h-[420px]">
        <h1 className="absolute left-2 top-5 text-[70px] font-black leading-[0.78] tracking-[-0.08em] text-neutral-100 md:left-3 md:top-20 md:text-[148px]">
          uncy.pdf
        </h1>

        <div className="absolute left-2 top-[140px] md:bottom-48 md:left-auto md:right-56 md:top-auto md:text-right">
          <div className="mb-2 inline-block rounded-full border border-neutral-300 px-2 py-[1px] text-[10px] uppercase">
            Links
          </div>
          <div className="flex flex-col text-[17px] leading-6 underline md:text-xl md:leading-7">
            <Link href="/">Home</Link>
            <Link href="/archive">Archive</Link>
            <Link href="/about">About</Link>
          </div>
        </div>

        <div className="absolute right-10 top-[140px] text-left md:bottom-48 md:right-3 md:top-auto md:text-right">
          <div className="mb-2 inline-block rounded-full border border-neutral-300 px-2 py-[1px] text-[10px] uppercase">
            Connect
          </div>
          <div className="flex flex-col text-[17px] leading-6 underline md:text-xl md:leading-7">
            <a href="https://www.instagram.com/uncy.pdf/" target="_blank">
              Instagram
            </a>
            <a href="#" target="_blank">
              YouTube
            </a>
            <a href="mailto:info@uncypdf.com">Email</a>
          </div>
        </div>

        <div className="absolute bottom-5 left-2 text-left text-[14px] leading-5 text-neutral-300 md:bottom-14 md:left-auto md:right-4 md:text-right">
          ©2026 uncy.pdf
          <br />
          unnecessary product design format
        </div>
      </footer>
    </main>
  );
}