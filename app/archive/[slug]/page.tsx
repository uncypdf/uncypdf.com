import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const projects = {
  "project-01": {
    title: "the pyramid",
    category: "coffee table",
    year: "2025",
    material: "cherry wood & plywood",
    image: "/archive/1.png",
    description:
      "A low coffee table built from hardwood and plywood, shaped around a simple pyramidal structure.",
  },
  "project-02": {
    title: "the cupholder",
    category: "holder",
    year: "2025",
    material: "walnut wood & aluminum",
    image: "/archive/2.png",
    description:
      "A functional wooden holder object designed around daily use and material contrast.",
  },
  "project-03": {
    title: "the flower vase",
    category: "vase",
    year: "2026",
    material: "ginkgo wood",
    image: "/archive/3.png",
    description:
      "A flower vase object made from ginkgo wood, balancing utility and sculptural presence.",
  },
  "project-04": {
    title: "the bookmark",
    category: "bookmark",
    year: "2025",
    material: "cherry wood",
    image: "/archive/4.png",
    description:
      "A small wooden bookmark object, designed as a quiet everyday tool.",
  },
};

type ProjectSlug = keyof typeof projects;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#171716] px-[10px] py-[10px] text-neutral-100 md:px-3 md:py-3">
        <section className="rounded-md bg-[#009B46] px-4 py-4 text-black md:px-6 md:py-6">
          <Header />
          <h1 className="text-[72px] font-black leading-[0.82] tracking-[-0.08em] md:text-[160px]">
            Not Found
          </h1>
          <Link href="/archive" className="mt-8 inline-block underline">
            Back to Archive
          </Link>
        </section>
      </main>
    );
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

      <section className="mx-auto grid max-w-6xl gap-10 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-20">
        <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-neutral-300">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <aside className="md:pt-4">
          <div className="mb-10">
            <div className="mb-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              Description
            </div>
            <p className="text-[22px] leading-[1.25] md:text-[30px]">
              {project.description}
            </p>
          </div>

          <div className="grid gap-6 border-t border-neutral-800 pt-6">
            <div>
              <div className="mb-1 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Material
              </div>
              <div className="text-[18px] md:text-[22px]">
                {project.material}
              </div>
            </div>

            <div>
              <div className="mb-1 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Year
              </div>
              <div className="text-[18px] md:text-[22px]">{project.year}</div>
            </div>

            <div>
              <Link href="/archive" className="text-[18px] underline">
                Back to Archive
              </Link>
            </div>
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  );
}