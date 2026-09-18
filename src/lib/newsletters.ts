import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Newsletter, NewsletterWithContent } from "@/src/types/newsletter";

const newslettersDirectory = path.join(process.cwd(), "content/newsletters");

function getNewsletterSlugs() {
  return fs
    .readdirSync(newslettersDirectory)
    .filter((file) => file.endsWith(".mdx"));
}

export function getNewsletterBySlug(slug: string): NewsletterWithContent {
  const fullPath = path.join(newslettersDirectory, `${slug}.mdx`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    ...(data as Omit<Newsletter, "slug">),
    content,
  };
}

export function getAllNewsletters(): NewsletterWithContent[] {
  return getNewsletterSlugs()
    .map((slug) => {
      const newsletter = getNewsletterBySlug(slug.replace(/\.mdx$/, ""));

      return newsletter;
    })
    .filter((newsletter) => newsletter.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAdjacentNewsletters(slug: string): {
  previous: NewsletterWithContent | null;
  next: NewsletterWithContent | null;
} {
  const newsletters = getAllNewsletters();

  const index = newsletters.findIndex((newsletter) => newsletter.slug === slug);

  return {
    previous: index < newsletters.length - 1 ? newsletters[index + 1] : null,
    next: index > 0 ? newsletters[index - 1] : null,
  };
}
