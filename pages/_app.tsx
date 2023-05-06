import { AppProps } from "next/app";

//* providers *//
import { UIProvider } from "@/context";

//* styles *//
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  );
}

export default MyApp;
