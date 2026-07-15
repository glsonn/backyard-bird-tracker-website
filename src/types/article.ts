export type ArticleCategory = "Guide" | "Observation" | "Seasonal Note";

export type Article = {
  slug: string;

  title: string;
  description: string;
  excerpt: string;

  date: string;

  category: ArticleCategory;

  image: string;
  imageAlt: string;

  published: boolean;
};

export type ArticleWithContent = Article & {
  content: string;
};
