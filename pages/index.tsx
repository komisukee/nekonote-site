import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>ネコノテ合同会社 - Web・アプリ開発 コンテンツ制作</title>
        <meta name="description" content="ネコノテ合同会社は、テクノロジーを道具にみなさまの思いを叶えるリーディングカンパニーです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="container">
        <div className={styles.mainVisual}>
          <div className={styles.mainVisualInner}>
            <h1>
              “ネコノテ” も借りたい、<br />
              そんなあなたに。
            </h1>
            <p>
              私達は、テクノロジーを道具に<br />
              みなさまの思いを叶えるリーディングカンパニーです。
            </p>
          </div>
        </div>
      </div>

    </>
  )
}
