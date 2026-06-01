import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const works = [
  {
    title: "the pyramid ",
    year: "2025",
    category: "coffee table/cherry wood & plywood",
    image: "/archive/1.png",
    href: "/archive/project-01",
  },
  {
    title: "the cupholder",
    year: "2025",
    category: "furniture/walnut wood & aluminum",
    image: "/archive/2.png",
    href: "/archive/project-02",
  },
  {
    title: "the flower vase",
    year: "2026",
    category: "vase/ginkgo wood",
    image: "/archive/3.png",
    href: "/archive/project-03",
  },
  {
    title: "the bookmark",
    year: "2025",
    category: "bookmark/cherry wood",
    image: "/archive/4.png",
    href: "/archive/project-04",
  },
];

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-[#171716] px-[10px] py-[10px] text-neutral-100 md:px-3 md:py-3">
      <section className="rounded-md bg-[#009B46] px-4 py-4 text-black md:px-6 md:py-6">
        <Header />

        <h1 className="mx-auto max-w-5xl text-center text-[72px] font-black leading-[0.82] tracking-[-0.08em] md:text-[180px]">
          Archive
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-center text-[18px] font-semibold leading-[1.2] md:text-[24px]">
          hardwood furniture, objects and experiments.
        </p>
      </section>

      <section className="py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
          {works.map((work) => (
            <Link
              key={work.title}
              href={work.href}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-neutral-300">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-3">
                <h2 className="text-[26px] font-black tracking-[-0.04em]">
                  {work.title}
                </h2>

                <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                  {work.category.split("/")[0]}
                </div>

                <div className="mt-1 text-[12px] text-neutral-400">
                  {work.year}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}