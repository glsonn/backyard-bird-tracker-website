import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Article, ArticleWithContent } from "@/src/types/article";

const articlesDirectory = path.join(process.cwd(), "content/articles");

function getArticleSlugs() {
  return fs
    .readdirSync(articlesDirectory)
    .filter((file) => file.endsWith(".mdx"));
}

export function getArticleBySlug(slug: string): ArticleWithContent {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    ...(data as Omit<Article, "slug">),
    content,
  };
}

export function getAllArticles(): ArticleWithContent[] {
  return getArticleSlugs()
    .map((slug) => {
      const article = getArticleBySlug(slug.replace(/\.mdx$/, ""));

      return article;
    })
    .filter((article) => article.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAdjacentArticles(slug: string): {
  previous: ArticleWithContent | null;
  next: ArticleWithContent | null;
} {
  const articles = getAllArticles();

  const index = articles.findIndex((article) => article.slug === slug);

  return {
    previous: index < articles.length - 1 ? articles[index + 1] : null,
    next: index > 0 ? articles[index - 1] : null,
  };
}
