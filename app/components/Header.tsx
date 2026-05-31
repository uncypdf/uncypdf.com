import Link from "next/link";

export default function Header() {
  return (
    <nav className="mb-20 flex justify-center gap-2 text-[18px] font-black text-black md:text-lg">
      <Link
        className="bg-[#ff5a00] px-3 py-2 transition-all duration-300 hover:-translate-y-[6px] hover:scale-110 hover:rotate-[-2deg] hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] md:px-4 md:py-3"
        href="/"
      >
        Home
      </Link>

      <Link
        className="rounded-full bg-[#18bf45] px-3 py-2 transition-all duration-300 hover:-translate-y-[6px] hover:scale-110 hover:rotate-[-2deg] hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] md:px-4 md:py-3"
        href="/archive"
      >
        Archive
      </Link>

      <Link
        className="rounded-md bg-[#9ec4f6] px-3 py-2 transition-all duration-300 hover:-translate-y-[6px] hover:scale-110 hover:rotate-[-2deg] hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] md:px-4 md:py-3"
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}