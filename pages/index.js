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
          We are <em>Move studio</em>
        </h1>
        <p>
          Harum animusa perspeditat ese volupta quiaeptio corum volorem porrorr orepudi cum dempore ntiam, omni re, et platem ersperspicil illuptatibus que sus.
          Ovidi volorem pelesserum faccullam volore int ulpa pliqui officiis eosae <em>experunte et quis aut faccus</em>, invelis accumetusae pedi volupta ellantium reperi tempor alit volentio es vit que vid expero to molori arum eumenis doloruptur?
        </p>
        <p>
          Perspid eosandion rae deliquia nos ilia dolo diam aut velescias dolo omniam sum fugit pe nimil explaccatias molorempor assequasit optia quae veribus amendicia comnimaximi, sin eosandam, nonsequodio. Itatem nim doloreris accuscid quos dolo dolessitae.
          Ut quatures aut a quo maiorrum essimus cipsae coriam et vid undae qui con restis moditatqui im rerionsedis ipsam <em>ape eossimossit</em> ut re comnimus, ipsus, am nuscide storum ipit, quoditia volupta temporro volo offic totatur? Aximus, quam antempos idunti blam hitate pel ma ad quam faccatibus.
        </p>
      </main>
    </div>
  )
}
