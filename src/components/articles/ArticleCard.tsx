import Link from "next/link";
import Image from "next/image";

import { Article } from "@/src/types/article";

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <article className="article-card">
      <Link href={`/articles/${article.slug}`} className="article-card-link">
        <Image
          src={article.image}
          alt={article.imageAlt}
          width={1000}
          height={750}
          className="article-card-image"
        />

        <div className="article-card-content">
          <p className="article-card-category">{article.category}</p>

          <h2 className="article-card-title">{article.title}</h2>

          <p className="article-card-excerpt">{article.excerpt}</p>

          <span className="article-card-readmore">Read article →</span>
        </div>
      </Link>
    </article>
  );
}
