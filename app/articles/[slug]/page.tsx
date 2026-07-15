import { getArticleBySlug, getAllArticles } from "@/src/lib/articles";
import ArticleHeader from "@/src/components/articles/ArticleHeader";
import ArticleImage from "@/src/components/articles/ArticleImage";
import ArticleBody from "@/src/components/articles/ArticleBody";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = getArticleBySlug(slug);

  return (
    <main className="article-page">
      <div className="container container-narrow">
        <article className="article">
          <ArticleHeader article={article} />

          <ArticleImage src={article.image} alt={article.imageAlt} />

          <ArticleBody content={article.content} />
        </article>
      </div>
    </main>
  );
}
