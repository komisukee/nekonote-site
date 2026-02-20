import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => (
  <header>
    <div className="container">
      <div className="flex items-center py-3 gap-12">
        <h1>
          <Link href="/" className="w-[200px] h-[50px] relative block">
            <Image
              src="/nekonote_logo_1.png"
              alt="ネコノテ合同会社"
              layout="fill"
              objectFit="contain"
            />
          </Link>
        </h1>

        <div className="ml-auto">
          <nav>
            <ul className="flex space-x-8 text-md font-medium">
              <li>
                <Link
                  href="/#businessInfo"
                  className="hover:text-primary-dark transition font-bold"
                >
                  事業内容
                </Link>
              </li>
              <li>
                <Link href="/works" className="hover:text-primary-dark transition font-bold">
                  開発事例
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-primary-dark transition font-bold">
                  会社概要
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <Link
          href="/#contact"
          className="ml-4 bg-secondary text-primary-dark font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
        >
          お問い合わせ
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
