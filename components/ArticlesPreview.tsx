import Container from "@/components/layout/Container";
import ArticleCard from "@/src/components/articles/ArticleCard";

import { getAllArticles } from "@/src/lib/articles";
import Link from "next/link";

export default function ArticlesPreview() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <section className="articles">
      <Container variant="narrow">
        <div className="articles-inner">
          <h2 className="feature-title">From the field journal</h2>

          <p className="articles-text">
            Short notes, seasonal observations, and simple guides for noticing
            birds in everyday spaces.
          </p>

          <div className="articles-grid">
            {articles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                showReadMore={false}
              />
            ))}
          </div>

          <div className="articles-actions">
            <Link href="/articles" className="button secondary">
              Read more articles
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
