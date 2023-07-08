import Image from "next/image";
import { Text } from "@/components";

interface iArticleProps {
  image: string
  author: string
  title: string
  content: string
}

const Article = ({ image, author, title, content }: iArticleProps) => {
  return (
    <article className="w-full max-w-[330px] min-h-[400px] bg-white flex flex-col group cursor-pointer md:max-w-[275px]">
      <figure className="w-full h-[200px]">
        <Image
          src={image}
          alt="article image"
          width={1280}
          height={720}
          className="w-full h-full object-cover rounded-t-xl group-hover:brightness-50"
        />
      </figure>

      <div className="w-full min-h-[200px] p-5 flex flex-col gap-3 rounded-b-xl">
        <Text as="small">By {author}</Text>

        <h3 className="font-normal text-lg text-dark">
          {title}
        </h3>

        <Text as="normal">{content}</Text>
      </div>
    </article>
  )
}

export default Article;
