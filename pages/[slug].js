import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Work.module.css'


const Work = () => {
  const router = useRouter()
  return (
    <div className={styles.container}>
    <Head>
    <title>Move studio works {router.query.id}</title>
    <meta name="description" content={`Move studio work ${router.query.id}}`} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
      Page individual work {router.query.id}
    </div>
  );
};

export default Work;
