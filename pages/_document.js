import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            as="font"
            rel="preload"
            href="/fonts/Abel/Abel-Regular.ttf"
            crossOrigin=""
          />
          <link
            as="font"
            rel="preload"
            href="/fonts/PlayfairDisplay/PlayfairDisplay-Bold.ttf"
            crossOrigin=""
          />
          <link
            as="font"
            rel="preload"
            href="/fonts/PlayfairDisplay/PlayfairDisplay-Bold.ttf"
            crossOrigin=""
          />
          <link
            as="font"
            rel="preload"
            href="/fonts/PlayfairDisplay/PlayfairDisplay-Italic.ttf"
            crossOrigin=""
          />
          <link
            as="font"
            rel="preload"
            href="/fonts/PlayfairDisplay/PlayfairDisplay-Regular.ttf"
            crossOrigin=""
          />
          <link
            as="font"
            rel="preload"
            href="/fonts/PlayfairDisplay/PlayfairDisplay-SemiBold.ttf"
            crossOrigin=""
          />
          <link
            as="font"
            rel="preload"
            href="/fonts/PlayfairDisplay/PlayfairDisplay-SemiBold.ttf"
            crossOrigin=""
          />
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