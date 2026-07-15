import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function ArticleImage({ src, alt }: Props) {
  return (
    <div className="article-image">
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={750}
        sizes="(max-width: 768px) 100vw, 760px"
      />
    </div>
  );
}
