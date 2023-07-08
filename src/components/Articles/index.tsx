import { Article, Title } from "@/components";
import { articles } from "@/data";

const Articles = () => {
  return (
    <section className="w-full py-[60px] px-5 bg-neutral-300">
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center gap-14">
        <Title as="h2">Latest Articles</Title>

        <div className="w-full flex flex-col justify-center items-center gap-5 md:flex-row md:flex-wrap md:items-start">
          {
            articles.map((article) => (
              <Article
                key={article.title}
                image={article.image}
                author={article.author}
                title={article.title}
                content={article.content}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Articles;
