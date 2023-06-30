import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { font } from "@/styles";
import { Footer, Header } from "@/components";
import { AppProvider } from "@/contexts";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={font}>
      <AppProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppProvider>
    </div>
  )
}

export default App;
