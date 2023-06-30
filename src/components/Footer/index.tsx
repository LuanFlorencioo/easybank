import {
  Button,
  LogoAlt,
  PagesList,
  SocialMidias,
  Text,
} from "@/components";

const Footer = () => {
  return (
    <footer className="w-full px-5 py-12 bg-dark sticky bottom-0 left-0">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-8 md:flex-row md:justify-between">

        <div className="w-full flex flex-col items-center gap-8 md:w-max md:flex-row md:gap-24">
          <div className="w-full flex flex-col items-center gap-8 md:w-max">
            <LogoAlt />

            <SocialMidias />
          </div>

          <PagesList />
        </div>

        <div className="w-full flex flex-col items-center gap-8 md:w-max">
          <Button>Request Invite</Button>

          <Text as="light">© Easybank. All Rights Reserved</Text>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
