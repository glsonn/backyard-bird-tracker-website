export type Newsletter = {
  slug: string;
  title: string;
  date: string;
  published: boolean;
};

export type NewsletterWithContent = Newsletter & {
  content: string;
};
