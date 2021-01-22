import Head from "next/head"
import Link from "next/link"
import NavBar from "../src/components/NavBar"
import Content from "../src/components/Content"

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Firebase Authentication</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Content />
    </>
  )
}
