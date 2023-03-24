import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";

import type { AppProps } from "next/app";
import bayanplus from "bayanplus-js";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    bayanplus.init({
      projectId: "dpIN0yjy",
    });
    console.log("bayanplus initialized");
  }, []);
  return <Component {...pageProps} />;
}
