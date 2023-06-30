import Image from "next/image";
import { socialMidias } from "@/data";

const SocialMidias = () => {

  return (
    <div className="w-full flex justify-center items-center gap-10 md:gap-3">
      {
        socialMidias.map(
          ({src, alt}, i) => (
            <Image
              key={i}
              src={src}
              alt={alt}
              className="cursor-pointer"
            />
          )
        )
      }
    </div>
  )
}

export default SocialMidias;
