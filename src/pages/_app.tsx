import { AppProps } from "next/app";

//* PROVIDERS *//
import { UIProvider } from "@/context";

//* GLOBAL STYLES *//
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  );
}

export default MyApp;
