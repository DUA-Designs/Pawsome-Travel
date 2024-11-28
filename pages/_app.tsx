import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { Provider } from 'react-redux';

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import store from "@/lib/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
       <Provider store={store}>

      <NextThemesProvider>
        <Component {...pageProps} />
      </NextThemesProvider>
      </Provider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
