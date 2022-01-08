import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link
          as="font"
          rel="preload"
          href="/fonts/Abel-Regular.ttf"
          crossOrigin="anonymous"
        ></link>
        <link
          as="font"
          rel="preload"
          href="/fonts/PlayfairDisplay-Bold.ttf"
          crossOrigin="anonymous"
        ></link>
        <link
          as="font"
          rel="preload"
          href="/fonts/PlayfairDisplay-Bold.ttf"
          crossOrigin="anonymous"
        ></link>
        <link
          as="font"
          rel="preload"
          href="/fonts/PlayfairDisplay-Italic.ttf"
          crossOrigin="anonymous"
        ></link>
        <link
          as="font"
          rel="preload"
          href="/fonts/PlayfairDisplay-Regular.ttf"
          crossOrigin="anonymous"
        ></link>
        <link
          as="font"
          rel="preload"
          href="/fonts/PlayfairDisplay-SemiBold.ttf"
          crossOrigin="anonymous"
        ></link>
        <link
          as="font"
          rel="preload"
          href="/fonts/PlayfairDisplay-SemiBold.ttf"
          crossOrigin="anonymous"
        ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
