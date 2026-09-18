import Link from "next/link";

type NavigationItem = {
  slug: string;
  title: string;
};

type Props = {
  previous: NavigationItem | null;
  next: NavigationItem | null;
  basePath?: string;
};

export default function ArticleNavigation({
  previous,
  next,
  basePath = "/articles",
}: Props) {
  if (!previous && !next) return null;

  return (
    <nav className="article-navigation">
      <h2>Continue Reading</h2>

      <div className="article-navigation-links">
        <div>
          {previous && (
            <Link href={`${basePath}/${previous.slug}`}>
              ← {previous.title}
            </Link>
          )}
        </div>

        <div className="article-navigation-right">
          {next && (
            <Link href={`${basePath}/${next.slug}`}>{next.title} →</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
