import Image from "next/image";
import Logo from "/public/logo-alt.svg";

const LogoAlt = () => {
  return <Image src={Logo} alt="Logo alt" priority={true} />
}

export default LogoAlt;
