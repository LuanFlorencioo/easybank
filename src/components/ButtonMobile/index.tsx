import Image from "next/image";
import { useAppContext } from "@/contexts";
import hambuger from "/public/icons/icon-hamburger.svg";
import close from "/public/icons/icon-close.svg";

const ButtonMobile = () => {
  const { isOpenNavbar, handleOpenNavbar } = useAppContext();

  return (
    <button
      onClick={handleOpenNavbar}
      className="w-7 h-7 flex justify-center items-center"
    >
      <Image
        src={isOpenNavbar ? close : hambuger}
        alt="Menu Hamburger"
      />
    </button>
  )
}

export default ButtonMobile;
