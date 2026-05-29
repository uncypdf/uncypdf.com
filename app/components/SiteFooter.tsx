import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative h-[360px] bg-[#171716] text-neutral-100 md:h-[420px]">
      <h1 className="absolute left-2 top-5 text-[70px] font-black leading-[0.78] tracking-[-0.08em] md:left-3 md:top-20 md:text-[148px]">
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
        hardwood furniture, woodworking
      </div>
    </footer>
  );
}