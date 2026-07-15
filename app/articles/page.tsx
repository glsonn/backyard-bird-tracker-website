import Container from "@/components/layout/Container";
import ArticleCard from "@/src/components/articles/ArticleCard";

import { getAllArticles } from "@/src/lib/articles";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="articles-page">
      <Container>
        <section className="articles-header">
          <h1>Articles</h1>

          <p>
            Stories, guides, and seasonal observations to help you notice more
            birds, enjoy their visits, and remember the moments that make
            backyard birding rewarding.
          </p>
        </section>

        <section className="articles-grid">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </section>
      </Container>
    </main>
  );
}
