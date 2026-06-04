import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
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

  const galleryImages = [
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
            {project.category} / {project.year}
          </div>

          <h1 className="text-[72px] font-black leading-[0.82] tracking-[-0.08em] md:text-[160px]">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl py-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.72fr_1.28fr] md:items-start">
          <aside className="order-1 md:sticky md:top-8">
            <div className="mb-8 grid gap-4 border-b border-neutral-800 pb-8 text-[14px] md:text-[15px]">
              <div className="grid grid-cols-[96px_1fr] gap-4">
                <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  Year
                </span>
                <span>{project.year}</span>
              </div>

              <div className="grid grid-cols-[96px_1fr] gap-4">
                <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                  Category
                </span>
                <span>{project.category}</span>
              </div>
            </div>

            <article className="prose prose-invert max-w-none prose-headings:font-black prose-headings:tracking-[-0.04em] prose-p:text-[17px] prose-p:leading-[1.55] prose-a:text-neutral-100 prose-a:underline prose-img:hidden md:prose-p:text-[19px]">
              <MDXRemote source={project.content} />
            </article>

            <div className="mt-10 border-t border-neutral-800 pt-6">
              <Link href="/archive" className="text-[17px] underline">
                Back to Archive
              </Link>
            </div>
          </aside>

          <div className="order-2 grid gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-neutral-300 md:aspect-[4/3]">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(1).map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="relative aspect-[4/3] overflow-hidden rounded-md bg-neutral-300"
                >
                  <Image
                    src={image}
                    alt={`${project.title} detail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="rounded-md border border-neutral-800 p-5 md:p-7">
              <div className="mb-4 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Design Note
              </div>
              <p className="max-w-2xl text-[16px] leading-[1.6] text-neutral-300 md:text-[18px]">
                This section is a temporary design note. Replace it later inside
                the MDX content or project data with process notes, material
                details, references, and production context.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}