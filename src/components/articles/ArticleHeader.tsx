import { Article } from "@/src/types/article";

type Props = {
  article: Article;
};

export default function ArticleHeader({ article }: Props) {
  return (
    <header>
      <p>{article.category}</p>

      <h1>{article.title}</h1>

      <p>{article.description}</p>

      <p>{article.date}</p>
    </header>
  );
}
