import Link from "next/link";

import { Article } from "@/src/types/article";

type Props = {
  previous: Article | null;
  next: Article | null;
};

export default function ArticleNavigation({ previous, next }: Props) {
  if (!previous && !next) return null;

  return (
    <nav className="article-navigation">
      <h2>Continue Reading</h2>

      <div className="article-navigation-links">
        <div>
          {previous && (
            <Link href={`/articles/${previous.slug}`}>← {previous.title}</Link>
          )}
        </div>

        <div className="article-navigation-right">
          {next && <Link href={`/articles/${next.slug}`}>{next.title} →</Link>}
        </div>
      </div>
    </nav>
  );
}
