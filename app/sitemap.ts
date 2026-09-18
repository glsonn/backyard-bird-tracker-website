import type { MetadataRoute } from "next";
import { getAllArticles } from "@/src/lib/articles";
import { getAllNewsletters } from "@/src/lib/newsletters";

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

  const newsletters: MetadataRoute.Sitemap = getAllNewsletters().map(
    (newsletter) => ({
      url: `${baseUrl}/newsletter/${newsletter.slug}`,
    }),
  );

  return [...pages, ...articles, ...newsletters];
}
