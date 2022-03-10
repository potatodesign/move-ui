import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from 'styles/Work.module.css'


const Work = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div className={styles.container}>
      <Head>
        <title>Move studio works {slug}</title>
        <meta name="description" content={`Move studio work ${slug}}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Page individual work {slug}
    </div>
  );
};

export default Work;
