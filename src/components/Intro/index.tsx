import Image from "next/image";
import useMedia from "use-media";
import { Title, Text, Button } from "@/components";
import BgMobile from "/public/backgrounds/bg-intro-mobile.svg";
import BgDesktop from "/public/backgrounds/bg-intro-desktop.svg";
import Mockups from "/public/images/image-mockups.png";

const Intro = () => {
  const isWide = useMedia({maxWidth: 768});

  return (
    <section className="w-full md:px-5">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-7 md:py-48 md:items-start">
        {
          isWide
            ? (
              <div className="w-full relative">
                <Image
                  src={BgMobile}
                  alt="Background intro"
                  className="w-full"
                />

                <Image
                  src={Mockups}
                  alt="Mockups illustration"
                  className="w-full max-w-lg absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2"
                />
              </div>
            )
            : (
              <div className="w-[768px] absolute top-0 left-1/2">
                <div className="w-full relative">
                  <Image
                    src={BgDesktop}
                    alt="background intro"
                  />
                  <Image
                    src={Mockups}
                    alt="Mockups illustration"
                    className="max-w-[550px] absolute bottom-0 right-1/2 translate-x-1/2"
                  />
                </div>
              </div>
            )
        }

        <div className="w-full max-w-[300px] flex flex-col items-center text-center gap-7 md:items-start md:text-left">
          <Title as="h1">
            Next generation digital banking
          </Title>

          <Text>
            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
          </Text>

          <Button>Request Invite</Button>
        </div>
      </div>
    </section>
  )
}

export default Intro;
