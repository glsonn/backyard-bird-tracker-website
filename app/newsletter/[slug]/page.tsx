import type { Metadata } from "next";

import {
  getNewsletterBySlug,
  getAllNewsletters,
  getAdjacentNewsletters,
} from "@/src/lib/newsletters";
import ArticleBody from "@/src/components/articles/ArticleBody";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const newsletter = getNewsletterBySlug(slug);

  return {
    title: newsletter.title,
    description: `The Backyard Bird Tracker Newsletter — ${newsletter.title}`,
  };
}

export function generateStaticParams() {
  return getAllNewsletters().map((newsletter) => ({
    slug: newsletter.slug,
  }));
}

export default async function NewsletterIssuePage({ params }: Props) {
  const { slug } = await params;

  const newsletter = getNewsletterBySlug(slug);
  const { previous, next } = getAdjacentNewsletters(newsletter.slug);

  return (
    <main className="article-page">
      <div className="container container-narrow">
        <article className="article">
          <header className="article-header">
            <p className="article-tag">NEWSLETTER</p>

            <h1>{newsletter.title}</h1>

            <p className="article-date">
              {new Date(`${newsletter.date}T12:00:00`).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              )}
            </p>
          </header>

          <ArticleBody content={newsletter.content} />

          <nav
            className="article-navigation"
            aria-label="Newsletter navigation"
          >
            {previous ? (
              <a href={`/newsletter/${previous.slug}`}>← {previous.title}</a>
            ) : (
              <span />
            )}

            {next ? (
              <a href={`/newsletter/${next.slug}`}>{next.title} →</a>
            ) : (
              <span />
            )}
          </nav>
        </article>
      </div>
    </main>
  );
}
