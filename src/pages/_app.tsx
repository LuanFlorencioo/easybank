import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { font } from "@/styles";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={font}>
      <Component {...pageProps} />
    </div>
  )
}

export default App;
