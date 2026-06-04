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

      <section className="mx-auto grid max-w-6xl gap-10 py-12 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-neutral-300">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <article className="prose prose-invert max-w-none prose-headings:font-black prose-headings:tracking-[-0.04em] prose-p:text-[18px] prose-p:leading-[1.45] prose-a:text-neutral-100 prose-a:underline prose-img:rounded-md md:prose-p:text-[22px]">
          <MDXRemote source={project.content} />

          <div className="not-prose mt-12 border-t border-neutral-800 pt-6">
            <Link href="/archive" className="text-[18px] underline">
              Back to Archive
            </Link>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
}