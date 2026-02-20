import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <div id="mv">
        <div className="w-full h-[600px] flex flex-col justify-center items-start px-10 bg-[url('/mainVisual.png')] bg-cover bg-center rounded-2xl">
          <div className="container">
            <div className="flex flex-col items-start justify-center gap-6">
              <h1 className="font-bold text-[32px] tracking-wider leading-9 bg-[linear-gradient(transparent_80%,#ffd803_80%)]">
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

      <div id="ours">
        <div className="container">
          <div className={`flex flex-col items-start gap-6`}>
            <h2 className="font-bold text-primary-dark text-[32px] tracking-wider flex flex-col gap-2">
              <span className="text-sm">ABOUT US</span>
              <span className="bg-[linear-gradient(transparent_80%,#ffd803_80%)]">
                私たちについて
              </span>
            </h2>

            <p className="text-primary-dark text-md tracking-wider">
              私たちは、お客様の願いの実現を第一に考え、最適なITソリューションを提供する会社です。
              <br />
              会社としては2026年で6期目を迎え、これまで多くのスタートアップ企業様や中小企業様の事業支援をしてまいりました。
              <br />
              <br />
              AI技術が急速に進化する昨今、IT技術やクリエイティブ力を道具として活かしながら、
              <br />
              <span className="font-bold">「作る」にとどまらず伴走するパートナー</span>
              （＝ネコノテ）として
              <br />
              ビジネスの成功を後押しいたします。
            </p>
          </div>
        </div>
      </div>

      <div id="businessInfo">
        <div className="container">
          <div className="flex flex-col items-start gap-8">
            <h2 className="font-bold text-primary-dark text-[32px] tracking-wider flex flex-col gap-2">
              <span className="text-sm">BUSINESS</span>
              <span className="block bg-[linear-gradient(transparent_80%,#ffd803_80%)]">
                事業内容
              </span>
            </h2>

            <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 items-start">
              <div className="w-full grid grid-cols-1 lg:gap-6 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-[160px]">
                  <img
                    src="/IMG_7750.jpg"
                    className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    alt="プロダクト開発、技術アドバイザー事業"
                  />
                </div>

                <div className="flex flex-col justify-center col-span-2 gap-4">
                  <h3 className="text-primary-dark text-xl font-bold">プロダクト開発事業</h3>
                </div>
              </div>

              <div className="w-full grid grid-cols-1 lg:gap-6 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-[160px]">
                  <img
                    src="/business_contents.jpg"
                    className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    alt="コンテンツ制作事業"
                  />
                </div>

                <div className="flex flex-col justify-center col-span-2 gap-4">
                  <h3 className="text-primary-dark text-xl font-bold">コンテンツ制作事業</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="development">
        <div className="container">
          <div className="flex flex-col items-start gap-8">
            <h3 className="font-bold text-primary-dark text-[26px] tracking-wider flex flex-col gap-2">
              <span className="text-sm">DEVELOPMENT</span>
              <span className="bg-[linear-gradient(transparent_80%,#ffd803_80%)]">
                プロダクト開発事業
              </span>
            </h3>

            <p className="text-primary-dark text-md tracking-wider">
              要件定義から設計・開発・テスト実装、リリース後のサポートまで、システム開発に関わる一貫した対応が可能です。
              <br />
              コミュニケーションを取りながら最適な要件を策定し、品質やスケーラビリティを重視しつつも最速でのリリースを目指します。
              <br />
              <br />
              Webやアプリのビジネスを始める上で必要な初期開発から、機能追加に至るまで幅広く対応いたします。
              <br />
            </p>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-xl">担当領域</h4>
              <ul className="list-disc list-inside pl-4 text-primary-dark text-md tracking-wider">
                <li>機能設計</li>
                <li>開発</li>
                <li>テスト実装</li>
                <li>技術選定やアーキテクチャ設計などの技術コンサルティング</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-xl">対応実績のある技術スタック</h4>
              <ul className="list-disc list-inside pl-4 text-primary-dark text-md tracking-wider">
                <li>フロントエンド：React(Next.js), Vue.js(Nuxt), TailwindCSS, Storybook</li>
                <li>バックエンド：TypeScript, Go, GraphQL</li>
                <li>モバイル：Flutter</li>
                <li>インフラ：AWS,GCPの各種サービス ※Terraformによる構築自動化の経験あり</li>
                <li>
                  その他：デザインシステム構築、リアーキテクチャ、StripeSDKを利用した決済システム構築実績あり
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-xl">エンジニア紹介</h4>
              <div className="flex items-center gap-4">
                <div className="w-[160px] h-[160px] relative rounded-full overflow-hidden">
                  <Image src="/IMG_7733.jpg" alt="小宮山貴史" layout="fill" objectFit="cover" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <p className="font-bold text-xl">小宮山 貴史</p>
                  <p className="text-md text-gray-600">
                    業界歴8年のシステムエンジニアとして活動。
                    <br />
                    大学時代にITの仕事と出会い、その楽しさに魅了される。
                    <br />
                    株式会社サイバーエージェントの教育事業でインターンし、プログラミング教育に関わる。新卒で入社した制作会社で1年Webサイトの制作やフロントエンド開発を経験。
                    <br />
                    その後独立し、スタートアップ企業を中心にWebアプリケーションの事業開発・請負開発に携わる。
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/works"
              className="bg-secondary text-primary-dark font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors mx-auto"
            >
              <span>プロダクト開発事例はこちら</span>
            </Link>
          </div>
        </div>
      </div>

      <div id="contents">
        <div className="container">
          <div className={`flex flex-col items-start gap-6`}>
            <h3 className="font-bold text-primary-dark text-[26px] tracking-wider flex flex-col gap-2">
              <span className="text-sm">CONTENTS</span>
              <span className="bg-[linear-gradient(transparent_80%,#ffd803_80%)]">
                コンテンツ制作事業
              </span>
            </h3>

            <p className="text-primary-dark text-md tracking-wider">
              Webメディアのコンテンツ制作を請け負います。
              <br />
            </p>

            <Link
              href="https://editorials.nekonote-tech.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold flex items-center gap-1"
            >
              <span>共創型の編集チーム「ネコノテ編集部」について</span>
              <Image
                src="open_in_new.svg"
                alt="外部リンクアイコン"
                width={20}
                height={20}
                className="border-primary-dark"
              />
            </Link>
          </div>
        </div>
      </div>

      <div id="contact" className="bg-[rgb(71,158,187,0.6)] py-10">
        <div className="container">
          <div className="flex flex-col items-center gap-6 py-10">
            <h3 className="font-bold text-white text-[32px] tracking-wider flex flex-col items-center gap-2">
              <span className="text-sm">CONTACT</span>
              <span className="bg-[linear-gradient(transparent_80%,#ffd803_80%)]">
                お問い合わせ
              </span>
            </h3>

            <p className="text-white text-md text-center tracking-wider">
              ご依頼・ご相談等、お気軽にお問い合わせください。
              <br />
              担当者より折り返しご連絡いたします。
            </p>

            <form
              className="w-full max-w-[600px] flex flex-col gap-4 mx-auto"
              method="POST"
              action="https://hyperform.jp/api/H0GnMrng"
            >
              <div className="flex flex-col gap-2">
                <label className="font-bold" htmlFor="company">
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="会社名"
                  className="w-full p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold" htmlFor="name">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="お名前"
                  className="w-full p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold" htmlFor="email">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="メールアドレス"
                  className="w-full p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold" htmlFor="business">
                  事業
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label htmlFor="development_business" className="flex items-center gap-2">
                    <input type="radio" id="development_business" name="business" />
                    プロダクト開発事業
                  </label>
                  <label htmlFor="content_business" className="flex items-center gap-2">
                    <input type="radio" id="content_business" name="business" />
                    コンテンツ制作事業
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold" htmlFor="inquiry_type">
                  お問い合わせ種別
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label htmlFor="inquiry_type_project" className="flex items-center gap-2">
                    <input type="radio" id="inquiry_type_project" name="inquiry_type" />
                    案件のご相談
                  </label>
                  <label htmlFor="inquiry_type_other" className="flex items-center gap-2">
                    <input type="radio" id="inquiry_type_other" name="inquiry_type" />
                    その他お問い合わせ
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold" htmlFor="message">
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  placeholder="お問い合わせ内容"
                  name="message"
                  className="w-full p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light h-[150px]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-[240px] bg-secondary text-primary-dark font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors mx-auto"
              >
                送信
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
