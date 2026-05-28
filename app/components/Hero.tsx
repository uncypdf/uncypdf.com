"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#171716] p-[10px] text-white md:p-3">
      <div className="pb-3 pt-1 text-center text-[16px] font-semibold leading-[1.4] text-neutral-400 md:pb-5 md:pt-2 md:text-sm">
        unnecessary product design format |
        <br className="md:hidden" /> uncy.pdf
      </div>

      <section className="relative h-[640px] w-full overflow-hidden rounded-md bg-[#009B46] md:h-[760px]">
        <nav className="absolute left-1/2 top-[10px] z-20 flex -translate-x-1/2 gap-2 text-[18px] font-bold text-black md:top-3 md:text-lg">

  <Link

    className="bg-[#ff5a00] px-3 py-2 transition-all duration-300 hover:-translate-y-[6px] hover:scale-110 hover:rotate-[-2deg] hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] active:scale-95 md:px-4 md:py-3"

    href="/"

  >

    Home

  </Link>

  <Link

    className="rounded-full bg-[#18bf45] px-3 py-2 transition-all duration-300 hover:-translate-y-[6px] hover:scale-110 hover:rotate-[-2deg] hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] active:scale-95 md:px-4 md:py-3"

    href="/archive"

  >

    Archive

  </Link>

  <Link

    className="rounded-md bg-[#9ec4f6] px-3 py-2 transition-all duration-300 hover:-translate-y-[6px] hover:scale-110 hover:rotate-[-2deg] hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] active:scale-95 md:px-4 md:py-3"

    href="/about"

  >

    About

  </Link>

</nav>

        <motion.div

  animate={{

    y: [0, -12, 0],

    rotate: [0, -1.5, 0],

  }}

  transition={{

    duration: 6,

    repeat: Infinity,

    ease: "easeInOut",

  }}

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
            <a href="mailto:hello@uncypdf.com">Email</a>
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