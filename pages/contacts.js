import Head from 'next/head'
import styles from 'styles/Contacts.module.css'

const Contacts = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move studio contacts</title>
        <meta name="description" content="Move studio contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Contacts page
    </div>
  );
};

export default Contacts;
