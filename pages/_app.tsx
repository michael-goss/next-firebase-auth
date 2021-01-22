import type { AppProps } from "next/app"
import { AuthProvider } from "../src/authContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
