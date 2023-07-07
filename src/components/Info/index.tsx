import Image from "next/image";
import { Title, Text } from "@/components";

interface iInfoProps {
  image: string
  title: string
  text: string
}

const Info = ({ image, text, title }: iInfoProps) => {
  return (
    <li className="w-full flex flex-col items-center text-center gap-4 md:max-w-[250px] md:items-start md:text-left">
      <Image
        src={image}
        alt="icon"
        width={72}
        height={72}
      />

      <Title as="h3">{title}</Title>

      <Text>{text}</Text>
    </li>
  )
}

export default Info;
