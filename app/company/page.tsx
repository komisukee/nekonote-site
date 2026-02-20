interface CompanyInfo {
  id: string;
  title: string;
  content: React.ReactNode;
}

const companyInfoLists: CompanyInfo[] = [
  {
    id: "companyName",
    title: "会社名",
    content: <p>ネコノテ合同会社</p>,
  },
  {
    id: "establishment",
    title: "設立",
    content: <p>2021年5月21日</p>,
  },
  {
    id: "representative",
    title: "取締役",
    content: (
      <>
        <p>代表取締役 小宮山貴史</p>
        <p>取締役 小宮山萌</p>
      </>
    ),
  },
  {
    id: "location",
    title: "所在地",
    content: <p>千葉県袖ケ浦市奈良輪336</p>,
  },
  {
    id: "capital",
    title: "資本金",
    content: <p>400万円</p>,
  },
  {
    id: "businessContent",
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
    ),
  },
];

export default function CompanyPage() {
  return (
    <>
      <div id="companyInfo">
        <div className="container">
          <div className={`flex flex-col items-start gap-6`}>
            <h2 className="font-bold text-primary-dark text-[32px] tracking-wider flex flex-col gap-2">
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
              <tbody>
                {companyInfoLists.map((item) => (
                  <tr key={item.id}>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
