import Head from 'next/head'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move studio</title>
        <meta name="description" content="Move studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Move<span className={styles.titleThin}>studio</span>
        </h1>
        <h2 className={styles.subtitle}>
          <span className={styles.subtitleUppercase}>Coming</span>
          <span className={styles.subtitleLowercase}>soon</span>
        </h2>
        <div className={styles.description}>
          <p className={styles.claim}>
            <span className={styles.keyword}>move</span> studio ci occupiamo di <span className={styles.keyword}>interior and exhibit design</span> a Milano.
            Siamo sempre alla ricerca di nuove <span className={styles.keyword}>entusiasmanti</span> esperienze e collaborazioni.<br />
            Contattateci per qualsiasi informazione o anche solo per dirci ciao
          </p>
          <p className={`${styles.contacts} ${styles.keyword}`}>
            <a id="email" href="mailto:info@movestudio.it?subject=I need infos...">
              info@movestudio.it
            </a>
            <a id="instagram" href="https://instagram.com/movestudio__">
              instagram
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
