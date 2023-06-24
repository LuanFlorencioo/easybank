import { Public_Sans as ps } from "next/font/google";

const publicSans = ps({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

const font = publicSans.className;

export default font;
