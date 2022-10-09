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
          <span className={styles.titleBold}>Move</span><span className={styles.titleThin}>studio</span>
        </h1>
        <h2 className={styles.subtitle}>
          <span className={styles.subtitleUppercase}>Coming</span>
          <span className={styles.subtitleLowercase}>soon</span>
        </h2>
        <div className={styles.description}>
          <p className={styles.claim}>
            <span className={styles.keyword}>move</span> studio si occupa di <span className={styles.keyword}>interior, architecture ed exhibit design</span>.<br />
            <br />
            Nato dalla decennale esperienza nel settore ha oggi a Milano la sua base principale.
            Scrivici per una prima <span className={styles.keyword}>call conoscitiva</span> gratuita, otterrai un preventivo chiaro e in tempi rapidi. Siamo sempre alla ricerca di nuove <span className={styles.keyword}>entusiasmanti</span> esperienze e collaborazioni.<br />
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