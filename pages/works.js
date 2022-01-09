import Head from 'next/head'
import styles from 'styles/Works.module.css'

const Works = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move studio works</title>
        <meta name="description" content="Move studio works" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Page Works
    </div>
  );
};

export default Works;
