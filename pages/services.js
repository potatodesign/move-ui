import Head from 'next/head'
import styles from '../styles/Services.module.css'

const Services = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move studio services</title>
        <meta name="description" content="Move studio services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Services page
    </div>
  );
};

export default Services;
