import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-8 py-6 text-black">
      
      <Link
        href="/"
        className="text-xl tracking-tight font-medium"
      >
        uncy.pdf
      </Link>

      <div className="flex items-center gap-8 text-sm uppercase tracking-[0.15em]">
        <Link href="/works">Works</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

    </nav>
  );
}