import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let project;

  try {
    project = getProjectBySlug(slug);
  } catch {
    notFound();
  }

  const galleryImages =
    slug === "cupholder"
      ? [
          "/collection/cupholder/01.png",
          "/collection/cupholder/02.png",
          "/collection/cupholder/03.png",
          "/collection/cupholder/04.png",
        ]
      : [
          project.thumbnail,
          "/archive/1.png",
          "/archive/2.png",
          "/archive/3.png",
          "/archive/4.png",
        ];

  return (
    <main className="min-h-screen bg-[#171716] px-[10px] py-[10px] text-neutral-100 md:px-3 md:py-3">
      <section className="rounded-md bg-[#009B46] px-4 py-4 text-black md:px-6 md:py-6">
        <Header />

        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-[12px] uppercase tracking-[0.2em]">
            Made to Order
          </div>

          <h1 className="text-[72px] font-black leading-[0.82] tracking-[-0.08em] md:text-[160px]">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl py-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.72fr_1.28fr] md:items-start">
          <aside className="order-1 md:sticky md:top-8">
            <div className="mb-10 border-b border-neutral-800 pb-8">
              <div className="mb-6">
                <div className="mb-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  Overview
                </div>
                <p className="text-[16px] leading-[1.6] text-neutral-300">
                  A contemporary object exploring proportion, material, and utility.
                </p>
              </div>

              <div className="mb-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Specifications
              </div>

              <div className="grid gap-4 text-[14px] md:text-[15px]">
                <div className="grid grid-cols-[96px_1fr] gap-4">
                  <span className="text-neutral-500">Year</span>
                  <span>{project.year}</span>
                </div>

                <div className="grid grid-cols-[96px_1fr] gap-4">
                  <span className="text-neutral-500">Category</span>
                  <span>{project.category}</span>
                </div>

                <div className="grid grid-cols-[96px_1fr] gap-4">
                  <span className="text-neutral-500">Material</span>
                  <span>Available on request</span>
                </div>

                <div className="grid grid-cols-[96px_1fr] gap-4">
                  <span className="text-neutral-500">Dimensions</span>
                  <span>Available on request</span>
                </div>
              </div>
            </div>


            <div className="mt-10 border-t border-neutral-800 pt-6">
              <Link href="/collection" className="text-[17px] underline">
                Back to Collection
              </Link>
            </div>
          </aside>

          <div className="order-2 grid gap-4">
            <div className="relative overflow-hidden rounded-md bg-neutral-300">
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={1200}
                height={1600}
                priority
                className="h-auto w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {galleryImages.slice(1).map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="overflow-hidden rounded-md bg-neutral-300"
                >
                  <Image
                    src={image}
                    alt={`${project.title} detail ${index + 1}`}
                    width={800}
                    height={1067}
                    className="h-auto w-full"
                  />
                </div>
              ))}
            </div>

            <div className="rounded-md border border-neutral-800 p-5 md:p-7">
              <div className="mb-4 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Details
              </div>
              <p className="max-w-2xl text-[16px] leading-[1.6] text-neutral-300 md:text-[18px]">
                This section is a temporary design note. Replace it later inside
                the MDX content or project data with process notes, material
                details, references, and production context.
              </p>
            </div>

            <div className="rounded-md border border-neutral-800 p-5 md:p-7">
              <div className="mb-4 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Availability
              </div>

              <p className="text-[18px] text-neutral-100">
                Made to Order
              </p>
            </div>

            <div className="rounded-md border border-neutral-800 p-5 md:p-7">
              <div className="mb-4 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Request Information
              </div>

              <p className="mb-3 text-[16px] leading-[1.6] text-neutral-300">
                For commissions, availability, and custom inquiries.
              </p>

              <p className="mb-6 text-[14px] text-neutral-500">
                Usually responds within 24 hours.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/uncy.pdf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-neutral-700 px-4 py-2 transition hover:bg-neutral-100 hover:text-black"
                >
                  Instagram DM
                </a>

                <a
                  href="mailto:info@uncypdf.com"
                  className="rounded-md border border-neutral-700 px-4 py-2 transition hover:bg-neutral-100 hover:text-black"
                >
                  Email
                </a>
              </div>
            </div>

            <div className="rounded-md border border-neutral-800 p-5 md:p-7">
              <div className="mb-4 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Instagram Reel
              </div>

              <div className="overflow-hidden rounded-md border border-neutral-800">
                <iframe
                  src="https://www.instagram.com/reel/DH0eb4mP1fq/embed"
                  width="100%"
                  height="740"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}