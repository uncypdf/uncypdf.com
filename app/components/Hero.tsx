"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const tiltRotate = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 90, damping: 18 });
  const springY = useSpring(tiltY, { stiffness: 90, damping: 18 });
  const springRotate = useSpring(tiltRotate, { stiffness: 90, damping: 18 });
  const [needsTiltPermission, setNeedsTiltPermission] = useState(true);

  useEffect(() => {
    const DeviceOrientation = window.DeviceOrientationEvent as typeof DeviceOrientationEvent & {
      requestPermission?: () => Promise<"granted" | "denied">;
    };

    const handleOrientation = (event: DeviceOrientationEvent) => {
      const gamma = event.gamma ?? 0;
      const beta = event.beta ?? 0;

      tiltX.set(Math.max(-28, Math.min(28, gamma * 1.2)));
      tiltY.set(Math.max(-24, Math.min(24, (beta - 45) * 0.5)));
      tiltRotate.set(Math.max(-5, Math.min(5, gamma * 0.18)));
    };

    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [tiltX, tiltY, tiltRotate]);

  const enableTilt = async () => {
    const DeviceOrientation = window.DeviceOrientationEvent as typeof DeviceOrientationEvent & {
      requestPermission?: () => Promise<"granted" | "denied">;
    };

    if (typeof DeviceOrientation?.requestPermission !== "function") return;

    const permission = await DeviceOrientation.requestPermission();

    if (permission !== "granted") return;

    setNeedsTiltPermission(false);

    const handleOrientation = (event: DeviceOrientationEvent) => {
      const gamma = event.gamma ?? 0;
      const beta = event.beta ?? 0;

      tiltX.set(Math.max(-28, Math.min(28, gamma * 1.2)));
      tiltY.set(Math.max(-24, Math.min(24, (beta - 45) * 0.5)));
      tiltRotate.set(Math.max(-5, Math.min(5, gamma * 0.18)));
    };

    window.addEventListener("deviceorientation", handleOrientation);
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#171716] p-[10px] text-white md:p-3">
      <div className="pb-3 pt-1 text-center text-[16px] font-semibold leading-[1.4] text-neutral-400 md:pb-5 md:pt-2 md:text-sm">
        handmade furniture, woodworking |
        <br className="md:hidden" /> uncy.pdf
      </div>

      <section className="relative h-[640px] w-full overflow-hidden rounded-md bg-[#009B46] md:h-[760px]">
        <nav className="absolute left-1/2 top-[10px] z-20 flex -translate-x-1/2 gap-2 text-[18px] font-bold text-black md:top-3 md:text-lg">
          <Link
            className="bg-[#ff5a00] px-3 py-2 translate-y-[-6px] scale-110 rotate-[-2deg] shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-300 md:translate-y-0 md:scale-100 md:rotate-0 md:shadow-none md:hover:-translate-y-[6px] md:hover:scale-110 md:hover:rotate-[-2deg] md:hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] active:scale-95 md:px-4 md:py-3"
            href="/"
            onClick={enableTilt}
          >
            Home
          </Link>

          <Link
            className="rounded-full bg-[#18bf45] px-3 py-2 translate-y-[-6px] scale-110 rotate-[-2deg] shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-300 md:translate-y-0 md:scale-100 md:rotate-0 md:shadow-none md:hover:-translate-y-[6px] md:hover:scale-110 md:hover:rotate-[-2deg] md:hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] active:scale-95 md:px-4 md:py-3"
            href="/archive"
            onClick={enableTilt}
          >
            Archive
          </Link>

          <Link
            className="rounded-md bg-[#9ec4f6] px-3 py-2 translate-y-[-6px] scale-110 rotate-[-2deg] shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-300 md:translate-y-0 md:scale-100 md:rotate-0 md:shadow-none md:hover:-translate-y-[6px] md:hover:scale-110 md:hover:rotate-[-2deg] md:hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] active:scale-95 md:px-4 md:py-3"
            href="/about"
            onClick={enableTilt}
          >
            About
          </Link>
        </nav>

        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, -1.5, 0],
          }}
          whileHover={{
            scale: 1.05,
            rotate: -3,
            y: -18,
          }}
          whileTap={{
            scale: 0.98,
          }}
          onTap={enableTilt}
          style={{
            x: springX,
            y: springY,
            rotate: springRotate,
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
      </footer>
    </main>
  );
}