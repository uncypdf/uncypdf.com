import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  thumbnail: string;
  content: string;
};

export function getProjectSlugs() {
  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(slug: string): Project {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(projectsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    year: data.year,
    category: data.category,
    thumbnail: data.thumbnail,
    content,
  };
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();

  return slugs
    .map((slug) => getProjectBySlug(slug))
    .sort((a, b) => Number(b.year) - Number(a.year));
}