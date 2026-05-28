import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="min-h-screen bg-[#171716] p-3 text-white">
      <div className="pb-5 pt-2 text-center text-sm font-semibold text-neutral-400">
        unnecessary product design format | uncy.pdf
      </div>

      <section className="relative h-[760px] rounded-md bg-[#009B46]">
        <div className="absolute left-3 top-4 text-[16px] font-black leading-[0.8] tracking-[-0.08em] text-black">
          uncy.
          <br />
          pdf
        </div>

        <nav className="absolute left-1/2 top-3 flex -translate-x-1/2 gap-2 text-lg font-bold text-black">
          <Link className="bg-[#ff5a00] px-4 py-3" href="/">
            Home
          </Link>
          <Link className="rounded-full bg-[#18bf45] px-4 py-3" href="/archive">
            Archive
          </Link>
          <Link className="rounded-md bg-[#9ec4f6] px-4 py-3" href="/about">
            About
          </Link>
        </nav>

        <div className="absolute left-1/2 top-[20px] h-[720px] w-[820px] -translate-x-1/2">
          <Image
            src="/main_mo3.png"
            alt="uncy.pdf"
            fill
            priority
            className="object-contain"
          />
        </div>
      </section>

      <footer className="relative h-[520px] bg-[#171716]">
        <h1 className="absolute left-3 top-20 text-[190px] font-black leading-[0.78] tracking-[-0.08em] text-neutral-100">
          uncy.
          <br />
          pdf
        </h1>

        <div className="absolute bottom-48 right-56 text-right">
          <div className="mb-3 inline-block rounded-full border border-neutral-300 px-2 py-[1px] text-[10px] uppercase">
            Links
          </div>
          <div className="flex flex-col text-xl leading-7 underline">
            <Link href="/">Home</Link>
            <Link href="/archive">Archive</Link>
            <Link href="/about">About</Link>
          </div>
        </div>

        <div className="absolute bottom-48 right-3 text-right">
          <div className="mb-3 inline-block rounded-full border border-neutral-300 px-2 py-[1px] text-[10px] uppercase">
            Connect
          </div>
          <div className="flex flex-col text-xl leading-7 underline">
            <a href="https://www.instagram.com/rentonnnn/" target="_blank">
              Instagram
            </a>
            <a href="#" target="_blank">
              YouTube
            </a>
            <a href="mailto:hello@uncypdf.com">Email</a>
          </div>
        </div>

        <div className="absolute bottom-14 right-4 text-right text-sm leading-5 text-neutral-300">
          ©2026 uncy.pdf
          <br />
          unnecessary product design format
        </div>
      </footer>
    </main>
  );
}