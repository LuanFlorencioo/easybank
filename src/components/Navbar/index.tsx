import Link from "next/link";
import { useRouter } from "next/router";
import links from "./links";
import { useAppContext } from "@/contexts";

const Navbar = () => {
  const { asPath } = useRouter();
  const { handleOpenNavbar } = useAppContext();

  const verifyCurrentPage = (path: string) => {
    return asPath === path ? "border-green" : "border-transparent";
  }

  return (
    <nav onClick={handleOpenNavbar} className="w-full h-1/2 p-5 bg-gradient-to-b from-[#00000095] to-transparent fixed top-[60px] left-0 z-40 md:w-max md:h-max md:p-0 md:bg-none md:static">
      <ul className="w-full max-w-md mx-auto py-7 bg-white rounded-lg flex flex-col justify-center items-center gap-5 text-base text-dark md:w-max md:mx-0 md:py-0 md:bg-transparent md:rounded-none md:flex-row">
        {
          links.map(
            ({ href, text }, i) => (
              <li
                key={i}
                className={`md:py-4 border-b-2 ${verifyCurrentPage(href)} hover:border-green`}
              >
                <Link href={href}>{text}</Link>
              </li>
            )
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar;
