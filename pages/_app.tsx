import "../styles/globals.css"
import "prismjs/themes/prism-tomorrow.css"

import type { AppProps } from "next/app"
import splitbee from "@splitbee/web"

export default function App({ Component, pageProps }: AppProps) {
  splitbee.init()
  return <Component {...pageProps} />
}
