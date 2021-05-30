import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import BusinessCard from '../components/businessCard'
import { useState } from 'react'

interface BusinessInfo {
  title: String,
  content: String,
}

interface companyInfo {
  title: String,
  content: React.ReactNode,
}

export default function Home() {
  const [businessInfoLists, setBusinessInfoLists] = useState<BusinessInfo[]>([
    {
      title: "Webサービス・アプリ開発事業",
      content: "",
    },
    {
      title: "Webコンテンツ制作事業",
      content: "",
    }, 
  ])
  const [companyInfoLists, setCompanyInfoLists] = useState<companyInfo[]>([
    {
      title: "会社名",
      content: (
        <p>ネコノテ合同会社</p>
      )
    },
    {
      title: "設立",
      content: (
        <p>2021年5月21日</p>
      )
    },
    {
      title: "取締役",
      content: (
        <>
          <p>代表取締役 小宮山貴史</p>
          <p>取締役 小宮山萌</p>
        </>
      )
    },
    {
      title: "資本金",
      content: (
        <p>400万円</p>
      )
    },
    {
      title: "事業内容",
      content: (
        <ul>
          <li>インターネットを利用した各種情報提供サービス</li>
          <li>インターネットのホームページの企画、立案、制作及び保守に関する業務</li>
          <li>ウェブサイトの企画、設計、開発、運営及び販売</li>
          <li>通信販売業務</li>
          <li>情報通信システムに係る機器及び装置類の販売及びレンタル</li>
          <li>通信及び情報処理機器の開発、製造、販売及び輸出入</li>
          <li>コンピュータシステムの企画、開発、販売及び保守に関する業務</li>
          <li>各種マーケティングリサーチ業務</li>
          <li>店舗の企画、プロデュース及びそれらに関するコンサルティング業務</li>
          <li>人材育成コンサルティング業務</li>
          <li>資産の管理、運用及びそれらに関するコンサルティング業務</li>
          <li>企業の営業に関するコンサルティング業務</li>
          <li>書籍及び印刷物の企画、編集及び出版並びに販売</li>
          <li>各種イベントの企画、制作、運営及び管理</li>
          <li>前各号に附帯又は関連する一切の事業</li>
        </ul>
      )
    },
  ])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>ネコノテ合同会社 - Web・アプリ開発 コンテンツ制作</title>
        <meta name="description" content="ネコノテ合同会社は、テクノロジーを道具にみなさまの思いを叶えるリーディングカンパニーです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div id="mv">
        <div className="container">
          <div className={styles.mainVisual}>
            <div className={styles.mainVisualInner}>
              <h1 className={styles.title}>
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
      </div>

      <div id="businessInfo">
        <div className="container">
          <div className={styles.businessInfo}>
            <h2 className={styles.title}>事業内容</h2>

            <div className={styles.grid} style={{ justifyContent: "space-between" }}>
              {
                businessInfoLists.map((item, _) => (
                  <BusinessCard
                    title={item.title}
                    content={item.content}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div id="companyInfo">
        <div className="container">
          <div className={styles.companyInfo}>
            <h2 className={styles.title}>会社概要</h2>

            <table style={{
              borderCollapse: "separate",
              borderSpacing: 10,
            }}>
              {
                companyInfoLists.map((item, _) => (
                  <tr>
                    <th style={{
                      width: "200px",
                      backgroundColor: "#91B8D0",
                      color: "#fff",
                      borderRadius: 15
                    }}>
                      { item.title }
                    </th>
    
                    <td style={{
                      width: "800px",
                      padding: "0 16px",
                      backgroundColor: "#ECF1F4",
                      borderRadius: 15
                    }}>
                      { item.content }
                    </td>
                  </tr>
                ))
              }
            </table>
          </div>
        </div>
      </div>

      <footer style={{
        padding: "16px 0",
        textAlign: "center",
        borderTop: "1px solid #ECF1F4",
        marginTop: 80,
      }}>
        &copy; 2021 Nekonote LLC.
      </footer>
    </>
  )
}
