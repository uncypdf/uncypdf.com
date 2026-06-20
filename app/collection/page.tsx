"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const works = [
  {
    slug: "cupholder",
    title: "cupholder",
    year: "2025",
    category: "furniture",
    thumbnail: "/collection/cupholder/01.png",
  },
  {
    slug: "pyramid",
    title: "pyramid",
    year: "2025",
    category: "coffee table",
    thumbnail: "/archive/1.png",
  },
  {
    slug: "flower-vase",
    title: "flower vase",
    year: "2026",
    category: "vase",
    thumbnail: "/archive/3.png",
  },
  {
    slug: "bookstand",
    title: "bookstand",
    year: "2025",
    category: "furniture",
    thumbnail: "/archive/4.png",
  },
];

function CollectionCard({
  work,
}: {
  work: {
    slug: string;
    title: string;
    year: string;
    category: string;
    thumbnail: string;
  };
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 120,
    damping: 20,
  });

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 120,
    damping: 20,
  });

  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 20,
  });

  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), {
    stiffness: 120,
    damping: 20,
  });

  const isSoldOut = work.slug !== "cupholder";
  const Wrapper = isSoldOut ? "div" : Link;
  const wrapperProps = isSoldOut
    ? { className: "group block cursor-not-allowed opacity-45" }
    : { href: `/collection/${work.slug}`, className: "group block" };

  return (
    <Wrapper {...wrapperProps}>
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformPerspective: 1000,
        }}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;

          mouseX.set(x);
          mouseY.set(y);
        }}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
        className="relative aspect-[3/4] overflow-hidden rounded-md bg-neutral-300 will-change-transform"
      >
        <Image
          src={work.thumbnail}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </motion.div>

      <div className="mt-3">
        <h2 className="text-[26px] font-black tracking-[-0.04em]">
          {work.title}
        </h2>

        <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-neutral-500">
          {isSoldOut ? "Sold Out" : "Made to Order"}
        </div>
      </div>
    </Wrapper>
  );
}

export default function CollectionPage() {

  return (
    <main className="min-h-screen bg-[#171716] px-[10px] py-[10px] text-neutral-100 md:px-3 md:py-3">
      <section className="rounded-md bg-[#009B46] px-4 py-4 text-black md:px-6 md:py-6">
        <Header />

        <h1 className="max-w-5xl text-[72px] font-black leading-[0.82] tracking-[-0.08em] md:text-[180px]">
          Collection
        </h1>

        <p className="mt-10 max-w-2xl text-[16px] font-medium leading-[1.35] tracking-[-0.02em] md:text-[36px]">
          hardwood furniture, objects and experiments.
        </p>
      </section>

      <section className="py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
          {works.map((work) => (
            <CollectionCard key={work.slug} work={work} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}