import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { font } from "@/styles";
import { Footer, Head, Header } from "@/components";
import { AppProvider } from "@/contexts";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={font}>
      <AppProvider>
        <Head />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppProvider>
    </div>
  )
}

export default App;
