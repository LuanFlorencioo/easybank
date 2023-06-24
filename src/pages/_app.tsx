import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/app";
import { font } from "@/styles";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <div className={font}>
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default App;
