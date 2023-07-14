import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

//* PROVIDERS *//
import { UIProvider } from "@/context";

//* GLOBAL STYLES *//
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </ThemeProvider>
  );
}

export default MyApp;
