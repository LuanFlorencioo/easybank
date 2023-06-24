import useMedia from "use-media";
import { useAppContext } from "@/contexts";
import { Button, Logo, Navbar, ButtonMobile } from "@/components";


const Header = () => {
  const isWide = useMedia({maxWidth: 768});
  const { isOpenNavbar } = useAppContext();

  return (
    <header className="w-full px-5 bg-white sticky top-0 left-0 z-40">
      <div className="w-full max-w-screen-xl mx-auto py-4 flex justify-between items-center md:py-0">
        <Logo />

        {
          isWide
            ? (
              <>
                <ButtonMobile />
                {isOpenNavbar && <Navbar />}
              </>
            )
            : (
              <>
                <Navbar />
                <Button>Request Invite</Button>
              </>
            )
        }
      </div>
    </header>
  )
}

export default Header;
