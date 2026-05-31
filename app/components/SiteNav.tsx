import Link from "next/link";

export default function SiteNav() {
  return (
    <nav className="flex justify-center gap-2 text-[18px] font-bold text-black">
      <Link
        href="/"
        className="bg-[#ff5a00] px-4 py-3 transition-all duration-300 hover:-translate-y-[6px] hover:scale-110 hover:rotate-[-2deg] hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] active:scale-95"
      >
        Home
      </Link>

      <Link
        href="/archive"
        className="rounded-full bg-[#18bf45] px-4 py-3 transition-all duration-300 hover:-translate-y-[6px] hover:scale-110 hover:rotate-[-2deg] hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] active:scale-95"
      >
        Archive
      </Link>

      <Link
        href="/about"
        className="rounded-md bg-[#9ec4f6] px-4 py-3 transition-all duration-300 hover:-translate-y-[6px] hover:scale-110 hover:rotate-[-2deg] hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] active:scale-95"
      >
        About
      </Link>
    </nav>
  );
}