import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  content: string;
};

export default function ArticleBody({ content }: Props) {
  return (
    <div className="article-body">
      <MDXRemote source={content} />
    </div>
  );
}
