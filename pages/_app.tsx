import type { AppProps } from "next/app"
import { createGlobalStyle } from "styled-components"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { AuthProvider } from "../src/authContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  --primary: #333;
  --primary_light: #ddd;
  --primary_contrast: #fafafa;
}

html {
  font-family: "Roboto", sans-serif;
}
`

export default MyApp
