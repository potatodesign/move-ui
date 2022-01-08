import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer>
        <p>
          All rights reserved©2022
        </p>
      </footer>
    </>
  );
}

export default MyApp
