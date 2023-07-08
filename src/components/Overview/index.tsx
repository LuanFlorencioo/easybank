import { Info, Text, Title } from "@/components";
import { infos } from "@/data";

const Overview = () => {
  return (
    <section className="w-full py-[60px] px-5 bg-neutral-200">
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center gap-14 md:py-[70px] md:items-start">
        <div className="w-full flex flex-col text-center gap-4 md:max-w-[500px] md:text-left">
          <Title as="h2">Why choose Easybank?</Title>

          <Text>
            We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
          </Text>
        </div>

        <ul className="w-full flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-between">
          {
            infos.map(({image, text, title}) => (
              <Info key={title} image={image} title={title} text={text} />
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Overview;
