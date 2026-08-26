import type { MetadataRoute } from "next";
import { getAllArticles } from "@/src/lib/articles";

const baseUrl = "https://backyardbirdtracker.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/starter-kit",
    "/app",
    "/articles",
    "/newsletter",
    "/about",
    "/contact",
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
  }));

  const articles: MetadataRoute.Sitemap = getAllArticles().map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
  }));

  return [...pages, ...articles];
}
