import { links } from "@/data";
import Link from "next/link";

const PagesList = () => {
  return (
    <ul className="w-max flex flex-col flex-wrap items-center gap-5 md:max-h-[100px] md:items-start md:justify-between md:gap-x-16">
      {
        links.filter(link => link.href !== "/")
          .map(({ href, text }, i) => (
            <li
              key={i}
              className="font-normal text-sm text-neutral-200"
            >
              <Link href={href}>
                {text}
              </Link>
            </li>
        ))
      }

      <li className="font-normal text-sm text-neutral-200">
        <Link href="support">
          Support
        </Link>
      </li>

      <li className="font-normal text-sm text-neutral-200">
        <Link href="privacy-policy">
          Privacy Policy
        </Link>
      </li>
    </ul>
  )
}

export default PagesList;
