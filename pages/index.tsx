import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

interface BusinessInfo {
  title: String;
  content: String;
}

interface companyInfo {
  title: String;
  content: React.ReactNode;
}

export default function Home() {
  const [businessInfoLists, setBusinessInfoLists] = useState<BusinessInfo[]>([
    {
      title: "システム（Webサービス・アプリ）開発、技術アドバイザー事業",
      content: "",
    },
    {
      title: "Webコンテンツ制作事業",
      content: "",
    },
  ]);
  const [companyInfoLists, setCompanyInfoLists] = useState<companyInfo[]>([
    {
      title: "会社名",
      content: <p>ネコノテ合同会社</p>,
    },
    {
      title: "設立",
      content: <p>2021年5月21日</p>,
    },
    {
      title: "取締役",
      content: (
        <>
          <p>代表取締役 小宮山貴史</p>
          <p>取締役 小宮山萌</p>
        </>
      ),
    },
    {
      title: "所在地",
      content: <p>千葉県袖ケ浦市奈良輪336</p>,
    },
    {
      title: "資本金",
      content: <p>400万円</p>,
    },
    {
      title: "事業内容",
      content: (
        <ul>
          <li>インターネットを利用した各種情報提供サービス</li>
          <li>
            インターネットのホームページの企画、立案、制作及び保守に関する業務
          </li>
          <li>ウェブサイトの企画、設計、開発、運営及び販売</li>
          <li>通信販売業務</li>
          <li>情報通信システムに係る機器及び装置類の販売及びレンタル</li>
          <li>通信及び情報処理機器の開発、製造、販売及び輸出入</li>
          <li>コンピュータシステムの企画、開発、販売及び保守に関する業務</li>
          <li>各種マーケティングリサーチ業務</li>
          <li>
            店舗の企画、プロデュース及びそれらに関するコンサルティング業務
          </li>
          <li>人材育成コンサルティング業務</li>
          <li>資産の管理、運用及びそれらに関するコンサルティング業務</li>
          <li>企業の営業に関するコンサルティング業務</li>
          <li>書籍及び印刷物の企画、編集及び出版並びに販売</li>
          <li>各種イベントの企画、制作、運営及び管理</li>
          <li>前各号に附帯又は関連する一切の事業</li>
        </ul>
      ),
    },
  ]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>ネコノテ合同会社 - Web・アプリ開発 コンテンツ制作</title>
        <meta
          name="description"
          content="ネコノテ合同会社は、テクノロジーを道具にみなさまの思いを叶えるリーディングカンパニーです。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col gap-16">
        <div id="mv">
          <div
            className={`${styles.mainVisual} flex flex-col justify-center items-start px-10`}
          >
            <div className="container">
              <div className="flex flex-col items-start justify-center gap-6">
                <h1
                  className="font-bold text-2xl tracking-wider leading-9"
                  style={{
                    background: "linear-gradient(transparent 80%, #ffd803 80%)",
                  }}
                >
                  “ネコノテ” も借りたい、
                  <br className="lg:hidden block" />
                  そんなあなたに。
                </h1>
                <p className="tracking-wider leading-6">
                  私達は、テクノロジーを道具に
                  <br />
                  みなさまの思いを叶えるリーディングカンパニーです。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="businessInfo">
          <div className="container">
            <div className="flex flex-col items-start gap-8">
              <h2 className="font-bold text-primary-dark text-2xl tracking-wider flex flex-col gap-2">
                <span className="text-sm">BUSINESS</span>
                <span
                  style={{
                    background: "linear-gradient(transparent 80%, #ffd803 80%)",
                  }}
                >
                  事業内容
                </span>
              </h2>

              <p className="text-primary-dark tracking-wider">
                弊社はお客様のIT事業の実現＝「ネコノテ」となるようなサービスを提供いたします。
              </p>

              <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-4">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-lg"
                  style={{ height: 220 }}
                >
                  <img
                    src="/business_development.jpg"
                    className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    alt="システム（Webサービス・アプリ）開発、技術アドバイザー事業"
                  />
                </div>

                <div className="flex flex-col justify-center col-span-2 gap-4">
                  <h3 className="text-primary-dark text-lg font-bold">
                    システム（Webサービス・アプリ）開発 / 技術アドバイザー事業
                  </h3>

                  <p className="text-primary-dark text-sm tracking-wider">
                    Webサービスやアプリのビジネスを始める上で必要な初期開発から、機能追加に至るまで幅広く請負います。サービスのジャンルはtoC・toB双方の実績がございます。StripeSDKを利用した決済システムや、その他管理者向けのダッシュボード開発も可能です。
                    <br />
                    規模感が大きな案件については、フリーランスで活動するデザイナー・マネージャー・開発者と連携し、一気通貫で請負うことも可能です。
                  </p>
                </div>
              </div>

              <div className="w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-4">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-lg"
                  style={{ height: 220 }}
                >
                  <img
                    src="/business_contents.jpg"
                    className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    alt="システム（Webサービス・アプリ）開発、技術アドバイザー事業"
                  />
                </div>

                <div className="flex flex-col justify-center col-span-2 gap-4">
                  <h3 className="text-primary-dark text-lg font-bold">
                    コンテンツ制作事業
                  </h3>

                  <p className="text-primary-dark text-sm tracking-wider">
                    Webメディアのコンテンツ制作を請け負います。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="businessInfo">
          <div className="container">
            <div className="flex flex-col items-start gap-8">
              <h2 className="font-bold text-primary-dark text-2xl tracking-wider flex flex-col gap-2">
                <span className="text-sm">WORKS</span>
                <span
                  style={{
                    background: "linear-gradient(transparent 80%, #ffd803 80%)",
                  }}
                >
                  制作実績
                </span>
              </h2>

              <p className="text-primary-dark tracking-wider">
                ネコノテが制作した実績の一部をご紹介します。
                <br />
                未公開案件もございますので、お気軽にお問い合わせください。
              </p>

              <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
                <div className="shadow-lg rounded-2xl overflow-hidden">
                  <div className="flex-col gap-4">
                    <div
                      className="relative overflow-hidden"
                      style={{ height: 260 }}
                    >
                      <img
                        src="/works_neconote.png"
                        alt="保護猫の推し活サービス 「neco-note（ネコノート）」システム開発"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>

                    <div className="flex flex-col gap-5 py-4 px-5">
                      <h4 className="text-primary-dark flex flex-col gap-1">
                        <span className="text-sm tracking-wider">
                          株式会社ネコノテ様
                        </span>
                        <span className="text-lg font-bold leading-6 tracking-wider">
                          保護猫の推し活サービス 「neco-note（ネコノート）」
                          <br />
                          システム開発
                        </span>
                      </h4>

                      <div className="flex flex-col gap-2">
                        {/* <button className="bg-secondary text-primary-dark text-sm font-bold rounded-full py-3">
                          詳細を見る
                        </button> */}
                        <button
                          className="bg-secondary text-primary-dark text-sm tracking-wider font-bold rounded-full py-3 flex justify-center items-center gap-2"
                          onClick={() =>
                            window.open("https://neco-note.com", "_blank")
                          }
                        >
                          <span>サービスサイトはこちら</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            width={16}
                          >
                            <path d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="companyInfo">
          <div className="container">
            <div
              className={`${styles.companyInfo} flex flex-col items-start gap-6`}
            >
              <h2 className="font-bold text-primary-dark text-2xl tracking-wider flex flex-col gap-2">
                <span className="text-sm">COMPANY</span>
                <span
                  style={{
                    background: "linear-gradient(transparent 80%, #ffd803 80%)",
                  }}
                >
                  会社概要
                </span>
              </h2>

              <table
                className="w-full"
                style={{
                  borderCollapse: "separate",
                  borderSpacing: 10,
                }}
              >
                {companyInfoLists.map((item, _) => (
                  <tr>
                    <th
                      className="px-4 py-2 text-md bg-primary-light text-primary-dark tracking-wider"
                      style={{
                        width: "200px",
                        borderRadius: 15,
                      }}
                    >
                      {item.title}
                    </th>

                    <td
                      className="px-4 py-2 text-md bg-[#eee] text-primary-dark tracking-wider"
                      style={{
                        width: "800px",
                        borderRadius: 15,
                      }}
                    >
                      {item.content}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </main>

      <footer
        style={{
          padding: "16px 0",
          textAlign: "center",
          borderTop: "1px solid #ECF1F4",
          marginTop: 80,
        }}
      >
        &copy; 2021 Nekonote LLC.
      </footer>
    </>
  );
}
