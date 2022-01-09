import 'styles/globals.css'
import Nav from 'components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <footer>
        <p>
          <a href="mailto:info@movestudio.it?subject=I need infos...">
            info@movestudio.it
          </a>
        </p>
        <p>
          All rights reserved©2022
        </p>
        <p>
          Designed with <span className="footer-heart">&hearts;</span> by MoveStudio
        </p>
      </footer>
    </>
  );
}

export default MyApp
